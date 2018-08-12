import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/reactotron';

import './styles/global';

import { Wrapper, Content } from './styles/components';
import Header from './components/Header';
import Routes from './routes';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Wrapper>
            <Header />
            <Content>
              <Routes />
            </Content>
          </Wrapper>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
