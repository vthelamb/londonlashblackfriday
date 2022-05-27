import React from 'react';

function Form(){
    return(
        <div>
            <form>
                <label>Name: </label>
                <input type='text' className='input-name' placeholder='Your name...'></input>

                <label> Email: </label>
                <input type='text' className='input-email' placeholder='Your e-mail address...'></input>

                <label> Telephone: </label>
                <input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" className='input-phone' placeholder='Your phone number...'></input>
                <br></br>
                <input type='submit' className='submit-button' value='Submit'/>
            </form>
        </div>
    )
}

export default Form;