import React, { useState } from 'react';
import { Copy, Check, Terminal as TerminalIcon } from 'lucide-react';

interface TerminalBlockProps {
  command?: string;
  output?: string | React.ReactNode;
  filename?: string;
  className?: string;
}

export const TerminalBlock: React.FC<TerminalBlockProps> = ({
  command = "python -m engine.train --arch=transformer --precision=fp16 --device=cuda:0",
  output,
  filename = "system_telemetry.py",
  className = "",
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`bg-dark-900 border border-zinc-800/90 shadow-2xl font-mono text-xs overflow-hidden ${className}`}>
      {/* Header bar */}
      <div className="bg-dark-850 px-4 py-2.5 border-b border-zinc-800/80 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-crimson-accent shadow-crimson-sm" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          </div>
          <span className="text-zinc-400 text-[11px] ml-2 flex items-center gap-1.5">
            <TerminalIcon className="w-3 h-3 text-crimson-500" />
            {filename}
          </span>
        </div>

        <button
          onClick={handleCopy}
          className="text-zinc-400 hover:text-white p-1 hover:bg-zinc-800 rounded transition-colors flex items-center gap-1 text-[10px]"
          title="Copy command"
        >
          {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>

      {/* Terminal Body */}
      <div className="p-4 space-y-2 text-zinc-300">
        <div className="flex items-start gap-2">
          <span className="text-crimson-500 font-bold select-none">root@pratyush-ai:~$</span>
          <span className="text-white break-all">{command}</span>
        </div>

        {output && (
          <div className="pt-2 text-zinc-400 text-[11px] leading-relaxed border-t border-zinc-800/50">
            {output}
          </div>
        )}
      </div>
    </div>
  );
};
