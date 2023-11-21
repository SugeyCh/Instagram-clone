import '../../styles/App.css'
import { Instagram } from '../icons/icons.jsx'
import UserProfile   from './User-profile.jsx'
import MenuOptions   from './Menu-options.jsx'
 
const Menu = () => {
  return(
    <div className='menu'>
      <div className='style'>
        <span className='title'>
          <Instagram />
        </span>
        <div className='caja'>
            <MenuOptions />
            <UserProfile />
        </div>
      </div>
    </div>
  )
}

export default Menu