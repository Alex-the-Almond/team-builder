import React from "react";

const Form = (props) => {
  
    const handleChange = (event) => {
    const { name, value } = event.target;
    props.change(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.submit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
        placeholder="Username Required" 
        value={props.values.name} 
        name='name'
        onChange={handleChange}
        />
      </label>
      <label>
          Email: 
          <input
          placeholder='Email Required'
          value={props.values.email}
          name='email'
          onChange={handleChange}
          />
      </label>
      <label>
          Role: 
          <select
          value={props.values.role}
          name='role'
          onChange={handleChange}
          >
           <option value=''>--Select Role--</option>
           <option value='backend-dev'>Backend Dev</option>
           <option value='frontend-dev'>Frontend Dev</option>
           <option value='designer'>Designer</option>   
          </select>
      </label>
      <label>
          <input 
          type='submit'
          value='Create a team'
          />
      </label>
    </form>
  );
};

export default Form