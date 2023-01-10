import { FC } from 'react'
import s from './styles.module.sass'

const Testimonial: FC = () => {
  return (
    <section className={s.testimonial}>
      <div className={`${s.testimonial_content} container`}>
        <p className={s.testimonial_quote}>
          &ldquo;What I love about Qubly is the easy way we can collaborate even
          if there is a lot of people involved in the process&ldquo;
        </p>
        <div className={s.testimonial_photo} />
        <p>
          <b>
            Guillaume Cabane <br />
            CTO @ BigSpring
          </b>
        </p>
        <div className={s.testimonial_companies}>
          <div className={`${s.testimonial_company} ${s.company1}`} />
          <div className={`${s.testimonial_company} ${s.company2}`} />
          <div className={`${s.testimonial_company} ${s.company3}`} />
          <div className={`${s.testimonial_company} ${s.company4}`} />
          <div className={`${s.testimonial_company} ${s.company5}`} />
        </div>
      </div>
    </section>
  )
}

export default Testimonial
