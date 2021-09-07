import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo} from '../../actions'
import './style.css'

function Todo() {
    const [inputText, setInputText] = useState("")
    const list = useSelector((state) => state.todoReducer.list)
    const dispatch = useDispatch()
    
    console.log(list)
    return (
        <div className="todo">
            <img  className="background-img" src="./background.jpg" />
        <div className="todo-container">
            <div className="input-container">
                <input value={inputText} type="text" onChange={(e) => setInputText(e.target.value)} className="text-input" placeholder="Add items to list"/>
                <button onClick={() =>{dispatch(addTodo(inputText)); setInputText("")} } className="input-btn">+</button>
            </div>



         
        </div>
        <div className="item-container">
        {
            list.map(({data, id}) => (
                <div className="todoitem" key={id}>
                    <p>{data} </p>
                    <button onClick={() => dispatch(deleteTodo(id))}>Done</button>
                </div>
                
            ))
        }
        </div>
      

        </div>
    )
}

export default Todo ;
