import React, { useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'


export default function ProtectedRoute({children}) {
    const { user , loading , openLoginPopup} = useAuth();

    useEffect(() => {
        if(!user && !loading){
            openLoginPopup();
        }
    }, [user, loading, openLoginPopup]);

    if(loading){
        return <divi>Loading . . . . ⏳</divi>
      }
    if(!user){
        return null;
    }
    return user ? children : null;
}

