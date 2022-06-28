import 'bootstrap/dist/css/bootstrap.min.css';
import cc_combat from './../public/cc_combat.jpg'
import { Button, Image } from 'react-bootstrap'

// CC combat
const Section7 = ({btnSize}) => {
    return (
        <section>
            <h2>CC combat</h2>
            <Image fluid src={cc_combat} alt="CC combat" width="100%"/>
            <p>久等了各位～
                <br/>睽違三年的CC Combat終於要回來了！快來手刀報名吧～
                <br/>►時間：5/7 （六）11.30報到，12.30開始
                <br/>►地點：政大雲岫廳
                <br/>►參賽資格：政大熱舞社的各位，在校生或畢業學長姊都歡迎來玩！
                <br/>►參賽費用
                <br/>網路報名：報一組200，報兩組200，反正就200😻
                <br/>（網路報名至5/4 23:59準時截止收客，
                <br/>截止後費用皆採現場報名價，所以不要再猶豫了！)
                <br/>現場報名：報一組250，報兩組250
                <br/>觀賽：只要150！（多50就可以比賽了不比一下ㄇ）
            </p>
            <Button variant="outline-secondary" size={btnSize} id="成果發表">參賽報名</Button>
        </section>
    );
}

export default Section7;
