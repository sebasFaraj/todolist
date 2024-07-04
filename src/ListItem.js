export const ListItem = (props) =>
{
    return(
    <div className = "listItem">
        <h1>{props.name}</h1>
        <h2>{props.id}</h2>
        <button type = "button" onClick = {() => props.removeTask(props)}>X</button>
    </div>
    );
}


