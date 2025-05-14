import React from 'react';
import './cita.css'

function Cita({ cita, id }) {
  const eliminarCita = (cita, id) => {
    let arrayCitas = JSON.parse(localStorage.getItem('citas')) || [];
    let citaEliminada = arrayCitas.splice(cita, 1)[0];
    if (tipo === 'tareasTerminadas' && citaEliminada.completada === tiempoDeFinalizacion) {
        tiempoDeFinalizacion = null; 
    }

    localStorage.setItem(tipo, JSON.stringify(arrayCitas));
    mostrarTareas();
    mostrarTareasIncompletas();
    mostrarTareasTerminadas();
    actualizarTareaMasRapida();
};
    return (
      <div className="cita">
                <p>Mascota: <span>{cita.nombre}</span></p>
                <p>Dueño: <span>{cita.dueño}</span></p>
                <p>Fecha: <span>{cita.fecha}</span></p>
                <p>Hora: <span>{cita.hora}</span></p>
                <p>Sintomas: <span>{cita.sintomas}</span></p>
                <button className="button elimnar u-full-width">Eliminar ×</button>
      </div>      
    );
  }
  export default Cita;