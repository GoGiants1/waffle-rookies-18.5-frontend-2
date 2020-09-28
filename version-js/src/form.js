const form = document.querySelector(".js-form");
const output = document.querySelector(".js-output");
const input = form.querySelector("input");


let players= [
    {
    
        playername: '이대호',
        position: '지명타자',
        team: '롯데 자이언츠'
    },
    {
        
        playername: '손아섭',
        position: '우익수',
        team: '롯데 자이언츠'
    },
    {
        
        playername: '김원중',
        position: '지명타자',
        team: '롯데 자이언츠'
    }
];



let submit = document.getElementById("submit");



submit.onclick = () =>  {
    
    
    const name = document.getElementById("name").value;
    const pos = document.getElementById("position").value;
    const tm = document.getElementById("team").value;
    
    let curtext = "선수명: "+name+" 포지션: "+pos+" 소속구단: "+tm+" ";
    outputList(curtext);
    console.log(curtext);

}

function outputList(text) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "좋아요";
    button.className = "increase";
    span.innerHTML = text;
    span.appendChild(button);
    li.appendChild(span);
    output.appendChild(li);
}

