import Body from "./Body";
import Header from "./Header";

function Table(props) {
    return (
        <div>
            <table class="table">
                <caption>{props.name}</caption>
                <Header columnsAlias={props.columnsAlias} tools={props.tools} />
                <Body
                    path={props.path}
                    data={props.data}
                    columns={props.columns}
                    tools={props.tools}
                />
            </table>
        </div>
    );
}
export default Table;
