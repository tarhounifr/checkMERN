
import {GET_CONTACT,LOAD_CONTACT,FAIL_CONTACT}from "../actionType/contact";

const initialState={
    contactList:[],
    errors:null,
    load:false
}

const contactReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case LOAD_CONTACT:return{...state,load:true};
        case GET_CONTACT:return{...state,load:false,contactList:payload.contacts};
        case FAIL_CONTACT:return{...state,errors:payload,load:false}
           
    
        default:
        return state;
    }
}
 export default contactReducer;