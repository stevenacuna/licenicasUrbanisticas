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

function App() {
    return (
        <div>
            <div className="App">
                
            
            
            <Navbar logget={false} />

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
                <Route path="/login" element={<LoginView />} />
                <Route path="/ejemplos" element={<EjemplosIndex />} />
                <Route
                    path="/ejemplos/function"
                    element={
                        <ComponenteFunction
                            mns={"Mesaje por PROPS  del componente Funcion"}
                        />
                    }
                />
                <Route
                    path="/ejemplos/clase"
                    element={
                        <ComponenteFunction
                            mns={"Mensaje por PROPS  del componente CLASE"}
                        />
                    }
                />
                <Route path="/ejemplos/hook" element={<HookEjemplo />} />
            </Routes>
            <Footer />
            </div>
        </div>
    );
}

export default App;
