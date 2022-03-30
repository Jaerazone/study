const images = ["0.jpg","1.jpg"]; 
const choseImage = images[ Math.floor(Math.random()*images.length)];

const bodyBackground = document.querySelector("body");

bodyBackground.style.background = `url(./img/${choseImage})`;//이미지 파일이름 추가
//CSS style을 이용해서 bodyBackground에 추가
//style =  " background : url= "./img/0.jpg";"