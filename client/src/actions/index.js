import axios from 'axios'




export function users(data){
    
const request = axios.post('/api/post',data)
.then(response=>response.data)

return{
    type: "user_post",
    payload: request
}

}