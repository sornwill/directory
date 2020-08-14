import React from "react";
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';

//Displays characters
function Main(props){
    return (
        <Container>
            <Row className="chars">
                <Col xs={8} className="info">
                    <ul>
                        <li>Name: {props.name}</li>
                        <li>Game: {props.game} </li>
                        <li>Trait: {props.trait}</li>
                    </ul>
                </Col>
                <Col><img className="icon" src={props.icon} alt="icon"></img></Col>
            </Row>
        </Container>
    )
};

export default Main;