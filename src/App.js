import logoCargado from "./logo.svg";
import "./css/App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Radicacion from "./components/radicacion";
import RevisionJuridica from "./components/revisionJuridica";
import RevisionArquitectonica from "./components/revisionArquitectonica";
import RevisionEstructural from "./components/revisionEstructural";
import Footer from "./components/Footer";
import EjemplosIndex from "./components/ejemplos";
import ComponenteFunction from "./components/ejemplos/ComponenteFunction";
import UsuariosIndex from "./components/usuarios";
import LoginView from "./components/usuarios/Login";
import HookEjemplo from "./components/ejemplos/HookEjemplo";
import CreateUsuario from "./components/usuarios/CreateUsuario";
import ActualizarUsuario from "./components/usuarios/ActualizarUsuario";
import EliminarUsuario from "./components/usuarios/EliminarUsuario";
import { useAuthContext } from "./contexts/authContext";


function App() {
    const {isAuthenticated}=useAuthContext();
    
    return (
        <div>
            <div className="App">
                
                    <Navbar logget={isAuthenticated} />

                    <Routes>
                        <Route path="/" element={<Home logo={logoCargado} />} />
                        <Route path="/radicacion" element={<Radicacion />} />

                        <Route
                            path="/revision_juridica"
                            element={<RevisionJuridica />}
                        />
                        <Route
                            path="/revision_arquitectonica"
                            element={<RevisionArquitectonica />}
                        />
                        <Route
                            path="/revision_estructural"
                            element={<RevisionEstructural />}
                        />
                        <Route path="/usuarios" element={<UsuariosIndex />} />
                        <Route
                            path="/usuarios/create"
                            element={<CreateUsuario />}
                        />

                        <Route
                            path="/usuarios/update/:idUsuario"
                            element={<ActualizarUsuario />}
                        />
                        <Route
                            path="/usuarios/delete/:idUsuario"
                            element={<EliminarUsuario />}
                        />

                        <Route path="/login" element={<LoginView />} />
                        <Route path="/ejemplos" element={<EjemplosIndex />} />
                        <Route
                            path="/ejemplos/function"
                            element={
                                <ComponenteFunction
                                    mns={
                                        "Mesaje por PROPS  del componente Funcion"
                                    }
                                />
                            }
                        />
                        <Route
                            path="/ejemplos/clase"
                            element={
                                <ComponenteFunction
                                    mns={
                                        "Mensaje por PROPS  del componente CLASE"
                                    }
                                />
                            }
                        />
                        <Route
                            path="/ejemplos/hook"
                            element={<HookEjemplo />}
                        />
                    </Routes>
                    <Footer />
                
            </div>
        </div>
    );
}

export default App;
