import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error caught by ErrorBoundary:', error, errorInfo);
    this.setState({ errorInfo });
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 font-mono text-center selection:bg-crimson-600">
          <div className="max-w-md w-full p-8 bg-zinc-950 border border-zinc-800 rounded-xl shadow-2xl space-y-6">
            <div className="inline-flex items-center justify-center p-4 bg-crimson-950/60 border border-crimson-600/40 text-crimson-500 rounded-full">
              <AlertTriangle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-bold uppercase tracking-wider text-white">
                SYSTEM EXCEPTION CAUGHT
              </h2>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                An isolated runtime fault occurred. The core state has been safely preserved to prevent interface degradation.
              </p>
            </div>

            {this.state.error && (
              <div className="p-3 bg-black border border-zinc-800 text-[11px] text-zinc-400 text-left overflow-x-auto max-h-32">
                <span className="text-crimson-400 font-bold block mb-1">
                  {this.state.error.name}: {this.state.error.message}
                </span>
                {this.state.errorInfo?.componentStack && (
                  <pre className="text-[10px] text-zinc-500 whitespace-pre-wrap">
                    {this.state.errorInfo.componentStack.slice(0, 300)}...
                  </pre>
                )}
              </div>
            )}

            <button
              onClick={this.handleReload}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-black font-bold text-xs uppercase rounded hover:bg-zinc-200 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              <span>RESTART SYSTEM SESSION</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
