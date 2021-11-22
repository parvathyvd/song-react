import React, {useState} from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";
import './App.css';

const songs = [
    {
        title: 'Ekantha chandrike',
        length : 2.5
    },
    {
        title: 'Hello how are you',
        length : 2.9    
    },
    {
        title: 'Manasil madiyile',
        length : 3.45
    }
];


const App = () => {

    const [selected, setSelected] = useState(songs[0]);
    console.log('app', selected.title);

    return(
        <div className="pt-5">
            <div className="ui grid">
                <div className="eight wide column">
                    <SongList 
                        songs={songs} 
                        onClickSelect = {setSelected}
                        />
                </div>
                <div className="eight wide column">
                    <SongDetail 
                    selected={selected}/>
                </div>
            </div>
        </div>
    )
}

export default App;