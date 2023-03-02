import { Link } from "react-router-dom";
import LogBotton from "./LogButton";
function Navbar(props) {
    return (
        <div>
          <h3>LICENCIAS URBANISTICAS</h3>
            <div className="mx-5 my-3">
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div
                            class="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <Link
                                        to={"/"}
                                        className="nav-link active"
                                        aria-current="page"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link
                                        to={"/radicacion"}
                                        className="nav-link"
                                    >
                                        Radicación
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link
                                        to={"/revision_juridica"}
                                        className="nav-link"
                                    >
                                        Revisión Jurídica
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link
                                        to={"/revision_arquitectonica"}
                                        className="nav-link"
                                    >
                                        Revisión Arquitectónica
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link
                                        to={"/revision_estructural"}
                                        className="nav-link"
                                    >
                                        Revisión Estructural
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link
                                        to={"/usuarios"}
                                        className="nav-link">
                                        Usuarios
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to={"/ejemplos"} className="nav-link">
                                        Ejemplos
                                    </Link>
                                    
                                </li>
                                
                            </ul>
                            
                            <LogBotton logget={props.logget}/>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
