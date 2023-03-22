import { useParams } from "react-router-dom";
import { getRequest } from "../../js/getData";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import backendConfig from "../../backendConfig";
import { useAuthContext } from "../../contexts/authContext";


let objetoCss = {
    border: "1px solid #85929E ",
};
function EliminarUsuario(props) {
    let navigate = useNavigate();
    const {isToken}=useAuthContext();
    
    let { idUsuario } = useParams();

    let [user, setUser] = useState({});

    useEffect(function () {
        let url = backendConfig.FULL_API_PATH+"usuarios/get/" + idUsuario;
        let promiseData = getRequest(
            url,

            {},
            "get",
            {}
        );
        promiseData
            .then((res) => {
                console.log(res.data);
                setUser(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    console.log(user);
    return (
        <div class="col-12 w-75 mx-auto">
            <h4 class="mb-3">Eliminar Usuario</h4>
            <form>
                <div class="row g-3">
                    <div class="col-sm-12">
                    
                        <label for="identifier" class="form-label">
                            Id
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="id"
                            defaultValue={idUsuario}
                            required={true}
                            readOnly={true}
                            style={objetoCss}
                        />
                    </div>
                    <div class="col-sm-6">
                        <label for="firstName" class="form-label">
                            Nombre 
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="firstName"
                            placeholder="Nombre de la persona"
                            defaultValue={user.firstName}
                            required={true}
                            minLength={4}
                            readOnly={true}
                            style={objetoCss}
                        />
                        <div class="invalid-feedback">
                            Valid first name is required.
                        </div>
                    </div>

                    <div class="col-sm-6">
                        <label for="lastName" class="form-label">
                            Apellidos
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="lastName"
                            placeholder=""
                            defaultValue={user.lastName}
                            readOnly={true}
                            style={objetoCss}
                        />
                        <div class="invalid-feedback">
                            Valid last name is required.
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <label for="idDocument" class="form-label">
                            Documento de Identidad
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="idDocument"
                            placeholder=""
                            defaultValue={user.idDocument}
                            readOnly={true}
                            style={objetoCss}
                        />
                        <div class="invalid-feedback">
                            Valid last name is required.
                        </div>
                    </div>
                    <hr class="my-4" />
                    <div class="col-12">
                        <label for="userName" class="form-label">
                            Usuario
                        </label>
                        <div class="input-group has-validation">
                            <span class="input-group-text">@</span>
                            <input
                                type="text"
                                class="form-control"
                                id="userName"
                                placeholder="Username"
                                defaultValue={user.userName}
                                readOnly={true}
                                style={objetoCss}
                            />
                            <div class="invalid-feedback">
                                Your username is required.
                            </div>
                        </div>
                    </div>

                    <div class="col-12">
                        <label for="email" class="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            class="form-control"
                            id="email"
                            placeholder="you@example.com"
                            defaultValue={user.email}
                            readOnly={true}
                            style={objetoCss}
                        />
                        <div class="invalid-feedback">
                            Please enter a valid email address for shipping
                            updates.
                        </div>
                    </div>

                    <div class="col-sm-12">
                        <label for="typeUser" class="form-label">
                            Tipo Usuario
                        </label>
                        <div class="input-group has-validation">
                            <input
                                type="text"
                                class="form-control"
                                id="typeUser"
                                placeholder=""
                                required={true}
                                defaultValue={user.typeUser}
                                style={objetoCss}
                            />
                            <div class="invalid-feedback">
                                el dato es requerido.
                            </div>
                        </div>
                    </div>
                </div>

                <hr class="my-4" />

                <button
                    class="w-100 btn btn-danger btn-lg"
                    type="button"
                    onClick={() => {
                        onClickSubmit(navigate, idUsuario,isToken);
                    }}
                >
                    Eliminar Registro
                </button>
            </form>
        </div>
    );
}
function onClickSubmit(navigate, idUsuario,token) {
    let url = "http://localhost:8080/api/usuarios/delete/" + idUsuario;
    let promiseDelete = getRequest(url, {"x-access-token":token}, "delete", {});
    promiseDelete
        .then((res) => {
            console.log("usuario se ha eliminado");
            alert("El usuario se ha eliminado");
            console.log(res);
            navigate("/usuarios");
        })
        .catch((err) => {
            console.log(err);
            alert(err.response.data.message);
        });
}

export default EliminarUsuario;
