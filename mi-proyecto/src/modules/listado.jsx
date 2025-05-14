import React from 'react';
import Cita from './cita'
import './listado.css'
function Listado({citas}){
return(
<div className="lista-citas">
    {citas.map((citapasada, index) => ( 
    <Cita key={index} cita = {citapasada} id={index} />
 ))}
</div>)
}
export default Listado;