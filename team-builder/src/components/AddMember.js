import React, {useState} from 'react';


function AddMember() {

const [name, setName] = useState('')
// const [email, setEmail] = useState('')
// const [positon, setPosition] = useState('')

    const handleChanges= event => {
        console.log(event.target.value);
        setName(event.target.value);
    };
    const submit = () =>{
        console.log(name);
    };

  return (
    <div className="form-wrapper">
        <form>
            <label htmlFor='name'>
                <input type='text' id='name' placeholder='name' onChange={handleChanges}/>
            </label>
            {/* <label htmlFor='email'>
                <input type='text' id='email' placeholder='email' onChange={logInput}/>
            </label>
            <label htmlFor='position'>
                <input type='text' id='position' placeholder='positon'/>
            </label> */}
            <button onSubmit= {() => submit()} >Submit</button>
        </form>
    </div>
  );
}

export default AddMember;
