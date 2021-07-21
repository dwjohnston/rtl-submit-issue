import React, {useState} from "react"; 


export const Form  = (props) => {

    const {onSubmit} = props; 


    const [value, setValue] = useState(''); 

    const handleSubmit = (e) => {
        e.preventDefault(); 
        onSubmit({value});

    }

    return <form onSubmit = {handleSubmit}> 
        <label> name<input type ="text" required onChange = {(e) => setValue(e.target.value)}/></label>
        <input type ="submit"/>
        </form>

}