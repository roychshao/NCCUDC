import './index.css'
import Topnav from './../../components/Top-nav'
import Footer from './../../components/Footer'
import Sidebar from './components/Sidebar'
import BackToTop from './../../components/Back-to-Top'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
import Section6 from './components/Section6'
import Section7 from './components/Section7'
import Section8 from './components/Section8'
import Section9 from './components/Section9'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';

const Activity = () => {

    return (
        <Container fluid>
            <Row>
                <Topnav />
                <Col className="g-0">
                    <Sidebar/>
                </Col>
                <Col xs={6}>
                    <div className="activity-page">
                        <div className="content">
                            <Section1 />
                            <Section2 />
                            <Section3 />
                            <Section4 />
                            <Section5 />
                            <Section6 />
                            <Section7 />
                            <Section8 />
                            <Section9 />
                        </div>
                    </div>
                </Col>
                <Col>
                    <BackToTop />
                </Col>
            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>
    );
}

export default Activity;
