import React from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";

function ModalidadConstruccion(props) {
    return (
        <div>
            
        
        <form>
            <div>Construcción Inicial</div>

            <div className="row g-3">
                <div className="col-sm-12">
                    <div class="form-check mx-auto">
                        <label class="form-check-label" for="flexRadioDefault1">
                            1.5 Modalidad Licencia de Construcción
                        </label>
                    </div>
                    <Controller
                        name="modalidadConstruccion"
                        rules={{ required: true }}
                        control={props.control}
                        render={({ field }) => (
                            <Select
                                {...field}
                                isMulti
                                isClearable
                                backspaceRemovesValue={false}
                                escapeClearsValue={false}
                                options={[{label:"Obra Nueva",value:"Obra Nueva"},
                                {label:"Ampliación",value:"Ampliación"},
                                {label:"Adecuación",value:"Adecuación"},
                                {label:"Modicicación",value:"Modicicación"},
                                {label:"Restauración",value:"Restauración"},
                                {label:"Reforzamiento Estructural",value:"Reforzamiento Estructural"},
                                {label:"Demolición Total",value:"Demolición Total"},
                                {label:"Reconstrucción",value:"Reconstrucción"},
                                {label:"Cerramiento",value:"Cerramiento"}]}
                                onChange={(e) => {
                                    field.onChange(e);
                                }}
                            />
                        )}
                    />
                    {/* <select
                        class="form-select col-sm-12"
                        aria-label="Default select example"
                    >
                        <option selected>Selecione Tipo de Trámite </option>
                        <option value="1">A. Obra Nueva</option>
                        <option value="2">B. Ampliación</option>
                        <option value="3">C. Adecuación</option>
                        <option value="4">D. Modicicación</option>
                        <option value="5">E. Restauración</option>
                        <option value="6">F. Reforzamiento Estructural</option>
                        <option value="7">G.1 Demolición Total</option>
                        <option value="8">G.2 Demolición Parcial</option>
                        <option value="9">H. Reconstrucción</option>
                        <option value="10">I. Cerramiento</option>
                    </select> */}
                </div>
                
                
                
                
                
                           
                    
                
                
            </div>

            <div />
        </form>
        </div>
    );
}

export default ModalidadConstruccion;
