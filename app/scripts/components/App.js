import React from 'react';
import Wrapper from './molecules/wrapper';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { text, number, plus, reset, resetText } = this.props;
    return (
      <div>
        <Wrapper
          text={text}
          number={number}
          plus={plus}
          reset={reset}
          resetText={resetText}
        />
      </div>
    );
  }
}

export default App;
