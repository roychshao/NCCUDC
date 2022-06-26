import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'

// 成果發表
const Section8 = () => {
    return (
        <section>
            <h2>成果發表</h2>
            <img src="https://scontent.ftpe7-1.fna.fbcdn.net/v/t39.30808-6/285627868_5529730323726708_2466477796527996888_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_ohc=QOOYpRiMFswAX_HcCoD&_nc_ht=scontent.ftpe7-1.fna&oh=00_AT9tuA5kpemBYhjt7cUD4PFas4Ps0u8H5KaOj5ioQazW9g&oe=62BB96FB" alt="成果發表" width="100%"/>
            <p>政大熱舞社27屆成果發表《未來X商舖》
                <br/>日期：2022/06/02（四）
                <br/>時間：
                <br/>18:10 公關票入場
                <br/>18:25 一般觀眾入場
                <br/>18:50 表演開始
                <br/>地點：政治大學藝文中心大禮堂
            </p>
            <Button variant="outline-secondary" size="lg" id="幹訓">工人報名</Button>
        </section>
    );
}

export default Section8;
