import {useAuth} from '../pages/Auth';  
import { Navigate } from 'react-router-dom';

const Protectedroutes = ({children}) => {
    const auth = useAuth()

    return auth.user ? children : <Navigate to = {"/Sign-in"}/>
}

export default Protectedroutes;