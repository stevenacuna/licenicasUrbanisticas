import { useNavigate } from "react-router-dom";
import backendConfig from "../../backendConfig";
import { useAuthContext } from "../../contexts/authContext";
import { getRequest } from "../../js/getData";

function LoginView(props) {
    let navigate = useNavigate();
    const { login } = useAuthContext();

    return (
        <div className="w-75 mx-auto">
            <main class="form-signin w-100 m-auto">
                <form>
                    <img
                        class="mb-4"
                        src="https://cdn.pixabay.com/photo/2019/03/13/14/09/label-4052957_960_720.png"
                        alt=""
                        width="72"
                        height="57"
                    />
                    <h1 class="h3 mb-3 fw-normal">Login</h1>

                    <div class="form-floating my-3">
                        <input
                            type="text"
                            class="form-control"
                            id="userName"
                            placeholder="Digite el usuario"
                        />
                        <label for="floatingInput">Usuario</label>
                    </div>
                    <div class="form-floating my-3">
                        <input
                            type="password"
                            class="form-control"
                            id="password"
                            placeholder="Password"
                        />
                        <label for="floatingPassword">Password</label>
                    </div>

                    <div class="checkbox mb-3 my-3">
                        <label>
                            <input
                                type="checkbox"
                                value="remember-me"
                                checked
                            />{" "}
                            Remember me
                        </label>
                    </div>
                    <button
                        class="w-100 btn btn-lg btn-primary my-3"
                        type="button"
                        onClick={() => {
                            onClickSubmit(navigate, login);
                        }}
                    >
                        Sign in
                    </button>
                    <p class="mt-5 mb-3 text-muted">© 2017–2022</p>
                </form>
            </main>
        </div>
    );
}

function onClickSubmit(navigate, login) {
    let userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;

    let bodyData = {
        userName,
        password,
    };

    let url = backendConfig.FULL_API_PATH + "auth/signin";

    let promiseSingIn = getRequest(
        url,
        { "Content-Type": "application/json" },
        "post",
        bodyData
    );
    promiseSingIn
        .then((res) => {
            if (res.status < 300) {
                let data = res.data;
                let token = data.token;
                console.log("usuario Actualizado");
                //alert("El usuario se ha Actualizado");
                login(token);
                navigate("/");
            } else {
                console.log("error al Actualizar");
            }
            console.log(res);
        })
        .catch((err, res) => {
            console.log(err);
            console.log(err.message);
            if (err.message === "Network Error") {
                alert("error al conectar con la base de datos");
            }
            if (
                err.message === "Request failed with status code 401" ||
                err.message === "Request failed with status code 400"
            ) {
                alert("usuario o clave incorrectos");
            }
        });
}
export default LoginView;
