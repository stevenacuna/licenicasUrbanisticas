import React from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";

function TipoVivienda(props) {
    return (
        <div className="col-sm-6">
            <div class="form-check mx-auto">
                <label class="form-check-label" for="flexRadioDefault1">
                    1.8. Tipo de Vivienda
                </label>
            </div>

            <Controller
                name="tipoVivienda"
                rules={{ required: true }}
                control={props.control}
                render={({ field }) => (
                    <Select
                        {...field}
                        isMulti
                        isClearable
                        backspaceRemovesValue={false}
                        escapeClearsValue={false}
                        options={[
                            { label: "VIP", value: "VIP" },
                            { label: "VIS", value: "VIS" },
                            { label: "NO VIS", value: "NO VIS" },
                        ]}
                        onChange={(e) => {
                            field.onChange(e);
                        }}
                    />
                )}
            />
        </div>
    );
}

export default TipoVivienda;
