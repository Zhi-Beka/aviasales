import React, { ReactNode, Suspense } from 'react';

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
          <div style={{ background: 'orange', textAlign: 'center', height: '100vh' }}>
            <h1>Something went wrong...</h1>
          </div>
        </Suspense>
      );
    }
    return children;
  }
}
export default ErrorBoundary;
