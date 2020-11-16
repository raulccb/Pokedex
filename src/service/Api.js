import axios from 'axios'

const apiClient = axios.create({
    headers: {
        Accept: 'application/json',
    }
})

export { apiClient }