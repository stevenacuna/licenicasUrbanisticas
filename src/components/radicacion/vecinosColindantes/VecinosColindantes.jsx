import React, { useState } from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";
import VecinoColindante from "./VecinoColindante";

function VecinosColindantes(props) {
    const [numeroPredios, setNumeroPredios] = useState(0);

    const handleSelectChange = (e) => {
        console.log(e);
        setNumeroPredios(parseInt(e.value));
    };
    

    return (
        <div>
            <hr />
            <form>
                <div class="form-check cl-sm-12">
                    <label class="form-check-label" for="flexRadioDefault1">
                        <strong>3. Información de Vecinos Colindantes</strong>
                    </label>
                </div>

                <hr />
                <div class="col-sm-6">
                    <div class="form-check cl-sm-5">
                        <label class="form-check-label" for="flexRadioDefault1">
                            Numero de predios colindantes
                        </label>
                    </div>
                    <div class="input-group has-validation col-5">
                        <Controller
                            name="estratoSocioeconomico"
                            rules={{ required: true }}
                            control={props.control}
                            render={({ field }) => (
                                <Select
                                    className="react-dropdown form-check-label col-10"
                                    isClearable
                                    isSearchable={true}
                                    classNamePrefix="dropdown"
                                    options={[
                                        { label: "0", value: "0" },
                                        { label: "1", value: "1" },
                                        { label: "2", value: "2" },
                                        { label: "3", value: "3" },
                                        { label: "4", value: "4" },
                                        { label: "5", value: "5" },
                                        { label: "6", value: "6" },
                                        { label: "7", value: "7" },
                                        { label: "8", value: "8" },
                                        { label: "9", value: "9" },
                                        { label: "10", value: "10" },
                                        { label: "11", value: "11" },
                                        { label: "12", value: "12" },
                                        { label: "13", value: "13" },
                                        { label: "14", value: "14" },
                                        { label: "15", value: "15" },
                                    ]}
                                    onChange={(e) => {
                                        handleSelectChange(e);
                                        field.onChange(e);
                                    }}
                                />
                            )}
                        />
                    </div>
                </div>
                <div>
                    {numeroPredios > 0 ? <VecinoColindante {...props} numeroPredios={numeroPredios} /> : undefined}
                </div>
            </form>
        </div>
    );
}

export default VecinosColindantes;