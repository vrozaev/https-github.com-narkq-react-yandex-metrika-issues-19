import React, { Component } from 'react';
import './App.css';
import {YMInitializer} from 'react-yandex-metrika';

class App extends Component {
  render() {
    return (
      <div className="App">
          <YMInitializer
              version={'2'}
              accounts={[42]}
              options={{
                  webvisor: true,
                  clickmap: true,
                  trackLinks: true,
                  accurateTrackBounce: true,
                  triggerEvent: true
              }}
              />
      </div>
    );
  }
}

export default App;
