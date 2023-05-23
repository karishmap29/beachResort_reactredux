import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function Resortcard({resdata}) {
  return (
   <>
        <Link to={`/view-resort/${resdata.id}`} style={{textDecoration:'none'}}>
            <Card style={{ width: '18rem' }} className="m-5 text-primary">
              <Card.Img  variant="top" src={resdata.image} />
              <Card.Body>
                <Card.Title className='text-center'>{resdata.name}</Card.Title>
                <Card.Text className='text-center'>
                  {resdata.place}
                </Card.Text>
                
              </Card.Body>
            </Card>
        </Link>
   </>
  )
}

export default Resortcard