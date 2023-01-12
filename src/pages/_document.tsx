import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <title>Qubly</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,900;1,700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <div className='preloader preloader_show'>
          <svg
            width='49'
            height='48'
            viewBox='0 0 49 48'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='preloader_logo'
          >
            <path
              d='M24.9979 0V13.716L12.9979 20.573L0.997925 13.715L24.9979 0Z'
              fill='#431F5A'
            />
            <path
              d='M13 20.572L25 27.429V41.143L13 34.286L1 27.429V13.714L13 20.572Z'
              fill='#722ED1'
            />
            <path
              d='M36.999 34.2859V47.9989L24.999 41.1429V27.429L36.999 34.2859Z'
              fill='#722ED1'
            />
            <path
              d='M24.9979 0V13.714L36.9979 20.57L48.9979 27.426V13.715L24.9979 0Z'
              fill='#722ED1'
            />
            <path
              d='M48.9969 13.714V27.43L36.9969 34.287L24.9969 27.429L36.9969 20.571L48.9969 13.714Z'
              fill='#431F5A'
            />
            <path
              d='M36.999 34.2859L24.999 41.1429V27.429L36.999 34.2859Z'
              fill='#431F5A'
            />
          </svg>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
