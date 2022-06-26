import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';


const Jazz = () => {
    return (
        <div>
            <br/>
            <h4>Jazz</h4>
            <Carousel variant="light">
                <Carousel.Item interval={6000}>
                    <img src="https://i.ytimg.com/vi/y5jJZUusSHA/maxresdefault.jpg" alt="jazz" height="550px" width="1000px"/>
                    <Carousel.Caption>
                        <h3>爵士舞動作的本質是一種自由而純樸的表現，直接把內心的感受用身體的顛，抖，扭表達出來。</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                    <img src="https://dancemagazine.com.au/wp-content/uploads/2019/11/jazz.jpg" alt="jazz" height="550px" width="1000px"/>
                    <Carousel.Caption>
                        <h3>就像我們聽到喜歡的音樂，能從內心自然的流露出感情，身體就不由自主的隨著音樂節奏而活動。</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                    <img src="https://static.wixstatic.com/media/0a59a4_39244e2cc57b4459b02e18bc459480c5.jpg/v1/fill/w_736,h_484,al_c,q_90/0a59a4_39244e2cc57b4459b02e18bc459480c5.jpg" alt="jazz" height="550px" width="1000px"/>
                    <Carousel.Caption>
                        <h3>如彈響手指，擺首頓足，時而興奮激烈，時而緩慢優柔的溶入音樂之中。</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <p>新爵士舞主要是追求愉快，活潑，有生氣的一種舞蹈。它的特徵是可自由自在的跳，不必像傳統式的古典芭蕾必須局限於一種形式與遵守固有的姿態，但和的士高舞那種完全自我享受的舞蹈又不同，它在自由之中仍有一種現律的存在。例如它會配合爵士音樂表現感情，也藉助或仿效其他舞蹈技巧;如在步法和動作上，應用芭蕾舞的動作位置和原則，踢踏舞技巧的靈敏性，現代舞軀體的收縮與放鬆，拉丁舞的舞步與擺臀以及東方舞蹈上半身的挪動位置等等。</p>
            <h1 id="house"></h1>
            <br/><br/><br/>
        </div>
    );
}

export default Jazz;
