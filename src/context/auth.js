import React, {Component, createContext} from "react";
import createAuth0Client from "@auth0/auth0-spa-js";


export const AuthContext = createContext();

export class AuthProvider extends Component {
    
    state = {
        authClient: null,
        isLoading: true,
        isAuthenticated: false,
        user: null
    };

    config = {
        domain: process.env.REACT_APP_AUTH_DOMAIN,
        client_id: process.env.REACT_APP_AUTH_CLIENT_ID,
        redirect_uri: window.location.origin
    }

    componentDidMount(){
        this.initAuth();
    }

    initAuth = async() => {
        const authClient = await createAuth0Client(this.config);
        
        this.setState({ authClient });

        if(window.location.search.includes("code=")){
            return this.handleRedirectCallback();
        }

        const isAuthenticated = await authClient.isAuthenticated();
        const user = isAuthenticated ? await authClient.getUser() : null;
        this.setState({authClient, isLoading: false, isAuthenticated});
       
    }

    handleRedirectCallback = async() => {
        this.setState({ isLoading: true });

        await this.state.authClient.handleRedirectCallback();
        const user = await this.state.authClient.getUser();

        this.setState({ user, isAuthenticated: true, isLoading: false });
        
        window.history.replaceState({}, document.title, window.location.pathname);
    }

    render(){
        const { authClient, isLoading, isAuthenticated, user } = this.state;
        const { children } = this.props;
    
        const configObject = { 
            isLoading, 
            isAuthenticated,
            user,
            loginWithRedirect: (...p) => authClient.loginWithRedirect(...p),
            getToken: (...p) => authClient.getToken(...p),
            getIdToken: (...p) => authClient.getIdToken(...p),
            logout: (...p) => authClient.logout(...p)
        };

        return (
            <AuthContext.Provider value={configObject}>
                {children}
            </AuthContext.Provider>
        );
    
    }

}

