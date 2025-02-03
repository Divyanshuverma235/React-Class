import { useState } from "react";
import CancelRequest from "../cancelRequest";

const SetShow = ({ varx }) => {
    return varx ? <CancelRequest /> : null;
};

function ReqCancel() {
    const [show, setShow] = useState(false);

    return (
        <>
            <button onClick={() => setShow(!show)}>
                {show ? "Hide user" : "Show user"}
            </button>
            <SetShow varx={show} />
        </>
    );
}

export default ReqCancel;
