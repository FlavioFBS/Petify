import React, { Component } from 'react'
import Cita from './Cita'
import Proptypes from 'prop-types'

class ListaCistas extends Component {
  render() {
    const citas = this.props.citas;
    const mensaje = Object.keys(citas).length === 0 ? 'No hay citas': 'Administra tu citas aquí';

    return (
      <div className="card mt-5">
        <div className="card-body">
          <h2 className="card-title text-center">{mensaje}</h2>
          <div className="lista-citas">
            {Object.keys(this.props.citas).map(cita =>(
              <Cita
                key={cita}
                info = {this.props.citas[cita]}
                borrarCita={this.props.borrarCita}
              />
            ))}
          </div>
          
        </div>
      </div>
    )
  }
}

ListaCistas.propTypes = {
  citas: Proptypes.array.isRequired,
  borrarCita: Proptypes.func.isRequired
}

export default ListaCistas;