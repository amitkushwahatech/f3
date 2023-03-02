
const users = JSON.parse(localStorage.getItem('users')) || []

if(localStorage.getItem('CrntUser'))
{
    window.location.href = "dashboard.html"
}

let signupform = document.getElementById("Signup")

signupform.addEventListener("submit", function(e)
{
    e.preventDefault();

    let Name = document.getElementById("FullName").value;
    let Email = document.getElementById("Email").value;
    let Password = document.getElementById("Password").value;
    let ConfirmPassword = document.getElementById("ConfirmPasword").value;

    let alert = document.getElementById("alert")

    if(Name === "")
    {
        alert.classList.remove("hide");
        alert.innerHTML = "Name should not be empty"
    }
    else if(Email.indexOf('@') == -1)
    {
        alert.classList.remove("hide");
        alert.innerHTML = "Email should contain'@'"
    }
    else if(Password === "" && ConfirmPassword === "")
    {
        alert.classList.remove("hide");
        alert.innerHTML = "Password field should not be empty"
    }
    else if(Password !== ConfirmPassword)
    {
        alert.classList.remove("hide");
        alert.innerHTML = "Password didn't matched please Try again"
    }
    else
    {
        const user = {Name, Email, Password};
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users))

        alert.classList.remove("hide");
        alert.innerHTML = "Hurray form submitted successfully please login to continue"
        alert.style.color = "green"

        console.log(user);
        console.log(users);
            
        signupform.reset();
    }
});



