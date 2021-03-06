import React from 'react'
import style from './navigation.module.css'
import { Close, Dash, Logo, MaximizeLeft, MaximizeRight } from '../../assets/icons'
import { isLinux } from '../../App'
const { ipcRenderer } = window.require('electron')
const ipc = ipcRenderer

/**
 * @description you should ask me if you can close the window
 * @todo ask me if you can close the window on Linux
 * @todo replace window.confirm for custom modal on Linux
 * */
const handleClose = (): void => {
  // const closed = confirm('Are you sure you want to close the app?')
  ipc.send('closeApp')
}
/** @description you should minimize window */
const handleMinimize = (): void => {
  ipc.send('minimizeApp')
}
/** @description you should maximize or restore window */
const handleMaximize = (): void => {
  ipc.send('maximizeRestoreApp')
}
const NavBar: React.FC = (): JSX.Element => {
  return (
    <nav className={style.navigation}>
      <div className={style.navLeft}>
        {isLinux ? (
          <div className={style.trafficLight}>
            <div onClick={handleClose} className={style.red}>
              <Close />
            </div>
            <div onClick={handleMinimize} className={style.orange}>
              <Dash />
            </div>
            <div onClick={handleMaximize} className={style.green}>
              <MaximizeLeft />
              <MaximizeRight />
            </div>
          </div>
        ) : (
          <div title='Markdown Preview' className={style.logo}>
            <Logo />
          </div>
        )}
        <ul>
          <li>readme.md</li>
        </ul>
      </div>
      <section className={style.navActions}>
        <button>+</button>
      </section>
    </nav>
  )
}

export default NavBar
