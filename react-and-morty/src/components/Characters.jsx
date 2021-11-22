import React from "react";
import { useState } from "react";
import ReactCardFlip from 'react-card-flip';


const Characters = ({characters}) => {
    const [char,setChar] = useState(null)
    console.log("check this: ");
    console.log(characters);

    const [isFlipped, setIsFlipped] = useState(false);


    return ( 
        <div className="char-container">
                {characters.results.map(char =>
                <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">    
                        <div className="char-card" key={char.id} onClick={()=> setIsFlipped(!isFlipped)}>
                            <div><img src={char.image}/></div>
                            <div className="char-details">
                                <p>Name: {char.name}</p>
                                <p>Species: {char.species}</p>
                            </div>
                        </div>
                        <div>
                            hello
                        </div>
                </ReactCardFlip>
                )}
        </div>
    )
}
 
export default Characters;
