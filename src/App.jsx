import React, { Component } from "react";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>Mensaje {this.props.name}</h1>
  }
}

const BigMessage = (props) => {
  return <h1>Big Message: {props.name} </h1>
}

function App() {
  const name = 'StarGazers'
  return (
    <div className="container">
      <article>
        <hgroup>
          <img src="images/group.svg" alt="StarGazers Group" />
          <Welcome name="Ola k ase 2"></Welcome>
          <BigMessage name="Ola k ase 3"></BigMessage>
          <p>Members of an <b>intergalactic alliance</b><br />
            paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
          <button className="outline" onClick={() => alert('Hi there')}>Click Me</button>
        </hgroup>
      </article>
    </div>
  )
}
export default App
