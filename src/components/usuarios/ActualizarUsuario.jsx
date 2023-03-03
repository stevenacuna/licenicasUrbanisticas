import { useParams } from "react-router-dom";
import { getUsuario } from "../../js/getData";

let objetoCss = {
    border: "1px solid #85929E ",
};
function ActualizarUsuario(props){
    let {idUsuario}=useParams();
    let usuario=getUsuario(idUsuario);
    console.log(usuario);
        return (
        <div class="col-12 w-75 mx-auto">
            <h4 class="mb-3">Actualizar Usuario</h4>
            <form>
                <div class="row g-3">
                <div class="col-sm-12">
                        <label for="id" class="form-label">
                            ID
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="id"
                            placeholder=""
                            defaultValue={usuario.id}
                            required={true}
                            style={objetoCss}
                            readOnly={true}
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
                            placeholder=""
                            defaultValue={usuario.firstName}
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
                            defaultValue={usuario.lastName}
                            required={true}
                            style={objetoCss}
                        />
                        <div class="invalid-feedback">
                            Valid last name is required.
                        </div>
                    </div>
                    <hr class="my-4" />
                    <div class="col-12">
                        <label for="username" class="form-label">
                            Usuario
                        </label>
                        <div class="input-group has-validation">
                            <span class="input-group-text">@</span>
                            <input
                                type="text"
                                class="form-control"
                                id="username"
                                placeholder="Username"
                                defaultValue={usuario.username}
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
                            defaultValue={usuario.email}
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
                                id="contrasena"
                                placeholder="Contraseña"
                                defaultValue={usuario.password}
                                required={true}
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
                                id="contrasena2"
                                placeholder="Contraseña2"
                                required={true}
                                defaultValue={usuario.password}
                                style={objetoCss}
                            />
                            <div class="invalid-feedback">
                                su contraseña es requerida.
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <label for="tipoUsuario" class="form-label">
                            Tipo Usuario
                        </label>
                        <select
                            class="form-control"
                            id="tipoUsuario"
                            required={true}
                            style={objetoCss}
                        >
                            <option value="Administrador">Administrador</option>
                            <option value="RevisorJiridico">
                                Revisor juridico
                            </option>
                            <option value="RevisorArquitectonica">
                                Revisor Arquitectonico
                            </option>
                            <option value="RevisorEstructural">
                                Revisor estructural
                            </option>
                        </select>
                    </div>
                    <div class="col-sm-12">
                        <label for="usuarioActivo" class="form-label">
                            Usuario Activo
                        </label>
                        <div>
                            <input
                                className="ms-5"
                                type="radio"
                                value="Si"
                                name="usuarioActivo"
                                

                            />
                            Si
                            <input
                                className="ms-5"
                                type="radio"
                                Value="No"
                                name="usuarioActivo"
                            />
                            No
                        </div>
                    </div>
                </div>

                <hr class="my-4" />

                <button
                    class="w-100 btn btn-primary btn-lg"
                    type="submit"
                    onClick={onClickSubmit}
                >
                    Continue con la actualización
                </button>
            </form>
        </div>
    );

}
function onClickSubmit(e) {}
export default ActualizarUsuario;