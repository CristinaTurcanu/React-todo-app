import TextField from "@mui/material/TextField";
import useInputState from "./hooks/useInputState";

function EditTodoForm ({task, id, editTodo, toggleEditForm}) {
    const [value, handleChange, reset] = useInputState(task)
    return (
        <form onSubmit={(e)=> {
            e.preventDefault()
            editTodo(id, value)
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