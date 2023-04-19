import React from 'react'
import Select from 'react-select'

function ModalidadUrbanismo(props) {
  const handleSelectChange=(e)=>{
    console.log(e)
  }
  
  return (
    <div className="col-sm-6">
    <div class="form-check mx-auto">
        <label class="form-check-label" for="flexRadioDefault1">
            1.3 Modalidad Licencia de Urbanización
        </label>
    </div>
      <Select

      options={[
        {label:"Desarrollo",value:"1"},
        {label:"Saneamiento",value:"2"},
        {label:"Reurbanización",value:"3"}
      ]}

      onChange={handleSelectChange}
      />
    </div>
  )
}

export default ModalidadUrbanismo