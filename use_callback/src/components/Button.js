import React from "react";

function Button(props) {
    return ( 
        <div>
            <button className="error" onClick={props.clickhandler}>{props.children}</button>
        </div>
     );
}

export default React.memo(Button);