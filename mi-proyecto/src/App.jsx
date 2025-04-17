import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './modules/form'
import Listado from './modules/listado'

function App() {
  const [count, setCount] = useState(0)
  const [citaAgregada] = useState({
    nombre: 'Thomy',
    dueño: 'Joaquin',
    fecha: '2025-04-17',
    hora: '20:02',
    sintomas: 'Esta trabajando en efsi',
  });
  return (
    <>
        <div id="root">
        <h1>ADMINISTRADOR DE PACIENTES</h1>
        <div className="container">
          <div className="row">
            <div className="one-half column">
              <h2>Crear mi Cita</h2>
              <Form/>
            </div>
            <div className="one-half column">
            <h2>Administra tus citas</h2>
            <Listado citaAgregada = {citaAgregada}/>
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
