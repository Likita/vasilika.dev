import styles from './Header.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Player } from '@lottiefiles/react-lottie-player'
import HomeIconAnimation from './home_icon.json'
// import CodeIconAnimation from './code_icon.json'
import SpeakerIconAnimation from './speaker_icon.json'
import HobbyIconAnimation from './heart_icon.json'
import ContactIconAnimation from './contact_icon.json'
import React, { useRef } from 'react'
import cn from 'classnames'

export const Header = (): JSX.Element => {
  const router = useRouter()

  const iconList = [
    {
      icon: HomeIconAnimation,
      link: '/',
      name: 'Home',
    },
    // {
    //   icon: CodeIconAnimation,
    //   link: '/projects',
    //   name: 'Projects'
    // },
    {
      icon: SpeakerIconAnimation,
      link: '/speaker',
      name: 'Speaker',
    },
    {
      icon: HobbyIconAnimation,
      link: '/hobby',
      name: 'Hobby',
    },
    {
      icon: ContactIconAnimation,
      link: '/contact',
      name: 'Contact',
    },
  ]

  const iconPlayer = useRef<any>([])

  const onMouseOver = (index: number) => {
    if (iconPlayer.current[index]) {
      iconPlayer.current[index].play()
    }
  }

  const onMouseLeave = (index: number) => {
    iconPlayer.current[index].stop()
  }

  return (
    <header className={styles.header}>
      <nav className={styles.menu}>
        <ul>
          {iconList.map((iconEl: { icon: any; link: string; name: string }, index: number) => (
            <li key={iconEl.name}>
              <Link
                href={iconEl.link}
                onMouseOver={() => onMouseOver(index)}
                onMouseLeave={() => onMouseLeave(index)}
                className={cn(styles.menuA, router.pathname === iconEl.link ? styles.menuActive : '')}
              >
                <Player
                  src={iconEl.icon}
                  className={styles.menuIcon}
                  loop={true}
                  ref={(el) => iconPlayer.current[index] = el}
                />
                <span>{iconEl.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
