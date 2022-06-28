import 'bootstrap/dist/css/bootstrap.min.css';
import d1 from './../public/d1.jpeg';
import d2 from './../public/d2.jpg';
import d3 from './../public/d3.jpeg';
import { Carousel } from 'react-bootstrap';


const Dancehall = () => {
    return (
        <div>
            <br/>
            <h4>Dancehall</h4>
            <Carousel variant="light">
                <Carousel.Item interval={6000}>
                    <img src={d1} alt="dancehall" height="550px" width="1000px"/>
                    <Carousel.Caption>
                        <h3>源自於牙買加，是一種因應雷鬼音樂發展而產生的舞蹈。</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                    <img src={d2} alt="dancehall" height="550px" width="1000px"/>
                    <Carousel.Caption>
                        <h3>在國外其實比較多人使用Dancehall這個說法，在台灣我們常習慣稱之為Reggae（雷鬼）。</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                    <img src={d3} alt="dancehall" height="550px" width="1000px"/>
                    <Carousel.Caption>
                        <h3>Dancehall著重於腰部以及下半身的協調性訓練，不論你是想要變成辣妹還是想要加強你的肌耐力，都務必來體驗看看 。</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <p>Dancehall这个名字形容在1980年的牙买加出现的音乐，同时也形容在此音乐上即兴创作的舞蹈。接下来，Dancehall在牙买加发展了，同时开始扩散到安的列斯群岛（Antilles）, 留尼汪岛（Reunion）,毛里求斯岛 （Ile Maurice）等。1990年在法国开始出现。这个舞种原来强调胸和腰的波动，然后慢慢的融合了不同的其他元素。现在dancehall经常会融合一些和hiphop、爵士、非洲舞蹈的元素。
Dancehall dance 分为dancehall queen【女生跳】和dancehall king【男生跳】。牙买加人认为女生可以跳所有你想跳的，但是他们不可以接受一个男生去跳女生的move。</p>
            <h1 id="hiphop"></h1>
            <br/><br/><br/>
        </div>
    );
}

export default Dancehall;
