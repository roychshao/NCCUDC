import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';


const Breaking = () => {
    return (
        <div>
            <br/>
            <h4>Breaking</h4>
            <Carousel variant="light">
                <Carousel.Item interval={6000}>
                    <img src="https://media.gq.com.tw/photos/6229d3b832970c7966b96a35/master/w_1600%2Cc_limit/Red%2520Bull%2520BC%2520One%25E5%258F%25B0%25E7%2581%25A3%25E6%25B1%25BA%25E8%25B3%25BD%25E8%25A9%2595%25E5%25AF%25A9%25E4%25B9%258B%25E4%25B8%2580_B-Boy%2520Choco.jpeg" alt="breaking" height="550px" width="1000px"/>
                    <Carousel.Caption>
                        <h3>地板霹靂舞（Breaking、Breakdance、b-boying），是街舞的一種，也是第一種嘻哈舞種。</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                    <img src="https://miro.medium.com/max/1400/0*xKWZtxZD8Y5w-30l" alt="breaking" height="550px" width="1000px"/>
                    <Carousel.Caption>
                        <h3>Breaking的中文翻譯是地板，地板動作或霹靂舞。</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                    <img src="http://5b0988e595225.cdn.sohucs.com/images/20200413/bdfb5ef162ce4d91887523b94d69828b.jpeg" alt="breaking" height="550px" width="1000px"/>
                    <Carousel.Caption>
                        <h3>比較值得注意的是，早期跳霹靂舞的舞者多為西班牙語裔美國人，而非非裔美國人，然而他們當初偏好的音樂風格卻大大影響至今嘻哈音樂。</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <p>Breakdance是一種以個人風格為主、體育性質較強的技巧性街舞種類，舞者統稱為B-boy或b-girl，跳舞稱breaking、b-boying、b-girling。英文名字來源於伴奏採用的音樂歇段，即是「歇段舞」，音譯為「布雷克舞」，港台稱「地板舞」，也有人形象的譯為「霹靂舞」，來描述其中貼近地面，以頭、肩、背、膝為重心，迅速旋轉、翻滾的動作。</p>
            <h1 id="locking"></h1>
            <br/><br/><br/>
        </div>
    );
}

export default Breaking;
