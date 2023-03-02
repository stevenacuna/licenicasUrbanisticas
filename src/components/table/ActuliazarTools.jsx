import { Link } from "react-router-dom";
import edit from "./edit.png"
function ActualizarTools(props){
    let url =props.path + "/update/"+props.id;
    return(
    <Link to={url}>
    <img src={edit} alt="E" width="25px"/>
    </Link>
    )
}

export default ActualizarTools;