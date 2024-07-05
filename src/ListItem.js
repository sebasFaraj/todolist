export const ListItem = (props) =>
{
    return(
    <div className = "listItem">
        <h1 className = "itemName">{props.name}</h1>
        <button className = "checkbox" type = "button" onClick = {() => props.removeTask(props)}>X</button>
    </div>
    );
}


