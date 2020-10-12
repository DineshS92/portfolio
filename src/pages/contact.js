import { graphql } from 'gatsby';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import load from '../assets/images/loader.svg';

const StyledContact = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  margin: 5rem 0;
  .distance {
    margin: 5rem 0;
  }
  @media screen and (max-width: 560px) {
    margin: unset;
    margin: 2.5rem 0;
  }
`;
const FormWrapper = styled.div`
  width: 80%;
  padding: 72px 55px 90px 55px;
  border-radius: 10px;
  overflow: hidden;
  background: ghostwhite;
  @media screen and (max-width: 560px) {
    width: unset;
    padding: 72px 15px 90px 15px;
  }
`;

const StyledForm = styled.form`
    width: 100%;
    textarea, input {
      width: 100%;
      border: none;
      background: transparent;
      margin-bottom: 2rem;
      border-bottom: 2px solid #adadad;
      overflow: unset;
      box-sizing: border-box;
      font-size: 1.5rem;
      line-height: 1.2;
      outline: none;
    }
    input {
      height: 4.5rem;
    }
    textarea {
      height: 8rem;
      padding: 1rem 0;
    }
    button {
      cursor: pointer;
      font-size: 1.5rem;
      height: 4rem;
      width: 200px;
      border: none;
      border-radius: 5px;
      background: var(--grayish);
      color: var(--textcolor);
    }
    p {
      color: #000;
      text-decoration: underline;
    }
    .courses {
      display: none;
    }
    @media screen and (max-width: 560px) {
      padding: unset;
      textarea, input {
      width: 100%;
      overflow: unset;
      box-sizing: border-box;
      }
    }
`;

const HeaderStyles = styled.h1`
  font-weight: 700;
  font-size: 3.5rem;
  word-wrap: break-word;
  max-width: 100%;
  @media screen and (max-width: 560px) {
    font-size: 2rem;
  }
`;

const StyledSpan = styled.span`
  background-image: linear-gradient(to right, transparent 50%, #7851a9 50%);
  background-origin: 0;
  background-size: 200% 40%;
  background-repeat: repeat-x;
  background-position: -100% 100%;
`;

export const contactQuery = graphql`
  {
    allDataJson {
      nodes {
        emailCF
        loading
        headlineCF1
        headlineCF2
        headlineCF3
        connect
      }
    }
  }
`;

export default function Contact({data}) {

  const [form, setForm] = useState({name: '', email: '', message: '', courses: ''});
  const [submit, setSubmit] = useState(false);
  const [message, setMessage] = useState('');
  const [distance, setDistance] = useState(null);

  useEffect(() => {
    fetch('https://api.ipify.org/?format=json')
      .then(res => res.json())
      .then(data => fetch('/.netlify/functions/distFromMe', {
                      method: 'POST',
                      body: JSON.stringify({
                        ipAdd: data.ip
                      })
                    })
                      .then(city => city.json())
                      .then(cityJson => setDistance(cityJson.distance)))
  }, []);

  console.log(distance);

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
      setMessage(data.message);
      if(data.message === 'Thanks for getting in touch. We will talk soon') {
        setSubmit(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return(
    <>
      {
        submit === false
        ? (
          <StyledContact>
            <div className='distance'>
              {
                distance === null
                ? <img src={load} alt='loader' />
                : distance === 0
                  ? <HeaderStyles>{data.allDataJson.nodes[3].connect}<br />{data.allDataJson.nodes[3].headlineCF1} <StyledSpan>{data.allDataJson.nodes[3].emailCF}</StyledSpan> </HeaderStyles>
                  : <HeaderStyles>{data.allDataJson.nodes[3].headlineCF2}<StyledSpan> {distance} Kms or {Math.floor(distance * 0.62)} Miles </StyledSpan>{data.allDataJson.nodes[3].headlineCF3}</HeaderStyles>
              }
            </div>
            <FormWrapper>
              <StyledForm onSubmit={sendToSanity}>
                <div> 
                  <input type='text' placeholder='Name' name='name' onChange={handleChange}/>
                </div>
                <div>
                  <input type='email' placeholder='Email' name='email' onChange={handleChange}/>
                </div>
                <div>
                  <textarea name='message' placeholder='Message' onChange={handleChange} />
                </div>
                <input className='courses' type='courses' name='courses' onChange={handleChange}/>
                <button type='submit'>Send Message</button>
                <p>{message}</p>
              </StyledForm>
            </FormWrapper>
          </StyledContact>
        )
        : <HeaderStyles>{message}</HeaderStyles>
      }
    </>
  );
}