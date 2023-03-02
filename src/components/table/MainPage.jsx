import { useState } from "react";
import CreateButton from "./CreateButton";
import SearchBar from "./SearchBar";
import Table from "./Table";

function MainPage(props) {
    const [dataForTable, setDataForTable] = useState(props.data);
    return (
        <div>
            <div className="d-flex text-center mx-auto w-100">
                <CreateButton path={props.path} />
                <SearchBar
                    data={props.data}
                    setDataForTable={setDataForTable}
                    columns={props.columns}
                />
            </div>
            <Table
                path={props.path}
                data={dataForTable}
                name={props.name}
                columns={props.columns}
                columnsAlias={props.columnsAlias}
                tools={props.tools}
            />
        </div>
    );
}
export default MainPage;
