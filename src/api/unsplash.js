import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID 3465420255b18c6a0e32fd38d6818df62f6cc7229732b58eda97501731d2e4c2`
  }
})