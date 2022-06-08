import { register } from "../../firebase/auth.js";
//import { app } from "../../firebase/init.js";
export const signUp = () => {
    const divSignUp = document.createElement("div");

    const viewSignUp = //html
    `
        <div>
            <img src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-tickets.png?raw=true" alt="logo-ticket">
            <h2>Create your account</h2>
            <input type="text">
            <input type="text" id="email" required>
            <input type="password" id="password" required>
            <button class="btn-create" onclick="register()">Create Account</button>
            <div class="btns-signUp">
                <button class="btn-signUp-Google">google</button>
                <button class="btn-signUp-IMDb">IMDb</button>
            </div>
            <a href="#/welcome"><button class="btn-confirm">Confirm</button></a>
            <a href=""><button class="btn-cancel">Cancel</button></a>
        </div>            
    `
    divSignUp.innerHTML = viewSignUp;
    const btn = divSignUp.querySelector(".btn-create")
    btn.addEventListener("click", () => {
        const email = divSignUp.querySelector("#email").value;
        const password = divSignUp.querySelector("#password").value;
        
    })
    return divSignUp;
}


console.log(app);
//register();
