
function addItem() {
    let displaytodo = document.querySelector('.display');
    let input = document.querySelector('#todo');
    let element = document.createElement("div");

    if (input.value != "") {

        element.innerHTML = `${input.value}
        <span>
            <button><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
            <button><i class="fa fa-trash" aria-hidden="true"></i></button>
        </span>`;

        displaytodo.appendChild(element);
        input.value = "";
    } else {
        alert("Add task before add")
    }

    return element;
}

let addbtn = () => {

    let node = addItem();

    //Edit todo button 
    let edit = node.querySelectorAll('button')[0];
    edit.addEventListener('click', () => {
        let newVal = prompt('Enter new task')
        edit.parentNode.parentNode.firstChild.nodeValue = newVal;

    })

    //Delete Todo button
    let del = node.querySelectorAll('button')[1];
    del.addEventListener('click', () => {
        del.parentElement.parentElement.remove();
    })
}

//Add todo button 
let add_btn = document.querySelector('#submit-btn');
add_btn.addEventListener('click', addbtn)

