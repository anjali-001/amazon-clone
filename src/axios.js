import axios from 'axios'

const instance = axios.create({
    baseURL: '...'//API URL(cloud function url)
})

export default instance;