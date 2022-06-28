import 'bootstrap/dist/css/bootstrap.min.css';
import 未來商鋪 from './../public/未來商鋪.jpg'
import { Button } from 'react-bootstrap'

// 成果發表
const Section8 = ({btnSize}) => {
    return (
        <section>
            <h2>成果發表</h2>
            <img src={未來商鋪} alt="成果發表" width="100%"/>
            <p>政大熱舞社27屆成果發表《未來X商舖》
                <br/>日期：2022/06/02（四）
                <br/>時間：
                <br/>18:10 公關票入場
                <br/>18:25 一般觀眾入場
                <br/>18:50 表演開始
                <br/>地點：政治大學藝文中心大禮堂
            </p>
            <Button variant="outline-secondary" size={btnSize} id="幹訓">工人報名</Button>
        </section>
    );
}

export default Section8;
