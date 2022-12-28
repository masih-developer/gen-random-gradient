const $ = document;
const body = $.querySelector("body");
const colorA = $.getElementById("color-a");
const colorB = $.getElementById("color-b");
const positionBtns = $.querySelectorAll(".buttons > button");
const submitBtn = $.getElementById("submit");
const codeText = $.getElementById("code");
const copyBtn = $.getElementById("copy");

const createBgColor = () => {
    let activePosition = $.querySelector(".active").dataset.position;
    let resultValue = `background: linear-gradient(${activePosition}, ${colorA.value}, ${colorB.value});`;
    body.style.cssText = resultValue;
    codeText.innerHTML = resultValue;
};

positionBtns.forEach((item) => {
    item.addEventListener("click", () => {
        $.querySelector(".active").classList.remove("active");
        item.classList.add("active");
    });
});

submitBtn.addEventListener("click", createBgColor);
window.addEventListener("load", createBgColor);

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(codeText.innerHTML)
        ? alert(`Copied:\n${codeText.innerHTML}`)
        : "";
});
