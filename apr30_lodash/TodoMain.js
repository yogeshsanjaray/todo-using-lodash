import {Component} from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
const _ = require("lodash")

class TodoMain extends Component{
	constructor(props){
		super(props)
		
		this.state={
			todo:[]
		}
	}
	addTodo=(e)=>{
		e.preventDefault()
		let ob={}
		_.set(ob, "todo", e.target.task.value);
		_.set(ob, "status", e.target.status.value);
		this.setState({
			todo:this.state.todo.concat(ob)
		})
		console.log(this.state)
		localStorage.setItem("newtodo", this.state.todo)
	}
	render(){
		return(
			<div>
			<TodoForm addTodo={this.addTodo} />
			<TodoList todo={this.state.todo}/>

			</div>
			)
	}
}
export default TodoMain;