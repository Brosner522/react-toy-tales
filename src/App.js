import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


class App extends React.Component{

  state = {
    display: false,
    toys: []
  }
  insertNewToy = (newToy) => {
    this.setState({
      toys: [...this.state.toys, newToy]
    })
  }
  
  // deleteToy = (toyObj) => {
    //   let newToys = [] 
    //   newToys = this.state.toys.filter(toy => toy.id !== toyObj.id)
    //   this.setState({
      //     toys: newToys
      //   })
      // }
      
      handleClick = () => {
        let newBoolean = !this.state.display
        this.setState({
          display: newBoolean
        })
      }


      handleLikes = (toy) => {
        let toyId = toy.id
        const reqMethod = {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(toy)
        }
        fetch(`http://localhost:3001/toys/${toyId}`, reqMethod)
        .then(res => res.json())
        .then(updatedToy => {
          const updatedToys = [...this.state.toys]
          this.setState({
            toys: updatedToys.map(toy => {
              return toy.id === updatedToy.id ? {...toy, ...updatedToy} : toy
            })
          })
        })
      }

      donateToy = (toyId) => {
        const reqMethod = {
          method: "DELETE",
        }
        fetch(`http://localhost:3001/toys/${toyId}`, reqMethod)
        this.setState({
          toys: this.state.toys.filter(toy => toy.id !== toyId)
        })
      }
      
      // Fetch toys from backend once app component loads.
      componentDidMount() {
        fetch(`http://localhost:3001/toys`)
        .then((res) => res.json())
        .then((toysArray) => {
          this.setState({
            toys: toysArray
          })
        })
      }
      
      render(){
        
    return (
      <>
        <Header/>
        { this.state.display ? <ToyForm insertNewToy={this.insertNewToy} /> : null}

        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer donateToy={this.donateToy} handleLikes={this.handleLikes} /*addLikes={this.addLikes}*/ /*deleteToy={this.deleteToy}*/ allToys={this.state.toys}/>
      </>
    );
  }

}

export default App;
