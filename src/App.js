import './App.css';
import React, { useState } from 'react'
import Form from './Components/Form'
import Member from './member';

function App() {
  const [members, setMembers] = useState([]);
  const [values, setValues] = useState({name: '', email: '', role:''});

  const onSubmit = () => {
  setMembers([values, ...members]);
  setValues({name:'', email:'', role:''});
  }

  const onChange = (name, value) => {
    setValues({...values, [name]: value});
  }
  
  
  return (
    <div className="App">
      <Form
      values={values}
      change={onChange}
      submit={onSubmit}
      />
      {
        members.map(member => {
          return(
            <Member 
            key={member.name} 
            {...member.email} 
            {...member.role}
            details={member}
            />
          )
        })
      }
    </div>
  );
}

export default App;
