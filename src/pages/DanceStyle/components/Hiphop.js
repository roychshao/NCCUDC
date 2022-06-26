import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';


const Hiphop = () => {
    return (
        <div>
            <br/>
            <h4>Hiphop</h4>
            <Carousel variant="light">
                <Carousel.Item interval={6000}>
                    <img src="https://global-uploads.webflow.com/5e2b8863ba7fff8df8949888/5ea9e312990e08746d80d094_5e28eadaff920783b494509b_hIP-HOP-DANCE-BLOG-p-1600.jpeg" alt="hiphop" height="550px" width="1000px"/>
                    <Carousel.Caption>
                        <h3>Hip-Hop是一種融合技巧的自由舞蹈風格，是一種源自於嘻哈文化和其他文化影響開始的社交舞蹈。</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                    <img src="https://assets.juksy.com/files/articles/93539/800x_100_w-5d53e66dc7ce5.jpg" alt="hiphop" height="550px" width="1000px"/>
                    <Carousel.Caption>
                        <h3>Hip-Hop可以包含其他舞蹈形式，從日常生活到自然到甚至電影的虛構角色。</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                    <img src="https://www.xihachina.com/wp-content/uploads/2018/07/315-1PH3125317-50.jpg" alt="hiphop" height="550px" width="1000px"/>
                    <Carousel.Caption>
                        <h3>每一個舞者呈現的Hip-Hop舞蹈可能有所差異，而個人對音樂和動作的詮釋也是帶給此風格最終極的特色。</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <p>其實hip-hop就是各種街舞的總稱，事實上，我們所謂的breakinG DANCE或是OlD SCHOOl正也是屬於hip-hop的一種。這種OlD SCHOOl的舞蹈包含著lOCKING(鎖舞)、popinG(機械舞).breakinG(霹靂舞)、WAvE(電流)這些東西(這種霹靂舞式的舞蹈風格著名的團體是Rock Steady Crew)，他起源於美國街頭的舞者的即興舞蹈動作，這些街頭舞者多半是以黑人或是墨西哥人為主，或許正是所謂的"窮人的娛樂"，這些流行的街舞多半發源自美國紐約的布魯克林區(這一區住的全是一些窮困的黑人或墨西哥人)這些黑人及墨西哥人的孩子們成天在街上混、跳舞，自然而然的行成各種的派系，也很自然的在他們所跳的舞蹈上發展出不一樣的風格。</p>
            <h1 id="popping"></h1>
            <br/><br/><br/>
        </div>
    );
}

export default Hiphop;
