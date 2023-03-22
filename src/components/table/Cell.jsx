function Cell(props) {
    let valor=props.value;
    if ( typeof valor == "boolean" ){
       if(valor===true) {
        valor="SI";
    }else {
        valor="NO";
    }
        
    }else if(typeof valor =="object"){
        valor=valor[0].name

    };
    
    if (props.index === 0) {
        return <th scope="row">{valor}</th>
    }else {
        //console.log(typeof valor);
        
        return <td>{valor}</td>;
        
    }
    
}

export default Cell;
