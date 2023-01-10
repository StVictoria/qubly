import Image from 'next/image'
import { FC } from 'react'
import s from './styles.module.sass'
import logo from '../../../assets/icons/logo.svg'
import { headerLinks, IHeaderLink } from '../../../static/headerLinks'
import Link from 'next/link'
import Button from '../../_common/Button'

const Header: FC = () => {
  const renderLinks = () =>
    headerLinks.map((link: IHeaderLink) => (
      <Link key={link.id} href={link.to} className={s.header_link}>
        {link.title}
      </Link>
    ))

  return (
    <header className={`${s.header} container`}>
      <Image
        className={s.header_logo}
        src={logo}
        objectFit='content'
        alt='Qubly'
      />
      <div className={s.rightSide}>
        <nav>{renderLinks()}</nav>
        <Button text='Start free trial' variant='outlined' />
      </div>
    </header>
  )
}

export default Header
