import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <Navbar bg="secondary" expand="lg">
      <Container>
        <Navbar.Brand href="#">Warung Nasi Goreng Mbk Indah</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/Home">Beranda</Nav.Link>
            <Nav.Link href="/Admin">Admin Page</Nav.Link>
            <Nav.Link href="/UserPage">User Page</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Telusuri</Button>
          </Form>
          <Nav>
            <NavDropdown
              title="Masuk"
              id="navbarScrollingDropdown"
              className="badge bg-primary text-"
            >
              <NavDropdown.Item href="/Login">Login User</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Login Admin</NavDropdown.Item>
              <NavDropdown.Item href="/Signin">Registrasi</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
