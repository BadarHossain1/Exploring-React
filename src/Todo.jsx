// export default function Todo({task, isDone}){
//     // task can be changed because its another variable but if its props then it is only readable and cannot be changed
//     return(
//         <li>Task: {task}</li>


//     )
// }

// conditional rendering
export default function Todo({task, isDone}){
    // if(isDone === true){
    //     return <li>Finished {task}</li>
    // }
    // else{
    //     return <li>Unfinished Task: {task}</li>
    // }

    return(
        // <li>Task: {task} is {isDone ? "Done" : "Not Done"}</li>
        <li>Task: {task} is {isDone && 'Not complete'}</li>
    )
}