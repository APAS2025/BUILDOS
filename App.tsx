const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-text">
      <div className="container mx-auto px-8 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">AI Construction Suite</h1>
        <div className="bg-card p-8 rounded-xl shadow-lg border border-border max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Welcome to your Construction Management Platform</h2>
          <p className="text-text-muted mb-6">
            This is a comprehensive toolkit for modern contractors, featuring project management, 
            estimation, daily logs, invoicing, and much more.
          </p>
          <button className="bg-primary hover:bg-primary-dark text-black font-semibold px-6 py-3 rounded-lg transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
