import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import s from './styles.module.sass'

interface IChipProps {
  icon: string
  text: string
  linkText?: string
  link?: string
}

const Chip: FC<IChipProps> = ({ icon, text, linkText, link }) => {
  return (
    <div className={s.chip}>
      <Image className={s.chip_icon} src={icon} alt='icon' />
      <p>{text}</p>
      {link && linkText && (
        <Link className={s.chip_link} href={link}>
          {linkText}
        </Link>
      )}
    </div>
  )
}

export default Chip
