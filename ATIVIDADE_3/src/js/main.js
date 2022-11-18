import { format } from "./modules/formata.js"
import {valida} from "./modules/valida.js";

console.log(format)

const form = document.querySelector('form')

document.querySelectorAll('input').forEach(input => {
    const field = input.dataset.js
    
    input.addEventListener('input', (e) =>
    {
        e.target.value = format[field](e.target.value);
    })
})

form.addEventListener('submit', (e) =>
{
    e.preventDefault()
    document.querySelectorAll('input').forEach(input => {
        const field = input.dataset.js

        input.addEventListener('input', (e) =>
        {
            if(!valida[field](input.value))
            {
                alert( [field] + " inválido");
                input.classList.add("errorInput")
            }
            else input.classList.remove("errorInput")
            

            alert("Informações corretas")
        })
    })
    
    // let cpf = allInptus.find(el => el.id == "cpf").value;
    // let data = allInptus.find(el => el.id == "dt_nasc").value;
    // let cel = allInptus.find(el => el.id == "fone").value;
    // let cep = allInptus.find(el => el.id == "cep").value;

    

    // if(!valida.cpf(cpf))
    // {
    //     alert("CPF inválido");
    //     return;
    // }  

    // if(!valida.date(data))
    // {   
    //     alert("Data inválida");
    //     return;
    // }

    // if(!valida.fone(cel, 11))
    // {
    //     alert("Telefone inválido");
    //     return;
    // }

    // if(!valida.cep(cep, 8))
    // {
    //     alert("CEP inválido");
    //     return;
    // }

    

});