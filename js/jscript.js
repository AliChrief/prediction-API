window.onload = () => {
  dog_result=document.getElementById("dog-results")

  function getRandomDog(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response)=>response.json())
    .then((data)=>{
          dog_result.innerHTML=`<img src="${data.message}"/>`
          console.log(data.status)

  })
  }
  getRandomDog()

}
const btn=document.getElementById("btn")
let userName = ""

function geta() {
  userName = document.getElementById("user-name").value
 
}

//define the handlers 
btn.addEventListener("onclick", geta)