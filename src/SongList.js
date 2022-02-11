import React from "react";

const SongList  = ({songs, onClickSelect}) => {
        const song = songs.map((song)=>{
                return (
                        <div className="ui list" key={song.title}>
                            <div className="item" style={{display:'flex', justifyContent: 'space-around'}}>
                                <div className="header">{song.title}</div>
                                <a className="" onClick={() => onClickSelect(song)}>Select</a>
                            </div>
                            <div className="ui fitted divider"></div>
                        </div>
                )
             })
    return(
        <div>
            {song}
        </div>
    )
}

export default SongList;