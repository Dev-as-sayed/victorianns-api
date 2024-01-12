import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useCreator from "../Hooks/useCreator/useCreator";

const CreatorRout = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [ isCreator, isCreatorLoading ] = useCreator();
    const location = useLocation();

    if( loading || isCreatorLoading){
        return <progress className="progress w-56"></progress>
    }
    if( user && isCreator){
        return children;
    }

    return <Navigate to='/' state={ {from: location}}></Navigate>
};

export default CreatorRout;