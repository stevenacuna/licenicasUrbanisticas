import getData from "../../js/getData";
import MainPage from "../table/MainPage";

function UsuariosIndex(props) {
    let datosTabla = getData("url", {}, "get", {});
    return (
        <div className="mx-5">
            <h3>Usuarios</h3>
            
            <MainPage
                path={"/usuarios"}
                data={datosTabla}
                name={"Tabla de Usuarios"}
                columns={["id", "firstName", "email", "username", "password"]}
                columnsAlias={[
                    "id",
                    "Nombre",
                    "Correo",
                    "Usuario",
                    "Contrasena",
                ]}
                tools={["update", "delete"]}
            />
            {/* <form class="d-flex" role="search">
                <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                    Search
                </button>
                </form> */}
            {/* <Table
                path={"/usuarios"}
                data={datosTabla}
                name={"Tabla de Usuarios"}
                columns={["id", "firstName", "email", "username", "password"]}
                columnsAlias={[
                    "id",
                    "Nombre",
                    "Correo",
                    "Usuario",
                    "Contrasena",
                    
                ]}
                tools={["update","delete"]} */}
            />
        </div>
    );
}
export default UsuariosIndex;
