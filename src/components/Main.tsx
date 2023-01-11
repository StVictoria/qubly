import { FC } from 'react'
import Banner from './Banner'
import Login from './Login'
import Testimonial from './Testimonial'
import WhyQubly from './WhyQubly'
import Header from './_base/Header'
import Footer from './_common/Footer'
import s from './Main.module.sass'

const Main: FC = () => {
  return (
    <>
      <Header />
      <Banner />
      <WhyQubly />
      <Testimonial />
      <Login />
      <Footer />
      <div className={s.copyrightsBlock}>
        <p>Rahul Rao</p>
        <div className={s.copyrights} />
      </div>
    </>
  )
}

export default Main
