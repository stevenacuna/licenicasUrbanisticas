import React from "react";

function ConstruccionInicial(props) {
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

                    <select
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
                        <option value="9">H. reconstrucción</option>
                        <option value="10">I. Cerramiento</option>
                    </select>
                </div>
                
                <div className="col-sm-6">
                    <div class="form-check mx-auto">
                        <label class="form-check-label" for="flexRadioDefault1">
                            1.6. Usos
                        </label>
                    </div>

                    <select
                        class="form-select col-sm-6"
                        aria-label="Default select example"
                    >
                        <option selected>Selecione Tipo de Trámite </option>
                        <option value="1">Vivienda</option>
                        <option value="2">Comercio y/o Servicios</option>
                        <option value="3">Institucional</option>
                        <option value="4">industria</option>
                        <option value="5">Otros</option>
                        
                    </select>
                </div>
                <div className="col-sm-6">
                    <div class="form-check mx-auto">
                        <label class="form-check-label" for="flexRadioDefault1">
                            1.7. Área Construida
                        </label>
                    </div>

                    <select
                        class="form-select col-sm-6"
                        aria-label="Default select example"
                    >
                        <option selected>Selecione Objeto del Trámite </option>
                        <option value="1">Igual o mayor a 2.000 M2</option>
                        <option value="2">Menor a 2.000 M2</option>
                        <option value="3">Susceptible a alcanzar o superar los 2.000 M"</option>
                        
                    </select>
                    
                </div>
                <div className="col-sm-6">
                    <div class="form-check mx-auto">
                        <label class="form-check-label" for="flexRadioDefault1">
                            1.8. Tipo de Vivienda
                        </label>
                    </div>

                    <select
                        class="form-select col-sm-6"
                        aria-label="Default select example"
                    >
                        <option selected>Selecione Objeto del Trámite </option>
                        <option value="1">VIP</option>
                        <option value="2">VIS</option>
                        <option value="3">No. VIS</option>
                        
                    </select>
                    
                </div>
                <div className="col-sm-6">
                    <div class="form-check mx-auto">
                        <label class="form-check-label" for="flexRadioDefault1">
                            1.9. Bien de Interés Cultural
                        </label>
                    </div>

                    <select
                        class="form-select col-sm-6"
                        aria-label="Default select example"
                    >
                        <option selected>Selecione Objeto del Trámite </option>
                        <option value="1">SI</option>
                        <option value="2">NO</option>
                        
                        
                    </select>
                    
                </div>
                <div className="col-sm-12">
                    <div class="form-check mx-auto">
                        <label class="form-check-label" for="flexRadioDefault1">
                            1.10 Reglamento de Construcción Sostenible 
                        </label>
                    </div>
                                        
                </div>
                <div className="col-sm-6">
                    <div class="form-check mx-auto">
                        <label class="form-check-label" for="flexRadioDefault1">
                            1.10.1 Declaración de medidas de Construcción Sostenible 
                        </label>
                    </div>

                    <select
                        class="form-select col-sm-6"
                        aria-label="Default select example"
                    >
                        <option selected>Selecione Objeto del Trámite </option>
                        <option value="1">Medidas Pasivas</option>
                        <option value="2">Medidas Activas</option>
                        <option value="3">Medidas Activas y Pasivas</option>
                        
                        
                    </select>
                    
                </div>
                <div className="col-sm-6">
                    <div class="form-check mx-auto">
                        <label class="form-check-label" for="flexRadioDefault1">
                            1.10.2 Zonificación Climatica 
                        </label>
                    </div>

                    <select
                        class="form-select col-sm-6"
                        aria-label="Default select example"
                    >
                        <option selected>Selecione Objeto del Trámite </option>
                        <option value="1">Frio</option>
                        <option value="2">Templado</option>
                        <option value="3">Calido Seco</option>
                        <option value="4">Calido Humedo</option>
                        
                        
                    </select>
                    
                </div>
            </div>

            <div />
        </form>
        </div>
    );
}

export default ConstruccionInicial;
