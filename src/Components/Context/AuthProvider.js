import React, { createContext } from 'react';
import UseFirebase from '../Hooks/UseFirebase';
export const AuthContext = createContext();
const AuthProvider = ({children}) => {

const Auth = UseFirebase();
    return (
        <AuthContext.Provider value={Auth}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;