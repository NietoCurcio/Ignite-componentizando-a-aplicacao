import { Button } from './Button'
import { GenreResponseProps } from '../App'

type SideBarProps = {
  genres: GenreResponseProps[]
  selectedGenreId: number
  setSelectedGenreId: (arg: number) => void
}

export function SideBar({
  genres,
  setSelectedGenreId,
  selectedGenreId,
}: SideBarProps) {
  function handleClickButton(id: number) {
    setSelectedGenreId(id)
  }

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre: any) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}
