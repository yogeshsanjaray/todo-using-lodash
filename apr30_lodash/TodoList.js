import {Component} from 'react'
import {Map} from "react-lodash"
const _ = require("lodash");

class TodoList extends Component{
constructor(props){
	super(props)
	this.state={
		todo:[]
	}	
	console.log(this.props)
}
render(arr){
	let mappedArr=_.map(this.props.todo)
    console.log(mappedArr)
		return(
			<div>
			    <div>
                    <br/>
                {
                    <Map collection={mappedArr} iteratee={val =><div key={val}><strong>Todo:</strong> {val.todo}  <strong>Status:</strong>{val.status}</div>} />
                }
				</div>
			</div>)
	
}}
export default TodoList;