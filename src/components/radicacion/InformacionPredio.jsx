import React from "react";

function InformacionPredio() {
    return (
        <div className="">
            <hr />
            <div className="col-sm-12">
                <label class="form-check-label" for="flexRadioDefault1">
                    <strong>2. Información Sobre el Predio</strong>
                </label>
            </div>
            <hr />
            <div className="col-sm-12">
                <label for="contrasena2" class="form-label">
                    <strong>2.1 Dirección o Nomenclatura</strong>
                </label>
                <div class="input-group has-validation">
                    <input
                        type="text"
                        class="form-control"
                        id="password2"
                        placeholder=""
                        required={true}
                        defaultValue=""
                    />
                    <div class="invalid-feedback">su es requerida.</div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <label for="contrasena2" class="form-label">
                        2.2 matrícula Inmobiliaria
                    </label>
                    <div class="input-group has-validation">
                        <input
                            type="text"
                            class="form-control"
                            id="password2"
                            placeholder=""
                            required={true}
                            defaultValue=""
                        />
                        <div class="invalid-feedback">su es requerida.</div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <label for="" class="form-label">
                        2.3 Identificación Catastral
                    </label>
                    <div class="input-group has-validation">
                        <input
                            type="text"
                            class="form-control"
                            id=""
                            placeholder=""
                            required={true}
                            defaultValue=""
                        />
                        <div class="invalid-feedback">su es requerida.</div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div class="form-check mx-auto">
                        <label class="form-check-label" for="flexRadioDefault1">
                            2.4 Calsificación del Suelo
                        </label>
                    </div>

                    <select
                        class="form-select col-sm-3"
                        aria-label="Default select example"
                        id="objetoTramite"
                    >
                        <option selected>Selecione Objeto del Trámite </option>
                        <option value="1">Urbano</option>
                        <option value="2">Rural</option>
                        <option value="3">De Expansión Urbana</option>
                    </select>
                </div>
                <div className="col-sm-6">
                    <div class="form-check mx-auto">
                        <label class="form-check-label" for="flexRadioDefault1">
                            2.5 Planimetria del Lote
                        </label>
                    </div>

                    <select
                        class="form-select col-sm-3"
                        aria-label="Default select example"
                        id="objetoTramite"
                    >
                        <option selected>Seleccione Objeto del Trámite </option>
                        <option value="1">A. Plano de Urbanización</option>
                        <option value="2">B. Plano Topográfico</option>
                        <option value="3">C. Otro</option>
                    </select>
                </div>
                
                <hr />
                <div class="form-check cl-sm-12">
                    <label class="form-check-label" for="flexRadioDefault1">
                        <strong>2.6 Informacion General</strong>
                        
                    </label>
                </div>
                <hr />
                <div class="col-sm-6">
                    <div class="input-group has-validation ">
                        <label
                            class="form-check-label col-2"
                            for="flexRadioDefault1"
                        >
                            Barrio
                        </label>
                        <input
                            type="text"
                            class="form-control col-4"
                            id=""
                            placeholder="Barrio"
                            required={true}
                            defaultValue=""
                        />
                        <div class="invalid-feedback">su es requerida.</div>
                    </div>
                    <div class="input-group has-validation ">
                        <label
                            class="form-check-label col-2"
                            for="flexRadioDefault1"
                        >
                            Comuna
                        </label>
                        <input
                            type="text"
                            class="form-control col-4"
                            id=""
                            placeholder="Cumuna"
                            required={true}
                            defaultValue=""
                        />
                        <div class="invalid-feedback">su es requerida.</div>
                    </div>
                    <div class="input-group has-validation col-sm-6">
                        <label
                            class="form-check-label col-2"
                            for="flexRadioDefault1"
                        >
                            Estrato
                        </label>
                        <input
                            type="text"
                            class="form-control col-4"
                            id=""
                            placeholder="Estrato"
                            required={true}
                            defaultValue=""
                        />
                        <div class="invalid-feedback">su es requerida.</div>
                    </div>
                    <div class="input-group has-validation col-sm-6">
                        <label
                            class="form-check-label col-2"
                            for="flexRadioDefault1"
                        >
                            Manzana No.
                        </label>
                        <input
                            type="text"
                            class="form-control col-4"
                            id=""
                            placeholder="Manzana No."
                            required={true}
                            defaultValue=""
                        />
                        <div class="invalid-feedback">su es requerida.</div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="input-group has-validation col-sm-6">
                        <label
                            class="form-check-label col-2"
                            for="flexRadioDefault1"
                        >
                            Vereda
                        </label>
                        <input
                            type="text"
                            class="form-control col-4"
                            id=""
                            placeholder="Vereda"
                            required={true}
                            defaultValue=""
                        />
                        <div class="invalid-feedback">su es requerida.</div>
                    </div>
                    <div class="input-group has-validation col-sm-3">
                        <label
                            class="form-check-label col-2"
                            for="flexRadioDefault1"
                        >
                            Sector
                        </label>
                        <input
                            type="text"
                            class="form-control col-4"
                            id=""
                            placeholder="Sector"
                            required={true}
                            defaultValue=""
                        />
                        <div class="invalid-feedback">su es requerida.</div>
                    </div>
                    <div class="input-group has-validation col-sm-6">
                        <label
                            class="form-check-label col-2"
                            for="flexRadioDefault1"
                        >
                            Corregimiento
                        </label>
                        <input
                            type="text"
                            class="form-control col-4"
                            id=""
                            placeholder="Corregimiento"
                            required={true}
                            defaultValue=""
                        />
                        <div class="invalid-feedback">su es requerida.</div>
                    </div>
                    <div class="input-group has-validation col-sm-6">
                        <label
                            class="form-check-label col-2"
                            for="flexRadioDefault1"
                        >
                            Lote No.
                        </label>
                        <input
                            type="text"
                            class="form-control col-4"
                            id=""
                            placeholder="Lote No."
                            required={true}
                            defaultValue=""
                        />
                        <div class="invalid-feedback">su es requerida.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InformacionPredio;
