

import {GET_CONTACT,LOAD_CONTACT,FAIL_CONTACT} from '../actionType/contact';
import axios from 'axios';

export const getContact =()=>async(dispatch)=>{
dispatch({type:LOAD_CONTACT});
    try {
       let result= await axios.get("http://127.0.0.1:7000/api/contacts/");
        console.log(result);
        dispatch({type:GET_CONTACT,payload:result.data});
      
    } catch (error) {
        dispatch({
            type:FAIL_CONTACT,
            payload : error.response,
        });
        
    }
}

