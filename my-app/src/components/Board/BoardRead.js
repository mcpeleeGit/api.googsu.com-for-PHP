import React, { Component } from 'react';
import './Board.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
export class BoardRead extends Component {

    render() {
        return (
            <div>
                <h1 id="tabelLabel">Cras justo odio</h1>
                <ListGroup>
                    <ListGroup.Item>
React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.

As one of the oldest React libraries, React-Bootstrap has evolved and grown alongside React, making it an excellent choice as your UI foundation.
                    </ListGroup.Item>
                </ListGroup>
                <p />
                <div className="div-board-button">
                    <Button href="/board-update" variant="outline-primary">Update</Button>{' '}
                    <Button variant="outline-danger">Delete</Button>{' '}
                </div>

            </div>
        );
    }

}
