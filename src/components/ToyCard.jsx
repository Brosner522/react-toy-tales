import React, { Component } from 'react';

class ToyCard extends Component {

  handleLikes = () => {
    let updatedToy = {
      ...this.props.toy,
      likes:this.props.toy.likes + 1
    }
    this.props.handleLikes(updatedToy)
  }

  render() {
   
    return (
      <div className="card">
        <h2>{this.props.toy.name}</h2>
        <img src={this.props.toy.image} alt={this.props.toy.name} className="toy-avatar" />
        <p>{this.props.toy.likes} Likes </p>
        <button onClick={this.handleLikes} className="like-btn">Like {'<3'}</button>
{/* why does donateToy have to be structured differently than handleLikes */}
        <button onClick={() => this.props.donateToy(this.props.toy.id)}  className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}




export default ToyCard;
