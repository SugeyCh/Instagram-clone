import '../styles/App.css'
import { 
  Inicio, 
  Busqueda, 
  Explorar, 
  Reels, 
  Mensajes, 
  Notificaciones, 
  Crear } from './icons/icons.jsx'

const MenuOptions = () => {
  const Options = [
    { icon: <Inicio />,         label: 'Inicio' },
    { icon: <Busqueda />,       label: 'Búsqueda' },
    { icon: <Explorar />,       label: 'Explorar' },
    { icon: <Reels />,          label: 'Reels' },
    { icon: <Mensajes />,       label: 'Mensajes' },
    { icon: <Notificaciones />, label: 'Notificaciones' },
    { icon: <Crear />,          label: 'Crear' }
  ]

  return (
    <>
      {
        Options.map((option, index) => (
          <div className='opciones' key={index}>
            { option.icon }
            <span>{ option.label }</span>
          </div>
        ))
      }
    </>
  )
}

export default MenuOptions