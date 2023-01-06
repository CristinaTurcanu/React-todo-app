import React, { useState, useEffect } from "react"
import Typography from "@mui/material/Typography"
import Paper from "@mui/material/Paper"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Grid from "@mui/material/Grid"
import TodoList from "./TodoList"
import TodoForm from "./TodoForm"
import useTodoState from "./hooks/useTodoState";
import {v4 as uuidv4} from "uuid";

function TodoApp() {
    const initialTodos = [
        { id: uuidv4(), task: "Buy food", completed: false },
        { id: uuidv4(), task: "Drink Coffee", completed: false },
        { id: uuidv4(), task: "Wash car", completed: false }
    ]
    const {todos, addTodo, removeTodo, toggleTodo, editTodo} = useTodoState(initialTodos)

    return (
        <Paper style={{
            padding: 0,
            margin: 0,
            height: "100vh",
            backgroundColor: "#fafafa"
        }}
               elevation={0}
        >
            <AppBar
                color="primary"
                position="static"
                style={{ height: "64px" }}
            >
                <Toolbar>
                    <Typography
                        color="inherit"
                    >
                        Todos With Hooks
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify="center" style={{marginTop: "1rem"}}>
                <Grid item xs={11} md={8} ls={4}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList
                        todos={todos}
                        removeTodo={removeTodo}
                        toggleTodo={toggleTodo}
                        editTodo={editTodo}
                    />
                </Grid>
            </Grid>
        </Paper>
    )
}

export default TodoApp
