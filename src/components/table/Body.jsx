import Row from "./Row";

function Body(props) {
    return (
        <tbody class="table-group-divider">
            {props.data.map(function (value, index) {
                return (
                    <Row
                        path={props.path}
                        rowData={value}
                        indexFila={index}
                        columns={props.columns}
                        tools={props.tools}
                    />
                );
            })}
        </tbody>
    );
}

export default Body;
