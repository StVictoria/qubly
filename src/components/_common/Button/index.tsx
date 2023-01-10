import clsx from 'clsx'
import { FC } from 'react'
import s from './styles.module.sass'

interface IButtonProps {
  text: string
  variant?: 'outlined' | 'filled_secondary'
  fullWidth?: boolean
  type?: 'submit'
}

const Button: FC<IButtonProps> = ({ text, variant, fullWidth, type = 'button' }) => {
  return (
    <button
      className={clsx(s.button, {
        [s.outlined]: variant === 'outlined',
        [s.filled_secondary]: variant === 'filled_secondary',
        [s.fullWidth]: fullWidth,
      })}
    >
      {text}
    </button>
  )
}

export default Button
