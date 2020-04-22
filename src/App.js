import React from 'react';
import Header from '@/components/Header'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {

  }
  render() {
    return (
      <div className="content">
        <Header />
        <div className="m-con">{this.props.children}</div>
      </div>
    )
  }

}

export default App;
