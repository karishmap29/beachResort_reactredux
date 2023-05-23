import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Review from './Review';
import { useSelector } from 'react-redux';


function Resortview() {

    // var [allresorts, setResorts] = useState([])

    // const fetchres = async () => {
    //     const result = await fetch('/beachresort.json')
    //     result.json().then(data => {
    //         setResorts(data.resorts)
    //     })
    // }

    const params = useParams()
    // console.log(params.id);
    // console.log(allresorts);


    useEffect(() => {

    }, [])

    const { resortList } = useSelector(state => state.resortReducer)  //destructure

    const resort = resortList.find(item => item.id == params.id)
    console.log(resort);

    return (
        <>
            {
                resort ? (
                    <Row>
                        <Col lg={6} md={6} className='ps-5 pt-5 pb-5 ms-5 text-center'>
                            <img style={{ height: '600px' }} src={resort.image}></img>

                        </Col>
                        <Col className='me-5 mt-5'>

                            <ListGroup variant="flush">
                                <ListGroup.Item><h1>{resort.name}</h1>
                                </ListGroup.Item>
                                <ListGroup.Item><h2>{resort.place}</h2></ListGroup.Item>
                                <ListGroup.Item><span>What's Special : <strong>{resort.whats_special}</strong></span></ListGroup.Item>
                                <ListGroup.Item><p>Suggested Suites : <strong>{resort.suggested_suite}</strong></p></ListGroup.Item>
                                <ListGroup.Item><p>Tariff : <strong>{resort.tariff}</strong></p></ListGroup.Item>
                                <ListGroup.Item>
                                    <div className='p-2'><Review reviewData={resort.reviews}></Review></div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                ) : ""

            }
        </>
    )
}

export default Resortview