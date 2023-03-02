import { useState } from "react";

function HookEjemplo(props) {
    const [count, setCount] = useState(0);
    return (
        <div className="">
            <p className="">Has hecho click {count} veces </p>
            <button
                className="btn btn-success "
                onClick={() => setCount(count + 1)}
            >
                Has click
            </button>
        </div>
    );
}

export default HookEjemplo;
