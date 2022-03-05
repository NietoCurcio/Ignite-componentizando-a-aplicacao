import { GenreResponseProps, MovieProps } from '../App'
import { Header } from './Header'
import { MovieCard } from './MovieCard'

type GenreProps = {
  name: string
  title: string
  id: number
}

type ContentProps = {
  selectedGenre: GenreProps
  movies: MovieProps[]
}

export function Content({ selectedGenre, movies }: ContentProps) {
  return (
    <div className="container">
      <Header selectedGenre={selectedGenre} />

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
