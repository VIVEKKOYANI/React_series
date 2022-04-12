import React, { Suspense, lazy } from 'react';
import './App.css';
const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Wait For Home....</div>}>
        <Home />
      </Suspense>
      <Suspense fallback={<div>Wait For About....</div>}>
        <About />
      </Suspense>
    </div>
  );
}

export default App;
