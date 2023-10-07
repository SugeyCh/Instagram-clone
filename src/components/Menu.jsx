import '../styles/App.css'
import { useEffect, useState } from "react"
import { 
  Instagram, 
  Inicio, 
  Busqueda, 
  Explorar, 
  Reels, 
  Mensajes, 
  Notificaciones, 
  Crear } from './icons/icons.jsx'
import instance from "../services/radom-user.js"
 
const Menu = () => {
  const [ user, setUser ] = useState()
  useEffect(() => {
    instance.get('https://randomuser.me/api/?results=1')
      .then((res) => {
        setUser(res.data.results[0])
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return(
    <div className='menu'>
      <div className='style'>
        <span className='title'>
          <Instagram />
        </span>
        <div className='caja'>
            <div className='opciones'>
              <Inicio />
              <span>Inicio</span>
            </div>

            <div className='opciones'>
              <Busqueda />
              <span>Búsqueda</span>
            </div>

            <div className='opciones'>
              <Explorar />
              <span>Explorar</span>
            </div>

            <div className='opciones'>
              <Reels />
              <span>Reels</span>
            </div>

            <div className='opciones'>
              <Mensajes />
              <span>Mensajes</span>
            </div>

            <div className='opciones'>
              <Notificaciones />
              <span>Notificaciones</span>
            </div>

            <div className='opciones'>
              <Crear />
              <span>Crear</span>
            </div>

            <div className='opciones'>
              {
                user ? (
                  <div key={ user.name.first }>
                    <img src={ user.picture.medium } alt="" />
                  </div>
                ) : (
                  <span className='loader2'></span>
                )
              }
              <span className='perfil'>Perfil</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Menu