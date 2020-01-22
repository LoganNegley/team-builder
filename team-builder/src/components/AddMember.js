import React, {useState} from 'react';


function AddMember() {

const [input, setInput] = useState('')

    const logInput= event => {
        setInput(event.target.value);
        // console.log(event.target.value)
    }

  return (
    <div className="form-wrapper">
        <form>
            <label>
                <input type='text' onChange={logInput}/>
            </label>
            <label>
                <input type='text'/>
            </label>
            <label>
                <input type='text'/>
            </label>
        </form>
        <h1>{input}</h1>
    </div>
  );
}

export default AddMember;
