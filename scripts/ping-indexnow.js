const https = require('https');

const host = "vastavmeinayush.xyz"; 
const key = "318a6e87d00f40d3810bd6b8c4c7af6a";

const data = JSON.stringify({
  host: host,
  key: key,
  keyLocation: `https://${host}/${key}.txt`,
  urlList: [
    `https://${host}/`,
  ]
});

const options = {
  hostname: 'api.indexnow.org',
  port: 443,
  path: '/IndexNow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': data.length
  }
};

const req = https.request(options, (res) => {
  console.log(`Status Code: ${res.statusCode}`);
  
  res.on('data', (d) => {
    process.stdout.write(d);
  });
  
  res.on('end', () => {
      console.log('\nIndexNow ping complete.');
  });
});

req.on('error', (error) => {
  console.error('Error pinging IndexNow:', error);
});

req.write(data);
req.end();
