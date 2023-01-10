import { FC } from 'react'
import s from './styles.module.sass'

interface IInputProps {
  placeholder: string
  type?: 'email' | 'password'
}

const Input: FC<IInputProps> = ({ placeholder, type = 'text' }) => {
  return <input className={s.input} placeholder={placeholder} />
}

export default Input
