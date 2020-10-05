import React, {useState} from 'react';
import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'gfj5vc9n',
  dataset: 'production',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false
})

export default function Contact() {

  const [form, setForm] = useState({name: '', email: ''});

  const handleNameChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const sendToSanity = () => {
    client.create({
      _type: 'form',
      name: form.name,
      email: form.email
    })
    .then(res => console.log('success'));
  }

  // console.log(form);



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