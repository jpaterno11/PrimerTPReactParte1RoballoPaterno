import React from 'react';
import './cita.css'

function Cita({ cita }) {
    return (
      <div className="cita">
                <p>Mascota: <span>{cita.nombre}</span></p>
                <p>Dueño: <span>{cita.dueño}</span></p>
                <p>Fecha: <span>{cita.fecha}</span></p>
                <p>Hora: <span>{cita.hora}</span></p>
                <p>Sintomas: <span>{cita.sintomas}</span></p><button className="button elimnar u-full-width">Eliminar ×</button>
      </div>      
    );
  }
  export default Cita;