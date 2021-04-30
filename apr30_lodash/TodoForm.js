import {Component} from 'react'

class LodashTodoForm extends Component{
constructor(props){
	super(props)
	
	console.log(props)
}

render(){
		return(
			<div>
                <h1>TodoForm</h1>
                <form onSubmit={this.props.addTodo}>
                    <input type="text" name="task" placeholder="Todo"/>
                    <input type="text" name="status" placeholder="Status"/>
                    <button>Submit</button>
                </form>
			</div>)
	}

}
export default LodashTodoForm