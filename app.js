let myEmojis = ["👨‍💻","🍲","🎨", "😴"];
const emojiContainer = document.querySelector(".emoji-container");
const emojiInput = document.querySelector("#emoji-input");
const pushBtn = document.querySelector("#push-btn");
const unshiftBtn = document.querySelector("#unshift-btn");
const shiftBtn = document.querySelector("#shift-btn");
const poptBtn = document.querySelector("#pop-btn");

const emojisFromLocalStorage = JSON.parse(localStorage.getItem("myEmojis"));

if(emojisFromLocalStorage) {
    myEmojis = emojisFromLocalStorage;
    renderEmojis();
}

function renderEmojis() {
    let emojis = "";
    for(let i = 0; i < myEmojis.length; i++) {
        emojis += `
        <span class="emojis">${myEmojis[i]}</span>
        `
    }
    emojiContainer.innerHTML = emojis;
}
renderEmojis();

pushBtn.addEventListener("click", function() {
    if(emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = "";
        localStorage.setItem("myEmojis", JSON.stringify(myEmojis));
        renderEmojis();
    }
})

unshiftBtn.addEventListener("click", function() {
    if(emojiInput.value) {
        myEmojis.unshift(emojiInput.value);
        emojiInput.value = "";
        localStorage.setItem("myEmojis", JSON.stringify(myEmojis));
        renderEmojis();
    }
})

poptBtn.addEventListener("click", function() {
    myEmojis.pop();
    localStorage.setItem("myEmojis", JSON.stringify(myEmojis));
    renderEmojis();
})

shiftBtn.addEventListener("click", function() {
    myEmojis.shift();
    localStorage.setItem("myEmojis", JSON.stringify(myEmojis));
    renderEmojis();
})

