import React from "react"
import Paper from "@mui/material/Paper"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import TodoItem from "./TodoItem"

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
    if (todos.length) return (
        <Paper>
            <List>
                {todos.map((todo, i) => (
                    <>
                        <TodoItem
                            task={todo.task}
                            completed={todo.completed}
                            key={todo.id}
                            id={todo.id}
                            removeTodo={removeTodo}
                            toggleTodo={toggleTodo}
                            editTodo={editTodo}
                        />
                        {i < todos.length - 1 && <Divider />}
                    </>
                ))}
            </List>
        </Paper>
    )
    return null
}

export default TodoList