import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import w1 from './../public/w1.webp';
import w2 from './../public/w2.webp';
import w3 from './../public/w3.jpeg';


const Waacking = () => {
    return (
        <div>
            <br/>
            <h4>Waacking</h4>
            <Carousel variant="light">
                <Carousel.Item interval={6000}>
                    <img src={w1} alt="waacking" height="550px" width="1000px"/>
                    <Carousel.Caption>
                        <h3>起源於70年代美國洛杉磯（Los Angeles）的同性戀酒吧。在那個社會還沒現在開放的年代，大眾文化是不接受同性戀的存在的。</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                    <img src={w2} alt="waacking" height="550px" width="1000px"/>
                    <Carousel.Caption>
                        <h3>同性戀在生活中必須隱藏自己的性取向。但在舞廳裡，LGBTQ群體們無須隱藏自己的身分，可以盡情解放自我。</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                    <img src={w3} alt="waacking" height="550px" width="1000px"/>
                    <Carousel.Caption>
                        <h3>用控制身體的方式自由穿梭在陰陽的詮釋之間，去轉化現實生活中憑一己之力不能動搖的事情。</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <p>waacking起源於1970年代，而這個年代是Disco的黃金時期，所以waacking跟disco有密不可分的關係，而waacking之所以叫甩手舞，他的特色就是有大量揮動手臂的動作，注意！是手臂喔，如果看到有人使用大量的手腕，他可能跳的是locking，另一個特色就是戲劇化的表演形式與對音樂的細節，如果你注意看waacker(跳waacking的舞者)跳舞時，他們的表情與動作都充滿戲劇張力。而且waacker們對音樂的掌握度非超要求，Disco音樂中的鼓聲、電吉他、小提琴、薩克斯風，所有音效與樂器都需要掌握住，所以厲害的waacker們又被稱為音樂的魔術師！</p>
            <h1 id="breaking"></h1>
            <br/><br/><br/>
        </div>
    );
}

export default Waacking;
