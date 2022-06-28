import 'bootstrap/dist/css/bootstrap.min.css';
import 世政輔 from './../public/世政輔.jpg'
import { Button, Image } from 'react-bootstrap'

// 世政輔
const Section5 = ({btnSize}) => {
    return (
        <section>
            <h2>世政輔</h2>
            <Image fluid src={世政輔} alt="世政輔" width="100%"/>
            <p>-世新 X 政大 X 輔仁--
                <br/>賽事資訊:
                <br/>一、
                <br/>日期時間:2022/03/12 (六)12:00-20:00
                <br/>12:00選手報到 13:00比賽開始
                <br/>二、地點:政治大學雲岫廳
                <br/>三、活動流程:
                <br/>12:00-13:00選手報到
                <br/>（現場報名）（抽AB side及順序）
                <br/>13:00-13:30 Hip hop audition
                <br/>13:30-14:00 Popping audition
                <br/>14:00-14:30 GS audition
                <br/>14:30-15:00 Locking audition
                <br/>15:00-15:30 Waacking audition
            </p>
            <Button variant="outline-secondary" size={btnSize} id="四校party">參賽報名</Button>
        </section>
    );
}

export default Section5;
