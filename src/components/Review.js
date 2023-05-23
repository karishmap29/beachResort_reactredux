import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

function Review({ reviewData }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button className="mb-5"
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                 View Reviews
            </Button>
            
                <Collapse in={open} dimension="width">
                    <div id="example-collapse-text" >
                        {
                            reviewData.map(item => (
                                <div style={{ width: '400px' }}>
                                    <h6>{item.name} : {item.date}</h6>
                                    <p>Rating : {item.rating}</p>
                                    <p>{item.comments}</p>
                                
                                </div>
                            ))


                        }

                    </div>
                </Collapse>
            
        </>
    )
}

export default Review