import Image from 'next/image'
import { FC } from 'react'
import s from './styles.module.sass'
import logo from '../../../assets/icons/logo.svg'
import {
  companyLinks,
  developersLinks,
  ILink,
  productLinks,
  supportLinks,
} from '../../../static/footerLinks'
import Input from '../Input'
import Link from 'next/link'

const Footer: FC = () => {
  const renderLinks = (links: ILink[]) =>
    links.map((link) => (
      <li className={s.footer_middleSectionLink} key={link.id}>
        <Link href={link.to}>{link.title}</Link>
      </li>
    ))

  return (
    <footer className={s.footer}>
      <div className={`${s.footer_content} container`}>
        {' '}
        <div className={s.footer_leftSection}>
          <Image src={logo} alt='Qubly' />
          <p className={s.footer_rightSectionDescr}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat ut wisi enim ad minim
          </p>
          <div className={s.footer_socials}>
            <button className={s.footer_social1} />
            <button className={s.footer_social2} />
            <button className={s.footer_social3} />
          </div>
        </div>
        <div className={s.footer_middleSection}>
          <div>
            <h3>Product</h3>
            <ul> {renderLinks(productLinks)}</ul>
          </div>
          <div>
            <h3>For Developers</h3>
            <ul> {renderLinks(developersLinks)}</ul>
          </div>
          <div>
            <h3>Company</h3>
            <ul> {renderLinks(companyLinks)}</ul>
          </div>
          <div>
            <h3>Support</h3>
            <ul> {renderLinks(supportLinks)}</ul>
          </div>
        </div>
        <div className={s.footer_rightSection}>
          <h3>Newsletter</h3>
          <form className={s.footer_newsletterForm}>
            <Input variant='filled' type='email' placeholder='Email' />
            <button className={s.footer_newsletterFormButton} type='submit' />
          </form>
        </div>
      </div>
    </footer>
  )
}

export default Footer
