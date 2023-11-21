import axios from 'axios'

const instanceUsers = axios.create({
  headers: {'Accept': 'application/json'}
})

const instancePhotos = axios.create({
  headers: {
    'Accept': 'application/json'
  },
  params: {
    client_id: process.env.API_KEY, 
    query: 'random',
    orientation: 'landscape'
  }
})

export { 
  instanceUsers, 
  instancePhotos
}