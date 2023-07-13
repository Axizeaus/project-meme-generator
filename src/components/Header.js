import logo from '../images/logo.png'

export default function Header() {
  return (
    <header className='header'>
      <img src={logo} className='header--logo'/>
      <h2 className='header--text'>meme generator</h2>
    </header>
  )
}