const hardwareUrl = "http://localhost:8080/hardware_type";
const productUrl = "http://localhost:8080/event?main_id=0";



///ES6 syntax async await function

async function getHardware() {
    let response = await fetch(hardwareUrl, { method: "GET" })
    let data= await response.json()
    data.map((item) => {
        let element = document.createElement("option") //create <option></option>
        let text = document.createTextNode(item.hardware_name) //create laptop
        element.appendChild(text) //create <option>laptop</option>
        element.value=item.hardware_name//create <option value="1">laptop</option>
        document.getElementById("system").appendChild(element) //create 
        //<select><option>laptop</option></select>
        
        
    })
}

//rest URL
const getRest = async () => {
    let product_id = document.getElementById("system").value;
    let hard_pro = document.getElementsByClassName("restSelect")[0];

    let response = await fetch(`${productUrl} ${product_id}`, { method: 'GET' })
    let data = await response.json()
    data.map((item) => {
        let element = document.createElement("option")
        let text = document.createTextNode(`${item.name}|${item.company}`)
        element.appendChild(text)
        document.getElementById('system').appendChild(element) 
       
    })

}

// function getHardware() {
//     fetch(hardware, { method: "GET" })
//         .then((res) => res.json())
//         .then((data) =>
//         {
//             data.map((item) => {
//                 let element = document.createElement("option") //create <option></option>
//                 let text = document.createTextNode(item.name) //create laptop
//                 element.appendChild(text) //create <option value="1">laptop</option>
//                 element.value=item.name
//                 document.getElementById("system").appendChild(element) //create
//                 //<select><option>laptop</option></select>
                
                
//             })
//     })
// }


