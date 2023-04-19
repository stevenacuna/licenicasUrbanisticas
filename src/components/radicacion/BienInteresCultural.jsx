import React from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";

function BienInteresCultural(props) {
    const handleSelectChange = (e) => {
        console.log(e);
        props.setInformacionPredio(true);
    };

    return (
        <div className="col-sm-6">
            <div class="form-check mx-auto">
                <label class="form-check-label" for="flexRadioDefault1">
                    1.9. Bien de Interés Cultural
                </label>
            </div>
            
            <Controller
                name="bienInteresCultural"
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
                            { label: "SI", value: "Si" },
                            { label: "NO", value: "No" },
                        ]}
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

export default BienInteresCultural;
