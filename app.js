const title = document.querySelector("div.hello:first-child h1");

console.dir(title);

function handleTitleClick() {
  const ranColor = ["blue", "red", "green", "yellow", "black"];
  let num = Math.floor(Math.random() * ranColor.length);
  title.style.color = ranColor[num];
}
// riverwave99813 weeks ago
// 저처럼 초보이신 분들을 위해.. 검색해온 내용 공유합니다
// Math.floor은 소수점 이하를 버리는 함수고,
// Math.random 은 0~1 사이의 숫자를 랜덤으로 뽑아줍니다 (1 미포함)
// (ex : 0.23012841..)
// ranColor.length는 배열에 있는 요소의 개수를 말해요 = 5개
// Math.random과 ranColor.length를 곱해주면
// 0.xxxx * 5니까 0~5 사이의 소수점이 있는 숫자가 계속 나옵니다
// Math.floor를 통해 소수점을 다 버리도록 해서 정수만 남긴 것을
// ranColor 배열의 index 값으로 사용했네요
// 클릭할때마다 ranColor[1] = "blue"
// ranColor[3] = "yellow"
// 이런식으로 바뀌어서 나옵니다

function handleMouseEnter() {
  title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  title.innerText = "Mouse is gone!";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
