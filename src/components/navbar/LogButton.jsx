import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/authContext";

function LogBotton(props){
    let logBotton=undefined;
    let navigate=useNavigate();
    const {logout}=useAuthContext();
    if (props.logget){
        
        logBotton=<button className="btn btn-outline-danger" onClick={() => {
            onClickSubmit(navigate,logout);
        }}> LogOut</button>;
        
    }else{
        logBotton=(<Link to={"/login"}>
        <button className="btn btn-outline-success"> LogIn</button>;
        </Link>)
    }
    return(
        <div className="me-2 ms-5">{logBotton}</div>

    )
}

function onClickSubmit(navigate,logout){
    logout();
    navigate("/");
}
export default LogBotton;