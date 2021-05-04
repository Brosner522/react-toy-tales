import React, { Component } from 'react';

class ToyForm extends Component {

state = {
  name: "",
  image: ""
}

onNameChange = (value) => {
  this.setState({
    name: value
  }) 
}
 
onImgChange = (value) => {
  this.setState({
    image: value
  })
}

addNewToy = (e) => {
  e.preventDefault()
  let data = {
    name: this.state.name,
    image: this.state.image,
    likes: 0
  }

  fetch('http://localhost:3001/toys', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  })
      .then((res) => res.json())
      .then((toyObj) => {this.props.insertNewToy(toyObj)})
}



  render() {
    return (
      <div className="container">
        <form onSubmit={(e) => this.addNewToy(e) } className="add-toy-form">
          <h3>Create a toy!</h3>
          <input onChange={(e) => this.onNameChange(e.target.value) } type="text" name="name" placeholder="Enter a toy's name..." className="input-text"/>
          <br/>
          <input onChange={(e) => this.onImgChange(e.target.value)} type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text"/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
