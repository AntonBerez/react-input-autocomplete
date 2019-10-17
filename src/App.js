import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

import { InputAutocomplete } from './components/InputAutocomplete';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <InputAutocomplete />
        </div>
      </Provider>
    );
  }
}

export default App;
