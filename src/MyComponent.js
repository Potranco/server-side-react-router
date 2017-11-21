import React from 'react';

class MyComponent extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    const version = this.props.version;
    return (
      <div className="MyComponent">
        <h1>React Component {version}</h1>
      </div>
    );
  }
}

export default MyComponent;
