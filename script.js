//your JS code here. If required.
let codes = document.querySelectorAll(".code")

codes.forEach((val, index) => {

    val.addEventListener("input", (e) => {
        let value1 = e.target.value
        if (value1) {
            if (index < codes.length - 1) {
                codes[index + 1].focus()
            }
        }

    })

    val.addEventListener("keydown", (e) => {
        let keypress = e.key
        let value2 = e.target.value
        if (keypress == "Backspace") {


            if(value2==""){
                
                codes[index-1].focus()
                codes[index-1].value=""
            }
            else{
                e.target.value=""
            }
        }

    })

})



