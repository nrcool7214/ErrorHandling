
import React from 'react';
import Hero from './Hero';
import ErrorBoundary from './ErrorBoundary';


function App() {
  return (
    <div className="App">
      <h1>Error Handling</h1>
      <ErrorBoundary> 
      <Hero name="Superman"/>
      </ErrorBoundary>
      <ErrorBoundary> 
      <Hero name="Batman"/>
      </ErrorBoundary>
      <ErrorBoundary> 
      <Hero name="joker"/>
      </ErrorBoundary>
    </div>
  );
}


export default App;