import React from 'react'
import "./Form.css"

const Card = ({user}) => {

  return (
    <div className='card'>
       <h4>Hola {user.nombre}, gracias por confiar en nosotros para adoptar tu {user.mascota}, por tu edad actual de: {user.edad} años sabemos que lo disfrutarás muchísimo, pronto llegara a la puerta de tu casa en esta direccion: {user.direccion},
       al correo {user.email} te llegará el resto de la información</h4>
       <><h2>Lindo día</h2></>
    </div>
  )
}
export default Card

/*intenté ponerle estilos pero no es mi fuerte, lo demás creo que está bien. Gracias profe :)*/