
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Tienda</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Remeras</Nav.Link>
            <Nav.Link href="#features">Bolsas</Nav.Link>
            <Nav.Link href="#pricing">Prints</Nav.Link>
          </Nav>
        </Container>
        <CartWidget />
      </Navbar>
      
    </>
  );
}

export default NavBar;



// const NavBar = () => {
//     return (
//         <nav>
//             <h3>Tienda</h3>
//             <div>
//                 <button>Remeras</button>
//                 <button>Prints</button>
//                 <button>Bolsas</button>
//             </div>
//             <CartWidget />
//         </nav>
//     )
// }

// export default NavBar