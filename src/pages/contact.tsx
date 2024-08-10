import Head from 'next/head'
import styles from '@/styles/Contact.module.css'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import TwitterIcon from '@mui/icons-material/Twitter'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import YouTubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import MediumIcon from './medium.svg'
import { withLayout } from '@/layout/Layout'
import {EMAIL_URL} from "@/helpers/constants";

function Contact(): JSX.Element {
  return (
    <>
      <Head key='head-contact'>
        <title>Vasilika Klimova - Contact</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <section className={styles.contacts}>
        <ul className={styles.contactList}>
          <li>
            <a
              className={styles.icon}
              href='https://twitter.com/Lik04ka'
              target='_blank'
              rel='noopener nofollow'
              title='My Twitter'
            >
              <TwitterIcon />
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
              <LinkedInIcon />
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
              <GitHubIcon />
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
              <MailOutlineIcon />
              <span className={styles.forScreenReaders}>My email</span>
            </a>
          </li>

          <li>
            <a
              className={styles.icon}
              href='https://www.facebook.com/vasilika.klimova'
              target='_blank'
              rel='noopener nofollow'
              title='My Facebook'
            >
              <FacebookIcon />
              <span className={styles.forScreenReaders}>My Facebook</span>
            </a>
          </li>

          <li>
            <a
              className={styles.icon}
              href='https://www.instagram.com/Vasile0k'
              target='_blank'
              rel='noopener nofollow'
              title='My Instagram'
            >
              <InstagramIcon />
              <span className={styles.forScreenReaders}>My Instagram</span>
            </a>
          </li>

          <li>
            <a
              className={styles.icon}
              href='https://medium.com/@vasilika-klimova'
              target='_blank'
              rel='noopener nofollow'
              title='My Medium'
            >
              <MediumIcon className={styles.svgIcon} />
              <span className={styles.forScreenReaders}>My Medium</span>
            </a>
          </li>

          <li>
            <a
              className={styles.icon}
              href='https://youtube.com/VasilikaKlimova'
              target='_blank'
              rel='noopener nofollow'
              title='My Youtube channel'
            >
              <YouTubeIcon />
              <span className={styles.forScreenReaders}>My Youtube channel</span>
            </a>
          </li>
        </ul>
      </section>
    </>
  )
}

export default withLayout(Contact)