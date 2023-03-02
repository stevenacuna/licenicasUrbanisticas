import eliminar from "./eliminar.png";
import { Link } from "react-router-dom";


function EliminarTools(props){
    let url =props.path + "/delete/"+props.id;
    return(
    <Link to={url}>
    <img src={eliminar} alt="D" width="25px"/>
    </Link>
    )
}

export default EliminarTools;