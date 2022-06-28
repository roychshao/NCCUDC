import 'bootstrap/dist/css/bootstrap.min.css';
import 社內盃 from './../public/社內盃.jpg'
import { Button } from 'react-bootstrap'

// College High
const Section3 = ({btnSize}) => {
    return (
        <section>
            <h2>社內盃</h2>
            <img src={社內盃} alt="社內盃" width="100%"/>
            <p>《政大搖擺─擺脫過去，趴踢起來》政大熱舞社內派對
                <br/>【報名辦法及時間】
                <br/>分為「網路報名」及「現場報名」
                <br/>「網路報名」請到「置頂貼文的報名串」留言
                <br/>（報名截止日期11/19 Fri. 23:59）
                <br/>「現場報名」12:45開放報名簽到，13:10截止報名
                <br/>【活動費用】
                <br/>參賽：網路報名150元整，現場報名200元整
                <br/>觀賽：一律150元
                <br/>所有參賽者於「當天現場」報到時繳交
                <br/>🔺當日零食飲品皆可自由領取，故觀賽會酌收150元工本費！
                <br/>🔺由於新冠疫情影響因素，指揮中心尚無公告11/15後防疫指引。
                <br/>我們將根據指揮中心、校方指引滾動式修正社內盃當日的飲食安排；
                <br/>🔺若屆時因規範而無法提供與往年相比的飲食選擇，會再徵酌調整「觀賽」部分費用。
                <br/>【組隊方法】
                <br/>當天到場後，簽到繳費，並取得號碼牌，接著找到自己的舞伴！
                <br/>召部將抽籤把報名者隨機組成兩人戰隊～
                <br/>兩人將成為當天一路相挺的戰友！
            </p>
            <Button variant="outline-secondary" size={btnSize} id="聖誕小成">參賽報名</Button>
        </section>
    );
}

export default Section3;
