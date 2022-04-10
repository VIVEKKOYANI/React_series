import React from "react";

function Header(props) {
    return ( 
        <div>
            {props.name}
        </div>
     );
}

export default React.memo(Header);