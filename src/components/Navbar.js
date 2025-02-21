import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/id-cards">ID Cards</Link></li>
        <li><Link to="/greetings">Greetings</Link></li>
        <li><Link to="/random">Random</Link></li>
        <li><Link to="/box-color">Box Color</Link></li>
        <li><Link to="/credit-cards">Credit Cards</Link></li>
        <li><Link to="/rating">Rating</Link></li>
        <li><Link to="/drivers">Drivers</Link></li>
        <li><Link to="/likes">Like Button</Link></li>
        <li><Link to="/clickable-picture">Clickable Picture</Link></li>
        <li><Link to="/dice">Dice</Link></li>
        <li><Link to="/carousel">Carousel</Link></li>
        <li><Link to="/numbers-table">Numbers Table</Link></li>
        <li><Link to="/facebook">Facebook</Link></li>
        <li><Link to="/facebook-advanced">Facebook Advanced</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/rgb-picker">RGB Picker</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar; 