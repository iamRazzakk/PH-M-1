import { createContext } from "react";
import PropTypes from 'prop-types';
export const AuthContext = createContext("")
const AuthProvider = ({ children }) => {
    const authInfo = {
        name: "Rakib"
    }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;
AuthProvider.prototype = {
    children: PropTypes.node
}