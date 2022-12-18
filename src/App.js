import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      tasks : [
        {desc : "Breakfast ", isDone : false, id : Math.random()},
        {desc : "Gym ", isDone : true, id : Math.random()},
        {desc : "Work", isDone : false, id : Math.random()}
      ],
      textP : ''
    }
  }
  // handleAdd=()=>this.state.textP === "" ?  alert('Le champ est vide')  :this.setState({tasks : [...this.state.tasks,{desc : this.state.textP,isDone : false, id : Math.random()}]})}
  handleAdd=()=>{
    if (this.state.textP == "") {
      alert('Le champ est vide') 
    } else {
      this.setState({tasks : [...this.state.tasks,{desc : this.state.textP,isDone : false, id : Math.random()}]})
      this.setState({textP : ''})
    }
  }
  handleDelete=(a)=> this.setState({tasks : this.state.tasks.filter(el => el.id != a)})
  handleDone=(a)=> this.setState({tasks : this.state.tasks.map(el => el.id == a ? {...el,isDone : !el.isDone} : el)})
  render(){
    return(
      <div className='form'>
        <img src='/todolist.png' alt='not found'></img>

        {
          this.state.tasks.map(el=> 
            <div>
              <h1 className={el.isDone && 'done'}>{el.desc}</h1>
              {/* <h2>{el.isDone ? 'True' : 'False'}</h2> */}
              <button onClick={()=>this.handleDelete(el.id)}>Delete</button>
              <button onClick={()=> this.handleDone(el.id)}>{el.isDone ? 'Undone' : "Done"}</button>
            </div>)
        }
        <br/>
        <input value={this.state.textP} type="text" onChange={(e)=>this.setState({textP : e.target.value})}/>
        <button onClick={this.handleAdd}>Add</button>

        
      </div>
    )
  }
}

export default App;
