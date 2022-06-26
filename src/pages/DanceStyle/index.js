import Topnav from './../../components/Top-nav'
import Footer from './../../components/Footer'
import Sidebar from './components/Sidebar'
import BackToTop from './../../components/Back-to-Top'
import Dancehall from './components/Dancehall'
import Hiphop from './components/Hiphop'
import Popping from './components/Popping'
import Jazz from './components/Jazz'
import House from './components/House'
import Waacking from './components/Waacking'
import Breaking from './components/Breaking'
import Locking from './components/Locking'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './index.css';


const DanceStyle = () => {

    const space = {
        height: "50px"
    }

    return (
        <Container fluid>
            <Row>
                <Topnav/>
                <Col className="g-0">
                    <Sidebar/>
                </Col>
                <Col className="g-0" xs={6}>
                    <div className="about-page">
                        <h1 id="dancehall">舞風</h1>
                        <hr/>
                        <Dancehall/>
                        <Hiphop/>
                        <Popping/>
                        <Jazz/>
                        <House/>
                        <Waacking/>
                        <Breaking/>
                        <Locking/>
                        <div style={space}></div>
                    </div>
                </Col>
                <Col className="g-0">    
                    <BackToTop/>
                </Col>
            </Row>
            <Row>
                <Footer/>
            </Row>
        </Container>
    );
}

export default DanceStyle;
