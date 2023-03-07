import React, { useState } from 'react'
import './Card.jsx'
import Card from './Card.jsx'
import "./Form.css"

export const Form = () => {
    const [user, setUser] = useState({
        nombre: '',
        direccion: '',
        edad: '',
        email: '',
        mascota: ''
    })

    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if(user.nombre.length > 3 && user.direccion.length > 6) {
            setShow(true)
            setErr(false)
        } else {
            setErr(true)
        }

    }

  return (
    <div>
        <h1 className='bienvenido'>Bienvenido a Adopta Conmigo</h1>
        <form onSubmit={handleSubmit} className= "Form">
            <label>Nombre Completo</label>
            <input type="text" value={user.nombre} onChange={(e) => setUser({...user, nombre: e.target.value})}/>
            <label>Direccion</label>
            <input type="text" value={user.direccion} onChange={(e) => setUser({...user, direccion: e.target.value})}/>
            <label>Edad</label>
            <input type="text" value={user.edad} onChange={(e) => setUser({...user, edad: e.target.value})}/>
            <label>Email</label>
            <input type="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}/>
            <select value={user.mascota} onChange={(e) => setUser({...user, mascota: e.target.value})}>
                <option value="">Deseo adoptar un</option>
                <option value="perrito">Perro</option>
                <option value="gatico">Gato</option>
                <option value="hamster">Hamster</option>
            </select>
            <button>Enviar</button>
            {err && "Por favor chequea que la información sea correcta"}
        </form>
        {show && <Card user={user}/>}
    </div>
  )
}
