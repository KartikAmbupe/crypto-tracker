import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-background-dark text-neutral-100">
        <Header />
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;