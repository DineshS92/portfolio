require('isomorphic-fetch');

exports.handler = async(event, context) => {
  const data = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.GATSBY_API_KEY}&type=video&q=lofi&hip&hop&eventType=live&maxResults=10`);
  const res = await data.json();
  return {
    statusCode: 200,
    body: JSON.stringify(res)
  }
}