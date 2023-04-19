import React from "react";

function VecinoColindante(props) {
    

    return (
        <div className="col-sm-12">
            { Array.from({length:props.numeroPredios}).map((_,index) => {
                const element=index+1
                const textDireccionPredio =
                    "Dirección Predio Vecino " + element;
                const textDirNotPredio =
                    "Direción Notificación Predio " + element;
                return (
                    <div class="col-sm-6">
                        <div class="form-check cl-sm-5">
                            <label
                                class="form-check-label"
                                for="flexRadioDefault1"
                            >
                                Dirección Predio Vecino {element}
                            </label>
                        </div>
                        <div class="input-group has-validation col-5">
                            <input
                                {...props.register(
                                    "dirPredioVecino.vecino_" + element+".dirPredio",{required:true}
                                )}
                                type="text"
                                class="form-control"
                                id="vecino1"
                                placeholder={textDireccionPredio}
                                required={true}
                                defaultValue=""
                            />
                            <div class="invalid-feedback">su es requerida.</div>
                        </div>
                        <div class="form-check cl-sm-5">
                            <label
                                class="form-check-label"
                                for="flexRadioDefault1"
                            >
                                Dirección notificación Predio {element}
                            </label>
                        </div>
                        <div class="input-group has-validation col-sm-5">
                            <input
                                {...props.register(
                                    "dirPredioVecino.vecino_" + element+".dirNotiPredio",{required:true}
                                )}
                                type="text"
                                class="form-control"
                                id=""
                                placeholder={textDirNotPredio}
                                required={true}
                                defaultValue=""
                            />
                            <div class="invalid-feedback">su es requerida.</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default VecinoColindante;
