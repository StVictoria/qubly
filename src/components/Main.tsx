import { FC } from 'react'
import Banner from './Banner'
import s from './Main.module.sass'
import WhyQubly from './WhyQubly'
import Header from './_base/Header'

const Main: FC = () => {
  return (
    <>
      <Header />
      <Banner />
      <div className='container'>
        <WhyQubly />
      </div>
    </>
  )
}

export default Main
