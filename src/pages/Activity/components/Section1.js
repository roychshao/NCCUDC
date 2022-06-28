import 'bootstrap/dist/css/bootstrap.min.css';
import 迎新舞展大合照 from './../public/迎新舞展大合照.jpg'
import { Button, Image } from 'react-bootstrap'

// 迎新舞展
const Section1 = ({btnSize}) => {
    return (
        <section>
            <h1 className="anchor" id="迎新舞展">活動<hr /></h1>
            <h2>迎新舞展 - 社交一點舞公尺</h2>
            <Image fluid src={迎新舞展大合照} alt="迎新舞展大合照" width="100%" />
            <p>
                Cautious 
                <br/>疫情延燒，所有人無一倖免。
                <br/>恐懼籠罩，我們隨時處於警戒狀態，
                <br/>只為了擁有更好的明天。
                <br/>Obscure
                <br/>未知的陰霾吞沒前方的光，沒有終點、沒有盡頭。
                <br/>徒留沸騰的迷茫與不安，無所適從。
                <br/>Vigorous 
                <br/>自由的日子已成了過去，畫面卻仍然清晰可觸。
                <br/>那是鮮明的暖色調，充滿紅與橘的血脈賁張
                <br/>Ideal
                <br/>現實難以下嚥，理想脫穎而出
                <br/>——引領著意識，去向沒有苦痛的淨土。
                <br/>在那裡，我們盪漾著快樂，無所畏懼。
                <br/>D(ist)ance
                <br/>夢裡夢外的記憶，超越時間與空間，
                <br/>以另一種形式活了過來。
                <br/>隨著呼吸，我們舞出一段屬於自己的故事。
                <br/>-
                <br/>19
                <br/>被偷走的那一年，留白了青春。
                <br/>是時候放下失去的遺憾，迎接20歲這年我們應得的美好。
                <br/>/
                <br/>即使屏障重重、即使相隔一點五公尺，舞蹈仍然是我們共享的集體記憶，也是我們共鳴的情感依存。
                <br/>帷幕降下之前，
                <br/>我們都值得擁有一次綻放自我的機會。
            </p>
            <Button variant="outline-secondary" size={btnSize} id="college_high">工人報名</Button>
        </section>
    );
}

export default Section1;
