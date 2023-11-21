import '../../styles/App.css'
import { useEffect, useState } from "react"
import { instanceUsers }       from "../../services/api.js"
import { Skeleton }            from '@mui/material'

const UserProfile = () => {
  const [ user, setUser ] = useState()

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(async () => {
        try {
          const response = await instanceUsers.get('https://randomuser.me/api/?results=1')
          setUser(response.data.results[0])
        } catch (err) {
          console.log(err)
        }
      }, 2000)
    }

    fetchData()
  }, [])
  
  return (
    <>
      <div className='opciones'>
        {
          user ? (
            <div key={ user.name.first }>
              <img src={ user.picture.medium } alt="" />
            </div>
          ) : (
            <Skeleton
              variant="circular" 
              width={8} 
              height={25} 
              sx={{ bgcolor: 'grey.900' }}
            />
          )
        }
        <span className='perfil'>Perfil</span>
      </div>
    </>
  )
}

export default UserProfile