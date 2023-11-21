import '../../styles/App.css'
import { useEffect, useState } from 'react'
import { instancePhotos }      from '../../services/api'
import { Skeleton }            from '@mui/material'

const Image = () => {
  const [ image, setImage ]     = useState('')
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    const fetchImage = async () => {
      setTimeout( async () => {
        try {
          const response = await instancePhotos.get('https://api.unsplash.com/photos/random')
          console.log(response)
          const image = response.data.urls.regular
          setImage(image)
          setLoading(false)
        } catch (err) {
          console.error('Error al obtener imagen de Unsplash:', err)
        }
      }, 2000)
    }

    fetchImage()
  }, [])

  return (
    <div className="public">
      { 
        loading ? (
          <Skeleton 
            variant="rounded" 
            width={400} 
            height={500} 
            sx={{ bgcolor: 'grey.900' }} 
          />
        ) : (
          <img className='image' src={image} alt="Imagen aleatoria de Unsplash" />
        )
      }
    </div>
  )
}

export default Image