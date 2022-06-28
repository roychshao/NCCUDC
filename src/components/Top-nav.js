import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Topnav = () => {
/*
    const styles = {
        brand: {
            fontSize: "25px"
        }
    }
*/
    return(
        <Navbar bg="dark" variant="dark" fixed="top" collapseOnSelect expand="lg">
            <Navbar.Brand>NCCUDC</Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav>
                    <Nav.Link><Link to="/" className="navlink">首頁</Link></Nav.Link>
                    <Nav.Link><Link to="/DanceStyle" className="navlink">舞風</Link></Nav.Link>
                    <Nav.Link><Link to="/Activity" className="navlink">活動</Link></Nav.Link>
                    <NavDropdown title="政大熱舞社">
                        <NavDropdown.Item href="https://www.facebook.com/NCCUDC" target="_blank">Facebook</NavDropdown.Item>
                        <NavDropdown.Item href="https://www.instagram.com/nccudc_official/" target="_blank">Instagram</NavDropdown.Item>
                        <NavDropdown.Item href="https://www.youtube.com/channel/UCsxnbnlJVYgjAmxCCCPgJ4Q/featured" target="_blank">Youtube</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Topnav;
