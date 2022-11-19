let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");
let screenValue = '';
console.log(screen);
    for (const index of buttons) {
        index.addEventListener("click",(e)=> {
            let buttontext=e.target.innerText;
            if (buttontext == "X") {
                buttontext = '*';
                screen.value=screen.value+buttontext;
            }
            else if (buttontext == "=") {
                screen.value=eval(screen.value);
            }
            else if (buttontext=="C")
            {
                screen.value="";
            }
            else
            {
                screen.value=screen.value+buttontext;
            }
        });
    }