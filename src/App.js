import React, { Component } from 'react';
import Header from './componentes/Header';
import AgregarCita from './componentes/AgregarCita';
import ListaCitas from './componentes/ListaCitas';

class App extends Component {

  state = {
    citas: []
  }

  componentDidMount() {
    //console.log("listo...")
    const citasLocalStorage = localStorage.getItem('citas');
    if(citasLocalStorage){
      this.setState({
        //obtener los datos del localstorage
        citas: JSON.parse(citasLocalStorage)
      })
    }
    
  }

  componentDidUpdate() {
    //console.log("algo cambio ... ")
    localStorage.setItem(
      'citas', //key
      JSON.stringify(this.state.citas)  // value
    )
  }
  /*
  componentWillUnmount() {
    console.log("hasta que cierre el componente")
  }
  componentWillMount() {
    console.log("ejecutado antes ...")
  }
  */

  crearCita = nuevaCita => {
    //copiar el state y pasarle la nueva cita
    const citas =  [...this.state.citas, nuevaCita]
    console.log(citas)
    
    this.setState({
      citas
    });
  }

  borrarCita = id => {
    //obtener copia del state
    const citasActuales = [...this.state.citas];

    //borrar el elemento del state (devolver registro con id diferente al id(parametro))
    const citas = citasActuales.filter(cita => cita.id !== id);
    
    //actualizar el state
    this.setState({
      citas
    }) 
  }

  render() {
    return (
      <div className="container">
          <Header titulo={'Administrador de pacientes de veterinaria'}/>
        <div className="row">
          <div className="col-md-6">
            <AgregarCita crearCita={this.crearCita}/>      
          </div>
          <div className="col-md-6">
            <ListaCitas 
              citas={this.state.citas}
              borrarCita={this.borrarCita}  
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
