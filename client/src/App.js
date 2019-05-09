import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import { Button } from 'reactstrap';

class App extends Component {
  teste(){
    axios.get('/api/revendas')
    .then(res => console.log(res.data))
  }

  testePost(){
    const item = { nome: 'Carla' }
    axios.post('/api/revendas', item)
    .then(res => console.log(res.data))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Button color="success" onClick={this.testePost}>Ola mundo</Button>
        <Button color="danger" onClick={this.teste}>Ola mundo</Button>
        </header>
      </div>
    );
  }
}


export default App;
