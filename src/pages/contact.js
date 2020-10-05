import React, {useState} from 'react';
import sanityClient from '@sanity/client';

export default function Contact() {

  // const client = sanityClient({
  //   projectId: 'gfj5vc9n',
  //   dataset: 'production',
  //   token: process.env.GATSBY_SANITY_API_TOKEN,
  //   useCdn: false
  // })

  // const [form, setForm] = useState({name: '', email: ''});

  // const handleNameChange = e => {
  //   setForm({
  //     ...form,
  //     [e.target.name]: e.target.value
  //   });
  // }

  // const sendToSanity = () => {
  //   client.create({
  //     _type: 'form',
  //     name: form.name,
  //     email: form.email
  //   })
  //   .then(res => console.log('success'));
  // }


  return(
    <>
      <h1>Hi, This is the Contact Page</h1>
      {/* <form>
        <label>Name: 
          <input type="text" required name="name" onChange={handleNameChange} />
        </label>
        <label>Email:
          <input type="email" required name="email" onChange={handleNameChange} />
        </label>
        <button onClick={sendToSanity} type='button'>Submit</button>
      </form> */}
    </>
  );
}