function ComponenteFunction(props) {
    return (
        <div>
            <h3>Este es un componente de TIPO FUNCION</h3>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Obcaecati, ratione eius qui eaque tempore libero alias dolore
                placeat natus optio deleniti, expedita vitae cum est eos maxime
                at accusantium labore?
            </p>
            <br />
            <p>El mensaje es: {props.mns} </p>
        </div>
    );
}

export default ComponenteFunction;