import { useState, useEffect } from 'react'
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



const useRWD = () => {
    const [colsize, setColsize] = useState(7);
    const [btnsize, setBtnsize] = useState("lg");
    const handleRWD = () => {
        if(window.innerWidth > 768) {
            setColsize(6);
            setBtnsize("lg");
        } else {
            setColsize(9);
            setBtnsize("md");
        }
    }

    useEffect( () => {
        window.addEventListener('resize', handleRWD);
        handleRWD();
        return(()=>{
            window.removeEventListener('resize', handleRWD);
        })
    }, [])
    return [colsize, btnsize];
}

const Activity = () => {

    const [colsize, btnsize] = useRWD();

    return (
        <Container fluid>
            <Row>
                <Topnav />
                <Col className="g-0">
                    <Sidebar/>
                </Col>
                <Col xs={colsize}>
                    <div className="activity-page">
                        <div className="content">
                            <Section1 btnSize={btnsize}/>
                            <Section2 btnSize={btnsize}/>
                            <Section3 btnSize={btnsize}/>
                            <Section4 btnSize={btnsize}/>
                            <Section5 btnSize={btnsize}/>
                            <Section6 btnSize={btnsize}/>
                            <Section7 btnSize={btnsize}/>
                            <Section8 btnSize={btnsize}/>
                            <Section9 btnSize={btnsize}/>
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
