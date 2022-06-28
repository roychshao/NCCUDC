import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import h1 from './../public/h1.jpg';
import h2 from './../public/h2.jpeg';
import h3 from './../public/h3.jpg';


const House = () => {
    return (
        <div>
            <br/>
            <h4>House</h4>
            <Carousel variant="light">
                <Carousel.Item interval={6000}>
                    <img src={h1} alt="house" height="550px" width="1000px"/>
                    <Carousel.Caption>
                        <h3>起源於當時派對的互動社交舞蹈，並與當時美國東岸盛行的Hip Hop、Breaking等街舞風格有深刻的交互影響。</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                    <img src={h2} alt="house" height="550px" width="1000px"/>
                    <Carousel.Caption>
                        <h3>House從Jazz、踢踏、Capoeira、Bebop Jazz、非洲舞等風格中汲取養分，在視覺上非常強調腳步的節奏變化以及延續不斷的韻律感。</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                    <img src={h3} alt="house" height="550px" width="1000px"/>
                    <Carousel.Caption>
                        <h3>這個文化也跟LGBTQ族群有著非常深度的連結，在這方向上也催生出了舞蹈風格「Vogueing」</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <p>House 舞風在腳步上呈現出細膩多變的感覺。 從動作分析上可以觀察到，相較於其他舞風，House大量的使用下半身，在重心的移動上較為平穩，沒有太多的上下起伏或是很大的跳耀動作。 而為了呈現出動作輕鬆優雅的感覺，非常吃重下半身及核心的控制和穩定能力。</p>
            <h1 id="waacking"></h1>
            <br/><br/><br/>
        </div>
    );
}

export default House;
