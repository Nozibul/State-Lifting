import { useState } from 'react'

const initialState = { 
    name: '',
    email: '',
    group:''
}
const ContactsForm = ({getContact}) =>{
     const [values, setValues] = useState({...initialState});
     const {name, email, group} = values ; 
     

      const handlerInput =(e)=>{
       setValues({
            ...values,
            [e.target.name]: e.target.value, 
        })
    }
      
const onSubmitHandler = (e)=>{
    e.preventDefault();
    // console.log(values) ; {name: 'Islam', email: 'jhon@son.com'}
    getContact(values) ; 
    setValues({...initialState})
}
    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <label htmlFor="name">Name:</label>
                <input 
                 type="text"
                 id='name' 
                 name='name' 
                 value={name} 
                 onChange={handlerInput}
                // onChange={(e)=>handlerInput('a', e.target.value)}
                // onChange={(e)=>handlerInput({a: parseInt(e.target.value)})}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input 
                 type="text" 
                 id='email' 
                 name='email' 
                 value={email} 
                 onChange={handlerInput}
                // onChange={(e)=>handlerInput('a', e.target.value)}
                // onChange={(e)=>handlerInput({a: parseInt(e.target.value)})}
                />
            </div>
            <div>
                <label htmlFor="group">Group:</label>
                <select 
                 name="group" 
                 id="group" 
                 value={group}
                 onChange={handlerInput}
                >
                    <option value="">select groups: </option>
                    <option value='home' >Home</option >
                    <option value='office'>Office</option >
                </select>
            </div>
            <input type="submit" value={'Create New Contact'} />
        </form>
    )
}

export default ContactsForm