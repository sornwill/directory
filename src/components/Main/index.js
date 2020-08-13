import React from "react";
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';

function Main(props){
    return (
        <Container>
            <Row>
                <Col xs={8}>1 of 2</Col>
                <Col>2 of 2</Col>
            </Row>
        </Container>
    )
};

export default Main;