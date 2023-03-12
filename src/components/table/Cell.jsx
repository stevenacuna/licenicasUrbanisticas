function Cell(props) {
    let valor=props.value;
    if ( typeof valor == "boolean" ){
       if(valor===true) {
        valor="SI";
    }else {
        valor="NO";
    }
        
    }
    
    if (props.index === 0) {
        return <th scope="row">{valor}</th>
    }else {
        // console.log(valor.toString());
        
        return <td>{valor}</td>;
        
    }
    
}

export default Cell;
