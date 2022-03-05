import { memo } from 'react'

interface HeaderProps {
  selectedGenre: { title: string }
}

export function HeaderComponent({ selectedGenre }: HeaderProps) {
  return (
    <header>
      <span className="category">
        Categoria:<span> {selectedGenre.title}</span>
      </span>
    </header>
  )
}

export const Header = memo(HeaderComponent, (prev, next) => {
  return prev.selectedGenre.title == next.selectedGenre.title
})
