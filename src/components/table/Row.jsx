import Cell from "./Cell";
import Tools from "./Tools";

function Row(props){
    return <tr>
        {props.columns.map(function(value,index){
            return <Cell value={props.rowData[value]} index={index}/>
        })}
        <Tools path={props.path}
            tools={props.tools}
            id={props.rowData[props.columns[0]]}
        />
    </tr>
}
export default Row;