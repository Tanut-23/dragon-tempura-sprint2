import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='flex flex-col w-full min-h-screen items-center bg-amber-100'>
        <nav className='flex gap-10 flex-wrap my-20 text-2xl'>
          <Link to="/">Landing</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <Link to="/cart">Matetest</Link>
          {/* ADD PAGE HERE */}
        </nav>
        <Outlet />
    </div>
  )
}

export default Layout