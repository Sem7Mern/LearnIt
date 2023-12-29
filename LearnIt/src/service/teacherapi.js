
const url = "http://localhost:8000"
export const tlogin = async(credentials)=>{
    console.log("doing teacher login", credentials);
    try {

        const response = await fetch(`http://localhost:8000/tlogin`, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
             
            },
            body: JSON.stringify(

              { email: credentials.email, password: credentials.password}
      
              )
          });

          return response;
       


    } catch (error) {
        console.log("error while adduser",error.message);
    }
}