import { Link } from "react-router-dom";

function CreateButton(props){
    let url=props.path+"/create"
    return (
        <Link to={url}>
    <button type="" className="btn btn-success ">Crear</button>;
    </Link>
    );
}
export default CreateButton;