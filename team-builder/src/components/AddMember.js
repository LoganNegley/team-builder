import React, {useState} from 'react';


function AddMember(props) {
console.log( props)
const [name, setName] = useState({name:'', email:'', position:''});
// const [email, setEmail] = useState('')
// const [positon, setPosition] = useState('')

    const handleChanges= event => {
        console.log(event.target.value);
        setName( {...name, [event.target.name]:event.target.value});
        console.log(name);
    };

    const submit = (event) =>{
        event.preventDefault();
        props.addNewMember(name);
        setName({name: '', email:'', position:''});
    };

  return (
    <div className="form-wrapper">
        <form  onSubmit= {submit} >
            <label htmlFor='name'>Your Name:</label>
                <input type='text' id='name' value={name.name} placeholder={name.name} name='name' onChange={handleChanges}/>
             <label htmlFor='email'>Email:</label>
                <input type='text' id='email' value={name.email} name='email' onChange={handleChanges} />
             <label htmlFor='position'>Position:</label>  
                <input type='text' id='position' value={name.position} name='position' onChange={handleChanges}/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  );
}

export default AddMember;
