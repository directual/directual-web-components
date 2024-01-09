import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div); // Create a root.
  root.render(<App />); // Render the component.
  root.unmount(); // Unmount the component.
});

  const div = document.createElement('div');
  const root = createRoot(div); // Create a root.
  root.render(<App />); // Render the component.
  root.unmount(); // Unmount the component.
});