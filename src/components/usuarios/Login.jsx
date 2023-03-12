function LoginView(props) {
    return (
        
    

        <div className="w-75 mx-auto">
 
            <main class="form-signin w-100 m-auto">
                <form>
                    <img
                        class="mb-4"
                        src="https://getbootstrap.com//docs/5.3/assets/brand/bootstrap-logo.svg"
                        alt=""
                        width="72"
                        height="57"
                    />
                    <h1 class="h3 mb-3 fw-normal">Login</h1>

                    <div class="form-floating my-3">
                        <input
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            placeholder=""
                        />
                        <label for="floatingInput">Usuario</label>
                    </div>
                    <div class="form-floating my-3">
                        <input
                            type="password"
                            class="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                        />
                        <label for="floatingPassword">Password</label>
                    </div>

                    <div class="checkbox mb-3 my-3">
                        <label>
                            <input type="checkbox" value="remember-me" checked/>{" "}
                            Remember me
                        </label>
                    </div>
                    <button class="w-100 btn btn-lg btn-primary my-3" type="button">
                        Sign in
                    </button>
                    <p class="mt-5 mb-3 text-muted">© 2017–2022</p>
                </form>
            </main>
        </div>
    );
}
export default LoginView;
