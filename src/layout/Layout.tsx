import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Header } from './Header/Header'
import { Footer } from './Footer/Footer'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import TwitterIcon from '@mui/icons-material/Twitter'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Position } from './Position/Position'
import { EMAIL_URL } from '@/helpers/constants';

import { LayoutProps } from './Layout.props'
import { FunctionComponent } from 'react'
import Script from "next/script";
// import { AppContextProvider, IAppContext } from '../context/app.context';

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Header></Header>
      <main className={styles.main}>
        <h1>Vasilika Klimova</h1>
        <div className={styles.flex}>
          <div className={styles.introWrapper}>
            <div className={styles.avatar}>
              <Image src='/gde.webp' alt='Vasilika Klimova GDE photo' width={400} height={400} priority/>
            </div>
            <Position></Position>
            <section className={styles.contacts}>
              <h3>Contacts</h3>
              <ul className={styles.contactList}>
                <li>
                  <a
                    className={styles.icon}
                    href='https://twitter.com/Lik04ka'
                    target='_blank'
                    rel='noopener nofollow'
                    title='My Twitter'
                  >
                    <TwitterIcon/>
                    <span className={styles.forScreenReaders}>My Twitter</span>
                  </a>
                </li>
                <li>
                  <a
                    className={styles.icon}
                    href='https://www.linkedin.com/in/likita'
                    target='_blank'
                    rel='noopener nofollow'
                    title='My LinkedIn'
                  >
                    <LinkedInIcon/>
                    <span className={styles.forScreenReaders}>My LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a
                    className={styles.icon}
                    href='https://github.com/Likita'
                    target='_blank'
                    rel='noopener nofollow'
                    title='My Github'
                  >
                    <GitHubIcon/>
                    <span className={styles.forScreenReaders}>My Github</span>
                  </a>
                </li>
                <li>
                  <a
                    className={styles.icon}
                    href={`mailto:${EMAIL_URL}`}
                    target='_blank'
                    rel='noopener nofollow'
                    title='My email'
                  >
                    <MailOutlineIcon/>
                    <span className={styles.forScreenReaders}>My email</span>
                  </a>
                </li>
              </ul>
            </section>
          </div>
          <div className={styles.descriptionWrapper}>{children}</div>
        </div>
      </main>
      <Footer></Footer>
      <canvas className='background'></canvas>
      <Script src="/js/background.js"/>
    </div>
  )
}

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    )
  }
}
