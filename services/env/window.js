const get = key => {
  console.log('inside get');
  console.log(key);
  console.log(process[key]);
  // console.log(window[key]);

  return {API_URL: 'http://localhost:3001/'}
  return process[key]

  const window = {} // TODO : remove it
  return window[key];
}

export { get }
