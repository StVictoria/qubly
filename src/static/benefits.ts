import chartIcon from '../assets/icons/chart-bar.svg'
import newsLetterIcon from '../assets/icons/newsletter-dev.svg'
import timelineIcon from '../assets/icons/timeline.svg'


export interface IBenefit {
    id: number
    icon: string
    title: string
    descr: string
}

export const benefits: IBenefit[] = [
    { id: 0, icon: chartIcon, title: 'Valuable business insights', descr: 'Collect processed & cleansed data that is ready to be analyzed to gather valuable business insights.' },
    { id: 1, icon: newsLetterIcon, title: 'Powerful Algorithms', descr: 'With the help of powerful algorithms, quality rules & techniques, obtain simplified & enriched data.' },
    { id: 2, icon: timelineIcon, title: 'Data in real-time', descr: 'Collect data in real-time from multiple channels and move it into a data lake, in its original format.' },
]