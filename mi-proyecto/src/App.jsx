import { useState, useEffect } from 'react'
import './App.css'
import Form from './modules/form'
import Listado from './modules/listado'

const App = () => {
  const [arrayCitas, setArrayCitas] = useState([]); 

  useEffect(() => {
    const citasGuardadas = localStorage.getItem('citas');
    console.log(citasGuardadas);
    if (!citasGuardadas) {
      setArrayCitas(JSON.parse(citasGuardadas));
    } else {
      const citasIniciales = [
        {
          nombre: "Nina",
          dueño: "Martin",
          fecha: "2021-08-05",
          hora: "08:20",
          sintomas: "Le duele la pierna"
        },
        {
          nombre: "Sifon",
          dueño: "Flecha",
          fecha: "2023-08-05",
          hora: "09:24",
          sintomas: "Duerme mucho"
        },
        {
          nombre: "Floki",
          dueño: "Ari",
          fecha: "2023-08-05",
          hora: "16:15",
          sintomas: "No está comiendo"
        }
      ];
      setArrayCitas(citasIniciales);
      localStorage.setItem('citas', JSON.stringify(citasIniciales));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(arrayCitas));
  }, [arrayCitas]);

  const sacoDatosDelForm = (data) => {
    setArrayCitas([...arrayCitas, data]);
  };
  const eliminarCita = (id) => {
    const nuevasCitas = [...arrayCitas];
    nuevasCitas.splice(id, 1);
    setArrayCitas(nuevasCitas);
  };
  
  return (
    <>
        <div id="root">
        <h1>ADMINISTRADOR DE PACIENTES</h1>
        <div className="container">
          <div className="row">
            <div className="one-half column">
              <h2>Crear mi Cita</h2>
              <Form onAgregarTarjeta={sacoDatosDelForm}/>
            </div>
            <div className="one-half column">
            <h2>Administra tus citas</h2>
            <Listado citas={arrayCitas} eliminarCita = {eliminarCita} />
            </div>
          </div>
        </div>
      </div>
      <script src="/static/js/bundle.js"></script>
      <script src="/static/js/vendors~main.chunk.js"></script>
      <script src="/static/js/main.chunk.js"></script>
    </>
  )
}

export default App
