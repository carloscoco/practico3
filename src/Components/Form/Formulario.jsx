
//import { useState } from 'react'
import './Formulario.css'

   function Formulario() { 
    
    function envioCancel(e) {
      e.preventDefault()
    }
    return(
      <div className="Formulario">
    <form>
    <div>
      <legend>Desripción del producto</legend>
   </div>  
   <div className="form-group">
      <label htmlFor="">Nombre</label>
      <p>Producto Micrófono</p>
   </div>
   <div>
      <label htmlFor="">Descripción</label>
      <p>Micrófono de pie con cable</p>
      
   </div> 
   <div>
     <label htmlFor="">Precio</label>
     <p>$23.999</p>
   </div>
   <div>
       <label >SKU</label>
       <p>SKU9156870</p>
     </div>
     <div>
       <label>Cantidad disponible</label>
       <p>235</p>
     </div>
     <div>
       <button type="button" onClick={envioCancel}>Cancelar</button>
       <button type="submit" onClick={envioCancel}>Comprar</button>
       </div>
      
    </form>
   </div>
)
}

export { Formulario }