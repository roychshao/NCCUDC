import { useState, useEffect } from 'react';
import Topnav from './../../components/Top-nav';
import Footer from './../../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import NCCUDC27 from './NCCUDC27.jpg';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import './index.css';


const useRWD = () => {
    const [colsize, setColsize] = useState(7);
    const [btnsize, setBtnsize] = useState("lg");
    const handleRWD = () => {
        if(window.innerWidth > 768) {
            setColsize(7);
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

const Home = () => {

    const styles = {
        container: {
            paddingLeft: "0px",
            paddingRight: "0px"
        },
        row: {
            marginLeft: "0px",
            marginRight: "0px"
        }
    }

    const [colsize, btnsize] = useRWD();

    return (
        <Container fluid style={styles.container}>
            <Image fluid className="nccudc" src={NCCUDC27} alt="NCCUDC27 picture" width="100%" height="auto" />
            <Row style={styles.row}>
                <Col className="g-0"></Col>
                <Col xs={colsize} className="g-0">
                    <div className="home-page" id="home">
                        <Topnav />
                        <div className="intro">
                            <p className="title"> ˙·.✧* 我們是國立政治大學熱門舞蹈研習社 ✧*.·˙</p>
                            <hr width="100%" />
                            <br/>
                            <p className=" words"> 分為HipHop, Popping, Locking, Jazz, Waacking, Dancehall, House和Breaking等舞風<br/>
                                想認識這些舞風並和志同道合的夥伴們一起在舞台上發光發熱嗎?<br/>
                                快來加入我們吧!!
                                <br/><br/>
                                <Button variant="outline-secondary" size={btnsize}>加入政大熱舞社</Button>
                            </p>
                        </div>
                        <br/>
                    </div>
                </Col>
                <Col className="g-0"></Col>
            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>
    );
};

export default Home;
