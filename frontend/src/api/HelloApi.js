import axios from "axios"

const apiClient = axios.create({
    baseURL : 'http://localhost:8080'
})

export function retrieveHello(){
    return apiClient.get('/hello-world/path-variable/SanskritiGautam')
}