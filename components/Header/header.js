import Container from 'components/container'
import Logo from '../logo'
import Nav from '../nav'
import styles from './styles.module.scss'

export default function Header() {
  return (
    <header>
      <div className={`${styles.header__head} l-header__head`}>
        <h1 className={styles.logo}>
          <a href="/recruit/" className={`${styles.logo__inner}`}>
              <span className={`${styles.logo__main}`}>
                <img src="/assets/common/main_logo.svg" alt="SEIBAN" width={100} height={25} />
              </span>
              <span className={`${styles.logo__sub}`}>RECRUITMENT</span>
          </a>
          </h1>
          <button className={`${styles.menu_button} u-d-md-none`} data-mobile-menu-trigger>
          <span className={`${styles.menu_button__line_wrap}`}>
              <span className={`${styles.menu_button__line}`} />
              <span className={`${styles.menu_button__line}`} />
              <span className={`${styles.menu_button__line}`} />
          </span>
          </button>
      </div>
    </header>
  )
}