import React,{useEffect} from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { getContact } from '../JS/actions/contact';

export const ContactList = () => {
    
const dispatch = useDispatch() ;
const listContact= useSelector((state)=> state.contactReducer.contactList);
const load = useSelector((state) => state.contactReducer.load);
       useEffect(() => {
    dispatch(getContact());
       }, []);
   return <div></div>
};
//{load?<h1>spinner</h1>:listContact.map((el)=>{el.name})}