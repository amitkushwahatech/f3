
console.log("Users");
const users = JSON.parse(localStorage.getItem('users')) || []
console.log(users);

let Loginform = document.getElementById("Login");

Loginform.addEventListener('submit', function(e)
{
    e.preventDefault()

    let Email = document.getElementById("Email").value;
    let Password = document.getElementById("Password").value;

    let alert = document.getElementById("alert")

    const user = users.find(user => user.Email === Email && user.Password === Password)
    console.log(user);

    if(Email === "")
    {
        alert.classList.remove("hide");
        alert.innerHTML = "Email should not be empty"
    }
    else if(Email.indexOf('@') == -1)
    {
        console.log("Email should contain an @");
        alert.classList.remove("hide");
        alert.innerHTML = "Email should contain an '@'"
    }
    else if(Password === "")
    {
        alert.classList.remove("hide");
        alert.innerHTML = "Password shold not be empty"
    }
    else if(!user)
    {
        alert.classList.remove("hide");
        alert.innerHTML = "invalid Email or Password"
    }
    else
    {
        const CrntUser = { ...user, token: generateToken()};
        localStorage.setItem('CrntUser', JSON.stringify(CrntUser));

        window.location.href = 'dashboard.html';
    }
});

function generateToken()
{
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let token = ''
    for(let i = 0; i < 16; i++)
    {
        token += chars.charAt(Math.floor(Math.random() * chars.length))
    }

    return token;
}

if(localStorage.getItem('CrntUser'))
{
    window.location.href = "dashboard.html"
}
