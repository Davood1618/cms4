import { Outlet } from 'react-router-dom';
import Navbar from './comps/navbar/navbar';
import RightNavbar from './comps/rightNavbar/rightNavbar';


export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ display: 'flex' }}>
        {children}
      </main>
      <RightNavbar />
    </>
  );
}
