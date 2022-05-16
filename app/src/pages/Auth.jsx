import React, {useState} from "react"
import { supabase } from "../Database/supabase"
import {useNavigate} from 'react-router-dom';

export default function Auth(){
    const navigate = useNavigate();
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')

    return(
        <div>
         <input placeholder ="Email" value={email} onChange={(e) => setEmail (e.target.value)} />
         <input placeholder="Password" value={password} onChange={(e) => setPassword (e.target.value)} />
         <button onClick={() => loggain(email, password, navigate)}>logga in</button>
         <button onClick={() => skapakonto(email, password, navigate)}>skapakonto</button>
        </div>
    )
}

async function loggain(email, password, navigate){
    try{
    const {error} = await supabase.auth.signIn({email, password})
      if(error) throw error
      alert('inloggad')
      useHistory.push('/Home')
    } 
    catch(error) {
        alert(error.message)
    }


}

const skapakonto = async (email, password, navigate) => {
    try{
    const {error} = await supabase.auth.signUp({email, password})
      if(error) throw error
      alert('inloggad')
      navigate.push('/Home')
    } 
    catch(error) {
        alert(error.message)
    }
    
}