export interface IHeaderLink {
    id: number
    title: string
    to: string
}

export const headerLinks = [
    { id: 0, title: 'About', to: '/about' },
    { id: 1, title: 'Pricing', to: '/pricing' },
    { id: 2, title: 'Contact Us', to: '/contact-us' },
    { id: 3, title: 'Login', to: '/login' },
]