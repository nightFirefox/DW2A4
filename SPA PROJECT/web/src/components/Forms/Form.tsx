import './src/css/style.css';
import './src/js/main.js';


export function Forms() {
  return (
     <>
        <div className="container">
          <div className="main">
            <div className="header">
              <h2>Cadastro de Pessoas</h2>
              <p>Digite os dados de usuário corretamente!</p>
            </div>

            <form action="" className="form">
              <label htmlFor="nome">NOME: </label>
              <input type="text" className="nome" id="nome" />

              <label htmlFor="cpf">CPF: </label>
              <input type="text" className="cpf" id="cpf" data-js="cpf" />

              <label htmlFor="dt_nasc">DATA DE NASCIMENTO: </label>
              <input type="text" className="dt_nasc" id="dt_nasc" data-js="date" />

              <label htmlFor="email">E-MAIL: </label>
              <input type="text" className="email" id="email" />

              <label htmlFor="fone">TELEFONE: </label>
              <input type="fone" className="fone" id="fone" data-js="fone" />

              <label htmlFor="cep">CEP: </label>
              <input type="cep" className="cep" id="cep" data-js="cep" />

              <button id="button">Cadastrar</button>
            </form>
          </div>
        </div>
    </>
  )
}
