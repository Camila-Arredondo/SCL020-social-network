import { login } from "./views/templateLogin.js";
import { err404 } from "./views/template404.js";
import { age } from "./views/templateAge.js";
import { ageRedirect } from "./views/templateAgeRedirect.js";
import { deleteComment } from "./views/templateDeleteComment.js";
import { feed } from "./views/templateFeed.js";
import { home } from "./views/templateHome.js";
import { logoutConfirmation } from "./views/templateLogoutConfirmation.js";
import { menu } from "./views/templateMenu.js";
import { profile } from "./views/templateProfile.js";
import { signUp } from "./views/templateSignUp.js";
import { welcome } from "./views/templateWelcome.js";

import { onAuthStateChanged } from "../firebase/init.js";
import { auth } from "../firebase/init.js";


export const showTemplate = (hash)=>{
    
    const containerRoot = document.getElementById("root");
    containerRoot.innerHTML = "";
    
    onAuthStateChanged(auth, (user)=>{
        if (!user && hash === ""){
            containerRoot.appendChild(home());
        }
        else if (!user && hash === "#/login"){
            containerRoot.appendChild(login());
        }
        else if (!user && hash === "#/age"){
            containerRoot.appendChild(age()); 
        }
        else if (!user && hash === "#/ageRedirect"){
            containerRoot.appendChild(ageRedirect());
        }
        else if (!user && hash === "#/sign-up"){
            containerRoot.appendChild(signUp());
        }
        else if (!user && hash === "#/welcome"){
            containerRoot.appendChild(welcome());
        }
        else if (!user){
            containerRoot.appendChild(home());
        }
        else {

        switch(hash){
            case "#/login":  
                containerRoot.appendChild(login());
                break;
            case "":
                containerRoot.appendChild(home());
                break;
            case "#/sign-up":
                containerRoot.appendChild(signUp());
                break;     
            case "#/welcome":
                containerRoot.appendChild(welcome());
                break;    
            case "#/feed":
                    containerRoot.appendChild(feed());
                break;
            case "#/menu":
                    containerRoot.appendChild(menu());
                break; 
            case "#/logoutConfirmation":
                    containerRoot.appendChild(logoutConfirmation());
                break;   
            case "#/profile":
                    containerRoot.appendChild(profile());
                break;
            case "#/deleteComment":
                    containerRoot.appendChild(deleteComment());
                break; 
            default:
                containerRoot.appendChild(err404());                             
                }
        }
    })
}



// export const changeRoute = (hash) => {
//     if (hash ==="#/login"){
//         return showTemplate(hash);}
//     else if (hash==="#/age"){
//         return showTemplate (hash); 
//     }else if (hash==="#/ageRedirect"){
//         return showTemplate (hash);
//     }else if (hash==="#/sign-up"){
//         return showTemplate (hash);
//     }else if (hash==="#/welcome"){
//         return showTemplate (hash);
//     }else if (hash==="#/err404"){
//         return showTemplate (hash);
//     }else if (hash==="#/feed"){
//         return showTemplate (hash);
//     }else if (hash==="#/menu"){
//         return showTemplate (hash);
//     }else if (hash==="#/logoutConfirmation"){
//         return showTemplate (hash);
//     }else if (hash==="#/profile"){
//         return showTemplate (hash);
//     }else if (hash==="#/deleteComment"){
//         return showTemplate (hash);
//     } else {
//         return showTemplate(hash);
//     }
// }