import React, {useContext} from "react"
import Paper from "@mui/material/Paper"
import TextField from "@mui/material/TextField"
import useInputState from "./hooks/useInputState"
import {DispatchContext} from "./contexts/todos.context";

function TodoForm() {
    const [task, changeTask, resetTask] = useInputState("")
    const dispatch = useContext(DispatchContext)
    return (
        <Paper style={{margin: "1rem 0", padding: "0 1rem"}}>
            <form onSubmit={e => {
                e.preventDefault()
                dispatch({type: "ADD", task: task})
                resetTask()
            }}>
                <TextField
                    value={task}
                    onChange={changeTask}
                    margin="normal"
                    label="Add New Todo"
                    fullWidth
                />
            </form>
        </Paper>
    )
}

export default TodoForm