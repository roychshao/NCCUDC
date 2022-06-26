import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';


const Popping = () => {
    return (
        <div>
            <br/>
            <h4>Popping</h4>
            <Carousel variant="light">
                <Carousel.Item interval={6000}>
                    <img src="https://global-uploads.webflow.com/5e2b8863ba7fff8df8949888/5ea9e41c7f99dc9258dff62e_5e28eb130ab615fb245115a5_what-is-popping-dance-p-1600.jpeg" alt="popping" height="500px" width="1000px"/>
                    <Carousel.Caption>
                        <h3>popping是放克舞蹈和街舞中的一種風格，基本是藉由肌肉迅速地收縮與放鬆的技巧，使舞者的身體產生種顫動的感覺。</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                    <img src="https://www.newton.com.tw/img/8/034/cGcq5CZ4YWNhNWN5YWM1ITZ0E2MlRjMjFzM1EjZxQmZzQGOhVWM2EmY4MDOv0WZ0l2LjlGcvU2apFmYv02bj5SdklWYi5yYyN3Ztl2LvoDc0RHa.jpg" alt="popping" height="500px" width="1000px"/>
                    <Carousel.Caption>
                        <h3>這種技巧稱作「pop」或「hit」，舞者會以多種不同的動作和姿勢來配合歌曲的節奏。</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                    <img src="https://cdn.hk01.com/di/media/images/dw/20210824/506900453145972736952817.jpeg/EoeULYsbMmileN5GIR4pALuolSi-rp1GXKpDkFyqQ5A?v=w1920" alt="popping" height="500px" width="1000px"/>
                    <Carousel.Caption>
                        <h3>popping舞者又被稱為「popper」。popping常被說是機械舞,'機械'是在popping中的一種技巧,這種技巧稱作「robot」。 </h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <p>在1970年代晚期，一個來自美國加州的機械舞團「The Electric Boogaloos」（早期被稱為「Electronic Boogaloo Lockers」）對機械舞的推廣貢獻良多，一部份是由於他們在電視節目「靈魂列車」（Soul Train）上的表演。
The Electric Boogaloo自己宣稱大約在1975年至1976年間，舞團創始人山姆·索羅門（Sam Solomon，又稱Boogaloo Sam）在受到鎖舞先鋒團體「The Lockers」團體以及1960年代流行的熱門舞蹈（fad dance）「the jerk」的啟發後，發明一組舞步，也就是現今所稱的機械舞。在跳舞時，山姆在每次彎曲肌肉時都會說「pop」這個單字，最後這種舞蹈就被稱為「popping」Many confirm the Electric Boogaloos' story that Boogaloo Sam came up with the basics of popping.。</p>
            <h1 id="jazz"></h1>
            <br/><br/><br/>
        </div>
    );
}

export default Popping;
