import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InformacionPredio from "./InformacionPredio";
import VecinosColindantes from "./vecinosColindantes/VecinosColindantes";
import LinderosDimensionesAreas from "./LinderosDimensionesAreas";
import Titulares from "./Titulares";
import Select from "react-select";
import { dbTramite } from "./tablaRadicacion";
import ModalidadUrbanismo from "./ModalidadUrbanismo";
import ModalidadConstruccion from "./ModalidadConstuccion";
import ModalidadSubdivision from "./ModalidadSubdivision";
import UsosProyecto from "./UsosProyecto";
import AreaUnidades from "./AreaUnidades";
import TipoVivienda from "./TipoVivienda";
import BienInteresCultural from "./BienInteresCultural";
import ProfesionalesResponsables from "./ProfesionalesResponsables";
import { useForm, Controller } from "react-hook-form";

const defaultValues = {
    departamento: "Cundinamarca",
    entidadResponsable: {
        label: "OFICINA DE PLANEACION",
        value: "OFICINA DE PLANEACION",
    },
    municipio: "Municipio Xxxxxxx",
};

function Radicacion(props) {
    const {
        register,
        handleSubmit,
        control,
        reset,
        setValue,
        formState: { errors },
    } = useForm({ defaultValues });
    let navigate = useNavigate();

    const tramite = dbTramite.map((element) => ({
        label: element.name,
        value: element.id,
    }));

    const [modalidadUrbanismo, setModalidasUrbanismo] = useState(false);
    const [modalidadSubdivision, setModalidadSubdivision] = useState(false);
    const [modalidadConstruccion, setModalidadConstruccion] = useState(false);
    const [usosProyecto, setUsosProyecto] = useState(false);
    const [areaUnidades, setAreaUnidades] = useState(false);
    const [tipoVivienda, setTipoVivienda] = useState(false);
    const [bienInteresCultural, setBienInteresCultural] = useState(false);
    const [informacionPredio, setInformacionPredio] = useState(false);
    const [vecinosColindantes, setVecinosColindantes] = useState(false);
    const [linderosDimensionesAreas, setLinderosDimensionesAreas] =
        useState(false);
    const [titulares, setTitulares] = useState(false);
    const [profesionalesResponsables, setProfesionalesResponsables] =
        useState(false);

    const [tipoTramite, setTipoTramite] = useState([]);
    const [objetoTramite, setObjetoTramite] = useState([]);
    const [objeto, setObjeto] = useState([]);

    const handleSelectChange1 = (e) => {
        setValue("objetoTramite", null);
        setModalidasUrbanismo(false);
        setModalidadSubdivision(false);
        setModalidadConstruccion(false);
        setValue("modalidadConstruccion", null);
        setAreaUnidades(false);
        setBienInteresCultural(false);
        setInformacionPredio(false);
        setLinderosDimensionesAreas(false);
        setProfesionalesResponsables(false);
        setTipoVivienda(false);
        setTitulares(false);
        setUsosProyecto(false);
        setValue("usosTramite", null);
        setVecinosColindantes(false);

        setTipoTramite(() => {
            const result = e.map((element) => element.label);

            return result;
        });

        setObjeto(() => {
            const result = e.map((element) => element.value);
            const result2 = result.map((element1) => {
                return dbTramite[element1 - 1].objetoTramite.map(
                    (element2) => ({
                        label:
                            element2.name + "-" + dbTramite[element1 - 1].name,
                        value: element1 + element2.id,
                    })
                );
            });

            const result3 = [];
            result2.forEach((element) => {
                element.forEach((element2) => {
                    result3.push(element2);
                });
            });

            return result3;
        });

        setObjetoTramite([]);
    };
    const handleSelectChange2 = (e) => {
        setObjetoTramite(e.map((element) => element.value));
        const result = e.map((element) => element.value);

        if (result.includes("11") || result.includes("12")) {
            setModalidasUrbanismo(true);
        } else {
            setModalidasUrbanismo(false);
        }
        if (
            result.includes("21") ||
            result.includes("22") ||
            result.includes("23")
        ) {
        } else {
        }
        if (
            result.includes("31") ||
            result.includes("22") ||
            result.includes("33")
        ) {
            setModalidadSubdivision(true);
        } else {
            setModalidadSubdivision(false);
        }
        if (result.includes("41") || result.includes("42")) {
            setModalidadConstruccion(true);
            setAreaUnidades(true);
        } else {
            setModalidadConstruccion(false);
            setAreaUnidades(false);
        }
        if (
            result.includes("51") ||
            result.includes("52") ||
            result.includes("53")
        ) {
        } else {
        }
        if (
            result.includes("61") ||
            result.includes("62") ||
            result.includes("63") ||
            result.includes("64") ||
            result.includes("65") ||
            result.includes("66") ||
            result.includes("67")
        ) {
        } else {
        }

        if (
            result.includes("11") ||
            result.includes("12") ||
            result.includes("21") ||
            result.includes("22") ||
            result.includes("31") ||
            result.includes("32") ||
            result.includes("41") ||
            result.includes("42") ||
            result.includes("51")
        ) {
            setUsosProyecto(true);
            //setTipoVivienda(true);
            setBienInteresCultural(true);
        } else {
            setUsosProyecto(false);
            setValue("usosTramite", null);
            //setTipoVivienda(false);
            setBienInteresCultural(false);
        }
    };

    const onSubmit = (formData) => {
        console.log(formData);
        //console.log(formData.objetoTramite.map((element)=>element.label));
    };

    return (
        <form className="mx-5" onSubmit={handleSubmit(onSubmit)}>
            <h3>FORMULARIO UNICO NACIONAL</h3>

            <div className="row g-3">
                <div className="col-sm-12">
                    <div class="form-check mx-auto">
                        <label class="form-check-label" for="flexRadioDefault1">
                            0.1 Oficina Reponsable
                        </label>
                    </div>
                    <div>
                        {/* <Select {...register("entidadResponsable")} defaultValue={{label:"Oficina de Planeacion"}} options={[{label:"OFICINA DE PLANEACION",value:"OFICINA DE PLANEACION"}]} /> */}
                        <Controller
                            name="entidadResponsable"
                            rules={{ required: false }}
                            control={control}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    isClearable={false}
                                    isSearchable={false}
                                    className="react-dropdown"
                                    classNamePrefix="dropdown"
                                    defaultValue={{
                                        label: "OFICINA DE PLANEACION",
                                        value: "OFICINA DE PLANEACION"
                                    }}
                                    options={[
                                        {
                                            label: "OFICINA DE PLANEACION",
                                            value: "OFICINA DE PLANEACION",
                                        },
                                    ]}
                                />
                            )}
                        />
                    </div>
                </div>
                <div className="col-sm-12">
                    <div class="form-check mx-auto">
                        <label class="form-check-label" for="flexRadioDefault1">
                            0.2 No. Radicación
                        </label>
                    </div>
                    <div>
                        <Controller
                            name="numeroExpediente"
                            control={control}
                            rules={{ required: false }}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    options={[
                                        {
                                            label: "XXX-XX-XX-XXXX",
                                            value: "eeee",
                                        },
                                    ]}
                                />
                            )}
                        />
                    </div>
                </div>
                <div className="row">
                    <div class="form-check mx-auto col-4">
                        <label class="form-check-label" for="flexRadioDefault1">
                            0.3 Departmento
                        </label>
                        <Controller
                            name="departamento"
                            rules={{ required: false }}
                            control={control}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    isClearable={false}
                                    isSearchable={false}
                                    className="react-dropdown"
                                    classNamePrefix="dropdown"
                                    value={{
                                        label: "Cundinamarca",
                                        value: "25"
                                    }}
                                    options={[
                                        {
                                            label: "Cundinamarca",
                                            value: "25",
                                        },
                                    ]}

                                    //onChange={(e)=>console.log(e)}
                                />
                            )}
                        />
                    </div>
                    <div class="form-check mx-auto col-4">
                        <label class="form-check-label" for="flexRadioDefault1">
                            Municipio
                        </label>
                        <Controller
                            name="municipio"
                            rules={{ required: false }}
                            control={control}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    isClearable={false}
                                    isSearchable={false}
                                    className="react-dropdown"
                                    classNamePrefix="dropdown"
                                    value={{
                                        label: "XXX-XX-XX-XXXX",
                                        value: "00001"
                                    }}
                                    options={[
                                        {
                                            label: "XXX-XX-XX-XXXX",
                                            value: "00001",
                                        },
                                    ]}
                                    //onChange={(e)=>console.log(e)}
                                />
                            )}
                        />
                    </div>
                    <div class="form-check mx-auto col-4">
                        <label class="form-check-label" for="flexRadioDefault1">
                            Fecha
                        </label>
                        <Controller
                            name="fecha"
                            rules={{ required: false }}
                            control={control}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    options={[
                                        {
                                            label: "05/04/2023",
                                            value: "05/04/2023",
                                        },
                                    ]}
                                    //onChange={(e)=>console.log(e)}
                                />
                            )}
                        />
                    </div>
                </div>

                <div className="col-sm-6">
                    <div class="form-check mx-auto">
                        <label class="form-check-label" for="flexRadioDefault1">
                            1.Tipo de Tramite:{tipoTramite}
                        </label>
                    </div>
                    <div>
                        <Controller
                            name="tipoTramite"
                            rules={{ required: true }}
                            control={control}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    isMulti
                                    isClearable
                                    isSearchable={true}
                                    className="react-dropdown"
                                    classNamePrefix="dropdown"
                                    options={tramite}
                                    onChange={(e) => {
                                        handleSelectChange1(e);
                                        field.onChange(e);
                                    }}
                                />
                            )}
                        />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div class="form-check mx-auto">
                        <label class="form-check-label" for="flexRadioDefault1">
                            1.2 Objeto del Tramite: {objetoTramite}
                        </label>
                    </div>
                    <Controller
                        name="objetoTramite"
                        rules={{ required: true }}
                        control={control}
                        render={({ field }) => (
                            <Select
                                {...field}
                                isMulti
                                isClearable
                                backspaceRemovesValue={false}
                                escapeClearsValue={false}
                                defaultValue={objeto[0]}
                                clearValue={true}
                                options={objeto}
                                onChange={(e) => {
                                    handleSelectChange2(e);
                                    field.onChange(e);
                                }}
                            />
                        )}
                    />
                </div>

                <div />

                {modalidadUrbanismo ? (
                    <ModalidadUrbanismo register={register} control={control} />
                ) : undefined}
                {modalidadSubdivision ? (
                    <ModalidadSubdivision
                        register={register}
                        control={control}
                    />
                ) : undefined}
                {modalidadConstruccion ? (
                    <ModalidadConstruccion
                        register={register}
                        control={control}
                    />
                ) : undefined}
                {usosProyecto ? (
                    <UsosProyecto
                        register={register}
                        control={control}
                        setTipoVivienda={setTipoVivienda}
                    />
                ) : undefined}
                {areaUnidades ? (
                    <AreaUnidades register={register} control={control} />
                ) : undefined}
                {tipoVivienda ? (
                    <TipoVivienda register={register} control={control} />
                ) : undefined}
                {bienInteresCultural ? (
                    <BienInteresCultural
                        setInformacionPredio={setInformacionPredio}
                        register={register}
                        control={control}
                    />
                ) : undefined}
                {informacionPredio ? (
                    <InformacionPredio
                        setVecinosColindantes={setVecinosColindantes}
                        register={register}
                        control={control}
                    />
                ) : undefined}
                {vecinosColindantes ? (
                    <VecinosColindantes register={register} control={control} />
                ) : undefined}
                {linderosDimensionesAreas ? (
                    <LinderosDimensionesAreas
                        register={register}
                        control={control}
                    />
                ) : undefined}
                {titulares ? (
                    <Titulares register={register} control={control} />
                ) : undefined}
                {profesionalesResponsables ? (
                    <ProfesionalesResponsables
                        register={register}
                        control={control}
                    />
                ) : undefined}
                <button
                    type="submit"
                    className="w-100 btn btn-lg btn-primary my-3 submit"
                >
                    Crear Expediente
                </button>
            </div>
        </form>
    );
}

export default Radicacion;
