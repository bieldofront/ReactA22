import{useState} from 'react';


export default function Nome (){
   const[nome, setNome] = useState('Sujeito')
   const[idade, setIdade] = useState(0)
   function trocarNome(nome, idade){
    //alert("Funcionando!")
     setNome(nome)
     setIdade(idade)   
} 
   
   return(
        <div>
        <span>BemVindo:{nome}  - idade:{idade}</span>
        <button onClick={()=>trocarNome('Gabriel',20)}>Trocar Nome</button>
   
    </div>
    )
}