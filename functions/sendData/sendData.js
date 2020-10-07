const sanityClient = require('@sanity/client');

const client = sanityClient({
  projectId: process.env.SANITY_PROJ,
  dataset: process.env.SANITY_DS,
  token: process.env.SANITY_TOKEN,
  useCdn: false
});


exports.handler = async(event, context) => {
  const {_type, name, email, message} = JSON.parse(event.body);
  console.log(JSON.parse(event.body));
  
  const data = await client.create({
    _type: _type,
    name: name,
    email: email,
    message: message
  });

  if(JSON.stringify(data)) {
    return {
      statusCode: 200,
      body: JSON.stringify('success')
    }
  }
}