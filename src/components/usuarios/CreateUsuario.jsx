let objetoCss = {
    border: "1px solid #85929E ",
};
function CreateUsuario(props) {
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
                                id="contrasena"
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
                                id="contrasena2"
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
                                checked
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
                    Continue con el Registro
                </button>
            </form>
        </div>
    );
}

function onClickSubmit(e) {}
export default CreateUsuario;
