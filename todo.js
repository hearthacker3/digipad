console.log("deep")
let input = document.getElementById("text")



function notepad() {

    if (input.value === "") {
        alert("Write something..")
    }

    else {
        let li = document.createElement("li")
        let p=document.createElement("p")
        p.innerHTML = input.value
        li.appendChild(p)
        input.value = ""
        let img = document.createElement("img")
        img.src = "del2.png"
        li.appendChild(img)
        listcontainer.appendChild(li)

        saveData()

    }



}

listcontainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove()

    }
    saveData()

})

input.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        event.preventDefault();
        // event.preventDefault();
        document.getElementById("note").click();
    }
});
const saveData = () => {
    localStorage.setItem("NoteData", listcontainer.innerHTML)
}

const getData = () => {
    listcontainer.innerHTML = localStorage.getItem('NoteData')
}

getData();



