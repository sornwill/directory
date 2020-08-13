import React from "react";
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';

function SortButtons(props){
    return (
        <Container>
            <Row>
                <Col><button className="btn btn-primary">Sort By Name</button></Col>
                <Col><button className="btn btn-primary">Show Main Characters</button></Col>
                <Col><button className="btn btn-primary">Show Side Characters</button></Col>
            </Row>
        </Container>
    )
};

export default SortButtons;