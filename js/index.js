let NumberNode = document.querySelector(`#cc-number`);
let NameNode = document.querySelector(`#cc-name`);
let dateNode = document.querySelector(`#cc-expiration`);
let cvvNode = document.querySelector(`#cc-cvv`);
let btnNode = document.querySelector(`.btn`);
let invalidNameNode = document.querySelector(`#invalidName`);
let invalidNumberNode = document.querySelector(`#invalidNumber`);
let invalidDateNode = document.querySelector(`#invalidDate`);
let invalidCVVNode = document.querySelector(`#invalidCVV`);
let qqNode = document.querySelector(`#super`);
let prizeNode = document.querySelector(`#prize`);
let picNode = document.querySelector(`#pic`);
let shellyNode = document.querySelector(`.shelly`);
let shellyThinkNode = document.querySelector(`.shelly-photo`);
let coltNode = document.querySelector(`.colt`);
let coltThinkNode = document.querySelector(`.colt-photo`);
let counterNode = document.querySelector(`#counter`);
let monetNode = document.querySelector(`.monet`);
let prize = ["bea.png", "colt.png","lola.png", "shelly.png"];
let c1 = false;
let c2 = false;
let c3 = false;
let c4 = false;
let count = 0

function getRandInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


btnNode.addEventListener(`click`, function () {
    if (!(String(NameNode.value).includes(` `))) {
        invalidNameNode.classList.remove(`d-none`);
        c1 = false;
    } else {
        invalidNameNode.classList.add(`d-none`);
        c1 = true;
    }
    if ((NumberNode.value.length == 16 || NumberNode.value.length == 19)) {
        invalidNumberNode.classList.add(`d-none`);
        c2 = true;
    } else {
        invalidNumberNode.classList.remove(`d-none`);
        c2 = false;
    } if ((dateNode.value.length == 5) && (dateNode.value.includes(`/`))) {
        invalidDateNode.classList.add(`d-none`);
        c3 = true;
    } else {
        invalidDateNode.classList.remove(`d-none`);
        c3 = false;
    } if (cvvNode.value.length == 3) {
        invalidCVVNode.classList.add(`d-none`);
        c4 = true;
    } else {
        invalidCVVNode.classList.remove(`d-none`);
        c4 = false;
    } if (c1 == true && c2 == true && c3 == true && c4 == true) {
        qqNode.classList.add(`d-none`);
		let pic = prize[getRandInt(0,prize.length -1)];
		picNode.src = `assets/${pic}`
        prizeNode.classList.remove(`d-none`);
    }
});

shellyNode.addEventListener(`mousemove`, function () {
    shellyThinkNode.classList.remove(`d-none`);
    shellyThinkNode.classList.remove(`animate__fadeOut`);
    shellyThinkNode.classList.add(`animate__fadeIn`);
    shellyNode.classList.remove(`animate__zoomIn`);
    shellyNode.classList.add(`animate__bounce`);
});

shellyNode.addEventListener(`mouseout`, function(){
    shellyThinkNode.classList.remove(`animate__fadeIn`);
    shellyThinkNode.classList.add(`animate__fadeOut`);
    shellyNode.classList.remove(`animate__bounce`);
});

coltNode.addEventListener(`mousemove`, function () {
    coltThinkNode.classList.remove(`d-none`);
    coltThinkNode.classList.remove(`animate__fadeOut`);
    coltThinkNode.classList.add(`animate__fadeIn`);
    coltNode.classList.remove(`animate__zoomIn`);
    coltNode.classList.add(`animate__bounce`);
});

coltNode.addEventListener(`mouseout`, function(){
    coltThinkNode.classList.remove(`animate__fadeIn`);
    coltThinkNode.classList.add(`animate__fadeOut`);
    coltNode.classList.remove(`animate__bounce`);
});

monetNode.addEventListener(`click`, function(){
    count += 10;
    counterNode.innerHTML = `Твои кубки: ${count}`;
});
