import React from "react";
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';

function Main(props){
    return (
        <Container>
            <Row className="chars">
                <Col xs={8} className="info">Name: {props.name} | Game: {props.game}</Col>
                <Col><img className="icon" src={props.icon} alt="icon"></img></Col>
            </Row>
        </Container>
    )
};

export default Main;