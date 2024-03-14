

let todoList = ["Reading", "TV", "Football"]

while(true) {
    // ask what they want to do and save it to a variable
    let reqst = prompt("What would you like to do?").toLowerCase();
// a new thing to do 
    if (reqst === "new"){
        //ask what to do
        newTodo = prompt("Enter new todo")
        todoList.push(newTodo)
        console.log(`${newTodo} added to the list.`)
    }

    // list the todo list
    if (reqst === "list") {
        // for (let i=0; i < todoList.length; i++){
        //    console.log(`${i}: ${todoList[i]}`);
        // }
        console.log("**************")
        for (let el of todoList) {
            console.log(`${todoList.indexOf(el)}: ${el}`)
        }
        console.log("**************")
    }

    // delete something form the list
    if (reqst === "delete") {
        //ask the index to be deleted
        ind = parseInt(prompt("Enter index of todo to delete"))
        rmvd = todoList.splice(ind,1)
        console.log(`${rmvd[0]} deleted`)
    }

    if (reqst === "quit") {
        console.log(`BYE`)
        break;
    }

}
// quit the app
