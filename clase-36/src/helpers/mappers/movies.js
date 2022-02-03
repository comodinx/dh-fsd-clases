/*
{
  Title: 'Doctor Strange',
  Year: '2016',
  Rated: 'PG-13',
  Released: '04 Nov 2016',
  Runtime: '115 min',
  Genre: 'Action, Adventure, Fantasy',
  Director: 'Scott Derrickson',
  Writer: 'Jon Spaihts, Scott Derrickson, C. Robert Cargill',
  Actors: 'Benedict Cumberbatch, Chiwetel Ejiofor, Rachel McAdams',
  Plot: 'While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.',
  Language: 'English',
  Country: 'United States',
  Awards: 'Nominated for 1 Oscar. 20 wins & 68 nominations total',
  Poster: 'https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg',
  Ratings: [
    { Source: 'Internet Movie Database', Value: '7.5/10' },
    { Source: 'Rotten Tomatoes', Value: '89%' },
    { Source: 'Metacritic', Value: '72/100' }
  ],
  Metascore: '72',
  imdbRating: '7.5',
  imdbVotes: '672,952',
  imdbID: 'tt1211837',
  Type: 'movie',
  DVD: '28 Feb 2017',
  BoxOffice: '$232,641,920',
  Production: 'N/A',
  Website: 'N/A',
  Response: 'True'
}
*/

module.exports = (movies = []) => {
    if (!Array.isArray(movies)) {
        movies = [movies];
    }

    return movies.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        fromExternalApi: true,
        ...movie
    }))
}
