import 'bootstrap/dist/css/bootstrap.min.css';
import d1 from './../public/d1.jpeg';
import d2 from './../public/d2.jpg';
import d3 from './../public/d3.jpeg';
import { Carousel, Image } from 'react-bootstrap';


const Dancehall = () => {
    return (
        <div>
            <br/>
            <h4>Dancehall</h4>
            <Carousel variant="light">
                <Carousel.Item interval={6000}>
                    <Image fluid src={d1} alt="dancehall" height="550px" width="100%"/>
                    <Carousel.Caption>
                        <h3>源自於牙買加，是一種因應雷鬼音樂發展而產生的舞蹈。</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                    <Image fluid src={d2} alt="dancehall" height="550px" width="100%"/>
                    <Carousel.Caption>
                        <h3>在國外其實比較多人使用Dancehall這個說法，在台灣我們常習慣稱之為Reggae（雷鬼）。</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                    <Image fluid src={d3} alt="dancehall" height="550px" width="100%"/>
                    <Carousel.Caption>
                        <h3>Dancehall著重於腰部以及下半身的協調性訓練，不論你是想要變成辣妹還是想要加強你的肌耐力，都務必來體驗看看 。</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <p>Dancehall這個名字形容在1980年的牙買加出現的音樂，同時也形容在此音樂上即興創作的舞蹈。接下来，Dancehall在牙買加發展了，同時開始擴散到安的列斯群島（Antilles）, 留尼汪島（Reunion）,毛里求斯島 （Ile Maurice）等。1990年在法國開始出現。這個舞種原来強調胸和腰的波動，然後慢慢的融合了不同的其他元素。現在dancehall經常會融合一些和hiphop、爵士、非洲舞蹈的元素。
Dancehall dance 分為dancehall queen【女生跳】和dancehall king【男生跳】。牙買加人認為女生可以跳所有你想跳的，但是他們不可以接受一個男生去跳女生的move。</p>
            <h1 id="hiphop"></h1>
            <br/><br/><br/>
        </div>
    );
}

export default Dancehall;
