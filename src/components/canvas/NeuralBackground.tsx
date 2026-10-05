import React, { useEffect, useRef } from 'react';

interface SynapticNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  isCrimson: boolean;
  pulseSpeed: number;
  pulsePhase: number;
}

export const NeuralBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = {
      x: -2000,
      y: -2000,
      radius: 160,
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -2000;
      mouse.y = -2000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    let nodes: SynapticNode[] = [];

    const initNodes = () => {
      nodes = [];
      const nodeCount = Math.max(15, Math.min(Math.floor((width * height) / 16000), 75));
      for (let i = 0; i < nodeCount; i++) {
        const isCrimson = Math.random() < 0.28; // ~28% glowing crimson energy nodes
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: isCrimson ? Math.random() * 2.0 + 1.4 : Math.random() * 1.4 + 0.8,
          baseAlpha: isCrimson ? 0.75 : 0.3,
          isCrimson,
          pulseSpeed: Math.random() * 0.03 + 0.015,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    initNodes();

    let frame = 0;

    const draw = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        const p1 = nodes[i];

        p1.x += p1.vx;
        p1.y += p1.vy;
        p1.pulsePhase += p1.pulseSpeed;

        // Wrap or bounce edges
        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Mouse proximity interaction
        const dxMouse = mouse.x - p1.x;
        const dyMouse = mouse.y - p1.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse > 0.0001 && distMouse < mouse.radius) {
          const force = (1 - distMouse / mouse.radius) * 0.8;
          p1.x -= (dxMouse / distMouse) * force * 2.5;
          p1.y -= (dyMouse / distMouse) * force * 2.5;
        }

        // Connect nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const p2 = nodes[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 135;

          if (dist < maxDist) {
            const alphaRatio = 1 - dist / maxDist;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);

            if (p1.isCrimson || p2.isCrimson) {
              ctx.strokeStyle = `rgba(229, 9, 20, ${alphaRatio * 0.28})`;
              ctx.lineWidth = 0.85;
            } else {
              ctx.strokeStyle = `rgba(255, 255, 255, ${alphaRatio * 0.08})`;
              ctx.lineWidth = 0.6;
            }
            ctx.stroke();
          }
        }

        // Draw node
        ctx.beginPath();
        const currentRadius = p1.radius * (1 + 0.15 * Math.sin(p1.pulsePhase));
        ctx.arc(p1.x, p1.y, currentRadius, 0, Math.PI * 2);

        if (p1.isCrimson) {
          ctx.fillStyle = `rgba(229, 9, 20, ${p1.baseAlpha})`;
          ctx.shadowColor = '#ff1e2d';
          ctx.shadowBlur = 9;
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${p1.baseAlpha * 0.8})`;
          ctx.shadowBlur = 0;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Subtle mouse reticle highlight if in viewport
      if (mouse.x > 0 && mouse.x < width && mouse.y > 0 && mouse.y < height) {
        ctx.strokeStyle = 'rgba(229, 9, 20, 0.15)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 24, 0, Math.PI * 2);
        ctx.stroke();

        // Small crosshair at center
        ctx.beginPath();
        ctx.moveTo(mouse.x - 6, mouse.y);
        ctx.lineTo(mouse.x + 6, mouse.y);
        ctx.moveTo(mouse.x, mouse.y - 6);
        ctx.lineTo(mouse.x, mouse.y + 6);
        ctx.strokeStyle = 'rgba(229, 9, 20, 0.4)';
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
      style={{ background: 'transparent' }}
    />
  );
};
