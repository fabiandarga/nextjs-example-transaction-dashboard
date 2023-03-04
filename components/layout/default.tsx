import Navigation from '../modules/Navigation';
import Sidebar from '../modules/Sidebar';

export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <Sidebar />
      <main>{children}</main>
    </div>
  )
}
