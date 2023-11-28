const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzUyOTg1ZTljNzg4YzE3YmFmMmY3NjZhZWYyNDA3MCIsInN1YiI6IjY1NjY0ZTJhMTU2Y2M3MDBlYmMxMTk3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yYL1HiqW4zSjwrCp_8GRmn-IO73Qqg8Co4H_ASgvQuE'
    }
  };
  
  fetch('https://api.themoviedb.org/3/authentication', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));