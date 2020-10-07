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
  try {
    client.create({
      _type: _type,
      name: name,
      email: email,
      message: message
    })
      .then(console.log('success upload'))
      return {
        statusCode: 200,
        body: JSON.stringify('success')
      }
  } catch (error) {
    console.log(error)
  }
  // return {
  //   statusCode: 200,
  //   body: JSON.stringify('success')
  // }
}