import { FC } from 'react'
import Banner from './Banner'
import Testimonial from './Testimonial'
import WhyQubly from './WhyQubly'
import Header from './_base/Header'

const Main: FC = () => {
  return (
    <>
      <Header />
      <Banner />
      <WhyQubly />
      <Testimonial />
    </>
  )
}

export default Main
