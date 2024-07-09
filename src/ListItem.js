function showEditOption (textInputs, submitButtons, props)
{  
    submitButtons[props.id - 1].style.display = "block";
    textInputs[props.id - 1].style.display = "block";
}

export const ListItem = (props) =>
{
    const textInputs = document.getElementsByClassName("changeTask");
    const submitButtons = document.getElementsByClassName("submit");

    return(
    <div className = "listItem">
        <div className = "firstRow">
            <h1 className = "itemName">{props.name}</h1>
            <button className = "edit" type = "button" onClick = {() => showEditOption(textInputs, submitButtons, props)}>Edit</button>
            <button className = "checkbox" type = "button" onClick = {() => props.removeTask(props)}>X</button>
        </div>
        
        <div className = "secondRow">
            <input className = "changeTask" type = "input"></input>
            <button className = "submit" type = "button" onClick = {() => props.editTask(props, textInputs[props.id - 1], submitButtons[props.id - 1])}>Submit</button>
        </div>
    </div>
    );
}


