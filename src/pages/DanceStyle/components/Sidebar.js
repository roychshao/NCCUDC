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
                <a href="#dancehall">DANCEHALL</a>
                <a href="#hiphop">HIPHOP</a>
                <a href="#popping">POPPING</a>
                <a href="#jazz">JAZZ</a>
                <a href="#house">HOUSE</a>
                <a href="#waacking">WAACKING</a>
                <a href="#breaking">BREAKING</a>
                <a href="#locking">LOCKING</a>
            </div>

            <div id="main">
                <button class="openbtn" onClick={openNav}>☰ </button> 
            </div>
        </div>
    );
}

export default Sidebar;
