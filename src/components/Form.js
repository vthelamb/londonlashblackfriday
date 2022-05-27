import React from 'react';

function Form(){
    return(
        <div>
            <form>
                <label>Name: </label>
                <input type='text' className='input-name' placeholder='Your name...'></input>

                <label>  Email: </label>
                <input type='text' className='input-email' placeholder='Your e-mail address...'></input>
                
                <input type='submit' value='Submit'/>
            </form>
        </div>
    )
}

export default Form;