import { useState } from "react";
import { getRequest } from "../../js/getData";
import backendConfig from "../../backendConfig";

import BodyIndex from "./BodyIndex";
import { useEffect } from "react";

function UsuariosIndex(props) {
    
    const [dataTable, setDataTable] = useState([]);
    const [state, setState] = useState("loading");
    const [error, setError] = useState("");

    useEffect(function () {
        let url = backendConfig.FULL_API_PATH + "usuarios/all";
        let promiseData = getRequest(
            url,

            {},
            "get",
            {}
        );
        promiseData
            .then((res) => {
                setState("loaded");
                let data=res.data
                console.log(data);
                setDataTable(data);
            })
            .catch((err) => {
                setState("error");
                setError(err);
                console.log(err);
            });
    }, []);
    if (state === "error") {
        return (
            <div className="mx-3 d-flex">
                <h3>{error.toString()}</h3>
            </div>
        );
    }
    if (state === "loading") {
        return (
            <div className="mx-3 d-flex">
                <h3>Loading...</h3>
            </div>
        );
    }

    return (
        <BodyIndex
            data={dataTable}
            path={"/usuarios"}
            name={"Tabla de Usuarios"}
            columns={[
                "_id",
                "firstName",
                "lastName",
                "idDocument",
                "email",
                "userName",
                "typeUser",
                "assetUser",
            ]}
            columnsAlias={[
                "id",
                "Nombre",
                "Apellidos",
                "Cedula",
                "Correo",
                "Usuario",
                "Tipo Usuario",
                "activo",
            ]}
            tools={["update", "delete"]}
        ></BodyIndex>
    );
}
export default UsuariosIndex;
