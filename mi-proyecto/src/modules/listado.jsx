import React from 'react';
import Cita from './cita'
import './listado.css'
function Listado({citaAgregada}){
return(
<div className="lista-citas">
            <Cita
                cita = {{nombre : "Nina", dueño : "Martin", fecha : "2021-08-05", hora : "08:20", sintomas : "Le duele la pierna"}}
            />
            <Cita
                cita = {{nombre: "Sifon", dueño: "Flecha", fecha: "2023-08-05", hora: "09:24", sintomas: "Duerme mucho"}}
            />
            <Cita
                cita={{ nombre: "Floki", dueño: "Ari", fecha: "2023-08-05", hora: "16:15", sintomas: "No está comiendo"}}
            />
            <Cita
                cita={citaAgregada}
            />
            </div>)
}
export default Listado;