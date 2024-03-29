import React, {useContext} from "react"
import Paper from "@mui/material/Paper"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import TodoItem from "./TodoItem"
import {TodosContext} from "./contexts/todos.context";

function TodoList() {
    const todos = useContext(TodosContext)
    if (todos.length) return (
        <Paper>
            <List>
                {todos.map((todo, i) => (
                    <>
                        <TodoItem
                            {...todo}
                            key={todo.id}
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