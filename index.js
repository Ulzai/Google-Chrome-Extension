let myLeads = []
const inputEl = document.getElementById("input-el")
const saveInput = document.getElementById("save-el") 
const ulEl = document.getElementById("ul-el")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

// in order to save an item from the localStoage and turn it back to an array.
// you need to wrap the localStorage.getItem into a JSON.parse along with the quotation marks because it is a string again
console.log(leadsFromLocalStorage)


saveInput.addEventListener('click', function () {
    myLeads.push(inputEl.value)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderItems()
    inputEl.value = ""
    console.log(localStorage.getItem("myLeads"))

})

function renderItems() {
let listItems = ""
for (let i = 0; i < myLeads.length; i++) {
    listItems+= 
    `<li>
        <a target=_blank href = ${myLeads[i]}>
        ${myLeads[i]}
        </a>
    </li>`
    //listItems +=  "<li><a target='_blank' href=' "+ myLeads[i] +"'> " + myLeads[i] + "</a></li>"
}

ulEl.innerHTML = listItems
}

const recipient = "James"
const sender = "Alexi"
const email = `Hey ${recipient}!
How is it going?
Cheers, ${sender}`

console.log(email)