import { useState, useEffect } from "react";
import { PassageUser } from '@passageidentity/passage-auth/passage-user';
export default function useCurrentUser() {
    const [result, setResult] = useState({
        isLoading: true,
        isAuthorized: false,
        username: '',
        id : null
    });
    const user = new PassageUser();
    
    useEffect(() => {
        let cancelRequest = false;
        user.userInfo().then( async(userInfo)=> {
            if( cancelRequest ) {
                return;
            }
            if(userInfo === undefined){
                setResult({
                    isLoading: false,
                    isAuthorized: false,
                    username: "",
                    id: null
                });
                return;
            }
            // https://youth-invest-backend-sharmilathippab.replit.app/db/insert?user_id=1
            const res = await fetch(`https://youth-invest-backend-sharmilathippab.replit.app/db/insert?user_id=${userInfo.id}`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                  },
                  
            })
            setResult({
                isLoading: false,
                isAuthorized: true,
                username: userInfo.email ? userInfo.email : userInfo.phone,
                id: userInfo.id
            });
        });
        return () => {
            cancelRequest = true;
        };
    }, []);
    return result;
}