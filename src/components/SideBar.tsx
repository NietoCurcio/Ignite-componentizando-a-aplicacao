import { memo, useCallback } from 'react'
import { Button } from './Button'
import { GenreResponseProps } from '../App'

type SideBarProps = {
  genres: GenreResponseProps[]
  selectedGenreId: number
  setSelectedGenreId: (arg: number) => void
}

export function SideBarComponent({
  genres,
  setSelectedGenreId,
  selectedGenreId,
}: SideBarProps) {
  const handleClickButton = useCallback((id: number) => {
    setSelectedGenreId(id)
  }, [])

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

export const SideBar = memo(SideBarComponent, (previousProps, nextProps) => {
  return previousProps.selectedGenreId == nextProps.selectedGenreId
  // in this case, we know that genres will not update in each re-render
})
