require('isomorphic-fetch');

exports.handler = async(event, context) => {
  let ipAdd = await fetch('https://api.ipify.org/?format=json');
  let ipAddJson = await ipAdd.json();
  console.log(ipAddJson.ip);
  //[IP Location Finder by KeyCDN](https://tools.keycdn.com/geo)
  let city = await fetch(`https://tools.keycdn.com/geo.json?host=${ipAddJson.ip}`);
  let cityJson = await city.json();
  let dist = await fetch(`https://www.distance24.org/route.json?stops=Mumbai|${cityJson.data.geo.city}`)
  let distJson = await dist.json()
  return {
    statusCode: 200,
    body: JSON.stringify(cityJson.data.geo)
  }
}