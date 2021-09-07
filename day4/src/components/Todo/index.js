import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, deleteTodo} from '../../actions'
import './style.css'

function Todo() {
    const [inputText, setInputText] = useState("")
    const dispatch = useDispatch()
    return (
        <div className="todo-container">
            <div className="input-container">
                <input value={inputText} type="text" onChange={(e) => setInputText(e.target.value)} className="text-input" placeholder="Add items to list"/>
                <button onClick={() =>dispatch(addTodo(inputText)) } className="input-btn">+</button>
            </div>
        </div>
    )
}

export default Todo ;
