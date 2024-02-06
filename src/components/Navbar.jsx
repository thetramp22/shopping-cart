import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="home">home</Link>
      <Link to="shop">shop</Link>
      <Link to="cart">cart</Link>
    </div>
  );
};
export default Navbar;
