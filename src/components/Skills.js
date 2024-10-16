// src/components/Skills.js
import React from 'react';
import { ListGroup } from 'react-bootstrap';

function Skills() {
  return (
    <div>
      <h1>My Skills</h1>
      <ListGroup variant="flush">
        <ListGroup.Item>Basic Java Programming</ListGroup.Item>
        <ListGroup.Item>Basic Blender</ListGroup.Item>
        <ListGroup.Item>HTML</ListGroup.Item>
        <ListGroup.Item>Git & GitHub</ListGroup.Item>
        <ListGroup.Item>CSS</ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default Skills;
