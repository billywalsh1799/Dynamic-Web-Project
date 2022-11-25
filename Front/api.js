export default class Api{

    async get(){
      try {
        const response= await fetch('http://localhost/Back/api/read.php')
        let students =await response.json()
        return students
        
      } catch (err) {
        console.error(err)
      }
    }

    async post(data){
      try {
        const url='http://localhost/Back/api/create.php'
        const res=await fetch(url,{
          method : "POST",
          headers :{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })

        console.log(res.json())
        
      } catch (err) {
        console.error(ee)
        
      }
    }


    async put(data){
      try {
        const url='http://localhost/Back/api/update.php'
        const res=await fetch(url,{
          method : "PUT",
          headers :{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        console.log(res.json())
        
      } catch (err) {
        console.error(err)
        
      }
      
    }

    async delete(data){
      try {
        const url='http://localhost/Back/api/delete.php'
        const res=await fetch(url,{
          method : "DELETE",
          headers :{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })

        console.log(res.json())
        
      } catch (error) {
        console.error(err)
        
      }

    }

}
 

  
  





