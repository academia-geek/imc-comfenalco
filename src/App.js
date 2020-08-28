import React from 'react';
import 'bulma/css/bulma.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import CalculadorApp from './components/imc/captura/CalculadorApp'
import DetalleIMC from './components/imc/proyeccion/DetalleIMCApp'
export default class App extends React.Component {
  componentWillMount(){
    this.setState({imc:0})
  }
  
  render() {
    return (
      <div className="App">
        <CalculadorApp App={this}/>
        <DetalleIMC App={this}/>
      </div>
    );
  }
}
