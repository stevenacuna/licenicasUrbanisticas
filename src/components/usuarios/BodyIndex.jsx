import MainPage from "../table/MainPage";

function BodyIndex(props){
    return (
        <div className="mx-5">
            <h3>Usuarios</h3>
            
            <MainPage
                data={props.data}
                path={props.path}
                name={props.name}
                columns={props.columns}
                columnsAlias={props.columnsAlias}
                tools={props.tools}
            />
            
        </div>
    );
}

export default BodyIndex;