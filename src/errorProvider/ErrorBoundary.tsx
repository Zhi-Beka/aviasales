import React, { ErrorInfo, ReactNode, Suspense } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  //static getDerivedStateFromError(error: Error) {
  //  // Update state so the next render will show the fallback UI.
  //  return { hasError: true };
  //}

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      // You can render any custom fallback UI
      return (
        <Suspense fallback=''>
          <div style={{ background: 'pink', textAlign: 'center', height: '100vh' }}>
            <h1>Something went wrong...</h1>
          </div>
        </Suspense>
      );
    }
    return children;
  }
}
export default ErrorBoundary;