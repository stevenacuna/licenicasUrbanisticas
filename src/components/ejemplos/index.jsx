import { Link } from "react-router-dom";
function EjemplosIndex(props){
    return(
        <div>
                        <ul>
                <li>
                    
                <Link to={"/ejemplos/clase"}>I a ejemplos CLASE </Link>
                </li>
                <li>
                    <Link to={"/ejemplos/function"}>Ir a ejemplo FUNCION</Link>
                    
                </li>
                <li>
                    <li>
                    <Link to={"/ejemplos/hook"}>Ir a ejemplo HOOKS</Link>
                    
                </li>
                    
                </li>
            </ul>
        </div>
    )
}

export default EjemplosIndex;