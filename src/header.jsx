import './header.css'
import Search from './search'
export default function Header() {
  return (
      <div className="header-div">
      <img className="logo no-copy no-drag" src="/logo.png" alt="Alternative Medizin logo" draggable="false"
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}/>
        <header className='no-copy no-drag'>Alternative Medizin</header>
        <p className="header-p no-copy no-drag">Little acts of love for your self</p>
        <Search/>
        </div>
  )
}