let list = []
const inpEl = document.getElementById("inp-text")
const addBtn = document.getElementById("submit-btn")
const ulEl = document.getElementById("ul-el")

let liEl = document.getElementsByClassName("li-el")



addBtn.addEventListener("click", function(){
    list = []
    
    list.push(inpEl.value) 
    render()
    inpEl.value = ""
})

function render(){
    let tlist = ""
    for (let i = 0; i < list.length; i++) {
        tlist = `<li class="li-el" onclick="remove_item(this)">${list[i]}</li>`
        ulEl.innerHTML += tlist
    }
}
// list saves old
// onclick li it deletes
function remove_item(selected_item) {
    selected_item.parentNode.removeChild(selected_item);
}
