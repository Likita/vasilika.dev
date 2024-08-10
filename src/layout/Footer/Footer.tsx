import styles from './Footer.module.css'
export const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      This website is designed and developed by {}
      <a href='https://twitter.com/Lik04ka' target='_blank' rel='noopener nofollow' className={styles.underlineA}>
        Vasilika Klimova
      </a>
      , using {}
      <a target='_blank' href='https://nextjs.org/' rel='noopener nofollow' className={styles.underlineA}>
        Next.js
      </a>{' '}
      and amazing {}
      <a target='_blank' href='https://unicornicons.com/' rel='noopener nofollow' className={styles.underlineA}>
        Unicorn icons
      </a>
    </footer>
  )
}
