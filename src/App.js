import React from 'react';
import store from './store/index.js';
import { Provider } from 'react-redux';
import Counter from './components/Counter';


function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
