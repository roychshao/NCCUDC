import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'

// 幹訓
const Section9 = () => {
    return (
        <section>
            <h2>幹訓</h2>
            <img src="https://im.marieclaire.com.tw/s800c450h100b0/assets/mc/202106/60C8775C66F801623750492.jpeg" alt="幹訓大合照" width="100%"/>
            <p>大家晚安晚安 再幾天就要去幹訓玩了
                <br/>在這邊我們有幾項事情要宣布！
                <br/>集合 6/19
                <br/>二七 09:00 @鏡牆
                <br/>二八 09:30 @八角亭
                <br/>自行前往 10:50 @埔心門口
                <br/>解散 6/21
                <br/>北車 19:00抵達
                <br/>政大 19:30抵達
            </p>
            <Button variant="outline-secondary" size="lg">工人報名</Button>
        </section>
    );
}

export default Section9;
