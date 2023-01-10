import Image from 'next/image'
import { FC } from 'react'
import eyeIcon from '../../assets/icons/eye.svg'
import { benefits, IBenefit } from '../../static/benefits'
import InfoBlock from '../_common/InfoBlock'
import s from './styles.module.sass'
import circuitIcon from '../../assets/icons/electronic-circuit.svg'
import compassIcon from '../../assets/icons/compass.svg'

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
    <section className='container'>
      <InfoBlock
        titleText='Get actionable insights from Big Data in 3 steps'
        chipIcon={eyeIcon}
        chipText='Why Qubly'
        descrText='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
        align='center'
        descrWidth={74}
      />
      <div className={s.whyQubly_benefits}>{renderBenefits()}</div>

      <section className={s.whyQubly_productTeams}>
        <div className={s.whyQubly_productsImageContainer}>
          <div className={`${s.whyQubly_product} ${s.product1}`}><div /></div>
          <div className={`${s.whyQubly_product} ${s.product2}`}><div /></div>
          <div className={`${s.whyQubly_product} ${s.product3}`}><div /></div>
          <div className={`${s.whyQubly_product} ${s.product4}`}><div /></div>
          <div className={`${s.whyQubly_product} ${s.product5}`}><div /></div>
          <div className={`${s.whyQubly_product} ${s.product6}`}><div /></div>
          <div className={`${s.whyQubly_product} ${s.product7}`}><div /></div>
          <div className={`${s.whyQubly_product} ${s.product8}`}><div /></div>
        </div>
        <div className={s.whyQubly_productsInfo}>
          <InfoBlock
            chipIcon={circuitIcon}
            chipText='For Product Teams'
            titleText='Launch with the best stack'
            descrText='A centralized platform that integrates zillions of data sources using Big Data ELT (Extract, Load & Transform) that leaves no data behind'
          />
        </div>
      </section>

      <section className={s.whyQubly_engineeringTeams}>
        <div className={s.whyQubly_engineeringInfoBlockWrapper}>
        <InfoBlock
          chipIcon={compassIcon}
          chipText='For Engineering Teams'
          titleText='Data-driven pipelines in minutes'
          descrText='Maintenance-free data pipelines with quick set-up and straight-forward deployments that are powered by a modern & scalable platform.'
          descrWidth={80}
        />
        </div>
        <div className={s.whyQubly_pipelineImage} />
      </section>
    </section>
  )
}

export default WhyQubly
