import React, {useState} from 'react';


function AddMember() {

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [positon, setPosition] = useState('')

    const logInput= event => {
        // console.log(event.target.value)
        setName(event.target.value);
    };
    const submit = () =>{
        console.log(name);
    };

  return (
    <div className="form-wrapper">
        <form>
            <label>
                <input type='text' placeholder='name' onChange={logInput}/>
            </label>
            <label>
                <input type='text' placeholder='email' onChange={logInput}/>
            </label>
            <label>
                <input type='text' placeholder='positon'/>
            </label>
            <button onSubmit= {() => submit()} >Submit</button>
        </form>
        <h1>{name}</h1>
    </div>
  );
}

export default AddMember;
