import { FC } from 'react'
import Button from '../_common/Button'
import Chip from '../_common/Chip'
import s from './index.module.sass'
import brightnessIcon from '../../assets/icons/brightness.svg'

const Banner: FC = () => {
  return (
    <section className={s.banner}>
      <div className={`${s.banner_content} container`}>
        <div className={s.banner_info}>
          <Chip
            icon={brightnessIcon}
            text='v3.1 released.'
            linkText='Learn more'
            link='/'
          />
          <h1 className={s.banner_title}>Your data with real-time analytics</h1>
          <p className={s.banner_descr}>
            Harness the potential of Big Data Analytics & Cloud Services and
            become a data-driven organization with Needle tail
          </p>
          <div className={s.banner_buttons}>
            <Button text='Start free trial' />
            <Button text='Learn more' variant='filled_secondary' />
          </div>
        </div>
        <div className={s.banner_image}>
          <div className={`${s.banner_imageDot} ${s.dot1}`} />
          <div className={`${s.banner_imageDot} ${s.dot2}`} />
          <div className={`${s.banner_imageDot} ${s.dot3}`} />
          <div className={`${s.banner_imageDot} ${s.dot4}`} />
          <div className={`${s.banner_imageDot} ${s.dot5}`} />
          <div className={`${s.banner_imageDot} ${s.dot6}`} />
        </div>
      </div>
    </section>
  )
}

export default Banner
