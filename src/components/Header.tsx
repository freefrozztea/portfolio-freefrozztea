import React from 'react'
import NavList from './NavList'

interface Props {
  styles: CSSModuleClasses;
}

const Header = ({styles} : Props) => {
  return (
    <header className={styles.header}>
      <div className='logo'></div>
      <div className='theme'></div>
      <div className='language'></div>
      <NavList />
    </header>
  )
}

export default Header