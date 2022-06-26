import Topnav from './../../components/Top-nav'
import Footer from './../../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './index.css';


const Home = () => {

    const styles = {
        container: {
            paddingLeft: "0px",
            paddingRight: "0px"
        },
        row: {
            marginLeft: "0px",
            marginRight: "0px"
        },
        img: {
            paddingLeft: "0px",
            paddingRight: "0px",
            marginTop: "76px"
        }
    }

    return (
        <Container fluid style={styles.container}>
            <img src="https://scontent.ftpe7-4.fna.fbcdn.net/v/t39.30808-6/284097832_5529730100393397_3657808999319093844_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_ohc=0NufnOk2r5EAX8RLHfr&tn=6P0PohlxtS37omdC&_nc_ht=scontent.ftpe7-4.fna&oh=00_AT-cx-IU96HLPXT4zE42G4fPYxtB18Ph1zPGqZhj_EqSkA&oe=62ADA0DE" alt="NCCUDC27 picture" width="100%" style={styles.img} />
            <Row style={styles.row}>
                <Col className="g-0"></Col>
                <Col xs={5} className="g-0">
                    <div className="home-page" id="home">
                        <Topnav />
                        <div className="intro">
                            <h3> ˙·.✧* 我們是國立政治大學熱門舞蹈研習社 ✧*.·˙</h3>
                            <hr width="60%" />
                            <br/>
                            <p> 分為HipHop, Popping, Locking, Jazz, Waacking, Dancehall, House和Breaking等舞風<br/>
                                想認識這些舞風並和志同道合的夥伴們一起在舞台上發光發熱嗎?<br/>
                                快來加入我們吧!!
                                <br/><br/>
                                <Button variant="outline-secondary" size="lg">加入政大熱舞社</Button>
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
