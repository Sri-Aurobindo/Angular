export class LoginService
{
    checkUser1(user:any,password:any)
    {
        if(user=="kali" && password=="90")
  {
   return "success"
  }
  else{
   return "try again"
  }
    }
}