let allSpans = document.querySelectorAll(".buttons span");
let result = document.querySelector(".result > span");
let input = document.querySelector(".input");



allSpans.forEach(span => {
    span.addEventListener("click", (e) => {
        if (e.target.classList.contains("check")) {
            checkItem();
        }
        if (e.target.classList.contains("add")) {
            addItem();
        }
        if (e.target.classList.contains("delete")) {
            deleteItem();
        }
        if (e.target.classList.contains("show")) {
            showItem();
        }
        if (e.target.classList.contains("remove")) {
            removeAllItem();
        }
    })
})
function checkinput() {
    if (input.value === '') {
        result.innerHTML = "Input Cant Be Empty";
    }
}
function checkItem() {
    if (input.value !== '') {
        if (localStorage.getItem(input.value)) {
            result.innerHTML = `Found Local Storage Item called:<span> ${input.value}</span>`;
        } else {
            result.innerHTML = `No Local Storage Item With The Name:<span> ${input.value}</span>`;
        }
    } else {
        checkinput();
    }

}
function addItem() {

    if (input.value !== '') {
        localStorage.setItem(input.value, "test");
        result.innerHTML = `Local Storage Item <span>${input.value}</span>  added`;
        input.value = '';
    } else {
        checkinput();
    }
}
function deleteItem() {
    if (input.value !== '') {
        if (localStorage.getItem(input.value)) {
            localStorage.removeItem(input.value);
            result.innerHTML = ` Local Storage Item called:<span> ${input.value}</span> Deleted`;
            input = '';
        } else {
            result.innerHTML = `No Local Storage Item With The Name:<span> ${input.value}</span>`;
        }
    } else {
        checkinput();
    }
}
function showItem() {
    result.innerHTML = '';
    if (localStorage.length) {
        for (let [key, value] of Object.entries(localStorage)) {
            result.innerHTML += `<div>${key}</div>`;

        }
    } else {
        result.innerHTML = `Local Storage Is Empty`;
    }
}
function removeAllItem() {

    if (localStorage.length) {
        if (alert("Are you sure you want to remove All Items?"));
        for (let [key, value] of Object.entries(localStorage)) {

            localStorage.removeItem(key);

        }
    } else {
        result.innerHTML = `Not found.`;
    }
}
