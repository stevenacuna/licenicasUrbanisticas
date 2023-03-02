import { useState } from "react";

function SearchBar(props) {
    const [searchTex, setSearchText] = useState("");
    
    let onChangeSearchTextField = function (e) {
        let searchTex2 = e.target.value;
        setSearchText(searchTex2);
        let results = Search(props.data, props.columns, searchTex2);
        props.setDataForTable(results);
    };
    return (
        <div className="d-flex text-center me-auto">
            <input
                type={"text"}
                value={searchTex}
                className="form-control ms-3"
                onChange={onChangeSearchTextField}
            />
            <input
                type={"button"}
                name=""
                value={"Buscar"}
                className="btn btn-success ms-3"
            />
        </div>
    );
}

function Search(data, columns, search) {
    let results = [];
    let included = false;
    data.forEach(function (value, index) {
        included = false;
        columns.forEach(function (column, indexColumn) {
            if (
                value[column]
                    .toString()
                    .toLowerCase()
                    .indexOf(search.toString().toLowerCase()) >= 0 &&
                !included
            ) {
                results.push(value);
                included = true;
            }
        });
    });
    return results;
}
export default SearchBar;
