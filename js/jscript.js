window.onload = () => {

  dog_result=document.querySelector("#dog-results")

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