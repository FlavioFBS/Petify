import React, { Component } from 'react'
import uuid from 'uuid'  //para generar un id unico
import PropTypes from 'prop-types'

class AgregarCita extends Component {
  

  //ref:
  nombreMascotaRef = React.createRef()
  nombreDuenioRef = React.createRef()
  fechaRef = React.createRef()
  horaRef = React.createRef()
  sintomasRef = React.createRef()
  //hola amigos de youtube

  state = {}

  crearNuevaCita = ev =>{
    ev.preventDefault()

    const mascota = this.nombreMascotaRef.current.value,
          propietario = this.nombreDuenioRef.current.value,
          fecha = this.fechaRef.current.value,
          hora = this.horaRef.current.value,
          sintomas = this.sintomasRef.current.value;

    const nuevaCita = {
      id: uuid(),
      mascota,
      propietario,
      fecha,
      hora,
      sintomas
    }

    //enviar el objeto hacia el padre para actualizar el state
    this.props.crearCita(nuevaCita);

    //reiniciar formulario
    ev.currentTarget.reset();
  }

  render() {
    return (
      <div className="card mt-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">Agregar las citas aquí</h2>

          <form onSubmit={this.crearNuevaCita}>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-3 col-form-label">Nombre Mascota</label>
              <div className="col-sm-8 col-lg-9">
                <input ref={this.nombreMascotaRef} type="text" className="form-control" placeholder="Nombre Mascota" required/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-3 col-form-label">Nombre Dueño</label>
              <div className="col-sm-8 col-lg-9">
                <input ref={this.nombreDuenioRef} type="text" className="form-control" placeholder="Nombre Dueño de la Mascota" required/>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-3 col-form-label">Fecha</label>
              <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                <input ref={this.fechaRef} type="date" className="form-control" required/>
              </div>

              <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
              <div className="col-sm-8 col-lg-3">
                <input ref={this.horaRef} type="time" className="form-control" required/>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-3 col-form-label">Sintomas</label>
              <div className="col-sm-8 col-lg-9">
                <textarea ref={this.sintomasRef} className="form-control" required></textarea>
              </div>
            </div>
            <div className="form-group row justify-content-end">
              <div className="col-sm-4">
                <button type="submit" className="btn btn-success w-100">Agregar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

AgregarCita.propTypes = {
  // se le pasa un funcion, que es requerida
  crearCita: PropTypes.func.isRequired
}


export default AgregarCita
