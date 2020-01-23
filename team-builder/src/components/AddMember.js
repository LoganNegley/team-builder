import React, {useState} from 'react';


function AddMember(props) {
console.log( props)
const [name, setName] = useState({name:'', email:''});
// const [email, setEmail] = useState('')
// const [positon, setPosition] = useState('')

    const handleChanges= event => {
        console.log(event.target.value);
        setName( {name: event.target.value});
    };

    const submit = (event) =>{
        event.preventDefault();
        props.addNewMember(name);
        setName({name: '', email:''});
    };

  return (
    <div className="form-wrapper">
        <form  onSubmit= {submit} >
            <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' placeholder={name.name} onChange={handleChanges}/>

             <label htmlFor='email'>Email</label>
                <input type='text' id='email' value={name.email} onChange={handleChanges} />

            {/* <label htmlFor='position'>
                <input type='text' id='position' placeholder='positon'/>
            </label>  */}
            <button type='submit'>Submit</button>
        </form>
    </div>
  );
}

export default AddMember;
