import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
    this.onClickSetName = this.onClickSetName.bind(this);
    this.onClickResetName = this.onClickResetName.bind(this);
  }

  onClickSetName() {
    this.setState({
      name: 'React Skeleon'
    });
  };

  onClickResetName() {
    this.setState({
      name: ''
    });
  }

  render() {
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
        <button onClick={this.onClickSetName}>onClickSetName</button>
        <button onClick={this.onClickResetName}>onClickResetName</button>
      </div>
    );
  }
}

export default App;
