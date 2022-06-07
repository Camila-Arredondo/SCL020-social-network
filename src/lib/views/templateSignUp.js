import { app } from "../../firebase/init.js";
export const signUp = () => {
    const divSignUp = document.createElement("div");

    const viewSignUp = `
        <div>
            <img src="https://github.com/fabibbc/SCL020-social-network/blob/main/src/img/logo-tickets.png?raw=true" alt="logo-ticket">
            <h2>Create your account</h2>
            <input type="text">
            <input type="email">
            <input type="password">
            <div class="btns-signUp">
                <button class="btn-signUp-Google">google</button>
                <button class="btn-signUp-IMDb">IMDb</button>
            </div>
            <a href="#/welcome"><button class="btn-confirm">Confirm</button></a>
            <a href=""><button class="btn-cancel">Cancel</button></a>
        </div>            
    `
    divSignUp.innerHTML = viewSignUp;
    return divSignUp;
    
}
console.log(app);