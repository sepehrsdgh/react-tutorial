import React, { Component } from 'react'
import Table from './Table'

class App extends Component {
  render() {
    
     state={characters :[]
     }
    

    removeCharacter = (index) => {
    { characters } = this.state
  
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

  return (
    <div className="container">
      <Table characterData={characters} removeCharacter={this.removeCharacter} />
    </div>
  )
}
}
export default App