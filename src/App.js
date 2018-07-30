import React, { Component } from 'react';
import Quiz from './Components/Quiz/Quiz';
import MainWrapper from './UI/MainWrapper/MainWrapper';
import Header from './UI/Header/Header';
import Aux from './HOC/aux_x'

class App extends Component {
  render() {
    return (
      <Aux>
        <Header/>
        <MainWrapper>
          <Quiz/>
        </MainWrapper>
      </Aux>
    );
  }
}

export default App;
