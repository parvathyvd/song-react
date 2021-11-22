import React from "react";

const SongDetail = ({selected}) => {
    return(
        <div className="eight wide column">
            {selected.title}
            <br/>
            {selected.length}
        </div>
    )
}

export default SongDetail;