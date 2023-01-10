import clsx from 'clsx'
import { FC } from 'react'
import Chip from '../Chip'
import s from './styles.module.sass'

interface IInfoBlockProps {
  titleText: string
  chipText: string
  chipIcon: string
  descrText: string
  align?: 'center' | 'end'
  descrWidth?: number // in percents
}

const InfoBlock: FC<IInfoBlockProps> = ({
  titleText,
  chipText,
  chipIcon,
  descrText,
  align,
  descrWidth,
}) => {
  return (
    <div className={clsx(s.infoBlock, { [s.centered]: align === 'center' })}>
      <Chip text={chipText} icon={chipIcon} />
      <h2 className={s.infoBlock_title}>{titleText}</h2>
      <p className={s.infoBlock_descr} style={{ maxWidth: `${descrWidth}%` }}>
        {descrText}
      </p>
    </div>
  )
}

export default InfoBlock
