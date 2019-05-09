import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import { Button } from 'reactstrap';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      nome: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    this.setState({nome: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const item = { nome: this.state.nome }
    axios.post('/api/revendas', item)
    .then(res => console.log(res.data))
  }

  teste(){
    axios.get('/api/revendas')
    .then(res => console.log(res.data))
  }

  testePost(){
    const item = { nome: 'Viva' }
    axios.post('/api/revendas', item)
    .then(res => console.log(res.data))
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.nome} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}


export default App;
