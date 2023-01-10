import clsx from 'clsx'
import { FC } from 'react'
import s from './styles.module.sass'

interface IButtonProps {
  text: string
  variant?: 'outlined'
}

const Button: FC<IButtonProps> = ({ text, variant }) => {
  return (
    <button
      className={clsx(s.button, { [s.outlined]: variant === 'outlined' })}
    >
      {text}
    </button>
  )
}

export default Button
