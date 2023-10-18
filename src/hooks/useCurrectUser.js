import { useState, useEffect } from "react";
import { PassageUser } from '@passageidentity/passage-auth/passage-user';
export default function useCurrentUser() {
    const [result, setResult] = useState({
        isLoading: true,
        isAuthorized: false,
        username: ''
    });
    const user = new PassageUser();
    const logout = () =>{
        // const value = await user.signOut();
        console.log("logout called signout btn");
        
    }
    
    useEffect(() => {
        let cancelRequest = false;
        user.userInfo().then(userInfo=> {
            if( cancelRequest ) {
                return;
            }
            if(userInfo === undefined){
                setResult({
                    isLoading: false,
                    isAuthorized: false,
                    username: "",
                });
                return;
            }
            setResult({
                isLoading: false,
                isAuthorized: true,
                username: userInfo.email ? userInfo.email : userInfo.phone,
            });
        });
        return () => {
            cancelRequest = true;
        };
    }, []);
    // return result;
    return { ...result, logout };
}