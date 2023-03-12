function Header(props){
    let toolHeader = undefined;
    if (props.tools && props.tools.length > 0){
        toolHeader=<th scope="col">Tool</th>;
    }
    return(
        
            <thead className="">
                    <tr>
                         {
                            props.columnsAlias.map(function(value,index){
                                return (
                                    <th scope="col">{value}</th>
                                )
                            })
                        } 
                        
                        {toolHeader}
                    </tr>
                </thead>
        
    );
}
export default Header;