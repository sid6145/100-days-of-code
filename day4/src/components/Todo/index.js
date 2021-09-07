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
        <div className="todo-container">
            <div className="input-container">
                <input value={inputText} type="text" onChange={(e) => setInputText(e.target.value)} className="text-input" placeholder="Add items to list"/>
                <button onClick={() =>{dispatch(addTodo(inputText)); setInputText("")} } className="input-btn">+</button>
            </div>



         
        </div>
        {
            list.map(({data, id}) => (
                <div style={{background:'red'}} key={id}>
                    <h3 style={{color:'white'}}>{data}</h3>
                    <button onClick={() => dispatch(deleteTodo(id))}>done</button>
                </div>
                
            ))
        }
        
      

        </div>
    )
}

export default Todo ;
