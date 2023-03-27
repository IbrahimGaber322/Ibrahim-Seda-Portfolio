import {React, useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function BackToTop(){
    const [show,setShow] = useState({visibility:"hidded"});
    useEffect(() => {
        const showButton = () => {
          let pos = window.scrollY;
          if (typeof window !== "undefined") {
            if (pos < 400) {
              setShow({visibility:"hidden" });
            } else if (pos >= 400) {
              setShow({visibility:"visible" });
            }
          }
        }
        showButton();
          if (typeof window !== "undefined") {
            window.addEventListener("scroll", showButton);
            window.addEventListener("resize", showButton);
            return () => {
              window.removeEventListener("scroll", showButton);
              window.removeEventListener("resize", showButton);
            };
          }
          
        },[]);
    return (
      <>
         <OverlayTrigger
          placement="left"
          overlay={
            <Tooltip id="overlay">
              Back to Top
            </Tooltip>
          }
        >
          <Button href='#home' style={show} className="back-to-top rounded-circle p-1 m-2"><ExpandLessIcon fontSize="large" /></Button>
        </OverlayTrigger>
      </>
    );
}

export default BackToTop;



