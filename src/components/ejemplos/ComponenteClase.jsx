class ComponenteClase extends React.Component{
    render(){
        return(
            <div>
                <h2>Este es un componente tipo CLASE</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ad, voluptatem consequuntur dolor dolore eos facere est vero ut. Officiis enim reprehenderit quia corrupti impedit voluptatum libero cumque veniam est!

                </p>
                <p> el mensaje es: {this.props.mns}</p>

            </div>
        )
    }
}
export default ComponenteClase;