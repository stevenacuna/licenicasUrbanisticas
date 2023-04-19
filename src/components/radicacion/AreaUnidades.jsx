import React from "react";

function AreaUnidades(props) {
    return (
        <div className="col-sm-6">
            <div class="form-check mx-auto">
                <label class="form-check-label" for="flexRadioDefault1">
                    1.7. Área Construida
                </label>
            </div>

            <select
                {...props.register("areaConstruida", {required:true})}
                class="form-select col-sm-6"
                aria-label="Default select example"
                required={true}
            >
                <option selected>Selecione Objeto del Trámite </option>
                <option value="Igual o mayor a 2.000 M2">
                    Igual o mayor a 2.000 M2
                </option>
                <option value="Menor a 2.000 M2">Menor a 2.000 M2</option>
                <option value="Susceptible a alcanzar o superar los 2.000 M2">
                    Susceptible a alcanzar o superar los 2.000 M2
                </option>
            </select>
        </div>
    );
}

export default AreaUnidades;
