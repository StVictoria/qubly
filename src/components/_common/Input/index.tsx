import clsx from 'clsx'
import { FC } from 'react'
import s from './styles.module.sass'

interface IInputProps {
  placeholder: string
  type?: 'email' | 'password'
  variant?: 'filled'
}

const Input: FC<IInputProps> = ({
  placeholder,
  type = 'text',
  variant,
}) => {
  return (
    <input
      type={type}
      className={clsx(s.input, { [s.filled]: variant === 'filled' })}
      placeholder={placeholder}
    />
  )
}

export default Input
