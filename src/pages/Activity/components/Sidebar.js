import './../index.css'

const Sidebar = () => {


    const openNav = () => {
        document.getElementById("mySidebar").style.width = "200px";
        document.getElementById("main").style.marginLeft = "200px";
        document.getElementById("obtn").style.display = "none";
    }

    const closeNav = () => {
        document.getElementById("mySidebar").style.width = "0px";
        document.getElementById("main").style.marginLeft= "0px";
        document.getElementById("obtn").style.display = "block";
    }

    const scroll = (id) => {
        var e = document.getElementById(id);
        e.scrollIntoView();
    }

    return (
        <div>
            <div id="mySidebar" className="sidebar">
                <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>×</a>
                <a href="javascript:void(0)" onClick={()=>scroll("迎新舞展")}>迎新舞展</a>
                <a href="javascript:void(0)" onClick={()=>scroll("college_high")}>COLLEGE HIGH</a>
                <a href="javascript:void(0)" onClick={()=>scroll("社內盃")}>社內盃</a>
                <a href="javascript:void(0)" onClick={()=>scroll("聖誕小成")}>聖誕小成</a>
                <a href="javascript:void(0)" onClick={()=>scroll("世政輔")}>世政輔</a>
                <a href="javascript:void(0)" onClick={()=>scroll("四校party")}>四校party</a>
                <a href="javascript:void(0)" onClick={()=>scroll("CC combat")}>CC combat</a>
                <a href="javascript:void(0)" onClick={()=>scroll("成果發表")}>成果發表</a>
                <a href="javascript:void(0)" onClick={()=>scroll("幹訓")}>幹訓</a>
            </div>

            <div id="main">
                <button class="openbtn" onClick={openNav} id="obtn">☰ </button> 
            </div>
        </div>
    );
}

export default Sidebar;
