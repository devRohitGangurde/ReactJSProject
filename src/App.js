import "./App.css";

import React, { useState } from "react";
import "./App.css";
import { Button, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [counterValue, setCounterValue] = useState(0);
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const FormTodo = () => {
    const [value, setValue] = React.useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };

    return (
      <Form>
        <Form.Group className="mb-3" >
          <Form.Label>
            <b>Add Todo</b>
          </Form.Label>
          <Form.Control
            type="text"
            className="input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Add new todo"
          />
        </Form.Group>
        <Button variant="success" type="submit" onClick={()=>addTodo(value)}>
          Submit
        </Button>
      </Form>
    );
  };

  function Todo({ todo, index, markTodo, removeTodo }) {
    return (
      <div
        className="todo"
      >
        <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
        <div>
          <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
          <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
        </div>
      </div>
    );
  }
  

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <FormTodo addTodo={addTodo} />
        <div>
        {todos.map((todo, index) => (
          <Card>
            <Card.Body>
              <Todo
              key={index}
              index={index}
              todo={todo}
              markTodo={markTodo}
              removeTodo={removeTodo}
              />
            </Card.Body>
          </Card>
        ))}
      </div>
      </div>
    </div>
  );
}

export default App;
