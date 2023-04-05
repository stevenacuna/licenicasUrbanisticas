import React from 'react'

function VecinosColindantes() {
  return (
    <div>
        <hr/>
                <div class="form-check cl-sm-12">
                    <label class="form-check-label" for="flexRadioDefault1">
                        <strong>3. Información de Vecinos Colindantes</strong>
                    </label>
                </div>
                
                <hr/>
                <div class="col-sm-6">
                    
                    <div class="form-check cl-sm-5">
                    <label class="form-check-label" for="flexRadioDefault1">
                    Dirección Predio Vecino 1
                    </label>
                    </div>
                    <div class="input-group has-validation col-5">
                            <input
                            type="text"
                            class="form-control"
                            id=""
                            placeholder="Dirección Predio Vecino 1."
                            required={true}
                            defaultValue=""
                        />
                        <div class="invalid-feedback">su es requerida.</div>
                    </div>
                    <div class="form-check cl-sm-5">
                    <label class="form-check-label" for="flexRadioDefault1">
                    Dirección notificación Predio 1
                    </label>
                    </div>
                    <div class="input-group has-validation col-sm-5">
                        <input
                            type="text"
                            class="form-control"
                            id=""
                            placeholder="Direción Notificación Predio 1."
                            required={true}
                            defaultValue=""
                        />
                        <div class="invalid-feedback">su es requerida.</div>
                    </div>
                </div>
    </div>
  )
}

export default VecinosColindantes