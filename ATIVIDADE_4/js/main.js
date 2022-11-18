import { format } from "./modules/formataCEP.js"

const campoErro = document.querySelector('input');
const campoRetorno = document.querySelector('#campoRetorno');


document.querySelectorAll('input').forEach(input => {
    const field = input.dataset.js
    
    input.addEventListener('input', (e) =>
    {
        e.target.value = format[field](e.target.value);
    })
})

campoErro.addEventListener("blur", infoEvent => 
{
    const erro = infoEvent.target.value;
    // campoErro.value = "";
    const cepurl = `https://viacep.com.br/ws/${erro}/json/`
    
    fetch(cepurl)
    .then(Response => Response.json())
    .then(response =>
    {
        const uf = response.uf;
        console.log(uf);
        
        const covidurl = `https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${uf}`

        fetch(covidurl)
        .then(CovidResp => CovidResp.json())
        .then(response => 
        {
            const pState = document.createElement('p')
            pState.innerText = 'Estado: ' + response.state;

            const pCases = document.createElement('p')
            pCases.innerText = 'Nº de casos: ' + response.cases;

            const pSusp = document.createElement('p')
            pSusp.innerText = 'Nº de suspeitas: ' + response.suspects;

            const pDeaths = document.createElement('p')
            pDeaths.innerText = 'Nº de óbitos: ' + response.deaths;

            campoRetorno.appendChild(pState);
            campoRetorno.appendChild(pCases);
            campoRetorno.appendChild(pSusp);
            campoRetorno.appendChild(pDeaths);
            
            campoErro.addEventListener("focus", infoEvent =>
            {
                campoRetorno.removeChild(pState);
                campoRetorno.removeChild(pCases);
                campoRetorno.removeChild(pSusp);
                campoRetorno.removeChild(pDeaths);
            })
        })
    })
    .catch(err => console.log("Via CEP " + err))
})
  
