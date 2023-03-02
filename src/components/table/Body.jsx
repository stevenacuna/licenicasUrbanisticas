import Row from "./Row";

function Body(props) {
    return (
        <tbody class="table-group-divider">
            {props.data.map(function (value, index) {
                return (
                    <Row
                        path={props.path}
                        rowData={value}
                        columns={props.columns}
                        tools={props.tools}
                    />
                );
            })}
            {/* <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Larry </td>
                <td>Bery</td>
                <td>@twitter</td>
            </tr> */}
        </tbody>
    );
}

export default Body;
