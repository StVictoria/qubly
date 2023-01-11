import { FC } from 'react'
import Banner from './Banner'
import Login from './Login'
import Testimonial from './Testimonial'
import WhyQubly from './WhyQubly'
import Header from './_base/Header'
import Footer from './_common/Footer'

const Main: FC = () => {
  return (
    <>
      <Header />
      <Banner />
      <WhyQubly />
      <Testimonial />
      <Login />
      <Footer />
    </>
  )
}

export default Main
