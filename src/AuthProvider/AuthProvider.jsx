import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import useAxiosPublic from "../Hooks/useAxiosPublic/useAxiosPublic";



export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();
    

    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword( auth, email, password);
    }
    const updateUserProfile = (name, userPhoto) => {
        setLoading(true)
        return updateProfile(auth.currentUser, { displayName: name, photoURL: userPhoto });
    };
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false);
            if (currentUser) {
                // get token and store client
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                            setLoading(false);
                        }
                    })
            }
            else {
                // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
                localStorage.removeItem('access-token');
                setLoading(false);
            }
        })

        return () => {
            return unsubscribe();
        }
    }, [])

    const authInformation = {
        user,
        loading,
        createNewUser,
        updateUserProfile,
        signIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInformation}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;