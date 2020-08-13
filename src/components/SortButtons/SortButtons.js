import React from "react";
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';

//Sorts Characters by Name or Shows main or side characters
function SortButtons(sortName, showMain, showSide){
    return (
        <Container>
            <Row className = "sort">
                <Col xs="4"><button className="btn btn-primary" onClick={sortName}>Sort By Name</button></Col>
                <Col xs="4"><button className="btn btn-primary">Show Main Characters</button></Col>
                <Col xs="4"><button className="btn btn-primary">Show Side Characters</button></Col>
            </Row>
        </Container>
    )
};

export default SortButtons;