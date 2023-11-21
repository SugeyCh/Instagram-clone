import { useState, useEffect } from "react"
import instance                from "../services/radom-user"
import Skeleton                from '@mui/material/Skeleton'

const UserStories = () => {
  const [ history, setHistory ] = useState()
  const [ loading, setLoading ] = useState(true)
  
  useEffect(() => {
    const fetchData = async () => {
      setTimeout(async () => {
        try {
          const response = await instance.get('https://randomuser.me/api/?results=8')
          setHistory(response.data.results)
          setLoading(false)
        } catch (err) {
          console.log(err)
        }
      }, 2000)
    }

    fetchData()
  }, [])
  
  return (
    <>
      {
        loading ? (
          Array.from({ length: 8 }).map((_, index) => (
            <div className="pic" key={index}>
              <Skeleton 
                variant="circular" 
                width={63} 
                height={63} 
                sx={{ bgcolor: 'grey.900' }} 
                className="pictures"
              />
              <Skeleton 
                height={15} 
                width="80%" 
                sx={{ bgcolor: 'grey.900' }} 
                className="user"
              />
            </div>
          ))
        ) : (
          history.map((his) => (
            <div className="pic" key={his.name.first}>
              <div className="picture">
                <img 
                  className="person" 
                  src={ his.picture.medium } 
                  alt={`Foto de perfil de ${ his.name.first }`} 
                />
              </div>
              <div className="user" >{ his.login.username }</div>
            </div>
          ))  
        )
      }
    </>
  )
}

export default UserStories