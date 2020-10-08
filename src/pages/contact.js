import React, {useState} from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    height: 80%;
    margin: auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .courses {
      display: none;
    }
`;

export default function Contact() {

  const [form, setForm] = useState({name: '', email: '', message: '', courses: ''});
  const [submit, setSubmit] = useState(false);
  const [message, setMessage] = useState('');

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
          message: form.message,
          courses: form.courses
        })
      });
      const data = await res.json();
      if(data) {
        setSubmit(true);
        setMessage(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return(
    <>
      <StyledForm onSubmit={sendToSanity}>
        <label>Name:{' '} 
          <input type='text' name='name' onChange={handleChange}/>
        </label>
        <label>Email:{' '}
          <input type='email' name='email' onChange={handleChange}/>
        </label>
        <label>Message:{' '}
          <textarea name='message' onChange={handleChange} />
        </label>
        <input className='courses' type='courses' name='courses' onChange={handleChange}/>
        <button type='submit'>Send Message</button>
      </StyledForm>
      <p>{message}</p>
    </>
  );
}