console.log("dashboarrrd");
const CrntUser = JSON.parse(localStorage.getItem('CrntUser'))
if(!CrntUser)
{
    window.location.href = "login.html"
}
let Username = document.getElementById("User-name")
let UserEmail = document.getElementById("User-Email")
let alert = document.getElementById("alert")
Username.innerHTML = CrntUser.name;
UserEmail.innerHTML = CrntUser.email;
let ChangePassword = document.getElementById("Change-Password")
ChangePassword.addEventListener("submit", function(e){
 e.preventDefault();
   let OldPassword = document.getElementById("OldPassword").value
    let NewPassword = document.getElementById("NewPassword").value
    let ConfirmPassword = document.getElementById("ConfirmPassword").value

    if(OldPassword === "")
    {
        alert.classList.remove("hide");
        console.log("Enter Password");
        alert.innerHTML = "To proceed enter old password"
    }
    if(OldPassword !== CrntUser.Password)
    {
        alert.classList.remove("hide");
        alert.innerHTML = "Old-Password didn't matched"
    }
    else if(NewPassword === "" || ConfirmPassword === "")
    {
        alert.classList.remove("hide");
        alert.innerHTML = "Passwords should not be empty"   
    }
    else if(NewPassword !== ConfirmPassword)
    {
        alert.classList.remove("hide");
        alert.innerHTML = "Passwords didn't matched"
    }
    else
    {
        CrntUser.Password = NewPassword;
        localStorage.setItem('CrntUser', JSON.stringify(CrntUser))

        const users = JSON.parse(localStorage.getItem('users'))
        let userIndex = users.findIndex(user => user.email === CrntUser.email)

        if(users[userIndex].Password === OldPassword)
        {
            users[userIndex].Password = NewPassword
            localStorage.setItem('users', JSON.stringify(users))
        }
       alert.classList.remove("hide");
        alert.innerHTML = "Hurray!!!! Password changed Successfully"
        alert.style.color = "green"
        ChangePassword.reset()
    }
})
let Logoutbtn = document.getElementById("Logout")

Logoutbtn.addEventListener("click", function()
{
    localStorage.removeItem('CrntUser')
    window.location.href = "index.html"
})

