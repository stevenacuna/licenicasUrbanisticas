import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import ConstruccionInicial from "./ConstruccionInicial";
import { useNavigate } from "react-router-dom";

function Radicacion(props) {
    let navigate = useNavigate();

    const [construcionInicial, setConstruccionInicial] = useState(false);

    const onClickSubmit = () => {
        let tipoTramite = document.getElementById("tipoTramite").value;
        let objetoTramite = document.getElementById("objetoTramite").value;

        console.log(tipoTramite);
        console.log(objetoTramite);
        if (tipoTramite == "4" && objetoTramite == "1") {
            setConstruccionInicial(true);
        }
    };

    return (
        <form>
            <h3>RADICACION</h3>

            <div className="row g-3">
                <div className="col-sm-6">
                    <div class="form-check mx-auto">
                        <label class="form-check-label" for="flexRadioDefault1">
                            1.Tipo de Tramite
                        </label>
                    </div>

                    <select
                        class="form-select col-sm-6"
                        aria-label="Default select example"
                        id="tipoTramite"
                    >
                        <option selected>Selecione Tipo de Trámite </option>
                        <option value="1">A. Urbanización.</option>
                        <option value="2">B. Parcelación.</option>
                        <option value="3">C. Subdivisión.</option>
                        <option value="4">D. Construcción.</option>
                        <option value="5">
                            E. Reconocimineto de Edificaciones
                        </option>
                    </select>
                </div>
                <div className="col-sm-6">
                    <div class="form-check mx-auto">
                        <label class="form-check-label" for="flexRadioDefault1">
                            1.2 Objeto del Tramite
                        </label>
                    </div>

                    <select
                        class="form-select col-sm-6"
                        aria-label="Default select example"
                        id="objetoTramite"
                    >
                        <option selected>Selecione Objeto del Trámite </option>
                        <option value="1">Inicial</option>
                        <option value="2">Modificacion Licencia Vigente</option>
                        <option value="3">Revalidación</option>
                        <option value="4">Otras Actuaciones</option>
                    </select>
                </div>

                <div />
                <button
                    class="w-100 btn btn-primary btn-lg"
                    type="button"
                    onClick={() => {
                        onClickSubmit();
                    }}
                >
                    Traer Requisitos
                </button>
                {construcionInicial ? <ConstruccionInicial /> : undefined}

                <div className="col-sm-12">
                    <div class="form-check mx-auto">
                        <label class="form-check-label" for="flexRadioDefault1">
                            2.Información Sobre el Predio
                        </label>
                    </div>
                </div>
                <div class="col-12">
                    <label for="contrasena2" class="form-label">
                        2.1 Dirección o Nomenclatura
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
                <div class="col-6">
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
                <div class="col-6">
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
                <div class="form-check cl-sm-12">
                    <label class="form-check-label" for="flexRadioDefault1">
                        2.6 Informacion General
                    </label>
                </div>
                <div class="col-sm-6">
                    <div class="input-group has-validation col-sm-3">
                        <input
                            type="text"
                            class="form-control"
                            id=""
                            placeholder="Barrio"
                            required={true}
                            defaultValue=""
                        />
                        <div class="invalid-feedback">su es requerida.</div>
                    </div>
                    <div class="input-group has-validation col-sm-3">
                        <input
                            type="text"
                            class="form-control"
                            id=""
                            placeholder="Cumuna"
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
                            placeholder="Estrato"
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
                            placeholder="Manzana No."
                            required={true}
                            defaultValue=""
                        />
                        <div class="invalid-feedback">su es requerida.</div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="input-group has-validation col-sm-6">
                        <input
                            type="text"
                            class="form-control"
                            id=""
                            placeholder="Vereda"
                            required={true}
                            defaultValue=""
                        />
                        <div class="invalid-feedback">su es requerida.</div>
                    </div>
                    <div class="input-group has-validation col-sm-3">
                        <input
                            type="text"
                            class="form-control"
                            id=""
                            placeholder="Sector"
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
                            placeholder="Corregimiento"
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
                            placeholder="Lote No."
                            required={true}
                            defaultValue=""
                        />
                        <div class="invalid-feedback">su es requerida.</div>
                    </div>
                </div>
                <div class="form-check cl-sm-12">
                    <label class="form-check-label" for="flexRadioDefault1">
                        3. Información de Vecinos Colindantes
                    </label>
                </div>
                <div class="col-sm-6">
                    <div class="input-group has-validation col-sm-6">
                        <input
                            type="text"
                            class="form-control"
                            id=""
                            placeholder="Direción Predio Vecino 1."
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
                            placeholder="Direción Notificación Predio 1."
                            required={true}
                            defaultValue=""
                        />
                        <div class="invalid-feedback">su es requerida.</div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="input-group has-validation">
                        <input
                            type="text"
                            class="form-control"
                            id=""
                            placeholder="Direción Predio Vecino 2."
                            required={true}
                            defaultValue=""
                        />
                        <div class="invalid-feedback">su es requerida.</div>
                    </div>
                    <div class="input-group has-validation">
                        <input
                            type="text"
                            class="form-control"
                            id=""
                            placeholder="Direción Notificación Predio 2."
                            required={true}
                            defaultValue=""
                        />
                        <div class="invalid-feedback">su es requerida.</div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="input-group has-validation col-sm-6">
                        <input
                            type="text"
                            class="form-control"
                            id=""
                            placeholder="Direción Predio Vecino 3."
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
                            placeholder="Direción Notificación Predio 3."
                            required={true}
                            defaultValue=""
                        />
                        <div class="invalid-feedback">su es requerida.</div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="input-group has-validation">
                        <input
                            type="text"
                            class="form-control"
                            id=""
                            placeholder="Direción Predio Vecino 4."
                            required={true}
                            defaultValue=""
                        />
                        <div class="invalid-feedback">su es requerida.</div>
                    </div>
                    <div class="input-group has-validation">
                        <input
                            type="text"
                            class="form-control"
                            id=""
                            placeholder="Direción Notificación Predio 4."
                            required={true}
                            defaultValue=""
                        />
                        <div class="invalid-feedback">su es requerida.</div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="input-group has-validation col-sm-6">
                        <input
                            type="text"
                            class="form-control"
                            id=""
                            placeholder="Direción Predio Vecino 5."
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
                            placeholder="Direción Notificación Predio 5."
                            required={true}
                            defaultValue=""
                        />
                        <div class="invalid-feedback">su es requerida.</div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="input-group has-validation">
                        <input
                            type="text"
                            class="form-control"
                            id=""
                            placeholder="Direción Predio Vecino 6."
                            required={true}
                            defaultValue=""
                        />
                        <div class="invalid-feedback">su es requerida.</div>
                    </div>
                    <div class="input-group has-validation">
                        <input
                            type="text"
                            class="form-control"
                            id=""
                            placeholder="Direción Notificación Predio 6."
                            required={true}
                            defaultValue=""
                        />
                        <div class="invalid-feedback">su es requerida.</div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="input-group has-validation col-sm-6">
                        <input
                            type="text"
                            class="form-control"
                            id=""
                            placeholder="Direción Predio Vecino 7."
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
                            placeholder="Direción Notificación Predio 7."
                            required={true}
                            defaultValue=""
                        />
                        <div class="invalid-feedback">su es requerida.</div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="input-group has-validation">
                        <input
                            type="text"
                            class="form-control"
                            id=""
                            placeholder="Direción Predio Vecino 8."
                            required={true}
                            defaultValue=""
                        />
                        <div class="invalid-feedback">su es requerida.</div>
                    </div>
                    <div class="input-group has-validation">
                        <input
                            type="text"
                            class="form-control"
                            id=""
                            placeholder="Direción Notificación Predio 8."
                            required={true}
                            defaultValue=""
                        />
                        <div class="invalid-feedback">su es requerida.</div>
                    </div>
                </div>
                <div class="form-check cl-sm-12">
                    <label class="form-check-label" for="flexRadioDefault1">
                        4. Lideros, Dimensiones y Áreas
                    </label>
                </div>
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
                            placeholder="Colinda con"
                            required={true}
                            defaultValue=""
                        />
                        <div class="invalid-feedback">su es requerida.</div>
                    </div>
                </div>
                <div class="form-check cl-sm-12">
                    <label class="form-check-label" for="flexRadioDefault1">
                        5. Tutulares y Profesionales Responsables
                    </label>
                    <label class="form-check-label" for="flexRadioDefault1">
                        5.1 Tutulares de la licencia
                    </label>
                </div>
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Nombre
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Firma
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-3">
                    <label class="form-check-label" for="flexRadioDefault1">
                        C.C. O NIT
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-3">
                    <label class="form-check-label" for="flexRadioDefault1">
                        TELEFONO/ CELULAR
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        CORREO ELECTRONICO
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Nombre
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Firma
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-3">
                    <label class="form-check-label" for="flexRadioDefault1">
                        C.C. O NIT
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-3">
                    <label class="form-check-label" for="flexRadioDefault1">
                        TELEFONO/ CELULAR
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        CORREO ELECTRONICO
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Nombre
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Firma
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-3">
                    <label class="form-check-label" for="flexRadioDefault1">
                        C.C. O NIT
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-3">
                    <label class="form-check-label" for="flexRadioDefault1">
                        TELEFONO/ CELULAR
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        CORREO ELECTRONICO
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Nombre
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Firma
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-3">
                    <label class="form-check-label" for="flexRadioDefault1">
                        C.C. O NIT
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-3">
                    <label class="form-check-label" for="flexRadioDefault1">
                        TELEFONO/ CELULAR
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        CORREO ELECTRONICO
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-12">
                    <label for="assetUser" class="form-label">
                        Acepta(n) ser notificado(s) de las actuaciones
                        relacionadas con el trámite de licenciamiento a través
                        del correo electrónico diligenciado y/o de los medios
                        electrónicos fijados por la autoridad que adelanta el
                        trámite:
                    </label>
                    <div>
                        <input
                            type="radio"
                            defaultValue={true}
                            name="assetUser"
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
                <div class="form-check cl-sm-12">
                    <label class="form-check-label" for="flexRadioDefault1">
                        5.2 Profesionales Responsables
                    </label>
                </div>
                <div class="form-check cl-sm-12">
                    <label class="form-check-label" for="flexRadioDefault1">
                        URBANIZADOR/ PARCELADOR (Sin requisitos de experiencia
                        minima)
                    </label>
                </div>
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Nombre
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Firma
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-4">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Cedula
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-4">
                    <label class="form-check-label" for="flexRadioDefault1">
                        No. Matrícula Profesional
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-4">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Fecha Expedicion Matrícula Profesional
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Correo Electronico
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Teléfono
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="form-check cl-sm-12">
                    <label class="form-check-label" for="flexRadioDefault1">
                        DIRECTOR DE LA CONSTRUCCION (Experiencia minima 3 años)
                    </label>
                </div>
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Nombre
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Firma
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-4">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Cedula
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-4">
                    <label class="form-check-label" for="flexRadioDefault1">
                        No. Matrícula Profesional
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-4">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Fecha Expedicion Matrícula Profesional
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Correo Electronico
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Teléfono
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="form-check cl-sm-12">
                    <label class="form-check-label" for="flexRadioDefault1">
                        ARQUITECTO PROYECTISTA (Sin requisitos de experiencia
                        minima)
                    </label>
                </div>
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Nombre
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Firma
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-4">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Cedula
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-4">
                    <label class="form-check-label" for="flexRadioDefault1">
                        No. Matrícula Profesional
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-4">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Fecha Expedicion Matrícula Profesional
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Correo Electronico
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Teléfono
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="form-check cl-sm-12">
                    <label class="form-check-label" for="flexRadioDefault1">
                       INGENIERO CIVIL DISEÑADOR ESTRUCTURAL (experiencia
                        minima 5 año o posgrado)
                    </label>
                </div>
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Nombre
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Firma
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-4">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Cedula
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-4">
                    <label class="form-check-label" for="flexRadioDefault1">
                        No. Matrícula Profesional
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-4">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Fecha Expedicion Matrícula Profesional
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Correo Electronico
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Teléfono
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="form-check cl-sm-12">
                    <label class="form-check-label" for="flexRadioDefault1">
                        DISEÑADOR DE ELEMENTOS NO ESTRUCTURALES  (Experiencia
                        minima 3 años o Posgrado)
                    </label>
                </div>
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Nombre
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Firma
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-4">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Cedula
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-4">
                    <label class="form-check-label" for="flexRadioDefault1">
                        No. Matrícula Profesional
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-4">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Fecha Expedicion Matrícula Profesional
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Correo Electronico
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Teléfono
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="form-check cl-sm-12">
                    <label class="form-check-label" for="flexRadioDefault1">
                        UINGENIERO CIVIL GEOTECNISTA (Experiencia
                        minima 5 años o Posgrado)
                    </label>
                </div>
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Nombre
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Firma
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-4">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Cedula
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-4">
                    <label class="form-check-label" for="flexRadioDefault1">
                        No. Matrícula Profesional
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-4">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Fecha Expedicion Matrícula Profesional
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Correo Electronico
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Teléfono
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="form-check cl-sm-12">
                    <label class="form-check-label" for="flexRadioDefault1">
                        INGENIERO TOPOGRAFO Y/O TOPOGRAFO 
                    </label>
                </div>
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Nombre
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Firma
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-4">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Cedula
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-4">
                    <label class="form-check-label" for="flexRadioDefault1">
                        No. Matrícula Profesional
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-4">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Fecha Expedicion Matrícula Profesional
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Correo Electronico
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Teléfono
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="form-check cl-sm-12">
                    <label class="form-check-label" for="flexRadioDefault1">
                        REVISOR INDEPENDIENTE DE LOS DISEÑOS ESTRUCTURALES (Experiencia
                        minima 5 años o Posgrado)
                    </label>
                </div>
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Nombre
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Firma
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-4">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Cedula
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-4">
                    <label class="form-check-label" for="flexRadioDefault1">
                        No. Matrícula Profesional
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-4">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Fecha Expedicion Matrícula Profesional
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Correo Electronico
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Teléfono
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="form-check cl-sm-12">
                    <label class="form-check-label" for="flexRadioDefault1">
                        OTROS PROFESIONALES ESPECIALISTAS 
                    </label>
                </div>
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Nombre
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Firma
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-4">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Cedula
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-4">
                    <label class="form-check-label" for="flexRadioDefault1">
                        No. Matrícula Profesional
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-4">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Fecha Expedicion Matrícula Profesional
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Correo Electronico
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Teléfono
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="form-check cl-sm-12">
                    <label class="form-check-label" for="flexRadioDefault1">
                        OTROS PROFESIONALES ESPECIALISTAS 
                    </label>
                </div>
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Nombre
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Firma
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-4">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Cedula
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-4">
                    <label class="form-check-label" for="flexRadioDefault1">
                        No. Matrícula Profesional
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-4">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Fecha Expedicion Matrícula Profesional
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Correo Electronico
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Teléfono
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="form-check cl-sm-12">
                    <label class="form-check-label" for="flexRadioDefault1">
                        5.3 Responsable de la Solicitud 
                    </label>
                </div>
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Nombre
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Firma
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        C.C. O NIT
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        TELEFONO/ CELULAR
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        DIRECCION PARA CORRESPONDENCIA
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-6">
                    <label class="form-check-label" for="flexRadioDefault1">
                        CORREO ELECTRONICO
                    </label>

                    <div class="input-group has-validation ">
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
                <div class="col-sm-12">
                    <label for="assetUser" class="form-label">
                        Acepta(n) ser notificado(s) de las actuaciones
                        relacionadas con el trámite de licenciamiento a través
                        del correo electrónico diligenciado y/o de los medios
                        electrónicos fijados por la autoridad que adelanta el
                        trámite:
                    </label>
                    <div>
                        <input
                            type="radio"
                            defaultValue={true}
                            name="assetUser"
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
        </form>
    );
}

export default Radicacion;
