import React from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";

function InformacionPredio(props) {
    const handleSelectChange = (e) => {
        
        if (
            e.value == "1" ||
            e.value == "2" ||
            e.value == "3" ||
            e.value == "4" ||
            e.value == "5" ||
            e.value == "6"
        ) {
            props.setVecinosColindantes(true);
        } else {
            props.setVecinosColindantes(false);
        }
    };
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
                        {...props.register("direccionPredio")}
                        type="text"
                        class="form-control"
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
                            {...props.register("matriculaInmobiliaria")}
                            type="text"
                            class="form-control"
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
                            {...props.register("cedulaCatastral")}
                            type="text"
                            class="form-control"
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
                    <Controller
                        name="clasificacionSuelo"
                        rules={{ required: true }}
                        control={props.control}
                        render={({ field }) => (
                            <Select
                                {...field}
                                isMulti={false}
                                isClearable
                                backspaceRemovesValue={false}
                                escapeClearsValue={false}
                                options={[{label:"Urbano",value:"Urbano"},
                                {label:"Rural",value:"Rural"},
                                {label:"De Expansión Urbana",value:"De Expansión Urbana"}
                                ]}
                                onChange={(e) => {
                                    handleSelectChange(e);
                                    field.onChange(e);
                                }}
                            />
                        )}
                    />
                    
                </div>
                <div className="col-sm-6">
                    <div class="form-check mx-auto">
                        <label class="form-check-label" for="flexRadioDefault1">
                            2.5 Planimetria del Lote
                        </label>
                    </div>
                    <Controller
                        name="planimetriaLote"
                        rules={{ required: false }}
                        control={props.control}
                        render={({ field }) => (
                            <Select
                                {...field}
                                isMulti={false}
                                isClearable
                                backspaceRemovesValue={false}
                                escapeClearsValue={false}
                                options={[{label:"Plano de Urbanización",value:"Plano de Urbanización"},
                                {label:"Plano Topográfico",value:"Plano Topográfico"},
                                {label:"Otro",value:"Otro"}
                                ]}
                                onChange={(e) => {
                                    handleSelectChange(e);
                                    field.onChange(e);
                                }}
                            />
                        )}
                    />
                    
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
                            {...props.register("barrio")}
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
                            {...props.register("comuna")}
                            type="text"
                            class="form-control col-4"
                            placeholder="Cumuna"
                            required={false}
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

                        <Controller
                            name="estratoSocioeconomico"
                            rules={{ required: true }}
                            control={props.control}
                            render={({ field }) => (
                                <Select
                                    {...field }
                                    className="react-dropdown form-check-label col-10"
                                    isClearable
                                    isSearchable={false}
                                    classNamePrefix="dropdown"
                                    options={[
                                        { label: "1", value: "1" },
                                        { label: "2", value: "2" },
                                        { label: "3", value: "3" },
                                        { label: "4", value: "4" },
                                        { label: "5", value: "5" },
                                        { label: "6", value: "6" },
                                    ]}
                                    onChange={(e) => {
                                        handleSelectChange(e);
                                        field.onChange(e);
                                    }}
                                />
                            )}
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
                            {...props.register("manzanaNumero")}
                            type="text"
                            class="form-control col-4"
                            id=""
                            placeholder="Manzana No."
                            required={false}
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
                            {...props.register("vereda")}
                            type="text"
                            class="form-control col-4"
                            id=""
                            placeholder="Vereda"
                            required={true}
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
                            {...props.register("sector")}
                            type="text"
                            class="form-control col-4"
                            placeholder="Sector"
                            required={false}
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
                            {...props.register("corregimiento")}
                            type="text"
                            class="form-control col-4"
                            placeholder="Corregimiento"
                            required={false}
                        />
                        <div class="invalid-feedback">es requerida.</div>
                    </div>
                    <div class="input-group has-validation col-sm-6">
                        <label
                            class="form-check-label col-2"
                            for="flexRadioDefault1"
                        >
                            Lote No.
                        </label>
                        <input
                            {...props.register("loteNumero")}
                            type="text"
                            class="form-control col-4"
                            placeholder="Lote No."
                            required={false}
                        />
                        <div class="invalid-feedback">su es requerida.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InformacionPredio;
