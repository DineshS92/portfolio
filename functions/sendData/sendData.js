const sanityClient = require('@sanity/client');

const client = sanityClient({
  projectId: process.env.SANITY_PROJ,
  dataset: process.env.SANITY_DS,
  token: process.env.SANITY_TOKEN,
  useCdn: false
});


exports.handler = async(event, context) => {
  const {_type, name, email, message, courses} = JSON.parse(event.body);

  if(courses) {
    return {
      statusCode: 400,
      body: JSON.stringify({message: 'Woah! Hey! Only real people are allowed to contact me: ERR 2020'})
    }
  }

  if(!name || !email || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({message: 'You have left a field empty'})
    }
  }
  
  const data = await client.create({
    _type: _type,
    name: name,
    email: email,
    message: message
  });

  if(JSON.stringify(data)) {
    return {
      statusCode: 200,
      body: JSON.stringify({message: 'Thanks for getting in touch. We will talk soon'})
    }
  }
}