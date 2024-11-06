//seleção de elementos
const generatePasswordButton=document.querySelector("#generate-password");
const generatedPasswordElement=document.querySelector("#generated-password");

//funções
//letras, números e símbolos
const getLetterLowerCase = () =>{
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97); // pegar letras minúsculas - 26 letras do alfabeto, 97 pq é onde começam as letras minúsculas na tabela que foi usada como referência
};

const getLetterUpperCase = () =>{
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65); // pegar letras maísculas - 26 letras do alfabeto, 65 pq é onde começam as letras maiúsculas na tabela que foi usada como referência
};

const getNumber = () =>{
    return Math.floor(Math.random() * 10).toString(); //  pegar números - 10 pq queremos números de 1 a 10
};

const getSymbol = () =>{
    const symbols = "(){}[]=<>/,.!@#$%&*+-";
    return symbols[Math.floor(Math.random() * symbols.length)]; // pegar caracteres especiais
};

const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) =>{// função que vai unir todas as anteriores

    let password = "" //variável e mostra que o password começa vazio

    const passwordLength = 10 //comprimento da senha será de 10 caracteres

    const generators = [
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
    ]

    for(i=0; i < passwordLength; i = i + 4){// o for é um loop, o n4 é por causa dos quatro citados acima, poderia ter usado também + generators.legth
        generators.forEach(() =>{
            const randomValue = 
            generators[Math.floor(Math.random() * generators.length)]();
            
            password += randomValue;
        });
    }

    password = password.slice(0, passwordLength); // estava retornando uma senha de 12 caracteres, então aqui colocamos que o tamanho da senha será de 0 até 10 ou seja até o comprimento da senha, passwordlength
    
    generatedPasswordElement.style.display = "block"; // gerar a senha
    generatedPasswordElement.querySelector("h4").innerText = password; // gerar a senha 
};

//eventos
generatePasswordButton.addEventListener("click",() => {
    generatePassword(
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
    );
});