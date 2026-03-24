import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/home', label: 'HOME' },
  { to: '/about', label: 'ABOUT' },
  { to: '/games', label: 'GAMES' },
  { to: '/community', label: 'COMMUNITY' },
  { to: '/support', label: 'SUPPORT' },
];

export default function Navbar() {
  return (
    <header className="Navbar">
      <NavLink to="/" className="logo-link">
        <h2 className="logo">PEAK</h2>
      </NavLink>

      <nav className="menu">
        <ul>
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="spacer" />
    </header>
  );
}
