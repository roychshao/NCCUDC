import 'bootstrap/dist/css/bootstrap.min.css';
import 四校party from './../public/四校party.jpg'
import { Button } from 'react-bootstrap'

// 四校
const Section6 = ({btnSize}) => {
    return (
        <section>
            <h2>四校party</h2>
            <img src={四校party} alt="四校" width="100%"/>
            <p>《DANCERA》
                <br/>四校聯合屬於跳舞人的派對Vol.8
                <br/>台大/政大/北大/輔大
                <br/>❗️活動資訊❗️
                <br/>🔎時間：5月21日（六）
                <br/>🔎地點：Nuzone 2F 展演空間
                <br/>🔎15:00進場 15:30開始
            </p>
            <Button variant="outline-secondary" size={btnSize} id="CC combat">工人報名</Button>
        </section>
    );
}

export default Section6;
