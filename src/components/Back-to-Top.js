import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'



const useRWD = () => {
    const [btnsize, setBtnsize] = useState("lg");
    const handleRWD = () => {
        if(window.innerWidth > 768) {
            setBtnsize("lg");
        } else {
            setBtnsize("md");
        }
    }

    useEffect( () => {
        window.addEventListener('resize', handleRWD);
        handleRWD();
        return(()=>{
            window.removeEventListener('resize', handleRWD);
        })
    }, [])
    return btnsize;
}

export const BackToTop = () => {
    
    const [show, switchShow] = useState(false);
    const btnsize = useRWD();

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
        <Button variant="outline-success" size={btnsize} id="toggle-button" onClick={()=>window.scrollTo(0, 0)}>TOP</Button>
    );
}

export default BackToTop;
