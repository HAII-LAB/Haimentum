const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text){ // 로컬 저장소에 유저 이름 저장
    localStorage.setItem(USER_LS, text);
}  

function handleSubmit(event){ // Submit Event 에서 수행할 작업
    event.preventDefault(); // 기본값이 새로고침 -> 무반응
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){ // 유저 이름 Submit 처리
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}
function paintGreeting(text) { // 유저 이름 화면 출력
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}
  
function loadName() { // 유저 이름의 저장 상태에 따라 함수 호출
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}
function init(){
    loadName();    
}
init();