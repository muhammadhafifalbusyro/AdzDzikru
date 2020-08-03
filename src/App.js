import React from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import Navigation from './navigation/Navigation';
import thunk from 'redux-thunk';
import reducers from './redux/reducers';
const store = createStore(reducers, {}, applyMiddleware(thunk));

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
export default App;
