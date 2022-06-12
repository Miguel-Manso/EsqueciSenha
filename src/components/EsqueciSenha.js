import React from "react";



const EsqueciSenha = () => {
    return ( 
        
    <div class="container" >
    <div class="content">
    <a class="#links" id="paracadastro"></a>
    <a class="#links" id="paralogin"></a>      
      <div id="recuperar">
        <form method="post" action=""> 
          <h1>Recuperar senha</h1> 
          <p> 
            <label>Para redefinir sua senha, informe o usúario ou e-mail cadastrado na sua conta e lhe enviaremos um link </label><br></br>
            <label>Insira o e-mail cadastrado </label>
            <input id="email_login" name="email_login" required="required" type="text" placeholder="e-mail"/>
          </p>
          <br></br>
          <p> 
            <input type="submit" value="Recuperar"/> 
          </p>
          <p> 
            <input type="submit" value="Cancelar"/> 
          </p>
          <p class="link">  
            Já tem conta?
            <a href="#paralogin"> Ir para Login </a>

          </p> 
        </form>
      </div>
    </div>
    </div>
     );
}
 
export default EsqueciSenha;