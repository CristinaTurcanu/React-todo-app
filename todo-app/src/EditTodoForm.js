import React, {useContext} from "react";
import TextField from "@mui/material/TextField";
import useInputState from "./hooks/useInputState";
import {DispatchContext} from "./contexts/todos.context";

function EditTodoForm ({task, id, toggleEditForm}) {
    const [value, handleChange, reset] = useInputState(task)
    const dispatch = useContext(DispatchContext)
    return (
        <form onSubmit={(e)=> {
            e.preventDefault()
            dispatch({type: "EDIT", id: id, newTask: value})
            reset()
            toggleEditForm()
        }}
            style={{marginLeft: "1rem", width: "50%"}}
        >
            <TextField
                value={value}
                margin="normal"
                onChange={handleChange}
                fullWidth
                autoFocus
            />
        </form>
    )
}
export default EditTodoForm