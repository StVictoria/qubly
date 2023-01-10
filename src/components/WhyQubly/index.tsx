import Image from 'next/image'
import { FC } from 'react'
import eyeIcon from '../../assets/icons/eye.svg'
import { benefits, IBenefit } from '../../static/benefits'
import InfoBlock from '../_common/InfoBlock'
import s from './styles.module.sass'

const WhyQubly: FC = () => {
  const renderBenefits = () =>
    benefits.map((benefit: IBenefit) => (
      <div className={s.whyQubly_benefit} key={benefit.id}>
        <Image
          className={s.whyQubly_benefitIcon}
          src={benefit.icon}
          alt='icon'
        />
        <p className={s.whyQubly_benefitTitle}>
          <b>{benefit.title}</b>
        </p>
        <p className={s.whyQubly_benefitDescr}>{benefit.descr}</p>
      </div>
    ))

  return (
    <section className={s.whyQubly}>
      <InfoBlock
        titleText='Get actionable insights from Big Data in 3 steps'
        chipIcon={eyeIcon}
        chipText='Why Qubly'
        descrText='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
        align='center'
        descrWidth={74}
      />
      <div className={s.whyQubly_benefits}>{renderBenefits()}</div>
    </section>
  )
}

export default WhyQubly
