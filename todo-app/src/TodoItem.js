import React from "react"
import EditTodoForm from "./EditTodoForm"
import useToggleState from "./hooks/useToggleState"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Checkbox from "@mui/material/Checkbox"
import IconButton from "@mui/material/IconButton"
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from "@mui/icons-material/Edit"
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction"

function TodoItem({ task, completed, id, removeTodo, toggleTodo, editTodo }) {

    const [isEditing, toggle] = useToggleState(false)

    return (
        <ListItem>
            {isEditing ? (
                <EditTodoForm
                    task={task}
                    editTodo={editTodo}
                    id={id}
                    toggleEditForm={toggle}
                />
            ) : (
                <>
                    <Checkbox
                        tabIndex={-1}
                        checked={completed}
                        onClick={() => toggleTodo(id)}
                    />
                    <ListItemText style={{textDecoration: completed ? "line-through" : "none"}}>
                        {task}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton
                            aria-label="Delete"
                            onClick={() => removeTodo(id)}
                        >
                            <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label="Edit" onClick={toggle}>
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            )}
        </ListItem>
    )
}

export default TodoItem