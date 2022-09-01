import React, { useEffect } from "react"

import styles from './styles.module.scss'

function Head() {
  return (
    <div className={`${styles.header__head} l-header__head`}>
        <h1 className={styles.logo}>
        <a href="/recruit/" className={`${styles.logo__inner}`}>
            <span className={`${styles.logo__main}`}>
              
              <img src="/images/common/main_logo.svg" alt="SEIBAN" width={100} height={25} />
            </span>
            <span className={`${styles.logo__sub}`}>RECRUITMENT</span>
        </a>
        </h1>
        {/* <button className={`${styles.menu_button} u-d-md-none`} data-mobile-menu-trigger>
        <span className={`${styles.menu_button__line_wrap}`}>
            <span className={`${styles.menu_button__line}`} />
            <span className={`${styles.menu_button__line}`} />
            <span className={`${styles.menu_button__line}`} />
        </span>
        </button> */}
    </div>
  )
}

function Entry() {
  return (
      <ul className={`${styles.cv_list}`}>
          <li className={`${styles.cv_list__item}`}>
              <a href="https://job.rikunabi.com/2023/company/r671291025/" className={`${styles.cv} ${styles.cv__new_graduate}`}>
                  <span className={`${styles.cv__text}`}>新卒エントリー</span>
              </a>
          </li>
          <li className={`${styles.cv_list__item}`}>
              <a href="#" target="_blank" className={`${styles.cv} ${styles.cv__career}`}>
                  <span className={`${styles.cv__text}`}>中途エントリー</span>
              </a>
          </li>
      </ul>
  )
}


function Collapse() {
  const [isOpen, setIsOpen] = React.useState(false)

    return (
        <>
        <li className={`${styles.nav_list__item} ${styles.nav_list__item__md_dropdown}`} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
            <button className={styles.button}>
                <span className={`${styles.button__text}`}>採用情報</span>
                <span className={`${styles.button__icon} ${styles.button__icon__type2}`} data-icon="arwType2" >
                    {/* <Type2Icon /> */}
                </span>
            </button>
            {<div className={`${styles.expand_content} ${isOpen? styles.expand_content_active: ""}`} onMouseLeave={() => setIsOpen(false)}>
                <div className={`${styles.expand_content__container}`}>
                    <ul className={`${styles.link_list}`}>
                        <li className={`${styles.link_list__item}`}>
                        <a href="/recruit/newgrad/" className={`${styles.link}`}>
                            <span className={`${styles.link__icon} u-d-md-none`} data-icon="arwType1">
                                {/* <Type1Icon /> */}
                            </span>
                            <span className={`${styles.link__text}`}>新卒採用</span>
                            <span className={`${styles.link__icon} u-d-none u-d-md-block`} data-icon="arwType1">
                                {/* <Type1Icon /> */}
                            </span>
                        </a>
                        </li>
                        <li className={`${styles.link_list__item}`}>
                        <a href="/recruit/" className={`${styles.link}`}>
                            <span className={`${styles.link__icon} u-d-md-none`} data-icon="arwType1">
                                {/* <Type1Icon /> */}
                            </span>
                            <span className={`${styles.link__text}`}>中途採用</span>
                            <span className={`${styles.link__icon} u-d-none u-d-md-block`} data-icon="arwType1">
                                {/* <Type1Icon /> */}
                            </span>
                        </a>
                        </li>
                    </ul>
                </div>
            </div>}
        </li>
        </>
    )
}

export default function Header() {
  return (
    <header className={`${styles.header}`} data-mobile-menu-target>
        <Head />
        <div className={`${styles.header__body}`}>
            <nav className={`${styles.header__nav}`}>
            <ul className={`${styles.nav_list}`}>
                <li className={`${styles.nav_list__item}`}>
                <a href="/recruit/about/" className={styles.button}>
                    <span className={`${styles.button__text}`}>わたしたちについて</span>
                    <span className={`${styles.button__icon} ${styles.button__icon__type1} u-d-md-none`} data-icon="arwType1" />
                </a>
                </li>
                <li className={`${styles.nav_list__item}`}>
                <a href="/recruit/#sec-business" className={`${styles.button} js-anchor-link`}>
                    <span className={`${styles.button__text}`}>事業内容</span>
                    <span className={`${styles.button__icon} ${styles.button__icon__type1} u-d-md-none`} data-icon="arwType1" />
                </a>
                </li>
                <li className={`${styles.nav_list__item}`}>
                <a className={styles.button}>
                    <span className={`${styles.button__text}`}>働く人を知る</span>
                    <span className={`${styles.button__caution}`}>COMING SOON</span>
                </a>
                </li>
                <li className={`${styles.nav_list__item}`}>
                <a className={styles.button}>
                    <span className={`${styles.button__text}`}>プロジェクトストーリー</span>
                    <span className={`${styles.button__caution}`}>COMING SOON</span>
                </a>
                </li>
                <li className={`${styles.nav_list__item}`}>
                <a href="/recruit/benefit/" className={styles.button}>
                    <span className={`${styles.button__text}`}>福利厚生・社内制度</span>
                    <span className={`${styles.button__icon} ${styles.button__icon__type1} u-d-md-none`} data-icon="arwType1" />
                </a>
                </li>
                <Collapse />
            </ul>{/* .nav-list */}
            <Entry />
            </nav>
        </div>
    </header>
  )
}