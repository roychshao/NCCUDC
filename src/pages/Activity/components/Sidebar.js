import './../index.css'

const Sidebar = () => {


    const openNav = () => {
        document.getElementById("mySidebar").style.width = "200px";
        document.getElementById("main").style.marginLeft = "200px";
    }

    const closeNav = () => {
        document.getElementById("mySidebar").style.width = "0px";
        document.getElementById("main").style.marginLeft= "0px";
    }

    return (
        <div>
            <div id="mySidebar" class="sidebar">
                <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>×</a>
                <a href="#迎新舞展">迎新舞展</a>
                <a href="#college_high">COLLEGE HIGH</a>
                <a href="#社內盃">社內盃</a>
                <a href="#聖誕小成">聖誕小成</a>
                <a href="#世政輔">世政輔</a>
                <a href="#四校party">四校party</a>
                <a href="#CC combat">CC combat</a>
                <a href="#成果發表">成果發表</a>
                <a href="#幹訓">幹訓</a>
            </div>

            <div id="main">
                <button class="openbtn" onClick={openNav}>☰ </button> 
            </div>
        </div>
    );
}

export default Sidebar;
