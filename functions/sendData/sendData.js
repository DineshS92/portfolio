const sanityClient = require('@sanity/client');

exports.handler = async(event, context) => {
  const {_type, name, email, message} = JSON.parse(event.body);
  console.log(JSON.parse(event.body));
  const client = sanityClient({
    projectId: process.env.SANITY_PROJ,
    dataset: process.env.SANITY_DS,
    token: process.env.SANITY_TOKEN,
    useCdn: false
  });
  
  try {
    client.create({
      _type: _type,
      name: name,
      email: email,
      message: message
    })
      .then(res => console.log(res))
  } catch (error) {
    console.log(error)
  }
  return {
    statusCode: 200,
    body: JSON.stringify('success')
  }
}