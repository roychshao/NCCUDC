import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';


const Locking = () => {
    return (
        <div>
            <br/>
            <h4>Locking</h4>
            <Carousel variant="light">
                <Carousel.Item interval={6000}>
                    <img src="https://global-uploads.webflow.com/5e2b8863ba7fff8df8949888/5fb56da1910167de85ea4ae0_LOCKING_FEATURED_IMAGE.png" alt="locking" height="550px" width="1000px"/>
                    <Carousel.Caption>
                        <h3>鎖舞（英文：Locking，最初稱為Campbellocking）是funk dance和街舞中的一種舞風，現今也與嘻哈有所關聯。</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                    <img src="https://image6.thenewslens.com/2020/2/w5u66sr671yfahjn4q1q8n3wee0l7k.png?auto=compress&h=450&q=80&w=750" alt="locking" height="550px" width="1000px"/>
                    <Carousel.Caption>
                        <h3>快速、明顯的手臂及手部運動，搭配比較放鬆的臀部和腿部, 這些運動通常又大又誇張。</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                    <img src="https://seektash.com/wp-content/uploads/2018/08/About_locking1.jpg" alt="locking" height="550px" width="1000px"/>
                    <Carousel.Caption>
                        <h3>鎖舞是相當表演導向的，經常藉由微笑或高舉雙手擊掌(giving a high five)來與觀眾互動，具有喜劇性質。</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <p>Locking這個名字是由「鎖」（locking）的動作的概念而來，這個概念基本上是指從一個很迅速的運動中凝固不動，然後停在一個特定的姿 勢，短暫地保持那樣的姿勢之後，又繼續回覆到原來的速度。鎖(locking)的動作就會與許多相對快速而連續不斷的運動產生一種強烈的對比。鎖的動作向 著觀眾或其他舞者施展，並且結合了默劇風格的表演。Locking包含了相當多的特技以及嚴苛的肢體活動，例如炸膝蓋(landing on ones knees)及劈腿。這些動作經常需要某種形式的膝蓋保護。
　　Locker是locking dancer的意思。Locker通常有著鮮明的衣著風格，像是鮮豔而有條紋及吊帶的服飾。</p>
        </div>
    );
}

export default Locking;
