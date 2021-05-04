import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {
  // console.log(props.deleteToy)
  return(
    <div id="toy-collection">
      {/* Render the collection of ToyCards */}
      {props.allToys.map(toy => <ToyCard donateToy={props.donateToy} handleLikes={props.handleLikes} key={toy.id} toy={toy}/> )}

    

    </div>
  );
}

export default ToyContainer;
