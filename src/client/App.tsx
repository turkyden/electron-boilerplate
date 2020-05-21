import React from 'react';

interface Props {

}

interface State {
  text : string
}

class App extends React.Component<Props, State> {

  readonly state: Readonly<State> = {
    text: ''
  }

  componentDidMount() {
    this.fetchDatas();
  }

  fetchDatas() {
    window.fetch(`http://127.0.0.1:3001/greet/ddj`)
      .then(res => res.json())
      .then(({ status, datas }) => {
        status === 0
        &&
        this.setState({ text: `Hello World ! i am ${datas.name} @${datas.time}` });
      })
  }

  handleClick = () => {
    this.fetchDatas();
  }

  render(): any {
    const { text } = this.state;
    return (
      <div>
        <p>{text}</p>
        <button onClick={this.handleClick}>Click me to call RESTfull API from backend</button>
      </div>
    );
  }
}

export default App;