//Get Students


fetch('http://localhost/Back/api/read.php')
  .then((response) => response.json())
  .then((res) => {
    //if there is data
    const list=document.querySelector("#student-list")
    
    for(let student of res.data){
      console.log("student=",student)
      const {firstname,lastname,rollno}=student
      const row=document.createElement("tr")
      row.innerHTML=`
        <td>${firstname}</td>
        <td>${lastname}</td>
        <td>${rollno}</td>
        <td>
        <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
        <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
        </td>
      `
      list.appendChild(row)

    }
      
    
  });



let selectedRow=null

//Show Alerts
const showAlert=(message,className)=>{
  const div=document.createElement("div")
  div.className=`alert alert-${className}`

  div.appendChild(document.createTextNode(message))
  const container=document.querySelector(".container")
  const main=document.querySelector(".main")
  container.insertBefore(div,main)

  setTimeout(()=>document.querySelector(".alert").remove(),2000)

}

//Clear All Fields

const clearFields=()=>{
  document.querySelector("#firstName").value=""
  document.querySelector("#lastName").value=""
  document.querySelector("#rollNo").value=""
}

//Add Data

document.querySelector("#student-form").addEventListener("submit",(e)=>{
  e.preventDefault()

  //Get Form Values
  const firstName=document.querySelector("#firstName").value
  const lastName=document.querySelector("#lastName").value
  const rollNo=document.querySelector("#rollNo").value

  //validate
  if(firstName=="" || lastName=="" || rollNo=="")
    showAlert("Please fill in all fields","danger")
  else if(selectedRow==null){
    const list=document.querySelector("#student-list")
    const row=document.createElement("tr")
    
    row.innerHTML=`
      <td>${firstName}</td>
      <td>${lastName}</td>
      <td>${rollNo}</td>
      <td>
      <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
      <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
      </td>
    `
    list.appendChild(row)
    selectedRow=null
    
    showAlert("Student Added","success")
  }

  else{
    selectedRow.children[0].textContent=firstName
    selectedRow.children[1].textContent=lastName
    selectedRow.children[2].textContent=rollNo
    showAlert("student Info Edited","info")
    selectedRow=null
  }

  clearFields()



})


//Edit Data

document.querySelector("#student-list").addEventListener("click",(e)=>{
  let target=e.target
  
  if(target.classList.contains("edit")){
      selectedRow=target.parentElement.parentElement
      document.querySelector("#firstName").value=selectedRow.children[0].textContent
      document.querySelector("#lastName").value=selectedRow.children[1].textContent
      document.querySelector("#rollNo").value=selectedRow.children[2].textContent
      
      
  }
  /* selectedRow=null */
})



//Delete data

document.querySelector("#student-list").addEventListener("click",(e)=>{
  let target=e.target
  if(target.classList.contains("delete")){
    target.parentElement.parentElement.remove()
    showAlert("Student Data Deleted","danger")
  }
})