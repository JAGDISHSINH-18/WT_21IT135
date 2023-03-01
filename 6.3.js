let btn = document.getElementById('submit');
        btn.onclick = () => {
            let name = document.getElementById('name');
            let id = document.getElementById('id');
            let br = document.getElementById('br');
            let p = document.getElementById('p');
            try {
                if (name.value == "" || id.value == "" || br.value == "") {
                    throw new Error("NULL Value NOT allowed")
                }
                else if (br.value != "it" && br.value != "ce" && br.value != "cse") {
                    throw new Error("invilide branch")
                }
                else{
                    p.innerHTML = "success" 
                }
            } catch (error) {
                p.innerHTML = "Error: " + error.message;
            }
        }
