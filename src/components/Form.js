import React from 'react';

function Form(){
    return(
        <div>
            <h3>Subscribe to receive the latest news about our offers:</h3>
            <form>
                <label>Name</label>
                <span>: </span>
                <input type='text' className='input-name' placeholder='Your name'></input>
                <br></br>
                <label>Email</label>
                <span>: </span>
                <input type='text' className='input-email' placeholder='Your e-mail address'></input>
                <br></br>
                <label> Phone</label>
                <span>: </span>
                <input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" className='input-phone' placeholder='Your phone number'></input>
                <br></br>
                <input type='submit' className='submit-button' value='Submit'/>
            </form>
        </div>
    )
}

export default Form;