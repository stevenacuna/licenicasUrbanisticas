import React from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";

function AreaUnidades(props) {
    return (
        <div className="col-sm-6">
            <div class="form-check mx-auto">
                <label class="form-check-label" for="flexRadioDefault1">
                    1.7. Área Construida
                </label>
            </div>
            <Controller
                        name="areaConstruida"
                        rules={{ required: true }}
                        control={props.control}
                        render={({ field }) => (
                            <Select
                                {...field}
                                isMulti={false}
                                isClearable
                                backspaceRemovesValue={false}
                                escapeClearsValue={false}
                                options={[
                                {label:"Igual o mayor a 2.000 M2",value:"Igual o mayor a 2.000 M2"},
                                {label:"Menor a 2.000 M2",value:"Menor a 2.000 M2"},
                                {label:"Susceptible a alcanzar o superar los 2.000 M2",value:"Susceptible a alcanzar o superar los 2.000 M2"}
                                ]}
                                
                            />
                        )}
                    />
            
        </div>
    );
}

export default AreaUnidades;
