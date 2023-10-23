import { createContext,useContext,useState } from "react";
import axios from 'axios'

const AuthContext = createContext(null)
export const AuthProvider = ({children})=>{
    const [user,setUser] = useState(null)

    const login = async (username,password)=>{
        try {
            const reqBody = {username,password};
            const response = await axios.post(import.meta.env.VITE_APP_BACKEND_URL+"/login",reqBody)

            if(response.status !== 200){
                throw new Error('login fail')
            }

            // console.log('response :>> ', response);

            const token = response.data.token;
            localStorage.setItem('token',token);

            if(!token) throw new Error('login fail');

            const payload =  readPayload(token)
            setUser(payload);
            return response;

        } catch (error) {
            console.error('login auth context error :: ', error)
        }
    }

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        console.log('test logout')
    };

    const readPayload = (jwt) => {
        const authorizationWithoutBearer = jwt.split(' ')
        const token = authorizationWithoutBearer[1]
        const payloadBase64 = token.split('.')[1]
        const decodedPayload = atob(payloadBase64)
        const payload = JSON.parse(decodedPayload)
        return payload;
    }


return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext)
}