import React from "react";

function LinderosDimensionesAreas() {
    return (
        <div>
            <hr />
            <div class="form-check cl-sm-12">
                <label class="form-check-label" for="flexRadioDefault1">
                    <strong>4. Lideros, Dimensiones y Áreas</strong>
                </label>
            </div>
            <hr />
            <div class="col-sm-12">
                <label class="form-check-label" for="flexRadioDefault1">
                    Norte
                </label>
                <div class="input-group has-validation col-sm-6">
                    <input
                        type="text"
                        class="form-control"
                        id=""
                        placeholder="Longitud"
                        required={true}
                        defaultValue=""
                    />
                    <div class="invalid-feedback">su es requerida.</div>
                </div>
                <div class="input-group has-validation col-sm-6">
                    <input
                        type="text"
                        class="form-control"
                        id=""
                        placeholder="Colinda con"
                        required={true}
                        defaultValue=""
                    />
                    <div class="invalid-feedback">su es requerida.</div>
                </div>
            </div>

            <div class="col-sm-12">
                <label class="form-check-label" for="flexRadioDefault1">
                    Sur
                </label>
                <div class="input-group has-validation col-sm-6">
                    <input
                        type="text"
                        class="form-control"
                        id=""
                        placeholder="Longitud"
                        required={true}
                        defaultValue=""
                    />
                    <div class="invalid-feedback">su es requerida.</div>
                </div>
                <div class="input-group has-validation col-sm-6">
                    <input
                        type="text"
                        class="form-control"
                        id=""
                        placeholder="Colinda con"
                        required={true}
                        defaultValue=""
                    />
                    <div class="invalid-feedback">su es requerida.</div>
                </div>
            </div>

            <div class="col-sm-12">
                <label class="form-check-label" for="flexRadioDefault1">
                    Oriente
                </label>
                <div class="input-group has-validation col-sm-6">
                    <input
                        type="text"
                        class="form-control"
                        id=""
                        placeholder="Longitud"
                        required={true}
                        defaultValue=""
                    />
                    <div class="invalid-feedback">su es requerida.</div>
                </div>
                <div class="input-group has-validation col-sm-6">
                    <input
                        type="text"
                        class="form-control"
                        id=""
                        placeholder="Colinda con"
                        required={true}
                        defaultValue=""
                    />
                    <div class="invalid-feedback">su es requerida.</div>
                </div>
            </div>

            <div class="col-sm-12">
                <label class="form-check-label" for="flexRadioDefault1">
                    Occidente
                </label>
                <div class="input-group has-validation col-sm-6">
                    <input
                        type="text"
                        class="form-control"
                        id=""
                        placeholder="Longitud"
                        required={true}
                        defaultValue=""
                    />
                    <div class="invalid-feedback">su es requerida.</div>
                </div>
                <div class="input-group has-validation col-sm-6">
                    <input
                        type="text"
                        class="form-control"
                        id=""
                        placeholder="Colinda con"
                        required={true}
                        defaultValue=""
                    />
                    <div class="invalid-feedback">su es requerida.</div>
                </div>
            </div>
            <div class="form-check cl-sm-12">
                <label class="form-check-label" for="flexRadioDefault1">
                    área total del predio en M2
                </label>
            </div>
            <div class="col-sm-12">
                <div class="input-group has-validation col-sm-6">
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
        </div>
    );
}

export default LinderosDimensionesAreas;
