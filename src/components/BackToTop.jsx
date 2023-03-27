import React from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function BackToTop(){
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
          <Button href='#home' className="back-to-top rounded-circle p-1 m-2"><ExpandLessIcon fontSize="large" /></Button>
        </OverlayTrigger>
      </>
    );
}

export default BackToTop;



