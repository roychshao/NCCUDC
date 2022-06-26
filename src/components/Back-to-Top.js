import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'


export const BackToTop = () => {

    const buttonStyle = {
        marginLeft: "100px",
        marginTop: "850px",
        position: "fixed",
    }
    
    const [show, switchShow] = useState(false);

    useEffect(() => {
        const listener = () => {
            switchShow(window.scrollY > 300)
        }
        document.addEventListener('scroll', listener);
        var tb = document.getElementById('toggle-button');
        if(show)
            tb.style.display = "block";
        else
            tb.style.display = "none";
        return () => document.removeEventListener('scroll', listener);
    }, [show])


    return (
        <Button variant="outline-success" size="lg" style={buttonStyle} id="toggle-button" onClick={()=>window.scrollTo(0, 0)}>TOP</Button>
    );
}

export default BackToTop;
