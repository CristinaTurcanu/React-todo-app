import React from "react"
import Typography from "@mui/material/Typography"
import Paper from "@mui/material/Paper"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Grid from "@mui/material/Grid"
import TodoList from "./TodoList"
import TodoForm from "./TodoForm"
import {TodosProvider} from "./contexts/todos.context";

function TodoApp() {
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
                    <TodosProvider>
                        <TodoForm />
                        <TodoList />
                    </TodosProvider>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default TodoApp
