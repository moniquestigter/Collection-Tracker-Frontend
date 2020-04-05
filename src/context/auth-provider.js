import React, {createContext, useState, useEffect, useMemo, useContext} from "react";

import manager from "./manager";

export const AuthContext = createContext(null);

const initAuth = {};

export default AuthProvider = props => {
    const [authData, setAuthData] = useState(initialAuthData);

    useEffect(() => {
        const currentAuth = manager.getAuthData();

        if(currrentAuth){
            setAuthData(currentAuth);
        }
    }, []);


    const onLogout = () => setAuthData(initAuth);
    
    const onLogin = newAuth => setAuthData(newAuth);

    const authDataValue = useMemo({...authData, onLogin, onLogout}, [authData]);

    return <AuthDataContext.Provider value={authDataValue} {...props } />;

};

export const useAuthContext = () => useContext(AuthContext);
