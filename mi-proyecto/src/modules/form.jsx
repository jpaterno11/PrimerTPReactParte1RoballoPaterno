import React, { useState } from 'react';
import './form.css'

const Form = ({ onAgregarTarjeta }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    dueño: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });

  const detectoCambios = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function validarForm(e)
  {
    const error = document.querySelector(".error");
    let valido = confirmarDatos();
      console.log(valido);
      if (valido != true)
      {
        error.innerHTML= "ERROR: Alguno de los ingresos que estas intentando enviar no cumple con los requisitos. Por favor, verifique sus datos y vuelva a intentarlo.";
      }
      else{
        e.preventDefault();
        console.log(formData);
        onAgregarTarjeta(formData); 
        alert("Ha logrado registrarse correctamente. ¡Bienvenido a bordo!");
        error.innerHTML= "";
        setFormData({
          nombre: '',
          dueño: '',
          fecha: '',
          hora: '',
          sintomas: ''
        });
      }
      e.preventDefault();
      return valido;
  }
  function confirmarDatos(){
      return Object.values(formData).every(campo => campo.trim() !== '');    
    }

  return (
    <div>
    <form onSubmit={validarForm}>
      <label>Nombre Mascota</label>
      <input type="text" name="nombre" onChange={detectoCambios} value={formData.nombre} />

      <label>Nombre Dueño</label>
      <input type="text" name="dueño" onChange={detectoCambios} value={formData.dueño} />

      <label>Fecha</label>
      <input type="date" name="fecha" onChange={detectoCambios} value={formData.fecha} />

      <label>Hora</label>
      <input type="time" name="hora" onChange={detectoCambios}  value={formData.hora} />

      <label>Síntomas</label>
      <textarea name="sintomas" onChange={detectoCambios} value={formData.sintomas}></textarea>

      <button type="submit">Agregar Cita</button>
    </form>
      <div className='error'>
      </div>
    </div>
  );
}
export default Form;