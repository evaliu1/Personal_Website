function text(url) {
  return fetch(url).then(res => res.text());
}
text('https://www.cloudflare.com/cdn-cgi/trace').then(data => {
  const ip_addr = data.split(/\r?\n/)[2];
  const usage_data = data.split(/\r?\n/)[5];
  const geo_loc = data.split(/\r?\n/)[8];
  const user_data = { ip_addr, geo_loc, usage_data };
  const options = {
    method: 'POST',
    headers: {
              'Content-Type': 'application/json'
    },
    body: JSON.stringify(user_data)};
  fetch('/api', options);
}); 
