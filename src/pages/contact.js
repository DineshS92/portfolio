import React, {useState} from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    height: 80%;
    margin: auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export default function Contact() {

  const [form, setForm] = useState({name: '', email: '', message: ''});

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const sendToSanity = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/.netlify/functions/sendData', {
        method: 'POST',
        body: JSON.stringify({
          _type: 'form',
          name: form.name,
          email: form.email,
          message: form.message
        })
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  
  return(
    <>
      <StyledForm onSubmit={sendToSanity}>
        <label>Name:{' '} 
          <input type='text' required name='name' onChange={handleChange}/>
        </label>
        <label>Email:{' '}
          <input type='email' required name='email' onChange={handleChange}/>
        </label>
        <label>Message:{' '}
          <textarea name='message' onChange={handleChange} />
        </label>
        <button type='submit'>Send Message</button>
      </StyledForm>
    </>
  );
}