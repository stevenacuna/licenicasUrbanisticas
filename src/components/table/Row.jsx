import Cell from "./Cell";
import Tools from "./Tools";

function Row(props){
    return <tr className="width: 20;">
        {props.columns.map(function(value,index){
            
            return <Cell value={props.rowData[value]} indexFila={props.indexFila} index={index}/>
        })}
        <Tools path={props.path}
            tools={props.tools}
            id={props.rowData[props.columns[0]]}
        />
    </tr>
}
export default Row;