import { useState, useEffect } from "react"
import instance                from "../services/radom-user"

const Historias = () => {
  const [ history, setHistory ] = useState()
  const [ loading, setLoading ] = useState(true)
  
  useEffect(() => {
    instance.get('https://randomuser.me/api/?results=8')
    .then((res) => {
      setHistory(res.data.results)  
      setLoading(false)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  return(
    <>
      <div className="historias">
        <div className="his">
          <div className="history">
            <div className="op-his" >
              {
                loading ? (
                  <span className="loader"></span>
                ) : (
                  history.map((his) => (
                    <div key={his.name.first}>
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
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Historias