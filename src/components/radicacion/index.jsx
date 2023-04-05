import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import ConstruccionInicial from "./ConstruccionInicial";
import { useNavigate } from "react-router-dom";
import InformacionPredio from "./InformacionPredio";
import VecinosColindantes from "./VecinosColindantes";
import LinderosDimensionesAreas from "./LinderosDimensionesAreas";
import TitulartesProfesionalesResponsables from "./TitulartesProfesionalesResponsables";
import Select from "react-select";
import { dbTramite } from "./tablaRadicacion";
import UrbanizacionInicial from "./UrbanizacionInicial";



function Radicacion(props) {
    let navigate = useNavigate();
    const tramite = dbTramite.map((element) => ({
        label: element.name,
        value: element.id,
    }));

    const [construcionInicial, setConstruccionInicial] = useState(false);
    const [urbanizacionInicial, setUrbanizacionInicial] = useState(false);
    const [tipoTramite, setTipoTramite] = useState([]);
    const [objetoTramite, setObjetoTramite] = useState([]);
    const [objeto, setObjeto] = useState([]);
    const [objetSelect, setObjetSelect] = useState("");
    


    
    const handleSelectChange1 = (e) => {
        
        setTipoTramite((()=>{
            const result=e.map((element)=>(element.value));
            console.log(result);
            return result;
        }));
        
        
        setObjeto((()=>{
            const result=e.map((element)=>(element.value));
            const result2=result.map((element1)=>{
                return dbTramite[element1-1].objetoTramite.map((element2) => ({
                            label: element2.name+"-"+dbTramite[element1-1].name,
                            value: element1+element2.id,
                        }))
            })
            
            const result3=[];
            result2.forEach((element)=>{
                element.forEach(element2=>{
                    result3.push(element2);
                })
                
            });

            console.log(result3);
            return result3;
            
        })
           
        );
        
        setObjetoTramite([]);
       
    };
    const handleSelectChange2 = (e) => {
        console.log(e);
        
        setObjetoTramite(e.map((element)=>(element.value)));
        const result=e.map((element)=>(element.value));
        console.log(result);
        if (result.includes("11")){
            setUrbanizacionInicial(true);
        }else{
            setUrbanizacionInicial(false);
        }
        if (result.includes("41")){
            setConstruccionInicial(true);
        }else {
            setConstruccionInicial(false);

        }

    };
    
    return (
        <form className="mx-5">
            <h3>RADICACION</h3>

            <div className="row g-3">
                <div className="col-sm-6">
                    <div class="form-check mx-auto">
                        <label class="form-check-label" for="flexRadioDefault1">
                            1.Tipo de Tramite:{tipoTramite}
                        </label>
                    </div>
                    <div id="k1">
                        
                    
                    <Select
                        isMulti
                        options={tramite}
                        onChange={handleSelectChange1}
                    />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div class="form-check mx-auto">
                        <label class="form-check-label" for="flexRadioDefault1">
                            1.2 Objeto del Tramite: {objetoTramite}
                        </label>
                    </div>
                    <Select
                        isMulti
                        isClearable={true}
                        backspaceRemovesValue={false}
                        escapeClearsValue={false}
                        defaultValue={objetSelect}
                        name="objetoTramite2"
                        options={objeto}
                        onChange={handleSelectChange2}
                        
                    />
                   
                </div>

                <div />
                {/* <button
                    class="w-100 btn btn-primary btn-lg"
                    type="button"
                    onClick={() => {
                        onClickSubmit();
                    }}
                >
                    Traer Requisitos
                </button> */}
                {urbanizacionInicial ? <UrbanizacionInicial/>: undefined}
                {construcionInicial ? <ConstruccionInicial /> : undefined}
                <hr />

                <InformacionPredio />
                <VecinosColindantes />

                <LinderosDimensionesAreas />
                <TitulartesProfesionalesResponsables />
            </div>
        </form>
    );
}

export default Radicacion;
