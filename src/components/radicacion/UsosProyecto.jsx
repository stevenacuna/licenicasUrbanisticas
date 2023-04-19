import React from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";

function UsosProyecto(props) {
    const handleSelectChange = (e) => {
        
        const result=e.map((element)=>element.value);
        console.log(result);
        if(result.includes('Vivienda')){
            props.setTipoVivienda(true);
        }else{
            props.setTipoVivienda(false);
        }
        //props.setInformacionPredio(true);
    };

    return (
        <div className="col-sm-6">
            <div class="form-check mx-auto">
                <label class="form-check-label" for="flexRadioDefault1">
                    1.6. Usos
                </label>
            </div>

            <Controller
                        name="usosTramite"
                        rules={{ required: true }}
                        control={props.control}
                        render={({ field }) => (
                            <Select
                                {...field}
                                isMulti
                                isClearable
                                backspaceRemovesValue={false}
                                escapeClearsValue={false}
                                options={[{label:"Vivienda",value:"Vivienda"},
                                {label:"Comercio y/o servicios",value:"Comercio y/o servicios"},
                                {label:"Institucional / Dotacional",value:"Institucional / Dotacional"},
                                {label:"Industrial",value:"Industrial"},
                                {label:"Otros Usos",value:"Otros Usos"}]}
                                onChange={(e) => {
                                    handleSelectChange(e);
                                    field.onChange(e);
                                }}
                            />
                        )}
                    />
        </div>
    );
}

export default UsosProyecto;
