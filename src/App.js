import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todo: '',
      list: []
    }
  }

  updateInput(key, value) {
    this.setState({
      [key]: value
    })
  }

  handleClick = () => {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.todo.slice()
    }

    const list = [...this.state.list]
    
    list.push(newItem)

    this.setState({
      list,
      todo: ''
    })
  }

  handleChange = (event) => {
    this.setState({todo: event.target.value})
  }

  deleteItem(id) {
    const list = [...this.state.list]

    const updatedList = list.filter(item => item.id !== id)

    this.setState({list: updatedList})
  }

  render() {
    return (
      <div className="todo-list">
        <h1 className={"app-title"}>Todo List</h1>
        <input 
          type="text"
          placeholder="Add Todo..."
          value={this.state.todo}
          onChange={e => this.updateInput("todo", e.target.value)}
          className="input"
          
        />
        <button className="add-btn" onClick={this.handleClick} >Add</button>
        <br />
        <ul>
          {this.state.list.map( item => {
            return (
            <li className="todo-item" key={item.id}>
              {item.value}
              <button className="btn" onClick={() => this.deleteItem(item.id)}>X</button>
            </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default App;
