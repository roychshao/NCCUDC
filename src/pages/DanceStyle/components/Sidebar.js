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
            <div id="mySidebar" class="sidebar">
                <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>×</a>
                <a href="javascript:void(0)" onClick={()=>scroll("dancehall")}>DANCEHALL</a>
                <a href="javascript:void(0)" onClick={()=>scroll("hiphop")}>HIPHOP</a>
                <a href="javascript:void(0)" onClick={()=>scroll("popping")}>POPPING</a>
                <a href="javascript:void(0)" onClick={()=>scroll("jazz")}>JAZZ</a>
                <a href="javascript:void(0)" onClick={()=>scroll("house")}>HOUSE</a>
                <a href="javascript:void(0)" onClick={()=>scroll("waacking")}>WAACKING</a>
                <a href="javascript:void(0)" onClick={()=>scroll("breaking")}>BREAKING</a>
                <a href="javascript:void(0)" onClick={()=>scroll("locking")}>LOCKING</a>
            </div>

            <div id="main">
                <button class="openbtn" onClick={openNav} id="obtn">☰ </button> 
            </div>
        </div>
    );
}

export default Sidebar;
