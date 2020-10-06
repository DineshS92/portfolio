import React, {useState} from 'react';

export default function Contact() {

  const [form, setForm] = useState({name: '', email: ''});

  const handleNameChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const sendToSanity = () => {
    fetch('https://determined-elion-16345f.netlify.app/functions/createlead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        _type: 'form',
        name: form.name,
        email: form.email
      })
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };


  return(
    <>
      <h1>Hi, This is the Contact Page</h1>
      <form>
        <label>Name: 
          <input type="text" required name="name" onChange={handleNameChange} />
        </label>
        <label>Email:
          <input type="email" required name="email" onChange={handleNameChange} />
        </label>
        <button onClick={sendToSanity} type='button'>Submit</button>
      </form>
    </>
  );
}