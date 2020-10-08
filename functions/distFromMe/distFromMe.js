require('isomorphic-fetch');

exports.handler = async(event, context) => {
  const {ipAdd} = JSON.parse(event.body)
  //[IP Location Finder by KeyCDN](https://tools.keycdn.com/geo)
  let city = await fetch(`https://tools.keycdn.com/geo.json?host=${ipAdd}`);
  let cityJson = await city.json();
  let dist = await fetch(`https://www.distance24.org/route.json?stops=Mumbai|${cityJson.data.geo.city}`)
  let distJson = await dist.json()
  return {
    statusCode: 200,
    body: JSON.stringify(distJson)
  }
}