import { Link } from "react-router-dom";

function LogBotton(props){
    let logBotton=undefined;
    if (props.logget){
        
        logBotton=<button className="btn btn-outline-danger"> LogOut</button>;
        
    }else{
        logBotton=(<Link to={"/login"}>
        <button className="btn btn-outline-success"> LogIn</button>;
        </Link>)
    }
    return(
        <div className="me-2 ms-5">{logBotton}</div>

    )
}
export default LogBotton;