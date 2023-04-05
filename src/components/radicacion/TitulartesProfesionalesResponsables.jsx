import React from 'react'

function TitulartesProfesionalesResponsables() {
  return (
    <div>
        <hr />
                <div class="form-check cl-sm-12">
                    <label class="form-check-label" for="flexRadioDefault1">
                        <strong>
                            5. Tutulares y Profesionales Responsables
                        </strong>
                    </label>
                </div>
                <div class="form-check cl-sm-12">
                    <label class="form-check-label" for="flexRadioDefault1">
                        <strong>5.1 Tutulares de la licecnia</strong>
                    </label>
                </div>

                <div class="col-sm-8">
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
                <div class="col-sm-4">
                    <div class="input-group has-validation my-4">
                        <label
                            class="form-check-label mx-5"
                            for="flexRadioDefault1"
                        >
                            Firma
                        </label>
                        <input
                            type="checkbox"
                            id=""
                            placeholder=""
                            required={true}
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
                <hr />
                <div class="form-check cl-sm-12">
                    <label class="form-check-label" for="flexRadioDefault1">
                        <strong>5.2 Profesionales Responsables</strong>
                    </label>
                </div>
                <hr />
                <div class="form-check cl-sm-12">
                    <label class="form-check-label" for="flexRadioDefault1">
                        <strong>
                            URBANIZADOR/ PARCELADOR (Sin requisitos de
                            experiencia minima)
                        </strong>
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
                <hr />
                <div class="form-check cl-sm-12">
                    <label class="form-check-label" for="flexRadioDefault1">
                        <strong>
                            DIRECTOR DE LA CONSTRUCCION (Experiencia minima 3
                            años)
                        </strong>
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
                <hr />
                <div class="form-check cl-sm-12">
                    <label class="form-check-label" for="flexRadioDefault1">
                        <strong>
                            ARQUITECTO PROYECTISTA (Sin requisitos de
                            experiencia minima)
                        </strong>
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
                <hr />
                <div class="form-check cl-sm-12">
                    <label class="form-check-label" for="flexRadioDefault1">
                        <strong>
                            INGENIERO CIVIL DISEÑADOR ESTRUCTURAL (experiencia
                            minima 5 año o posgrado)
                        </strong>
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
                <hr />
                <div class="form-check cl-sm-12">
                    <label class="form-check-label" for="flexRadioDefault1">
                        <strong>
                            DISEÑADOR DE ELEMENTOS NO ESTRUCTURALES (Experiencia
                            minima 3 años o Posgrado)
                        </strong>
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
                <hr />
                <div class="form-check cl-sm-12">
                    <label class="form-check-label" for="flexRadioDefault1">
                        <strong>
                            INGENIERO CIVIL GEOTECNISTA (Experiencia minima 5
                            años o Posgrado)
                        </strong>
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
                <hr />
                <div class="form-check cl-sm-12">
                    <label class="form-check-label" for="flexRadioDefault1">
                        <strong>INGENIERO TOPOGRAFO Y/O TOPOGRAFO</strong>
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
                <hr />
                <div class="form-check cl-sm-12">
                    <label class="form-check-label" for="flexRadioDefault1">
                        <strong>
                            REVISOR INDEPENDIENTE DE LOS DISEÑOS ESTRUCTURALES
                            (Experiencia minima 5 años o Posgrado)
                        </strong>
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
                <hr />
                <div class="form-check cl-sm-12">
                    <label class="form-check-label" for="flexRadioDefault1">
                        <strong>OTROS PROFESIONALES ESPECIALISTAS</strong>
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
                        <strong>OTROS PROFESIONALES ESPECIALISTAS</strong>
                    </label>
                </div>
                <hr />
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
                <hr />
                <div class="form-check cl-sm-12">
                    <label class="form-check-label" for="flexRadioDefault1">
                        <strong>5.3 Responsable de la Solicitud</strong>
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
  )
}

export default TitulartesProfesionalesResponsables