const key = '47cb32d7a40a71c6ac4940b6e81611d0'
const requests = {
    requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestUpComming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestSearching:`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&page=1&include_adult=false`
}

export default requests