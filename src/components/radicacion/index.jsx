function Radicacion(props) {
    return (
        <div>
            <h3>RADICACION</h3>
            <div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown link
  </a>

  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>

            <div className="dropdown">
                <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Dropdown button
                </button>
                <ul class="dropdown-menu">
                    <li>
                        <a className="dropdown-item" href="#">
                            Action
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Another action
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Something else here
                        </a>
                    </li>
                </ul>
            </div>
            <select class="form-select" aria-label="Default select example">
                <option selected>Tipo de Licencia Urbanistica</option>
                <option value="1">1. Urbanización.</option>
                <option value="2">2. Parcelación.</option>
                <option value="3">3. Subdivisión.</option>
                <option value="4">4. Construcción.</option>
                <option value="5">
                    5. Intervención y ocupación del espacio público.
                </option>
            </select>
        </div>
    );
}

export default Radicacion;
