import React from 'react'
import Select from 'react-select'

function ModalidadSubdivision(props) {
  const handleSelectChange=(e)=>{
    console.log(e)
  }
  
  return (
    <div className="col-sm-6">
    <div class="form-check mx-auto">
        <label class="form-check-label" for="flexRadioDefault1">
            1.4 Modalidad Subdivisión
        </label>
    </div>
      <Select

      options={[
        {label:"Subdivisión Rural",value:"1"},
        {label:"Subdivisión Urbana",value:"2"},
        {label:"Reloteo",value:"3"}
      ]}

      onChange={handleSelectChange}
      />
    </div>
  )
}

export default ModalidadSubdivision