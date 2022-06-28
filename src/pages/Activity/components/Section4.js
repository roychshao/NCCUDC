import 'bootstrap/dist/css/bootstrap.min.css';
import 聖誕小成 from './../public/聖誕小成.jpg'
import { Button, Image } from 'react-bootstrap'

// 聖誕小成
const Section4 = ({btnSize}) => {
    return (
        <section>
            <h2>聖誕小成</h2>
            <Image fluid src={聖誕小成} alt="聖誕小成" width="100%"/>
            <p>【活動日期】
                <br/>2020年12月25日星期五 
                <br/>【活動地點】
                <br/>政治大學 四維堂
                <br/>【活動時間】
                <br/>18:40 開放入場
                <br/>19:00 準時開始
                <br/>【活動費用】
                <br/>政大熱舞學長姐：免費
                <br/>一般觀眾：50元（入場處繳交及蓋章）
                <br/>【主辦人】
                <br/>總召: 徐譽軒、陳昱穎
                <br/>社長: 陳思羽
                <br/>副社: 王玓澄、廖翊淳
                <br/>【MC】
                <br/>湯凱雯、郭維仁
                <br/>【Showcase】
                <br/>政大熱舞26屆
                <br/>【Judge】
                <br/>葉乃瑋、陳柔均、陳騰睿、林彣勳、王彩鈞、顏瑄誼、盧季佑
            </p>
            <Button variant="outline-secondary" size={btnSize} id="世政輔">聖誕小成報名</Button>
        </section>
    );
}

export default Section4;
