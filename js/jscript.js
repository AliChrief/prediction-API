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

//get the username
let getUserName = (e) => {
  userName = document.getElementById("user-name").value
  age=document.getElementById("age")
  gender=document.getElementById("gender")
  national=document.getElementById("national")


}
function getGender(){
  fetch(`https://api.genderize.io?name=${userName}`)
  .then((response) => response.json())
  .then((data)=> )
}
function getAge(){
  fetch(`https://api.agify.io/?name=${userName}`)
  .then((response) => response.json())
  .then((data)=> show.innerHTML=data.age)
}
function getNationality(){
  fetch(`https://api.nationalize.io/?name=${userName}`)
  .then((response) => response.json())
  .then((data)=> {
    let country= data.country
    let nat_id = country[0].country_id

    if (country.length==1){
        nat_id=country[0].country_id
    }
    else{
        nat_id = country[0].country_id + "and his second nationality is " + country[1].country_id
    }
  })
}


//define the handlers 


btn.addEventListener('click',() => {    
  getUserName()
  getAge();
  getGender();    
});