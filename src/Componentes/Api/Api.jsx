
export const JAVASCRIPT_easy = ()=>{
    
    let easyQuestion = [
        {   
            enunciado:'Qual é a forma mais comum de declarar variáveis em JavaScript?',
            alternativa_A:'var',
            alternativa_B:'let',
            alternativa_C:'const',
            alternativa_D:'todas as alternativas estão corretas',
            Resposta:'d',
            Tema:'Variáveis'
        },
        {   
            enunciado:'Qual é a função usada para imprimir valores no console em JavaScript?',
            alternativa_A:'alert()',
            alternativa_B:'prompt()',
            alternativa_C:'console.log()',
            alternativa_D:'document.write()',
            Resposta:'c',
            Tema:'Console'
        },
        {   
            enunciado:'Qual é o operador usado para concatenar strings em JavaScript?',
            alternativa_A:'+',
            alternativa_B:'-',
            alternativa_C:'/',
            alternativa_D:'*',
            Resposta:'a',
            Tema:'Strings'
        },
        {   
            enunciado:'Qual é o método usado para converter uma string em um número inteiro em JavaScript?',
            alternativa_A:'parseFloat()',
            alternativa_B:'toFixed()',
            alternativa_C:'toLowerCase()',
            alternativa_D:'parseInt()',
            Resposta:'d',
            Tema:'Strings'
        },
        {   
            enunciado:'Qual é o tipo de dado que representa um valor verdadeiro ou falso em JavaScript?',
            alternativa_A:'Boolean',
            alternativa_B:'Number',
            alternativa_C:'String',
            alternativa_D:'Array',
            Resposta:'a',
            Tema:'Tipos de dados'
        },
        {   
            enunciado:'Qual é a estrutura de controle usada para executar uma ação repetidamente em JavaScript?',
            alternativa_A:'if/else',
            alternativa_B:'switch',
            alternativa_C:'for',
            alternativa_D:'while',
            Resposta:'d',
            Tema:'Estruturas de controle'
        },
        {   
            enunciado:'Qual é o operador usado para comparar dois valores juntamente com seu tipo em JavaScript?',
            alternativa_A:'==',
            alternativa_B:'===',
            alternativa_C:'!=',
            alternativa_D:'!==',
            Resposta:'b',
            Tema:'Operadores de comparação'
        },
        {   
            enunciado:'Qual é o método usado para adicionar um elemento ao final de um array em JavaScript?',
            alternativa_A:'push()',
            alternativa_B:'pop()',
            alternativa_C:'shift()',
            alternativa_D:'unshift()',
            Resposta:'a',
            Tema:'Arrays'
        },
        {   
            enunciado:'Qual é o método usado para remover o último elemento de um array em JavaScript?',
            alternativa_A:'push()',
            alternativa_B:'pop()',
            alternativa_C:'shift()',
            alternativa_D:'unshift()',
            Resposta:'b',
            Tema:'Arrays'
        },
        {   
            enunciado:'Qual é o método usado para obter o comprimento de um array em JavaScript?',
            alternativa_A:'length()',
            alternativa_B:'size()',
            alternativa_C:'count()',
            alternativa_D:'nenhuma das acima',
            Resposta:'a',
            Tema:'Arrays'
        }
        
    ]
    
    return easyQuestion;

}

export const JAVASCRIPT_medium = ()=>{
    let mediumQuestion = [
        {
            enunciado:'Qual é a diferença entre "==" e "===" em JavaScript?',
            alternativa_A:'Nenhuma diferença',
            alternativa_B:'"==" compara valores e "===" compara valores e tipos',
            alternativa_C:'"===" compara valores e "==" compara valores e tipos',
            alternativa_D:'"==" compara valores e tipos e "===" compara valores',
            Resposta:'b',
            Tema:'Operadores de comparação'
        },
        {
            enunciado:'Qual é o resultado da operação 2 + "2" em JavaScript?',
            alternativa_A:'4',
            alternativa_B:'"22"',
            alternativa_C:'22',
            alternativa_D:'Erro',
            Resposta:'b',
            Tema:'Operadores'
        },
        {
            enunciado:'Qual é o resultado da expressão 3 + 2 + "7" em JavaScript?',
            alternativa_A:'12',
            alternativa_B:'"327"',
            alternativa_C:'"57"',
            alternativa_D:'Erro',
            Resposta:'c',
            Tema:'Operadores'
        },
        {
            enunciado:'Qual é a função usada para converter um número em uma string em JavaScript?',
            alternativa_A:'parseFloat()',
            alternativa_B:'toFixed()',
            alternativa_C:'toString()',
            alternativa_D:'parseInt()',
            Resposta:'c',
            Tema:'Strings'
        },
        {
            enunciado:'Qual é o operador usado para incrementar uma variável em JavaScript?',
            alternativa_A:'++',
            alternativa_B:'--',
            alternativa_C:'+=',
            alternativa_D:'-=',
            Resposta:'a',
            Tema:'Operadores'
        },
        {
            enunciado:'Qual é a diferença entre "let" e "var" em JavaScript?',
            alternativa_A:'Nenhuma diferença',
            alternativa_B:'"let" tem escopo global e "var" tem escopo local',
            alternativa_C:'"let" tem escopo local e "var" tem escopo global',
            alternativa_D:'"let" tem tipagem estática e "var" tem tipagem dinâmica',
            Resposta:'c',
            Tema:'Variáveis'
        },
        {
            enunciado:'Qual é a sintaxe correta para criar uma função em JavaScript?',
            alternativa_A:'function myFunction = () => {}',
            alternativa_B:'function myFunction() {}',
            alternativa_C:'myFunction = function() {}',
            alternativa_D:'myFunction() => {}',
            Resposta:'b',
            Tema:'Funções'
        },
        {
            enunciado:'Qual é o método usado para encontrar o índice de um elemento em um array em JavaScript?',
            alternativa_A:'indexOf()',
            alternativa_B:'find()',
            alternativa_C:'filter()',
            alternativa_D:'search()',
            Resposta:'a',
            Tema:'Arrays'
        },
        {
            enunciado:'Qual é o resultado da expressão "5" - 3 em JavaScript?',
            alternativa_A:'8',
            alternativa_B:'"2"',
            alternativa_C:'2',
            alternativa_D:'Erro',
            Resposta:'c',
            Tema:'Operadores'
        },
        {
            enunciado:'Qual é a diferença entre null e undefined em JavaScript?',
            alternativa_A:'Null é um valor primitivo e undefined é um objeto',
            alternativa_B:'Null é um objeto e undefined é um valor primitivo',
            alternativa_C:'Null representa a ausência de valor e undefined representa uma variável não declarada',
            alternativa_D:'Não há diferença entre null e undefined',
            Resposta:'c',
            Tema:'Tipos de dados'
        }
    ]

    return mediumQuestion;
}

export const JAVASCRIPT_hard = ()=>{
    let hardQuestion = [
        {
            enunciado:'O que é um closure em JavaScript?',
            alternativa_A:'Um tipo de variável',
            alternativa_B:'Uma estrutura de controle',
            alternativa_C:'Uma função que retorna outra função',
            alternativa_D:'Uma palavra reservada',
            Resposta:'c',
            Tema:'Funções'
        },
        {
            enunciado:'O que é o objeto this em JavaScript?',
            alternativa_A:'Uma variável global',
            alternativa_B:'O objeto pai do escopo atual',
            alternativa_C:'O objeto global do navegador',
            alternativa_D:'O objeto que invoca a função atual',
            Resposta:'d',
            Tema:'Objeto this'
        },
        {
            enunciado:'O que é a aridade de uma função em JavaScript?',
            alternativa_A:'O número de argumentos esperados por uma função',
            alternativa_B:'O número de parâmetros declarados na função',
            alternativa_C:'O número de variáveis globais declaradas no escopo da função',
            alternativa_D:'O número de vezes que uma função é chamada',
            Resposta:'a',
            Tema:'Funções'
        },
        {
            enunciado:'Qual é o resultado da expressão typeof null em JavaScript?',
            alternativa_A:'"object"',
            alternativa_B:'"null"',
            alternativa_C:'"undefined"',
            alternativa_D:'"string"',
            Resposta:'a',
            Tema:'Tipos de dados'
        },
        {
            enunciado:'Qual é o resultado da expressão 1 + "2" em JavaScript?',
            alternativa_A:'"3"',
            alternativa_B:'3',
            alternativa_C:'"12"',
            alternativa_D:'undefined',
            Resposta:'c',
            Tema:'Operadores'
        },
        {
            enunciado:'O que é uma promessa em JavaScript?',
            alternativa_A:'Uma função que retorna um valor',
            alternativa_B:'Uma estrutura de dados que armazena valores',
            alternativa_C:'Um objeto que representa um valor que pode não estar disponível ainda',
            alternativa_D:'Uma forma de criar loops assíncronos',
            Resposta:'c',
            Tema:'Promessas'
        },
        {
            enunciado:'Qual é a diferença entre null e undefined em JavaScript?',
            alternativa_A:'Null é o valor padrão para variáveis não inicializadas e undefined é usado para variáveis vazias',
            alternativa_B:'Null é usado para valores booleanos e undefined é usado para valores numéricos',
            alternativa_C:'Null é um objeto e undefined é um tipo de dados primitivo',
            alternativa_D:'Null indica a ausência intencional de um valor e undefined indica a ausência não intencional de um valor',
            Resposta:'d',
            Tema:'Tipos de dados'
        },
        {
            enunciado:'Qual é o valor de x após a execução do seguinte código em JavaScript: var x = [1,2,3]; x[10] = 4;',
            alternativa_A:'[1,2,3]',
            alternativa_B:'[1,2,3,4]',
            alternativa_C:'[1,2,3,null,null,null,null,null,null,null,4]',
            alternativa_D:'[null,null,null,null,null,null,null,null,null,null,4]',
            Resposta:'c',
            Tema:'Arrays'
        },
        {
            enunciado:'Qual é o resultado da expressão typeof(null) em JavaScript?',
            alternativa_A:'null',
            alternativa_B:'undefined',
            alternativa_C:'object',
            alternativa_D:'number',
            Resposta:'c',
            Tema:'Tipos de dados'
        },
        {
            enunciado:'Qual é o resultado da expressão [1, 2, 3] + [4, 5, 6] em JavaScript?',
            alternativa_A:'[1, 2, 3, 4, 5, 6]',
            alternativa_B:'"1,2,34,5,6"',
            alternativa_C:'Erro de sintaxe',
            alternativa_D:'NaN',
            Resposta:'b',
            Tema:'Arrays'
        },
    ]

    return hardQuestion;
}
export function PYTHON_easy(){
    let easyQuestion = [
    {
        enunciado:'Qual a função utilizada para imprimir uma mensagem na tela em Python?',
        alternativa_A:'print()',
        alternativa_B:'input()',
        alternativa_C:'read()',
        alternativa_D:'write()',
        resposta:'a',
        tema:'Funções básicas'
    },
    {
        enunciado:'Qual a palavra-chave utilizada para definir uma função em Python?',
        alternativa_A:'fun',
        alternativa_B:'define',
        alternativa_C:'def',
        alternativa_D:'function',
        resposta:'c',
        tema:'Funções básicas'
    },
    {
        enunciado:'Qual é a sintaxe utilizada para comentar uma linha de código em Python?',
        alternativa_A:'//',
        alternativa_B:'#',
        alternativa_C:'/* /',
        alternativa_D:'// / */',
        resposta:'b',
        tema:'Comentários'
    },
    {
        enunciado:'Qual a função utilizada para converter um número para uma string em Python?',
        alternativa_A:'str()',
        alternativa_B:'int()',
        alternativa_C:'float()',
        alternativa_D:'string()',
        resposta:'a',
        tema:'Conversão de tipos de dados'
    },
    {
        enunciado:'Qual a função utilizada para converter uma string para um número inteiro em Python?',
        alternativa_A:'str()',
        alternativa_B:'int()',
        alternativa_C:'float()',
        alternativa_D:'num()',
        resposta:'b',
        tema:'Conversão de tipos de dados'
    },
    {
        enunciado:'Qual a função utilizada para obter o comprimento de uma string em Python?',
        alternativa_A:'len()',
        alternativa_B:'size()',
        alternativa_C:'length()',
        alternativa_D:'count()',
        resposta:'a',
        tema:'Manipulação de strings'
    },
    {
        enunciado:'Qual a função utilizada para adicionar um elemento ao final de uma lista em Python?',
        alternativa_A:'append()',
        alternativa_B:'add()',
        alternativa_C:'insert()',
        alternativa_D:'push()',
        resposta:'a',
        tema:'Manipulação de listas'
    },
    {
        enunciado:'Qual a palavra-chave utilizada para definir um loop while em Python?',
        alternativa_A:'loop',
        alternativa_B:'while',
        alternativa_C:'for',
        alternativa_D:'until',
        resposta:'b',
        tema:'Estruturas de repetição'
    },
    {
        enunciado:'Qual a função utilizada para obter a data atual em Python?',
        alternativa_A:'now()',
        alternativa_B:'today()',
        alternativa_C:'current()',
        alternativa_D:'date()',
        resposta:'b',
        tema:'Manipulação de datas'
    },
    {
        enunciado:'Qual a palavra-chave utilizada para definir uma classe em Python?',
        alternativa_A:'class',
        alternativa_B:'define',
        alternativa_C:'struct',
        alternativa_D:'interface',
        resposta:'a',
        tema:'Classes e objetos'
    }
]
    return easyQuestion
}

export const PYTHON_eas = ()=>{
    let easyQuestion = [
    {
        enunciado:'Qual a função utilizada para imprimir uma mensagem na tela em Python?',
        alternativa_A:'print()',
        alternativa_B:'input()',
        alternativa_C:'read()',
        alternativa_D:'write()',
        resposta:'a',
        tema:'Funções básicas'
    },
    {
        enunciado:'Qual a palavra-chave utilizada para definir uma função em Python?',
        alternativa_A:'fun',
        alternativa_B:'define',
        alternativa_C:'def',
        alternativa_D:'function',
        resposta:'c',
        tema:'Funções básicas'
    },
    {
        enunciado:'Qual é a sintaxe utilizada para comentar uma linha de código em Python?',
        alternativa_A:'//',
        alternativa_B:'#',
        alternativa_C:'/* /',
        alternativa_D:'// / */',
        resposta:'b',
        tema:'Comentários'
    },
    {
        enunciado:'Qual a função utilizada para converter um número para uma string em Python?',
        alternativa_A:'str()',
        alternativa_B:'int()',
        alternativa_C:'float()',
        alternativa_D:'string()',
        resposta:'a',
        tema:'Conversão de tipos de dados'
    },
    {
        enunciado:'Qual a função utilizada para converter uma string para um número inteiro em Python?',
        alternativa_A:'str()',
        alternativa_B:'int()',
        alternativa_C:'float()',
        alternativa_D:'num()',
        resposta:'b',
        tema:'Conversão de tipos de dados'
    },
    {
        enunciado:'Qual a função utilizada para obter o comprimento de uma string em Python?',
        alternativa_A:'len()',
        alternativa_B:'size()',
        alternativa_C:'length()',
        alternativa_D:'count()',
        resposta:'a',
        tema:'Manipulação de strings'
    },
    {
        enunciado:'Qual a função utilizada para adicionar um elemento ao final de uma lista em Python?',
        alternativa_A:'append()',
        alternativa_B:'add()',
        alternativa_C:'insert()',
        alternativa_D:'push()',
        resposta:'a',
        tema:'Manipulação de listas'
    },
    {
        enunciado:'Qual a palavra-chave utilizada para definir um loop while em Python?',
        alternativa_A:'loop',
        alternativa_B:'while',
        alternativa_C:'for',
        alternativa_D:'until',
        resposta:'b',
        tema:'Estruturas de repetição'
    },
    {
        enunciado:'Qual a função utilizada para obter a data atual em Python?',
        alternativa_A:'now()',
        alternativa_B:'today()',
        alternativa_C:'current()',
        alternativa_D:'date()',
        resposta:'b',
        tema:'Manipulação de datas'
    },
    {
        enunciado:'Qual a palavra-chave utilizada para definir uma classe em Python?',
        alternativa_A:'class',
        alternativa_B:'define',
        alternativa_C:'struct',
        alternativa_D:'interface',
        resposta:'a',
        tema:'Classes e objetos'
    }
]
    return easyQuestion
}

export const PYTHON_medium = ()=>{

    let mediumQuestions = [
        {
            enunciado:'Qual a função utilizada para ler um arquivo em Python?',
            alternativa_A:'read()',
            alternativa_B:'open()',
            alternativa_C:'load()',
            alternativa_D:'file()',
            resposta:'b',
            tema:'Manipulação de arquivos'
        },
        {
            enunciado:'Qual a função utilizada para copiar um arquivo em Python?',
            alternativa_A:'copy()',
            alternativa_B:'duplicate()',
            alternativa_C:'clone()',
            alternativa_D:'shutil.copy()',
            resposta:'d',
            tema:'Manipulação de arquivos'
        },
        {
            enunciado:'Qual a sintaxe utilizada para criar uma lista vazia em Python?',
            alternativa_A:'list()',
            alternativa_B:'[]',
            alternativa_C:'{}',
            alternativa_D:'()',
            resposta:'b',
            tema:'Manipulação de listas'
        },
        {
            enunciado:'Qual a função utilizada para ordenar uma lista em Python?',
            alternativa_A:'sort()',
            alternativa_B:'order()',
            alternativa_C:'sorted()',
            alternativa_D:'arrange()',
            resposta:'a',
            tema:'Manipulação de listas'
        },
        {
            enunciado:'Qual a sintaxe utilizada para definir um dicionário em Python?',
            alternativa_A:'{}',
            alternativa_B:'[]',
            alternativa_C:'()',
            alternativa_D:'dict()',
            resposta:'a',
            tema:'Manipulação de dicionários'
        },
        {
            enunciado:'Qual a função utilizada para obter todas as chaves de um dicionário em Python?',
            alternativa_A:'keys()',
            alternativa_B:'values()',
            alternativa_C:'items()',
            alternativa_D:'all()',
            resposta:'a',
            tema:'Manipulação de dicionários'
        },
        {
            enunciado:'Qual a sintaxe utilizada para definir uma exceção personalizada em Python?',
            alternativa_A:'raise Exception("mensagem")',
            alternativa_B:'try: except MyException as e:',
            alternativa_C:'class MyException(Exception): pass',
            alternativa_D:'except MyException as e: raise Exception(e)',
            resposta:'c',
            tema:'Tratamento de exceções'
        },
        {
            enunciado:'Qual a função utilizada para gerar um número aleatório em Python?',
            alternativa_A:'random()',
            alternativa_B:'rand()',
            alternativa_C:'randint()',
            alternativa_D:'randomint()',
            resposta:'c',
            tema:'Módulo random'
        },
        {
            enunciado:'Qual a sintaxe utilizada para importar um módulo em Python?',
            alternativa_A:'require',
            alternativa_B:'using',
            alternativa_C:'import',
            alternativa_D:'include',
            resposta:'c',
            tema:'Módulos em Python'
        },
        {
            enunciado:'Qual a função utilizada para verificar se um objeto é uma instância de uma determinada classe em Python?',
            alternativa_A:'isinstance()',
            alternativa_B:'typeof()',
            alternativa_C:'classof()',
            alternativa_D:'instanceof()',
            resposta:'a',
            tema:'Classes e objetos'
        }
        ]

    return mediumQuestions
}

export const PYTHON_hard = ()=>{

    let hardQuestions = [
        {
            enunciado:'O que é uma closure em Python?',
            alternativa_A:'Uma função que retorna outra função',
            alternativa_B:'Uma função que não retorna nada',
            alternativa_C:'Uma função que recebe outra função como parâmetro',
            alternativa_D:'Uma função que retorna uma lista',
            resposta:'a',
            tema:'Funções avançadas'
        },
        {
            enunciado:'O que é um decorator em Python?',
            alternativa_A:'Uma função que adiciona funcionalidades a outra função',
            alternativa_B:'Uma função que retorna uma classe',
            alternativa_C:'Uma classe que adiciona funcionalidades a outra classe',
            alternativa_D:'Uma classe que adiciona funcionalidades a uma função',
            resposta:'a',
            tema:'Funções avançadas'
        },
        {
            enunciado:'O que é o GIL em Python?',
            alternativa_A:'Um lock que previne que múltiplos threads acessem a mesma variável',
            alternativa_B:'Uma ferramenta que melhora o desempenho de operações matemáticas',
            alternativa_C:'Um compilador que otimiza o código Python',
            alternativa_D:'Um lock que previne que múltiplos threads executem código Python simultaneamente',
            resposta:'d',
            tema:'Multithreading em Python'
        },
        {
            enunciado:'Qual a diferença entre multiprocessing e multithreading em Python?',
            alternativa_A:'Multiprocessing é mais rápido que multithreading',
            alternativa_B:'Multiprocessing usa mais memória que multithreading',
            alternativa_C:'Multiprocessing é mais fácil de implementar que multithreading',
            alternativa_D:'Multiprocessing permite que o código seja executado em múltiplos processadores, enquanto multithreading permite que o código seja executado em múltiplas threads',
            resposta:'d',
            tema:'Multithreading e multiprocessing em Python'
        },
        {
            enunciado:'O que é o garbage collector em Python?',
            alternativa_A:'Um módulo que permite coletar lixo eletrônico',
            alternativa_B:'Um módulo que permite coletar lixo orgânico',
            alternativa_C:'Um módulo que gerencia a memória em Python',
            alternativa_D:'Um módulo que permite coletar lixo tóxico',
            resposta:'c',
            tema:'Gerenciamento de memória em Python'
        },
        {
            enunciado:'O que é o PEP 8 em Python?',
            alternativa_A:'Um framework para testes unitários',
            alternativa_B:'Uma biblioteca para manipulação de dados em formato JSON',
            alternativa_C:'Uma convenção de estilo para o código Python',
            alternativa_D:'Uma biblioteca para manipulação de arquivos de log',
            resposta:'c',
            tema:'Boas práticas de programação em Python'
        },
        {
            enunciado:'O que é o virtualenv em Python?',
            alternativa_A:'Um ambiente de desenvolvimento virtual que permite instalar pacotes Python de forma isolada',
            alternativa_B:'Um módulo que permite criar e gerenciar máquinas virtuais em Python',
            alternativa_C:'Um compilador que gera código Python mais rápidoque o interpretador padrão',
            alternativa_D:'Um módulo que permite criar ambientes virtuais para testes de código Python',
            resposta:'a',
            tema:'Ambientes virtuais em Python'
        },
        {
            enunciado:'O que é o asyncio em Python?',
            alternativa_A:'Um módulo que permite rodar código Python de forma síncrona',
            alternativa_B:'Um módulo que permite rodar código Python de forma assíncrona',
            alternativa_C:'Um módulo que permite rodar código Python em múltiplos processadores',
            alternativa_D:'Um módulo que permite rodar código Python em múltiplas threads',
            resposta:'b',
            tema:'Programação assíncrona em Python'
        },
        {
            enunciado:'O que é o type hinting em Python?',
            alternativa_A:'Uma funcionalidade que permite definir tipos de variáveis em tempo de execução',
            alternativa_B:'Uma funcionalidade que permite definir tipos de variáveis em tempo de compilação',
            alternativa_C:'Uma convenção de estilo para definir tipos de variáveis em comentários',
            alternativa_D:'Uma biblioteca que adiciona tipos de variáveis ao Python',
            resposta:'c',
            tema:'Type hinting em Python'
        },
        {
            enunciado:'O que é o módulo collections em Python?',
            alternativa_A:'Um módulo que permite manipular coleções de dados em Python',
            alternativa_B:'Um módulo que permite realizar operações matemáticas em coleções de dados em Python',
            alternativa_C:'Um módulo que permite trabalhar com funções avançadas em coleções de dados em Python',
            alternativa_D:'Um módulo que permite trabalhar com tipos de dados especializados em coleções de dados em Python',
            resposta:'d',
            tema:'Módulo collections em Python'
        }
    ]

    return hardQuestions
}


export const SQL_easy = ()=>{
    var easyQuestions = [
        {
            enunciado:'O que significa a sigla SQL?',
            alternativa_A:'Structured Query Language',
            alternativa_B:'Structured Question Language',
            alternativa_C:'Structured Query Level',
            alternativa_D:'Structured Question Level',
            resposta:'a',
            tema:'Introdução ao SQL'
        },
        {
            enunciado:'Qual é o comando SQL utilizado para selecionar dados de uma tabela?',
            alternativa_A:'UPDATE',
            alternativa_B:'INSERT',
            alternativa_C:'DELETE',
            alternativa_D:'SELECT',
            resposta:'d',
            tema:'Comando SELECT em SQL'
        },
        {
            enunciado:'Qual é o comando SQL utilizado para criar uma nova tabela?',
            alternativa_A:'UPDATE',
            alternativa_B:'INSERT',
            alternativa_C:'DELETE',
            alternativa_D:'CREATE',
            resposta:'d',
            tema:'Comando CREATE em SQL'
        },
        {
            enunciado:'Qual é o comando SQL utilizado para atualizar dados em uma tabela?',
            alternativa_A:'UPDATE',
            alternativa_B:'INSERT',
            alternativa_C:'DELETE',
            alternativa_D:'SELECT',
            resposta:'a',
            tema:'Comando UPDATE em SQL'
        },
        {
            enunciado:'Qual é o comando SQL utilizado para deletar dados em uma tabela?',
            alternativa_A:'UPDATE',
            alternativa_B:'INSERT',
            alternativa_C:'DELETE',
            alternativa_D:'SELECT',
            resposta:'c',
            tema:'Comando DELETE em SQL'
        },
        {
            enunciado:'Qual é o operador SQL utilizado para combinar duas ou mais condições em uma consulta?',
            alternativa_A:'OR',
            alternativa_B:'NOT',
            alternativa_C:'AND',
            alternativa_D:'XOR',
            resposta:'c',
            tema:'Operadores lógicos em SQL'
        },
        {
            enunciado:'Qual é a cláusula SQL utilizada para filtrar resultados em uma consulta?',
            alternativa_A:'GROUP BY',
            alternativa_B:'HAVING',
            alternativa_C:'ORDER BY',
            alternativa_D:'WHERE',
            resposta:'d',
            tema:'Cláusula WHERE em SQL'
        },
        {
            enunciado:'Qual é a cláusula SQL utilizada para ordenar resultados em uma consulta?',
            alternativa_A:'GROUP BY',
            alternativa_B:'HAVING',
            alternativa_C:'ORDER BY',
            alternativa_D:'WHERE',
            resposta:'c',
            tema:'Cláusula ORDER BY em SQL'
        },
        {
            enunciado:'Qual é a cláusula SQL utilizada para agrupar resultados em uma consulta?',
            alternativa_A:'GROUP BY',
            alternativa_B:'HAVING',
            alternativa_C:'ORDER BY',
            alternativa_D:'WHERE',
            resposta:'a',
            tema:'Cláusula GROUP BY em SQL'
        },
        {
            enunciado:'Qual é a cláusula SQL utilizada para filtrar resultados de um grupo em uma consulta?',
            alternativa_A:'GROUP BY',
            alternativa_B:'HAVING',
            alternativa_C:'ORDER BY',
            alternativa_D:'WHERE',
            resposta:'b',
            tema:'Cláusula HAVING em SQL'
        }
    ]
    
    return easyQuestions
}

export const SQL_medium = () => {
    let mediumQuestions = [
        {
            enunciado:'Qual é o comando SQL utilizado para adicionar uma nova coluna em uma tabela?',
            alternativa_A:'INSERT COLUMN',
            alternativa_B:'ADD COLUMN',
            alternativa_C:'CREATE COLUMN',
            alternativa_D:'UPDATE COLUMN',
            resposta:'b',
            tema:'Comando ALTER TABLE em SQL'
        },
        {
            enunciado:'Qual é o comando SQL utilizado para remover uma coluna de uma tabela?',
            alternativa_A:'REMOVE COLUMN',
            alternativa_B:'DELETE COLUMN',
            alternativa_C:'DROP COLUMN',
            alternativa_D:'ALTER COLUMN',
            resposta:'c',
            tema:'Comando ALTER TABLE em SQL'
        },
        {
            enunciado:'Qual é o comando SQL utilizado para renomear uma tabela?',
            alternativa_A:'ALTER TABLE',
            alternativa_B:'RENAME',
            alternativa_C:'UPDATE',
            alternativa_D:'CHANGE',
            resposta:'b',
            tema:'Comando ALTER TABLE em SQL'
        },
        {
            enunciado:'Qual é o comando SQL utilizado para criar um índice em uma tabela?',
            alternativa_A:'CREATE INDEX',
            alternativa_B:'ADD INDEX',
            alternativa_C:'UPDATE INDEX',
            alternativa_D:'ALTER INDEX',
            resposta:'a',
            tema:'Comando CREATE INDEX em SQL'
        },
        {
            enunciado:'Qual é o comando SQL utilizado para remover um índice de uma tabela?',
            alternativa_A:'REMOVE INDEX',
            alternativa_B:'DELETE INDEX',
            alternativa_C:'DROP INDEX',
            alternativa_D:'ALTER INDEX',
            resposta:'c',
            tema:'Comando DROP INDEX em SQL'
        },
        {
            enunciado:'Qual é o operador SQL utilizado para combinar duas ou mais consultas em uma única consulta?',
            alternativa_A:'UNION',
            alternativa_B:'JOIN',
            alternativa_C:'MERGE',
            alternativa_D:'GROUP',
            resposta:'a',
            tema:'Operador UNION em SQL'
        },
        {
            enunciado:'Qual é o comando SQL utilizado para agrupar valores em uma tabela?',
            alternativa_A:'GROUP',
            alternativa_B:'COUNT',
            alternativa_C:'SUM',
            alternativa_D:'HAVING',
            resposta:'a',
            tema:'Cláusula GROUP BY em SQL'
        },
        {
            enunciado:'Qual é o comando SQL utilizado para selecionar apenas valores únicos em uma consulta?',
            alternativa_A:'DISTINCT',
            alternativa_B:'UNIQUE',
            alternativa_C:'SINGLE',
            alternativa_D:'UNREPEATED',
            resposta:'a',
            tema:'Operador DISTINCT em SQL'
        },
        {
            enunciado:'Qual é o operador SQL utilizado para ordenar resultados em ordem decrescente?',
            alternativa_A:'ASC',
            alternativa_B:'DESC',
            alternativa_C:'ORDER',
            alternativa_D:'SORT',
            resposta:'b',
            tema:'Cláusula ORDER BY em SQL'
        },
        {
            enunciado:'Qual é o operador SQL utilizado para comparar valores em uma consulta?',
            alternativa_A:'LIKE',
            alternativa_B:'EQUALS',
            alternativa_C:'COMPARE',
            alternativa_D:'MATCH',
            resposta:'a',
            tema:'Operador LIKE em SQL'
        }
    ]
    
    return mediumQuestions
}

export const SQL_hard = () => {
    const hardQuestions = [
        {
            enunciado: 'Qual é a diferença entre INNER JOIN e OUTER JOIN?',
            alternativa_A: 'INNER JOIN retorna apenas as linhas que possuem correspondência em ambas as tabelas, enquanto OUTER JOIN retorna todas as linhas de ambas as tabelas, incluindo as que não possuem correspondência.',
            alternativa_B: 'INNER JOIN retorna todas as linhas de ambas as tabelas, incluindo as que não possuem correspondência, enquanto OUTER JOIN retorna apenas as linhas que possuem correspondência em ambas as tabelas.',
            alternativa_C: 'INNER JOIN e OUTER JOIN são sinônimos e podem ser usados de forma intercambiável.',
            alternativa_D: 'Não há diferença entre INNER JOIN e OUTER JOIN.',
            resposta: 'a',
            tema: 'Tipos de JOIN em SQL'
        },
        {
            enunciado: 'Qual é a finalidade da cláusula GROUPING SETS em SQL?',
            alternativa_A: 'Permite especificar vários grupos de colunas em uma única cláusula GROUP BY.',
            alternativa_B: 'Permite restringir o conjunto de resultados retornados por uma consulta.',
            alternativa_C: 'Permite unir os resultados de várias consultas SELECT em uma única tabela temporária.',
            alternativa_D: 'Não existe a cláusula GROUPING SETS em SQL.',
            resposta: 'a',
            tema: 'Cláusula GROUPING SETS em SQL'
        },
        {
            enunciado: 'O que são índices em SQL?',
            alternativa_A: 'São estruturas de dados usadas para melhorar a velocidade de consultas em tabelas grandes.',
            alternativa_B: 'São tabelas temporárias usadas para armazenar o resultado de uma consulta complexa.',
            alternativa_C: 'São comandos usados para criar novas tabelas a partir de uma tabela existente.',
            alternativa_D: 'São cláusulas usadas para limitar o número de resultados retornados por uma consulta.',
            resposta: 'a',
            tema: 'Índices em SQL'
        },
        {
            enunciado: 'Qual é a diferença entre uma função agregada e uma função escalar em SQL?',
            alternativa_A: 'Funções agregadas retornam um único valor calculado a partir de um conjunto de valores, enquanto funções escalares retornam um valor para cada linha da tabela.',
            alternativa_B: 'Funções agregadas são usadas apenas em consultas que envolvem várias tabelas, enquanto funções escalares são usadas apenas em consultas que envolvem uma única tabela.',
            alternativa_C: 'Funções agregadas são usadas para filtrar resultados em uma consulta, enquanto funções escalares são usadas para ordenar resultados.',
            alternativa_D: 'Não há diferença entre funções agregadas e funções escalares.',
            resposta: 'a',
            tema: 'Funções agregadas e escalares em SQL'
        },
        {
            enunciado:'Qual é o comando SQL utilizado para criar uma tabela temporária?',
            alternativa_A:'CREATE TEMPORARY TABLE',
            alternativa_B:'CREATE TABLE TEMPORARY',
            alternativa_C:'CREATE TABLE AS',
            alternativa_D:'CREATE TABLE LIKE',
            resposta:'a',
            tema:'Tabelas temporárias em SQL'
        },
        {
            enunciado:'Qual é o comando SQL utilizado para alterar o tipo de uma coluna em uma tabela?',
            alternativa_A:'MODIFY COLUMN',
            alternativa_B:'ALTER COLUMN TYPE',
            alternativa_C:'CHANGE COLUMN',
            alternativa_D:'UPDATE COLUMN TYPE',
            resposta:'a',
            tema:'Comando ALTER TABLE em SQL'
        },
        {
            enunciado:'Qual é o comando SQL utilizado para adicionar uma restrição a uma tabela?',
            alternativa_A:'ADD CONSTRAINT',
            alternativa_B:'CREATE CONSTRAINT',
            alternativa_C:'INSERT CONSTRAINT',
            alternativa_D:'DEFINE CONSTRAINT',
            resposta:'a',
            tema:'Restrições em SQL'
        },
        {
            enunciado:'Qual é o comando SQL utilizado para criar um procedimento armazenado?',
            alternativa_A:'CREATE PROCEDURE',
            alternativa_B:'ADD PROCEDURE',
            alternativa_C:'DEFINE PROCEDURE',
            alternativa_D:'MAKE PROCEDURE',
            resposta:'a',
            tema:'Procedimentos armazenados em SQL'
        },
        {
            enunciado:'Qual é o comando SQL utilizado para criar uma visão (view)?',
            alternativa_A:'CREATE VIEW',
            alternativa_B:'ADD VIEW',
            alternativa_C:'DEFINE VIEW',
            alternativa_D:'MAKE VIEW',
            resposta:'a',
            tema:'Visões (views) em SQL'
        },
        {
            enunciado: 'Qual é o comando SQL utilizado para executar uma subconsulta?',
            alternativa_A: 'SUB SELECT',
            alternativa_B: 'INNER SELECT',
            alternativa_C: 'SUB QUERY',
            alternativa_D: 'INNER QUERY',
            resposta: 'd',
            tema: 'Subconsultas (subqueries) em SQL'
        }
    ]

    return hardQuestions;
}


export const JAVA_easy = () =>{
    let easyQuestions = [
        {
            enunciado:'O que é Java?',
            alternativa_A:'Uma linguagem de programação',
            alternativa_B:'Um banco de dados',
            alternativa_C:'Um sistema operacional',
            alternativa_D:'Um hardware',
            resposta:'a',
            tema:'Introdução à linguagem Java'
        },
        {
            enunciado:'Qual é a principal característica da plataforma Java?',
            alternativa_A:'Portabilidade',
            alternativa_B:'Velocidade',
            alternativa_C:'Facilidade de uso',
            alternativa_D:'Preço',
            resposta:'a',
            tema:'Plataforma Java'
        },
        {
            enunciado:'O que é um objeto em Java?',
            alternativa_A:'Uma instância de uma classe',
            alternativa_B:'Um tipo primitivo de dados',
            alternativa_C:'Um método de uma classe',
            alternativa_D:'Um pacote de classes',
            resposta:'a',
            tema:'Orientação a Objetos em Java'
        },
        {
            enunciado:'O que é uma classe em Java?',
            alternativa_A:'Um modelo para criar objetos',
            alternativa_B:'Um tipo primitivo de dados',
            alternativa_C:'Um método de um objeto',
            alternativa_D:'Um pacote de objetos',
            resposta:'a',
            tema:'Orientação a Objetos em Java'
        },
        {
            enunciado:'Qual é a sintaxe para criar um objeto em Java?',
            alternativa_A:'new Classe();',
            alternativa_B:'Class = new Object();',
            alternativa_C:'Object.new(Class);',
            alternativa_D:'Class.createObject();',
            resposta:'a',
            tema:'Criando objetos em Java'
        },
        {
            enunciado:'O que é uma variável em Java?',
            alternativa_A:'Um espaço na memória que armazena um valor',
            alternativa_B:'Um método que realiza uma operação',
            alternativa_C:'Um tipo primitivo de dados',
            alternativa_D:'Uma instrução condicional',
            resposta:'a',
            tema:'Variáveis em Java'
        },
        {
            enunciado:'Qual é a sintaxe para declarar uma variável em Java?',
            alternativa_A:'tipo nomeDaVariavel = valor;',
            alternativa_B:'valor tipo nomeDaVariavel =;',
            alternativa_C:'tipo nomeDaVariavel;',
            alternativa_D:'valor tipo nomeDaVariavel;',
            resposta:'a',
            tema:'Variáveis em Java'
        },
        {
            enunciado:'O que é um array em Java?',
            alternativa_A:'Uma estrutura que armazena múltiplos valores do mesmo tipo',
            alternativa_B:'Um tipo primitivo de dados',
            alternativa_C:'Um método que realiza uma operação',
            alternativa_D:'Uma instrução condicional',
            resposta:'a',
            tema:'Arrays em Java'
        },
        {
            enunciado:'Qual é a sintaxe para declarar um array em Java?',
            alternativa_A:'tipo[] nomeDoArray = new tipo[tamanho];',
            alternativa_B:'tipo[] nomeDoArray = {valor1, valor2, valor3};',
            alternativa_C:'tipo[] nomeDoArray;',
            alternativa_D:'tipo nomeDoArray[] = new tipo[tamanho];',
            resposta:'a',
            tema:'Arrays'
        },
        {
            enunciado:'O que é um método em Java?',
            alternativa_A:'Uma ação que pode ser executada por um objeto',
            alternativa_B:'Um tipo primitivo de dados',
            alternativa_C:'Uma instrução condicional',
            alternativa_D:'Um pacote de classes',
            resposta:'a',
            tema:'Métodos em Java'
        },
        {
            enunciado:'Qual é a sintaxe para definir um método em Java?',
            alternativa_A:'tipoDeRetorno nomeDoMetodo(parametros) { // corpo do método }',
            alternativa_B:'nomeDoMetodo(parametros) { // corpo do método }',
            alternativa_C:'tipoDeRetorno nomeDoMetodo { // corpo do método }',
            alternativa_D:'tipoDeRetorno nomeDoMetodo { // corpo do método } parametros',
            resposta:'a',
            tema:'Métodos em Java'
        }
    ];
    return easyQuestions
}

export const JAVA_medium = () =>{
    let mediumQuestions = [
        {
            enunciado:'Qual a diferença entre uma classe abstrata e uma interface em Java?',
            alternativa_A:'Uma interface pode ter métodos com implementação enquanto uma classe abstrata não pode',
            alternativa_B:'Uma classe abstrata pode ter variáveis de instância enquanto uma interface não pode',
            alternativa_C:'Uma interface pode ter variáveis de instância enquanto uma classe abstrata não pode',
            alternativa_D:'Uma classe abstrata pode ter construtores enquanto uma interface não pode',
            resposta:'a',
            tema:'Classes abstratas e interfaces em Java'
        },
        {
            enunciado:'O que é uma exceção em Java?',
            alternativa_A:'Uma classe que define um objeto de erro que é lançado em tempo de compilação',
            alternativa_B:'Uma classe que define um objeto de erro que é lançado em tempo de execução',
            alternativa_C:'Uma classe que define um objeto de aviso que é lançado em tempo de compilação',
            alternativa_D:'Uma classe que define um objeto de aviso que é lançado em tempo de execução',
            resposta:'b',
            tema:'Exceções em Java'
        },
        {
            enunciado:'O que é o operador "this" em Java?',
            alternativa_A:'Um operador que permite acessar membros de uma classe a partir de um objeto',
            alternativa_B:'Um operador que permite acessar membros de uma classe a partir de outra classe',
            alternativa_C:'Um operador que permite acessar membros de uma classe a partir de uma interface',
            alternativa_D:'Um operador que permite acessar membros de uma interface a partir de uma classe',
            resposta:'a',
            tema:'Operador "this" em Java'
        },
        {
            enunciado:'O que é um método construtor em Java?',
            alternativa_A:'Um método que permite criar novos objetos a partir de outros objetos',
            alternativa_B:'Um método que permite inicializar as variáveis de instância de uma classe',
            alternativa_C:'Um método que permite acessar membros de outras classes',
            alternativa_D:'Um método que permite realizar operações matemáticas',
            resposta:'b',
            tema:'Métodos construtores em Java'
        },
        {
            enunciado:'O que é o operador ternário em Java?',
            alternativa_A:'Um operador que permite realizar operações lógicas em três operandos',
            alternativa_B:'Um operador que permite realizar operações matemáticas em três operandos',
            alternativa_C:'Um operador que permite acessar membros de uma classe a partir de um objeto',
            alternativa_D:'Um operador que permite acessar membros de uma classe a partir de outra classe',
            resposta:'a',
            tema:'Operador ternário em Java'
        },
        {
            enunciado:'Qual é a diferença entre um array e uma lista em Java?',
            alternativa_A:'Um array é uma estrutura de dados fixa enquanto uma lista é uma estrutura de dados dinâmica',
            alternativa_B:'Um array é uma estrutura de dados dinâmica enquanto uma lista é uma estrutura de dados fixa',
            alternativa_C:'Um array é uma coleção de objetos enquanto uma lista é uma coleção de tipos primitivos',
            alternativa_D:'Um array é uma coleção de tipos primitivos enquanto uma lista é uma coleção de objetos',
            resposta:'a',
            tema:'Arrays e listas em Java'
        },
        {
            enunciado:'O que é uma classe em Java?',
            alternativa_A:'Uma estrutura de dados que permite armazenar vários tipos de dados',
            alternativa_B:'Um conjunto de instruções que realiza uma tarefa específica em um programa',
            alternativa_C:'Um tipo de dado que representa um número inteiro',
            alternativa_D:'Um modelo para criar objetos que possuem atributos e métodos',
            resposta:'d',
            tema:'Classes em Java'
        },
        {
            enunciado:'O que é o operador "instanceof" em Java?',
            alternativa_A:'Um operador que compara dois objetos para verificar se eles são iguais',
            alternativa_B:'Um operador que compara dois objetos para verificar se eles são diferentes',
            alternativa_C:'Um operador que verifica se um objeto é uma instância de uma determinada classe',
            alternativa_D:'Um operador que verifica se um objeto é uma instância de uma classe derivada',
            resposta:'c',
            tema:'Operador "instanceof" em Java'
        },
        {
            enunciado:'O que é uma classe anônima em Java?',
            alternativa_A:'Uma classe que não possui nenhum método',
            alternativa_B:'Uma classe que não possui nenhum atributo',
            alternativa_C:'Uma classe que não possui nome',
            alternativa_D:'Uma classe que não pode ser instanciada',
            resposta:'c',
            tema:'Classes anônimas em Java'
        },
        {
            enunciado:'O que é o operador "super" em Java?',
            alternativa_A:'Um operador que permite acessar membros de uma classe a partir de um objeto',
            alternativa_B:'Um operador que permite acessar membros de uma classe a partir de outra classe',
            alternativa_C:'Um operador que permite acessar membros de uma classe pai',
            alternativa_D:'Um operador que permite acessar membros de uma classe filho',
            resposta:'c',
            tema:'Operador "super" em Java'
        },
        
    ]
    return mediumQuestions
}

export const JAVA_hard = () =>{

    let hardQuestions = [
        {
            enunciado:'O que são streams em Java 8?',
            alternativa_A:'Uma forma de processar coleções de objetos de forma imperativa',
            alternativa_B:'Uma forma de processar coleções de objetos de forma funcional',
            alternativa_C:'Um tipo de conexão com um servidor de dados externo',
            alternativa_D:'Uma forma de processar coleções de objetos usando paralelismo',
            resposta:'b',
            tema:'Streams em Java 8'
        },
        {
            enunciado:'O que é o Java Native Interface (JNI)?',
            alternativa_A:'Um mecanismo que permite executar código em diferentes máquinas virtuais Java',
            alternativa_B:'Um mecanismo que permite a comunicação entre código Java e código nativo em outras linguagens',
            alternativa_C:'Um mecanismo que permite a execução de código Java em sistemas operacionais distintos',
            alternativa_D:'Um mecanismo que permite a compilação de código Java para executáveis nativos',
            resposta:'b',
            tema:'Java Native Interface (JNI)'
        },
        {
            enunciado:'O que são as anotações em Java?',
            alternativa_A:'São uma forma de documentar o código em Java',
            alternativa_B:'São uma forma de adicionar metadados ao código em Java',
            alternativa_C:'São uma forma de escrever código mais legível em Java',
            alternativa_D:'São uma forma de definir interfaces em Java',
            resposta:'b',
            tema:'Anotações em Java'
        },
        {
            enunciado:'O que é o garbage collector em Java?',
            alternativa_A:'Um mecanismo que permite a execução de código Java em sistemas operacionais distintos',
            alternativa_B:'Um mecanismo que permite a compilação de código Java para executáveis nativos',
            alternativa_C:'Um mecanismo que permite liberar memória não utilizada em Java',
            alternativa_D:'Um mecanismo que permite gerenciar recursos de entrada e saída em Java',
            resposta:'c',
            tema:'Garbage Collector em Java'
        },
        {
            enunciado:'O que são os lambdas em Java?',
            alternativa_A:'São uma forma de definir variáveis em Java',
            alternativa_B:'São uma forma de adicionar comentários ao código em Java',
            alternativa_C:'São uma forma de definir funções anônimas em Java',
            alternativa_D:'São uma forma de definir constantes em Java',
            resposta:'c',
            tema:'Lambdas em Java'
        },
        {
            enunciado:'O que são os generics em Java?',
            alternativa_A:'São uma forma de definir tipos de variáveis em Java',
            alternativa_B:'São uma forma de definir interfaces em Java',
            alternativa_C:'São uma forma de definir classes abstratas em Java',
            alternativa_D:'São uma forma de definir classes anônimas em Java',
            resposta:'a',
            tema:'Generics em Java'
        },
        {
            enunciado:'O que é o polimorfismo em Java?',
            alternativa_A:'É a capacidade de uma classe herdar de múltiplas classes em Java',
            alternativa_B:'É a capacidade de uma classe ter múltiplos construtores em Java',
            alternativa_C:'É a capacidade de uma classe ter múltiplos métodos com o mesmo nome em Java',
            alternativa_D:'É a capacidade de uma classe ter múltiplos atributos com o mesmo nome em Java',
            resposta:'c',
            tema:'Polimorfismo em Java'
        },
        {
            enunciado:'O que são as expressões regulares em Java?',
            alternativa_A:'São uma forma de definir variáveis em Java',
            alternativa_B:'São uma forma de definir funções em Java',
            alternativa_C:'São uma forma de definir padrões de busca em strings em Java',
            alternativa_D:'São uma forma de definir classes em Java',
            resposta:'c',
            tema:'Expressões regulares em Java'
        },
        {
            enunciado:'O que é o Reflection em Java?',
            alternativa_A:'É um mecanismo que permite a execução de código Java em sistemas operacionais distintos',
            alternativa_B:'É um mecanismo que permite a compilação de código Java para executáveis nativos',
            alternativa_C:'É um mecanismo que permite acessar informações sobre o código em tempo de execução em Java',
            alternativa_D:'É um mecanismo que permite a comunicação entre código Java e código nativo em outras linguagens',
            resposta:'c',
            tema:'Reflection em Java'
        },
        {
            enunciado:'O que é o Design Pattern Singleton em Java?',
            alternativa_A:'É um padrão de projeto que permite a criação de objetos de forma preguiçosa em Java',
            alternativa_B:'É um padrão de projeto que permite a criação de objetos com base em interfaces em Java',
            alternativa_C:'É um padrão de projeto que permite a criação de uma única instância de uma classe em Java',
            alternativa_D:'É um padrão de projeto que permite a criação de objetos com base em classes abstratas em Java',
            resposta:'c',
            tema:'Design Pattern Singleton em Java'
        }
    ];
    return hardQuestions
}


export const HTML_easy = () =>{
    let easyQuestions = [
        {
            enunciado:'O que significa a sigla HTML?',
            alternativa_A:'Hypertext Markup Language',
            alternativa_B:'Hypertext Markdown Language',
            alternativa_C:'Hypertext Model Language',
            alternativa_D:'Hypertext Management Language',
            resposta:'a',
            tema:'Introdução ao HTML'
        },
        {
            enunciado:'Qual a função da tag <head> em HTML?',
            alternativa_A:'Define o título da página e inclui scripts e links para arquivos externos',
            alternativa_B:'Define a estrutura da página, incluindo cabeçalho, rodapé e conteúdo',
            alternativa_C:'Define o conteúdo principal da página',
            alternativa_D:'Define a lista de itens em uma página',
            resposta:'a',
            tema:'Tag <head> em HTML'
        },
        {
            enunciado:'Qual a função da tag <body> em HTML?',
            alternativa_A:'Define o conteúdo principal da página',
            alternativa_B:'Define o título da página e inclui scripts e links para arquivos externos',
            alternativa_C:'Define a estrutura da página, incluindo cabeçalho, rodapé e conteúdo',
            alternativa_D:'Define a lista de itens em uma página',
            resposta:'a',
            tema:'Tag <body> em HTML'
        },
        {
            enunciado:'Qual a função da tag <div> em HTML?',
            alternativa_A:'Agrupa elementos em uma seção genérica, sem nenhum significado específico',
            alternativa_B:'Define uma seção de cabeçalho para um documento ou seção',
            alternativa_C:'Define uma imagem em uma página',
            alternativa_D:'Define um link para outra página ou recurso',
            resposta:'a',
            tema:'Tag <div> em HTML'
        },
        {
            enunciado:'Qual a função da tag <p> em HTML?',
            alternativa_A:'Define um parágrafo de texto',
            alternativa_B:'Define uma imagem em uma página',
            alternativa_C:'Define uma lista de itens',
            alternativa_D:'Define um link para outra página ou recurso',
            resposta:'a',
            tema:'Tag <p> em HTML'
        },
        {
            enunciado:'Qual a função da tag <a> em HTML?',
            alternativa_A:'Define um link para outra página ou recurso',
            alternativa_B:'Define uma imagem em uma página',
            alternativa_C:'Define um parágrafo de texto',
            alternativa_D:'Define uma lista de itens',
            resposta:'a',
            tema:'Tag <a> em HTML'
        },
        {
            enunciado:'Qual a função da tag <img> em HTML?',
            alternativa_A:'Define uma imagem em uma página',
            alternativa_B:'Define um link para outra página ou recurso',
            alternativa_C:'Define um parágrafo de texto',
            alternativa_D:'Define uma lista de itens',
            resposta:'a',
            tema:'Tag <img> em HTML'
        },
        {
            enunciado:'Qual a função da tag <ol> em HTML?',
            alternativa_A:'Define uma lista ordenada',
            alternativa_B:'Define uma lista não ordenada',
            alternativa_C:'Define uma lista de itens em uma tabela',
            alternativa_D:'Define uma seção de cabeçalho para um documento ou seção',
            resposta:'a',
            tema:'Tag <ol> em HTML'
        },
        {
            enunciado:'Qual a função da tag <table> em HTML?',
            alternativa_A:'Define uma tabela em uma página',
            alternativa_B:'Define um link para outra página ou recurso',
            alternativa_C:'Define uma imagem em uma página',
            alternativa_D:'Define um parágrafo de texto',
            resposta:'a',
            tema:'Tag <table> em HTML'
        },
        {
            enunciado:'Qual a função da tag <form> em HTML?',
            alternativa_A:'Define um formulário para entrada de dados do usuário',
            alternativa_B:'Define uma lista de itens',
            alternativa_C:'Define um parágrafo de texto',
            alternativa_D:'Define uma tabela em uma página',
            resposta:'a',
            tema:'Tag <form> em HTML'
        }
    ]
    
    return easyQuestions
}

export const HTML_medium = () =>{
    let mediumQuestions = [
        {
            enunciado: 'O que é o elemento <form> em HTML?',
            alternativa_A: 'Um elemento para exibir texto formatado',
            alternativa_B: 'Um elemento para exibir imagens',
            alternativa_C: 'Um elemento para criar um formulário para entrada de dados',
            alternativa_D: 'Um elemento para exibir vídeo',
            resposta: 'c',
            tema: 'Formulários HTML'
          },
        {
          enunciado: 'Qual a finalidade da tag <meta> em HTML?',
          alternativa_A: 'Definir o título da página',
          alternativa_B: 'Inserir um link para um arquivo externo',
          alternativa_C: 'Definir as palavras-chave da página',
          alternativa_D: 'Inserir informações sobre a página que não são visíveis ao usuário',
          resposta: 'd',
          tema: 'Tags HTML para metadados'
        },
        {
          enunciado: 'Qual a diferença entre as tags <span> e <div> em HTML?',
          alternativa_A: 'Não há diferença entre elas',
          alternativa_B: 'A tag <span> é usada para conteúdo em linha e a tag <div> para conteúdo em bloco',
          alternativa_C: 'A tag <div> é usada para conteúdo em linha e a tag <span> para conteúdo em bloco',
          alternativa_D: 'A tag <span> é usada para criar listas e a tag <div> para agrupar elementos',
          resposta: 'b',
          tema: 'Tags HTML para estruturação de conteúdo'
        },
        {
          enunciado: 'O que é o atributo "alt" da tag <img> em HTML?',
          alternativa_A: 'Define o texto alternativo para exibição caso a imagem não carregue',
          alternativa_B: 'Define a largura da imagem em pixels',
          alternativa_C: 'Define a altura da imagem em pixels',
          alternativa_D: 'Define a URL da imagem a ser exibida',
          resposta: 'a',
          tema: 'Tags HTML para imagens'
        },
        {
          enunciado: 'Qual a finalidade da tag <nav> em HTML?',
          alternativa_A: 'Define um cabeçalho para a página',
          alternativa_B: 'Define uma seção para conteúdo principal da página',
          alternativa_C: 'Define uma seção para links de navegação',
          alternativa_D: 'Define um rodapé para a página',
          resposta: 'c',
          tema: 'Tags HTML para estruturação de conteúdo'
        },
        {
          enunciado: 'Qual a finalidade da tag <table> em HTML?',
          alternativa_A: 'Definir uma lista ordenada de itens',
          alternativa_B: 'Definir uma lista não-ordenada de itens',
          alternativa_C: 'Definir uma tabela com linhas e colunas',
          alternativa_D: 'Definir uma seção de código que deve ser interpretada pelo navegador',
          resposta: 'c',
          tema: 'Tags HTML para tabelas'
        },
        {
            enunciado: 'O que é o atributo "required" da tag <input> em HTML?',
            alternativa_A: 'Define se o campo de entrada é obrigatório',
            alternativa_B: 'Define o tipo do campo de entrada',
            alternativa_C: 'Define o tamanho máximo do campo de entrada',
            alternativa_D: 'Define o valor padrão do campo de entrada',
            resposta: 'a',
            tema: 'Formulários HTML'
        },
        {
            enunciado: 'O que é o elemento <video> em HTML?',
            alternativa_A: 'Um elemento para exibir imagens em sequência',
            alternativa_B: 'Um elemento para exibir animações em Flash',
            alternativa_C: 'Um elemento para exibir vídeo',
            alternativa_D: 'Um elemento para exibir texto formatado',
            resposta: 'c',
            tema: 'Vídeo em HTML'
          },
          {
            enunciado: 'Qual a finalidade da tag <aside> em HTML?',
            alternativa_A: 'Definir uma seção lateral para conteúdo relacionado',
            alternativa_B: 'Definir uma seção para conteúdo principal da página',
            alternativa_C: 'Definir uma seção para links de navegação',
            alternativa_D: 'Definir um rodapé para a página',
            resposta: 'a',
            tema: 'Tags HTML para estruturação de conteúdo'
          },
          {
            enunciado: 'O que é o elemento <canvas> em HTML?',
            alternativa_A: 'Um elemento para exibir imagens em sequência',
            alternativa_B: 'Um elemento para exibir animações em Flash',
            alternativa_C: 'Um elemento para desenhar gráficos e animações por meio de scripts em JavaScript',
            alternativa_D: 'Um elemento para exibir vídeo',
            resposta: 'c',
            tema: 'Canvas em HTML'
        }
    ]
      
    return mediumQuestions
}

export const HTML_hard = () =>{

    let hardQuestions = [
        {
            enunciado:'O que é um Shadow DOM em HTML?',
            alternativa_A:'Um elemento HTML que não é afetado pelo estilo do restante da página',
            alternativa_B:'Um elemento HTML que é renderizado fora da árvore DOM',
            alternativa_C:'Um elemento HTML que é renderizado dentro de outro elemento HTML',
            alternativa_D:'Um elemento HTML que permite criar elementos personalizados com encapsulamento de estilo e comportamento',
            resposta:'d',
            tema:'Shadow DOM'
        },
        {
            enunciado:'Qual é a diferença entre os elementos <img> e <picture> em HTML?',
            alternativa_A:'Nenhuma diferença',
            alternativa_B:'O elemento <img> é mais antigo e o <picture> foi introduzido mais recentemente',
            alternativa_C:'O elemento <img> é para imagens simples e o <picture> é para imagens responsivas',
            alternativa_D:'O elemento <img> é para imagens e o <picture> é para vídeos',
            resposta:'c',
            tema:'Elementos img e picture em HTML'
        },
        {
            enunciado:'O que é um layout responsivo em HTML?',
            alternativa_A:'Um layout que se adapta automaticamente ao tamanho da tela',
            alternativa_B:'Um layout que permite a utilização de recursos de realidade aumentada',
            alternativa_C:'Um layout que permite a utilização de animações em 3D',
            alternativa_D:'Um layout que utiliza fontes personalizadas',
            resposta:'a',
            tema:'Layout responsivo em HTML'
        },
        {
            enunciado:'O que é um Web Component em HTML?',
            alternativa_A:'Um elemento HTML que pode ser reutilizado em diferentes páginas',
            alternativa_B:'Um elemento HTML que pode ser renderizado fora da árvore DOM',
            alternativa_C:'Um elemento HTML que permite criar elementos personalizados com encapsulamento de estilo e comportamento',
            alternativa_D:'Um elemento HTML que permite criar animações em 3D',
            resposta:'c',
            tema:'Web Components em HTML'
        },
        {
            enunciado:'O que é um Data Attribute em HTML?',
            alternativa_A:'Um atributo que permite armazenar dados em um elemento HTML',
            alternativa_B:'Um atributo que permite definir o tamanho de uma imagem em HTML',
            alternativa_C:'Um atributo que permite definir a cor de um elemento HTML',
            alternativa_D:'Um atributo que permite definir a largura de uma tabela em HTML',
            resposta:'a',
            tema:'Data Attributes em HTML'
        },
        {
            enunciado:'Qual é a diferença entre as tags <ul> e <ol> em HTML?',
            alternativa_A:'Nenhuma diferença',
            alternativa_B:'A tag <ul> é usada para criar listas não ordenadas e a tag <ol> é usada para criar listas ordenadas',
            alternativa_C:'A tag <ul> é usada para criar listas ordenadas e a tag <ol> é usada para criar listas não ordenadas',
            alternativa_D:'A tag <ul> é usada para criar tabelas e a tag <ol> é usada para criar formulários',
            resposta:'b',
            tema:'Tags ul e ol em HTML'
            },
            {
            enunciado:'O que é uma tabela em HTML?',
            alternativa_A:'Uma estrutura que permite organizar informações em colunas e linhas',
            alternativa_B:'Um elemento HTML que permite a exibição de imagens',
            alternativa_C:'Um elemento HTML que permite a criação de animações',
            alternativa_D:'Uma estrutura que permite a exibição de conteúdo multimídia',
            resposta:'a',
            tema:'Tabelas em HTML'
            },
            {
            enunciado:'O que é um elemento <iframe> em HTML?',
            alternativa_A:'Um elemento HTML que permite a inclusão de conteúdo de outros sites em uma página',
            alternativa_B:'Um elemento HTML que permite a exibição de vídeos',
            alternativa_C:'Um elemento HTML que permite a criação de animações em 3D',
            alternativa_D:'Um elemento HTML que permite a criação de formulários',
            resposta:'a',
            tema:'Elemento iframe em HTML'
            },
            {
            enunciado:'Qual é a função da tag <header> em HTML?',
            alternativa_A:'É utilizada para definir o cabeçalho da página',
            alternativa_B:'É utilizada para incluir scripts em uma página',
            alternativa_C:'É utilizada para criar uma seção da página',
            alternativa_D:'É utilizada para criar um rodapé da página',
            resposta:'a',
            tema:'Tag header em HTML'
            },
            {
            enunciado:'Qual é a diferença entre os elementos <img> e <picture> em HTML?',
            alternativa_A:'Nenhuma diferença',
            alternativa_B:'O elemento <img> é mais antigo e o <picture> foi introduzido mais recentemente',
            alternativa_C:'O elemento <img> é para imagens simples e o <picture> é para imagens responsivas',
            alternativa_D:'O elemento <img> é para imagens e o <picture> é para vídeos',
            resposta:'c',
            tema:'Elementos img e picture em HTML'
        }
    ]
    return hardQuestions
}


export const CSS_easy = () =>{

    let easyQuestions = [
        {
            enunciado: 'O que significa CSS?',
            alternativa_A: 'Cascading Style Sheets',
            alternativa_B: 'Computer Style Sheets',
            alternativa_C: 'Colorful Style Sheets',
            alternativa_D: 'Creative Style Sheets',
            resposta: 'a',
            tema: 'CSS'
        },
        {
            enunciado: 'Qual é a tag usada para conectar um arquivo CSS a um arquivo HTML?',
            alternativa_A: '<link>',
            alternativa_B: '<style>',
            alternativa_C: '<css>',
            alternativa_D: '<meta>',
            resposta: 'a',
            tema: 'CSS'
        },
        {
            enunciado: 'Qual é a propriedade usada para alterar a cor do texto em CSS?',
            alternativa_A: 'background-color',
            alternativa_B: 'font-family',
            alternativa_C: 'color',
            alternativa_D: 'text-color',
            resposta: 'c',
            tema: 'CSS'
        },
        {
            enunciado: 'Qual é a propriedade usada para alterar a cor de fundo de um elemento em CSS?',
            alternativa_A: 'background-color',
            alternativa_B: 'font-size',
            alternativa_C: 'color',
            alternativa_D: 'text-color',
            resposta: 'a',
            tema: 'CSS'
        },
        {
            enunciado: 'Qual é a propriedade usada para adicionar margem interna a um elemento em CSS?',
            alternativa_A: 'padding',
            alternativa_B: 'margin-top',
            alternativa_C: 'margin-bottom',
            alternativa_D: 'margin-right',
            resposta: 'a',
            tema: 'CSS'
        },
        {
            enunciado: 'Qual é a propriedade usada para centralizar um elemento em CSS?',
            alternativa_A: 'text-align',
            alternativa_B: 'align-items',
            alternativa_C: 'justify-content',
            alternativa_D: 'margin',
            resposta: 'd',
            tema: 'CSS'
        },
        {
            enunciado: 'Qual é a propriedade usada para alterar o tamanho da fonte em CSS?',
            alternativa_A: 'font-family',
            alternativa_B: 'font-style',
            alternativa_C: 'font-size',
            alternativa_D: 'font-weight',
            resposta: 'c',
            tema: 'CSS'
        },
        {
            enunciado: 'Qual é a propriedade usada para alterar a largura de um elemento em CSS?',
            alternativa_A: 'width',
            alternativa_B: 'height',
            alternativa_C: 'max-width',
            alternativa_D: 'min-width',
            resposta: 'a',
            tema: 'CSS'
        },
        {
            enunciado: 'Qual é a propriedade usada para alterar a altura de um elemento em CSS?',
            alternativa_A: 'width',
            alternativa_B: 'height',
            alternativa_C: 'max-height',
            alternativa_D: 'min-height',
            resposta: 'b',
            tema: 'CSS'
        },
        {
            enunciado: 'Qual é a propriedade usada para definir a altura de linha em CSS?',
            alternativa_A: 'line-height',
            alternativa_B: 'font-size',
            alternativa_C: 'letter-spacing',
            alternativa_D: 'word-spacing',
            resposta: 'a',
            tema: 'CSS'
        }
    ]
    return easyQuestions
}

export const CSS_medium = () =>{
    let mediumQuestions = [
    {
        enunciado: 'O que significa o termo "box model" em CSS?',
        alternativa_A: 'Um modelo que representa um elemento HTML como uma caixa retangular com conteúdo, preenchimento, borda e margem',
        alternativa_B: 'Um modelo que permite que os elementos HTML sejam posicionados em qualquer lugar na página',
        alternativa_C: 'Um modelo que permite que os elementos HTML sejam transformados em 3D',
        alternativa_D: 'Um modelo que permite que os elementos HTML sejam animados usando JavaScript',
        resposta: 'a',
        tema: 'CSS'
    },
    {
        enunciado: 'Qual é a propriedade usada para definir o espaçamento entre os elementos em CSS?',
        alternativa_A: 'margin',
        alternativa_B: 'padding',
        alternativa_C: 'border-spacing',
        alternativa_D: 'grid-gap',
        resposta: 'c',
        tema: 'CSS'
    },
    {
        enunciado: 'Qual é a propriedade usada para definir o tamanho da borda em CSS?',
        alternativa_A: 'border-width',
        alternativa_B: 'border-style',
        alternativa_C: 'border-color',
        alternativa_D: 'border-radius',
        resposta: 'a',
        tema: 'CSS'
    },
    {
        enunciado: 'Qual é a propriedade usada para definir a transparência de um elemento em CSS?',
        alternativa_A: 'opacity',
        alternativa_B: 'visibility',
        alternativa_C: 'display',
        alternativa_D: 'background-color',
        resposta: 'a',
        tema: 'CSS'
    },
    {
        enunciado: 'Qual é a propriedade usada para definir um gradiente de cor em CSS?',
        alternativa_A: 'background-color',
        alternativa_B: 'color-stop',
        alternativa_C: 'background-image',
        alternativa_D: 'linear-gradient',
        resposta: 'd',
        tema: 'CSS'
    },
    {
        enunciado: 'Qual é a propriedade usada para criar uma sombra em torno de um elemento em CSS?',
        alternativa_A: 'text-shadow',
        alternativa_B: 'box-shadow',
        alternativa_C: 'drop-shadow',
        alternativa_D: 'shadow-effect',
        resposta: 'b',
        tema: 'CSS'
    },
    {
        enunciado: 'Qual é a propriedade usada para definir a ordem dos elementos flexíveis em CSS?',
        alternativa_A: 'order',
        alternativa_B: 'flex-order',
        alternativa_C: 'flex-direction',
        alternativa_D: 'flex-wrap',
        resposta: 'a',
        tema: 'CSS'
    },
    {
        enunciado: 'Qual é a propriedade usada para alinhar elementos flexíveis verticalmente em CSS?',
        alternativa_A: 'align-items',
        alternativa_B: 'justify-content',
        alternativa_C: 'align-content',
        alternativa_D: 'flex-align',
        resposta: 'a',
        tema: 'CSS'
    },
    {
        enunciado: 'Qual é a propriedade usada para definir a largura de um elemento em CSS?',
        alternativa_A: 'width',
        alternativa_B: 'height',
        alternativa_C: 'size',
        alternativa_D: 'dimension',
        resposta: 'a',
        tema: 'CSS'
    },
    {
        enunciado: 'Qual é a propriedade usada para definir o estilo da borda em CSS?',
        alternativa_A: 'border-width',
        alternativa_B: 'border-style',
        alternativa_C: 'border-color',
        alternativa_D: 'border-radius',
        resposta: 'b',
        tema: 'CSS'
    }
]
    return mediumQuestions
}

export const CSS_hard = () =>{
    let hardQuestions = [
        {
            enunciado: 'Qual é a propriedade usada para definir um efeito de transição suave entre duas propriedades CSS?',
            alternativa_A: 'transition',
            alternativa_B: 'animation',
            alternativa_C: 'transform',
            alternativa_D: 'translate',
            resposta: 'a',
            tema: 'CSS'
        },
        {
            enunciado: 'Qual é a propriedade usada para definir um layout responsivo em CSS?',
            alternativa_A: 'position',
            alternativa_B: 'display',
            alternativa_C: 'flex',
            alternativa_D: 'media',
            resposta: 'd',
            tema: 'CSS'
        },
        {
            enunciado: 'Qual é a propriedade usada para definir o sombreamento de uma borda em CSS?',
            alternativa_A: 'box-shadow',
            alternativa_B: 'border-shadow',
            alternativa_C: 'text-shadow',
            alternativa_D: 'drop-shadow',
            resposta: 'b',
            tema: 'CSS'
        },
        {
            enunciado: 'Qual é a propriedade usada para definir um gradiente linear em CSS?',
            alternativa_A: 'background-color',
            alternativa_B: 'color-stop',
            alternativa_C: 'background-image',
            alternativa_D: 'linear-gradient',
            resposta: 'd',
            tema: 'CSS'
        },
        {
            enunciado: 'Qual é a propriedade usada para definir a forma de um elemento em CSS?',
            alternativa_A: 'shape',
            alternativa_B: 'transform',
            alternativa_C: 'border-radius',
            alternativa_D: 'clip-path',
            resposta: 'd',
            tema: 'CSS'
        },
        {
            enunciado: 'Qual é a propriedade usada para definir a posição de um elemento em CSS?',
            alternativa_A: 'position',
            alternativa_B: 'display',
            alternativa_C: 'float',
            alternativa_D: 'clear',
            resposta: 'a',
            tema: 'CSS'
        },
        {
            enunciado: 'Qual é a propriedade usada para definir um gradiente de várias cores em CSS?',
            alternativa_A: 'background-color',
            alternativa_B: 'color-stop',
            alternativa_C: 'background-image',
            alternativa_D: 'multi-gradient',
            resposta: 'c',
            tema: 'CSS'
        },
        {
            enunciado: 'Qual é a propriedade usada para definir a ordem dos elementos em CSS Flexbox?',
            alternativa_A: 'order',
            alternativa_B: 'flex-direction',
            alternativa_C: 'justify-content',
            alternativa_D: 'align-items',
            resposta: 'a',
            tema: 'CSS'
        },
        {
            enunciado: 'Qual é a propriedade usada para definir a cor do texto em CSS?',
            alternativa_A: 'color',
            alternativa_B: 'text-color',
            alternativa_C: 'font-color',
            alternativa_D: 'background-color',
            resposta: 'a',
            tema: 'CSS'
        },
        {
            enunciado: 'Qual é a propriedade usada para definir a distância entre as linhas de texto em CSS?',
            alternativa_A: 'line-height',
            alternativa_B: 'font-size',
            alternativa_C: 'word-spacing',
            alternativa_D: 'letter-spacing',
            resposta: 'a',
            tema: 'CSS'
        }
    ]

    return hardQuestions
}
