import React from "react";
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';

//Sorts Characters by Name or Shows main or side characters
function SortButtons(props){
    return (
        <Container>
            <Row className = "sort">
                <Col>
                <button className="btn btn-primary" onClick={()=>props.sName()}>Sort By Name</button>
                <button className="btn btn-primary" onClick={()=>props.sGame()}>Sort By Game</button>
                <button className="btn btn-primary" onClick={()=>props.sMain()}>Show Main Characters</button>
                <button className="btn btn-primary" onClick={()=>props.sSide()}>Show Side Characters</button>
                </Col>
            </Row>
        </Container>
    )
};

export default SortButtons;