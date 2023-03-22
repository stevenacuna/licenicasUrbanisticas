import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from "react";
import PropTypes from "prop-types";

const MY_AUTH_APP = "MY_AUTH_APP_1";
const token="";
const TOKEN=""

 const AuthContext = createContext();

 function AuthContextProvider({ children }) {
    const [isToken, setIsToken]=useState(token);

    const [isAuthenticated, setIsAuthenticated] = useState(
        window.localStorage.getItem(MY_AUTH_APP) ?? false
    );

    const login = useCallback(function (token) {
        window.localStorage.setItem(MY_AUTH_APP, true);
        setIsAuthenticated(true);
        setIsToken(token);
        const TOKEN=token
        window.localStorage.setItem(TOKEN, true);
    }, []);

    const logout = useCallback(function () {
        window.localStorage.removeItem(MY_AUTH_APP);
        setIsAuthenticated(false);
        setIsToken("");
        window.localStorage.removeItem(TOKEN);
    }, []);

    const value = useMemo(
        () => ({
            login,
            logout,
            isAuthenticated,
            isToken
        }),
        [isAuthenticated, login, logout, isToken]
    );

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}

AuthContextProvider.propTypes = {
    children: PropTypes.object
};

const useAuthContext=()=> {
    return useContext(AuthContext);
}

export {AuthContext,AuthContextProvider,useAuthContext}
