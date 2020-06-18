import React,{useState} from 'react';

const TodoForm = ({addItem}) => {

    const [content,setContent] = useState('');

    const handelSubmit = (e) => {
        e.preventDefault();
        addItem(content);
        setContent('')
        
    }
    
    return (
        <form onSubmit = {e => handelSubmit(e)} style = {
            {
                textAlign : "center"
            }
        }>
            <input value={content} onChange = {e => setContent (e.target.value)} type="text" name="content" required/>
            <button type="submit">Add</button>
        </form>
    );
};

export default TodoForm;