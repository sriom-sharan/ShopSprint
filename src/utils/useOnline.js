import { useState ,useEffect } from "react";

export const useOnline = ()=>{
    const [isOnline,setOnline] = useState(true);

    useEffect(()=>{
        const handleOffline = ()=>{
            setOnline(false)
        }
        const handleOnline = ()=>{
            setOnline(true)
        }
        window.addEventListener("offline",handleOffline)
        window.addEventListener("online",handleOnline)

        return ()=>{
            window.removeEventListener("online",handleOnline);
            window.removeEventListener("offline",handleOffline);
        }
    })

    return isOnline;
}
