import {constants} from '../constants'


 export const post = async (url,data) =>{
       return fetch(`${constants.server}${url}`,{
                method: 'POST',
                headers:{'content-type': 'application/json'},
                body: JSON.stringify(data)
            } )
            .then(r=>r.json()).then(response =>{
                console.log(response)
                return response;
            })
            .catch(err => {
                console.log(err)
              })
    }

