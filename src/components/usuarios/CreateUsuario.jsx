import { getRequest } from "../../js/getData";
import backendConfig from "../../backendConfig";
import { useNavigate } from "react-router-dom";
let objetoCss = {
    border: "1px solid #85929E ",
};

function CreateUsuario(props) {
    let navigate = useNavigate();
    return (
        <div class="col-12 w-75 mx-auto">
            <h4 class="mb-3">Crear Usuario</h4>
            <form>
                <div class="row g-3">
                    <div class="col-sm-6">
                        <label for="firstName" class="form-label">
                            Nombre
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="firstName"
                            placeholder=""
                            defautlValue=""
                            required={true}
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
                            defaultValue=""
                            required={true}
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
                            defaultValue=""
                            required={true}
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
                                required={true}
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
                            required={true}
                            style={objetoCss}
                        />
                        <div class="invalid-feedback">
                            Please enter a valid email address for shipping
                            updates.
                        </div>
                    </div>
                    <div class="col-12">
                        <label for="contrasena" class="form-label">
                            Contraseña
                        </label>
                        <div class="input-group has-validation">
                            <input
                                type="password"
                                class="form-control"
                                id="password1"
                                placeholder="Contraseña"
                                required={true}
                                defaultValue=""
                                style={objetoCss}
                            />
                            <div class="invalid-feedback">
                                su contraseña es requerida.
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <label for="contrasena2" class="form-label">
                            Repita la Contraseña
                        </label>
                        <div class="input-group has-validation">
                            <input
                                type="password"
                                class="form-control"
                                id="password2"
                                placeholder="Contraseña2"
                                required={true}
                                defaultValue=""
                                style={objetoCss}
                            />
                            <div class="invalid-feedback">
                                su contraseña es requerida.
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <label for="typeUser" class="form-label">
                            Tipo Usuario
                        </label>
                        <select
                            class="form-control"
                            id="typeUser"
                            required={true}
                            style={objetoCss}
                        >
                            <option value="admin">Administrador</option>
                            <option value="reviewer1">Revisor juridico</option>
                            <option value="reviewer2">
                                Revisor Arquitectonico
                            </option>
                            <option value="reviewer3">
                                Revisor estructural
                            </option>
                        </select>
                    </div>
                    <div class="col-sm-12">
                        <label for="assetUser" class="form-label">
                            Usuario Activo
                        </label>
                        <div>
                            <input
                                type="radio"
                                defaultValue={true}
                                name="assetUser"
                                checked
                            />
                            Si
                            <input
                                type="radio"
                                defaultValue={false}
                                name="assetUser"
                            />
                            No
                        </div>
                    </div>
                    
                </div>

                <hr class="my-4" />

                <button
                    class="w-100 btn btn-primary btn-lg"
                    type="button"
                    onClick={() => {
                        onClickSubmit(navigate);
                    }}
                >
                    Continue con el Registro
                </button>
            </form>
        </div>
    );
}

function onClickSubmit(navigate) {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let idDocument = document.getElementById("idDocument").value;
    let userName = document.getElementById("userName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;
    let typeUser = document.getElementById("typeUser").value;
    let assetUser = document.querySelector(
        'input[name="assetUser"]:checked'
    ).value;
        
    
    if (password === password2) {
        let bodyData = {
            firstName,
            lastName,
            idDocument,
            userName,
            email,
            password,
            typeUser,
            assetUser,
        };
        console.log(bodyData);
        let url = backendConfig.FULL_API_PATH+"usuarios/create";

        let promiseCreate = getRequest(url, {}, "post", bodyData);
        promiseCreate
            .then((res) => {
                if (res.status < 300) {
                    console.log("usuario creado");
                    alert("El usuario se ha creado");
                    navigate("/usuarios");
                } else {
                    console.log("error al crear");
                }
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    } else {
        alert("las claves no coninciden");
    }
}
export default CreateUsuario;
