import { React, useEffect, useState } from 'react';
import Resortcard from './Resortcard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import { restList } from '../actions/resortaction';





function Resort() {

    // var [resortList, setResort] = useState([])

    // const fetchData = async () => {
    //     const result = await fetch('/beachresort.json')
    //     result.json().then(
    //         data => {
    //             setResort(data.resorts)
    //         }
    //     )
    // }console.log(resortList);

    const dispatch = useDispatch()

    useEffect(() => {


        dispatch(restList())
    }, [])

    const { resortList } = useSelector(state => state.resortReducer)  //destructure


    return (
        <Row>
            {
                resortList.map(item => (
                    <Col lg={4} md={6}>
                        <Resortcard resdata={item}></Resortcard>
                    </Col>
                ))
            }
        </Row>
    )
}

export default Resort