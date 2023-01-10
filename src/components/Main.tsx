import { FC } from 'react'
import Banner from './Banner'
import s from './Main.module.sass'
import Header from './_base/Header'

const Main: FC = () => {
  return (
    <>
      <Header />
      <Banner />
    </>
  )
}

export default Main
