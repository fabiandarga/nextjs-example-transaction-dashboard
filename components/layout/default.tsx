import Navigation from '../modules/Navigation';
import Sidebar from '../modules/Sidebar';
import style from './default.module.scss';

export default function Layout({ children }) {
  return (
    <div className={ style.layout }>
      <nav><Navigation /></nav>
      <aside><Sidebar /></aside>
      <main>{children}</main>
    </div>
  )
}
