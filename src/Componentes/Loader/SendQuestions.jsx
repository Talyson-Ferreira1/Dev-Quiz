import React, { useEffect, useState } from 'react'
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, setDoc, doc  } from 'firebase/firestore';

let JAVASCRIPT_easy = [
  {
    enunciado: 'Qual é a forma mais comum de declarar variáveis em JavaScript?',
    alternativa_1: 'var',
    alternativa_2: 'let',
    alternativa_3: 'const',
    alternativa_4: 'todas as alternativas estão corretas',
    resposta: 'todas as alternativas estão corretas',
    tema: 'Variáveis'
  },
  {
    enunciado: 'Qual é a função usada para imprimir valores no console em JavaScript?',
    alternativa_1: 'alert()',
    alternativa_2: 'prompt()',
    alternativa_3: 'console.log()',
    alternativa_4: 'document.write()',
    resposta: 'console.log()',
    tema: 'Console'
  },
  {
    enunciado: 'Qual é o operador usado para concatenar strings em JavaScript?',
    alternativa_1: '+',
    alternativa_2: '-',
    alternativa_3: '/',
    alternativa_4: '*',
    resposta: '+',
    tema: 'Strings'
  },
  {
    enunciado: 'Qual é o método usado para converter uma string em um número inteiro em JavaScript?',
    alternativa_1: 'parseFloat()',
    alternativa_2: 'toFixed()',
    alternativa_3: 'toLowerCase()',
    alternativa_4: 'parseInt()',
    resposta: 'parseInt()',
    tema: 'Strings'
  },
  {
    enunciado: 'Qual é o tipo de dado que representa um valor verdadeiro ou falso em JavaScript?',
    alternativa_1: 'Boolean',
    alternativa_2: 'Number',
    alternativa_3: 'String',
    alternativa_4: 'Array',
    resposta: 'Boolean',
    tema: 'Tipos de dados'
  },
  {
    enunciado: 'Qual é a estrutura de controle usada para executar uma ação repetidamente em JavaScript?',
    alternativa_1: 'if/else',
    alternativa_2: 'switch',
    alternativa_3: 'for',
    alternativa_4: 'while',
    resposta: 'while',
    tema: 'Estruturas de controle'
  },
  {
    enunciado: 'Qual é o operador usado para comparar dois valores juntamente com seu tipo em JavaScript?',
    alternativa_1: '==',
    alternativa_2: '===',
    alternativa_3: '!=',
    alternativa_4: '!==',
    resposta: '===',
    tema: 'Operadores de comparação'
  },
  {
    enunciado: 'Qual é o método usado para adicionar um elemento ao final de um array em JavaScript?',
    alternativa_1: 'push()',
    alternativa_2: 'pop()',
    alternativa_3: 'shift()',
    alternativa_4: 'unshift()',
    resposta: 'push()',
    tema: 'Arrays'
  },
  {
    enunciado: 'Qual é o método usado para remover o último elemento de um array em JavaScript?',
    alternativa_1: 'push()',
    alternativa_2: 'pop()',
    alternativa_3: 'shift()',
    alternativa_4: 'unshift()',
    resposta: 'pop()',
    tema: 'Arrays'
  },
  {
    enunciado: 'Qual é o método usado para obter o comprimento de um array em JavaScript?',
    alternativa_1: 'length()',
    alternativa_2: 'size()',
    alternativa_3: 'count()',
    alternativa_4: 'nenhuma das acima',
    resposta: 'length()',
    tema: 'Arrays'
  }
];
let JAVASCRIPT_medium = [
  {
    enunciado: 'Qual é a diferença entre "==" e "===" em JavaScript?',
    alternativa_1: 'Nenhuma diferença',
    alternativa_2: '"==" compara valores e "===" compara valores e tipos',
    alternativa_3: '"===" compara valores e "==" compara valores e tipos',
    alternativa_4: '"==" compara valores e tipos e "===" compara valores',
    resposta: '"==" compara valores e "===" compara valores e tipos',
    tema: 'Operadores de comparação',
  },
  {
    enunciado: 'Qual é o resultado da operação 2 + "2" em JavaScript?',
    alternativa_1: '4',
    alternativa_2: '"22"',
    alternativa_3: '22',
    alternativa_4: 'Erro',
    resposta: '"22"',
    tema: 'Operadores',
  },
  {
    enunciado: 'Qual é o resultado da expressão 3 + 2 + "7" em JavaScript?',
    alternativa_1: '12',
    alternativa_2: '"327"',
    alternativa_3: '"57"',
    alternativa_4: 'Erro',
    resposta: '"57"',
    tema: 'Operadores',
  },
  {
    enunciado: 'Qual é a função usada para converter um número em uma string em JavaScript?',
    alternativa_1: 'parseFloat()',
    alternativa_2: 'toFixed()',
    alternativa_3: 'toString()',
    alternativa_4: 'parseInt()',
    resposta: 'toString()',
    tema: 'Strings',
  },
  {
    enunciado: 'Qual é o operador usado para incrementar uma variável em JavaScript?',
    alternativa_1: '++',
    alternativa_2: '--',
    alternativa_3: '+=',
    alternativa_4: '-=',
    resposta: '++',
    tema: 'Operadores',
  },
  {
    enunciado: 'Qual é a diferença entre "let" e "var" em JavaScript?',
    alternativa_1: 'Nenhuma diferença',
    alternativa_2: '"let" tem escopo global e "var" tem escopo local',
    alternativa_3: '"let" tem escopo local e "var" tem escopo global',
    alternativa_4: '"let" tem tipagem estática e "var" tem tipagem dinâmica',
    resposta: '"let" tem escopo local e "var" tem escopo global',
    tema: 'Variáveis',
  },
  {
    enunciado: 'Qual é a sintaxe correta para criar uma função em JavaScript?',
    alternativa_1: 'function myFunction = () => {}',
    alternativa_2: 'function myFunction() {}',
    alternativa_3: 'myFunction = function() {}',
    alternativa_4: 'myFunction() => {}',
    resposta: 'function myFunction() {}',
    tema: 'Funções',
  },
  {
    enunciado: 'Qual é o método usado para encontrar o índice de um elemento em um array em JavaScript?',
    alternativa_1: 'indexOf()',
    alternativa_2: 'find()',
    alternativa_3: 'filter()',
    alternativa_4: 'search()',
    resposta: 'indexOf()',
    tema: 'Arrays',
  },
  {
    enunciado: 'Qual é o resultado da expressão "5" - 3 em JavaScript?',
    alternativa_1: '8',
    alternativa_2: '"2"',
    alternativa_3: '2',
    alternativa_4: 'Erro',
    resposta: '2',
    tema: 'Operadores',
  },
  {
    enunciado: 'Qual é a diferença entre null e undefined em JavaScript?',
    alternativa_1: 'Null é um valor primitivo e undefined é um objeto',
    alternativa_2: 'Null é um objeto e undefined é um valor primitivo',
    alternativa_3: 'Null representa a ausência de valor e undefined representa uma variável não declarada',
    alternativa_4: 'Não há diferença entre null e undefined',
    resposta: 'Null representa a ausência de valor e undefined representa uma variável não declarada',
    tema: 'Tipos de dados',
  },
];
let JAVASCRIPT_hard = [
  {
      enunciado:'O que é um closure em JavaScript?',
      alternativa_1:'Um tipo de variável',
      alternativa_2:'Uma estrutura de controle',
      alternativa_3:'Uma função que retorna outra função',
      alternativa_4:'Uma palavra reservada',
      resposta:'Uma função que retorna outra função',
      tema:'Funções'
  },
  {
      enunciado:'O que é o objeto this em JavaScript?',
      alternativa_1:'Uma variável global',
      alternativa_2:'O objeto pai do escopo atual',
      alternativa_3:'O objeto global do navegador',
      alternativa_4:'O objeto que invoca a função atual',
      resposta:'O objeto que invoca a função atual',
      tema:'Objeto this'
  },
  {
      enunciado:'O que é a aridade de uma função em JavaScript?',
      alternativa_1:'O número de argumentos esperados por uma função',
      alternativa_2:'O número de parâmetros declarados na função',
      alternativa_3:'O número de variáveis globais declaradas no escopo da função',
      alternativa_4:'O número de vezes que uma função é chamada',
      resposta:'O número de argumentos esperados por uma função',
      tema:'Funções'
  },
  {
      enunciado:'Qual é o resultado da expressão typeof null em JavaScript?',
      alternativa_1:'"object"',
      alternativa_2:'"null"',
      alternativa_3:'"undefined"',
      alternativa_4:'"string"',
      resposta:'"object"',
      tema:'Tipos de dados'
  },
  {
      enunciado:'Qual é o resultado da expressão 1 + "2" em JavaScript?',
      alternativa_1:'"3"',
      alternativa_2:'3',
      alternativa_3:'"12"',
      alternativa_4:'undefined',
      resposta:'"12"',
      tema:'Operadores'
  },
  {
      enunciado:'O que é uma promessa em JavaScript?',
      alternativa_1:'Uma função que retorna um valor',
      alternativa_2:'Uma estrutura de dados que armazena valores',
      alternativa_3:'Um objeto que representa um valor que pode não estar disponível ainda',
      alternativa_4:'Uma forma de criar loops assíncronos',
      resposta:'Um objeto que representa um valor que pode não estar disponível ainda',
      tema:'Promessas'
  },
  {
      enunciado:'Qual é a diferença entre null e undefined em JavaScript?',
      alternativa_1:'Null é o valor padrão para variáveis não inicializadas e undefined é usado para variáveis vazias',
      alternativa_2:'Null é usado para valores booleanos e undefined é usado para valores numéricos',
      alternativa_3:'Null é um objeto e undefined é um tipo de dados primitivo',
      alternativa_4:'Null indica a ausência intencional de um valor e undefined indica a ausência não intencional de um valor',
      resposta:'Null indica a ausência intencional de um valor e undefined indica a ausência não intencional de um valor',
      tema:'Tipos de dados'
  },
  {
      enunciado:'Qual é o valor de x após a execução do seguinte código em JavaScript: var x = [1,2,3]; x[10] = 4;',
      alternativa_1:'[1,2,3]',
      alternativa_2:'[1,2,3,4]',
      alternativa_3:'[1,2,3,null,null,null,null,null,null,null,4]',
      alternativa_4:'[null,null,null,null,null,null,null,null,null,null,4]',
      resposta:'[1,2,3,null,null,null,null,null,null,null,4]',
      tema:'Arrays'
  },
  {
      enunciado:'Qual é o resultado da expressão typeof(null) em JavaScript?',
      alternativa_1:'null',
      alternativa_2:'undefined',
      alternativa_3:'object',
      alternativa_4:'number',
      resposta:'object',
      tema:'Tipos de dados'
  },
  {
      enunciado:'Qual é o resultado da expressão [1, 2, 3] + [4, 5, 6] em JavaScript?',
      alternativa_1:'[1, 2, 3, 4, 5, 6]',
      alternativa_2:'"1,2,34,5,6"',
      alternativa_3:'Erro de sintaxe',
      alternativa_4:'NaN',
      resposta:'"1,2,34,5,6"',
      tema:'Arrays'
  },
];

let PYTHON_easy = [
  {
    enunciado: 'Qual a função utilizada para imprimir uma mensagem na tela em Python?',
    alternativa_1: 'print()',
    alternativa_2: 'input()',
    alternativa_3: 'read()',
    alternativa_4: 'write()',
    resposta: 'print()',
    tema: 'Funções básicas'
  },
  {
    enunciado: 'Qual a palavra-chave utilizada para definir uma função em Python?',
    alternativa_1: 'fun',
    alternativa_2: 'define',
    alternativa_3: 'def',
    alternativa_4: 'function',
    resposta: 'def',
    tema: 'Funções básicas'
  },
  {
    enunciado: 'Qual é a sintaxe utilizada para comentar uma linha de código em Python?',
    alternativa_1: '//',
    alternativa_2: '#',
    alternativa_3: '/* /',
    alternativa_4: '// / */',
    resposta: '#',
    tema: 'Comentários'
  },
  {
    enunciado: 'Qual a função utilizada para converter um número para uma string em Python?',
    alternativa_1: 'str()',
    alternativa_2: 'int()',
    alternativa_3: 'float()',
    alternativa_4: 'string()',
    resposta: 'str()',
    tema: 'Conversão de tipos de dados'
  },
  {
    enunciado: 'Qual a função utilizada para converter uma string para um número inteiro em Python?',
    alternativa_1: 'str()',
    alternativa_2: 'int()',
    alternativa_3: 'float()',
    alternativa_4: 'num()',
    resposta: 'int()',
    tema: 'Conversão de tipos de dados'
  },
  {
    enunciado: 'Qual a função utilizada para obter o comprimento de uma string em Python?',
    alternativa_1: 'len()',
    alternativa_2: 'size()',
    alternativa_3: 'length()',
    alternativa_4: 'count()',
    resposta: 'len()',
    tema: 'Manipulação de strings'
  },
  {
    enunciado: 'Qual a função utilizada para adicionar um elemento ao final de uma lista em Python?',
    alternativa_1: 'append()',
    alternativa_2: 'add()',
    alternativa_3: 'insert()',
    alternativa_4: 'push()',
    resposta: 'append()',
    tema: 'Manipulação de listas'
  },
  {
    enunciado: 'Qual a palavra-chave utilizada para definir um loop while em Python?',
    alternativa_1: 'loop',
    alternativa_2: 'while',
    alternativa_3: 'for',
    alternativa_4: 'until',
    resposta: 'while',
    tema: 'Estruturas de repetição'
  },
  {
    enunciado: 'Qual a função utilizada para obter a data atual em Python?',
    alternativa_1: 'now()',
    alternativa_2: 'today()',
    alternativa_3: 'current()',
    alternativa_4: 'date()',
    resposta: 'today()',
    tema: 'Manipulação de datas'
  },
  {
    enunciado: 'Qual a palavra-chave utilizada para definir uma classe em Python?',
    alternativa_1: 'class',
    alternativa_2: 'define',
    alternativa_3: 'struct',
    alternativa_4: 'interface',
    resposta: 'class',
    tema: 'Classes e objetos'
  }
];
let PYTHON_medium = [
  {
    enunciado: 'Qual a função utilizada para ler um arquivo em Python?',
    alternativa_1: 'read()',
    alternativa_2: 'open()',
    alternativa_3: 'load()',
    alternativa_4: 'file()',
    resposta: 'open()',
    tema: 'Manipulação de arquivos',
  },
  {
    enunciado: 'Qual a função utilizada para copiar um arquivo em Python?',
    alternativa_1: 'copy()',
    alternativa_2: 'duplicate()',
    alternativa_3: 'clone()',
    alternativa_4: 'shutil.copy()',
    resposta: 'shutil.copy()',
    tema: 'Manipulação de arquivos',
  },
  {
    enunciado: 'Qual a sintaxe utilizada para criar uma lista vazia em Python?',
    alternativa_1: 'list()',
    alternativa_2: '[]',
    alternativa_3: '{}',
    alternativa_4: '()',
    resposta: '[]',
    tema: 'Manipulação de listas',
  },
  {
    enunciado: 'Qual a função utilizada para ordenar uma lista em Python?',
    alternativa_1: 'sort()',
    alternativa_2: 'order()',
    alternativa_3: 'sorted()',
    alternativa_4: 'arrange()',
    resposta: 'sort()',
    tema: 'Manipulação de listas',
  },
  {
    enunciado: 'Qual a sintaxe utilizada para definir um dicionário em Python?',
    alternativa_1: '{}',
    alternativa_2: '[]',
    alternativa_3: '()',
    alternativa_4: 'dict()',
    resposta: '{}',
    tema: 'Manipulação de dicionários',
  },
  {
    enunciado: 'Qual a função utilizada para obter todas as chaves de um dicionário em Python?',
    alternativa_1: 'keys()',
    alternativa_2: 'values()',
    alternativa_3: 'items()',
    alternativa_4: 'all()',
    resposta: 'keys()',
    tema: 'Manipulação de dicionários',
  },
  {
    enunciado: 'Qual a sintaxe utilizada para definir uma exceção personalizada em Python?',
    alternativa_1: 'raise Exception("mensagem")',
    alternativa_2: 'try: except MyException as e:',
    alternativa_3: 'class MyException(Exception): pass',
    alternativa_4: 'except MyException as e: raise Exception(e)',
    resposta: 'class MyException(Exception): pass',
    tema: 'Tratamento de exceções',
  },
  {
    enunciado: 'Qual a função utilizada para gerar um número aleatório em Python?',
    alternativa_1: 'random()',
    alternativa_2: 'rand()',
    alternativa_3: 'randint()',
    alternativa_4: 'randomint()',
    resposta: 'randint()',
    tema: 'Módulo random',
  },
  {
    enunciado: 'Qual a sintaxe utilizada para importar um módulo em Python?',
    alternativa_1: 'require',
    alternativa_2: 'using',
    alternativa_3: 'import',
    alternativa_4: 'include',
    resposta: 'import',
    tema: 'Módulos em Python',
  },
  {
    enunciado: 'Qual a função utilizada para verificar se um objeto é uma instância de uma determinada classe em Python?',
    alternativa_1: 'isinstance()',
    alternativa_2: 'typeof()',
    alternativa_3: 'classof()',
    alternativa_4: 'instanceof()',
    resposta: 'isinstance()',
    tema: 'Classes e objetos',
  },
];
let PYTHON_hard = [
  {
    enunciado: 'O que é uma closure em Python?',
    alternativa_1: 'Uma função que retorna outra função',
    alternativa_2: 'Uma função que não retorna nada',
    alternativa_3: 'Uma função que recebe outra função como parâmetro',
    alternativa_4: 'Uma função que retorna uma lista',
    resposta: 'Uma função que retorna outra função',
    tema: 'Funções avançadas',
  },
  {
    enunciado: 'O que é um decorator em Python?',
    alternativa_1: 'Uma função que adiciona funcionalidades a outra função',
    alternativa_2: 'Uma função que retorna uma classe',
    alternativa_3: 'Uma classe que adiciona funcionalidades a outra classe',
    alternativa_4: 'Uma classe que adiciona funcionalidades a uma função',
    resposta: 'Uma função que adiciona funcionalidades a outra função',
    tema: 'Funções avançadas',
  },
  {
    enunciado: 'O que é o GIL em Python?',
    alternativa_1: 'Um lock que previne que múltiplos threads acessem a mesma variável',
    alternativa_2: 'Uma ferramenta que melhora o desempenho de operações matemáticas',
    alternativa_3: 'Um compilador que otimiza o código Python',
    alternativa_4: 'Um lock que previne que múltiplos threads executem código Python simultaneamente',
    resposta: 'Um lock que previne que múltiplos threads executem código Python simultaneamente',
    tema: 'Multithreading em Python',
  },
  {
    enunciado: 'Qual a diferença entre multiprocessing e multithreading em Python?',
    alternativa_1: 'Multiprocessing é mais rápido que multithreading',
    alternativa_2: 'Multiprocessing usa mais memória que multithreading',
    alternativa_3: 'Multiprocessing é mais fácil de implementar que multithreading',
    alternativa_4: 'Multiprocessing permite que o código seja executado em múltiplos processadores, enquanto multithreading permite que o código seja executado em múltiplas threads',
    resposta: 'Multiprocessing permite que o código seja executado em múltiplos processadores, enquanto multithreading permite que o código seja executado em múltiplas threads',
    tema: 'Multithreading e multiprocessing em Python',
  },
  {
    enunciado: 'O que é o garbage collector em Python?',
    alternativa_1: 'Um módulo que permite coletar lixo eletrônico',
    alternativa_2: 'Um módulo que permite coletar lixo orgânico',
    alternativa_3: 'Um módulo que gerencia a memória em Python',
    alternativa_4: 'Um módulo que permite coletar lixo tóxico',
    resposta: 'Um módulo que gerencia a memória em Python',
    tema: 'Gerenciamento de memória em Python',
  },
  {
    enunciado: 'O que é o PEP 8 em Python?',
    alternativa_1: 'Um framework para testes unitários',
    alternativa_2: 'Uma biblioteca para manipulação de dados em formato JSON',
    alternativa_3: 'Uma convenção de estilo para o código Python',
    alternativa_4: 'Uma biblioteca para manipulação de arquivos de log',
    resposta: 'Uma convenção de estilo para o código Python',
    tema: 'Boas práticas de programação em Python',
  },
  {
    enunciado: 'O que é o virtualenv em Python?',
    alternativa_1: 'Um ambiente de desenvolvimento virtual que permite instalar pacotes Python de forma isolada',
    alternativa_2: 'Um módulo que permite criar e gerenciar máquinas virtuais em Python',
    alternativa_3: 'Um compilador que gera código Python mais rápido que o interpretador padrão',
    alternativa_4: 'Um módulo que permite criar ambientes virtuais para testes de código Python',
    resposta: 'Um ambiente de desenvolvimento virtual que permite instalar pacotes Python de forma isolada',
    tema: 'Ambientes virtuais em Python',
  },
  {
    enunciado: 'O que é o asyncio em Python?',
    alternativa_1: 'Um módulo que permite rodar código Python de forma síncrona',
    alternativa_2: 'Um módulo que permite rodar código Python de forma assíncrona',
    alternativa_3: 'Um módulo que permite rodar código Python em múltiplos processadores',
    alternativa_4: 'Um módulo que permite rodar código Python em múltiplas threads',
    resposta: 'Um módulo que permite rodar código Python de forma assíncrona',
    tema: 'Programação assíncrona em Python',
  },
  {
    enunciado: 'O que é o type hinting em Python?',
    alternativa_1: 'Uma funcionalidade que permite definir tipos de variáveis em tempo de execução',
    alternativa_2: 'Uma funcionalidade que permite definir tipos de variáveis em tempo de compilação',
    alternativa_3: 'Uma convenção de estilo para definir tipos de variáveis em comentários',
    alternativa_4: 'Uma biblioteca que adiciona tipos de variáveis ao Python',
    resposta: 'Uma convenção de estilo para definir tipos de variáveis em comentários',
    tema: 'Type hinting em Python',
  },
  {
    enunciado: 'O que é o módulo collections em Python?',
    alternativa_1: 'Um módulo que permite manipular coleções de dados em Python',
    alternativa_2: 'Um módulo que permite realizar operações matemáticas em coleções de dados em Python',
    alternativa_3: 'Um módulo que permite trabalhar com funções avançadas em coleções de dados em Python',
    alternativa_4: 'Um módulo que permite trabalhar com tipos de dados especializados em coleções de dados em Python',
    resposta: 'Um módulo que permite trabalhar com tipos de dados especializados em coleções de dados em Python',
    tema: 'Módulo collections em Python',
  },
];

let SQL_easy = [
  {
    enunciado: 'O que significa a sigla SQL?',
    alternativa_1: 'Structured Query Language',
    alternativa_2: 'Structured Question Language',
    alternativa_3: 'Structured Query Level',
    alternativa_4: 'Structured Question Level',
    resposta: 'Structured Query Language',
    tema: 'Introdução ao SQL',
  },
  {
    enunciado: 'Qual é o comando SQL utilizado para selecionar dados de uma tabela?',
    alternativa_1: 'UPDATE',
    alternativa_2: 'INSERT',
    alternativa_3: 'DELETE',
    alternativa_4: 'SELECT',
    resposta: 'SELECT',
    tema: 'Comando SELECT em SQL',
  },
  {
    enunciado: 'Qual é o comando SQL utilizado para criar uma nova tabela?',
    alternativa_1: 'UPDATE',
    alternativa_2: 'INSERT',
    alternativa_3: 'DELETE',
    alternativa_4: 'CREATE',
    resposta: 'CREATE',
    tema: 'Comando CREATE em SQL',
  },
  {
    enunciado: 'Qual é o comando SQL utilizado para atualizar dados em uma tabela?',
    alternativa_1: 'UPDATE',
    alternativa_2: 'INSERT',
    alternativa_3: 'DELETE',
    alternativa_4: 'SELECT',
    resposta: 'UPDATE',
    tema: 'Comando UPDATE em SQL',
  },
  {
    enunciado: 'Qual é o comando SQL utilizado para deletar dados em uma tabela?',
    alternativa_1: 'UPDATE',
    alternativa_2: 'INSERT',
    alternativa_3: 'DELETE',
    alternativa_4: 'SELECT',
    resposta: 'DELETE',
    tema: 'Comando DELETE em SQL',
  },
  {
    enunciado: 'Qual é o operador SQL utilizado para combinar duas ou mais condições em uma consulta?',
    alternativa_1: 'OR',
    alternativa_2: 'NOT',
    alternativa_3: 'AND',
    alternativa_4: 'XOR',
    resposta: 'AND',
    tema: 'Operadores lógicos em SQL',
  },
  {
    enunciado: 'Qual é a cláusula SQL utilizada para filtrar resultados em uma consulta?',
    alternativa_1: 'GROUP BY',
    alternativa_2: 'HAVING',
    alternativa_3: 'ORDER BY',
    alternativa_4: 'WHERE',
    resposta: 'WHERE',
    tema: 'Cláusula WHERE em SQL',
  },
  {
    enunciado: 'Qual é a cláusula SQL utilizada para ordenar resultados em uma consulta?',
    alternativa_1: 'GROUP BY',
    alternativa_2: 'HAVING',
    alternativa_3: 'ORDER BY',
    alternativa_4: 'WHERE',
    resposta: 'ORDER BY',
    tema: 'Cláusula ORDER BY em SQL',
  },
  {
    enunciado: 'Qual é a cláusula SQL utilizada para agrupar resultados em uma consulta?',
    alternativa_1: 'GROUP BY',
    alternativa_2: 'HAVING',
    alternativa_3: 'ORDER BY',
    alternativa_4: 'WHERE',
    resposta: 'GROUP BY',
    tema: 'Cláusula GROUP BY em SQL',
  },
  {
    enunciado: 'Qual é a cláusula SQL utilizada para filtrar resultados de um grupo em uma consulta?',
    alternativa_1: 'GROUP BY',
    alternativa_2: 'HAVING',
    alternativa_3: 'ORDER BY',
    alternativa_4: 'WHERE',
    resposta: 'HAVING',
    tema: 'Cláusula HAVING em SQL',
  },
];
let SQL_medium = [
  {
    enunciado: 'Qual é o comando SQL utilizado para adicionar uma nova coluna em uma tabela?',
    alternativa_1: 'INSERT COLUMN',
    alternativa_2: 'ADD COLUMN',
    alternativa_3: 'CREATE COLUMN',
    alternativa_4: 'UPDATE COLUMN',
    resposta: 'ADD COLUMN',
    tema: 'Comando ALTER TABLE em SQL',
  },
  {
    enunciado: 'Qual é o comando SQL utilizado para remover uma coluna de uma tabela?',
    alternativa_1: 'REMOVE COLUMN',
    alternativa_2: 'DELETE COLUMN',
    alternativa_3: 'DROP COLUMN',
    alternativa_4: 'ALTER COLUMN',
    resposta: 'DROP COLUMN',
    tema: 'Comando ALTER TABLE em SQL',
  },
  {
    enunciado: 'Qual é o comando SQL utilizado para renomear uma tabela?',
    alternativa_1: 'ALTER TABLE',
    alternativa_2: 'RENAME',
    alternativa_3: 'UPDATE',
    alternativa_4: 'CHANGE',
    resposta: 'RENAME',
    tema: 'Comando ALTER TABLE em SQL',
  },
  {
    enunciado: 'Qual é o comando SQL utilizado para criar um índice em uma tabela?',
    alternativa_1: 'CREATE INDEX',
    alternativa_2: 'ADD INDEX',
    alternativa_3: 'UPDATE INDEX',
    alternativa_4: 'ALTER INDEX',
    resposta: 'CREATE INDEX',
    tema: 'Comando CREATE INDEX em SQL',
  },
  {
    enunciado: 'Qual é o comando SQL utilizado para remover um índice de uma tabela?',
    alternativa_1: 'REMOVE INDEX',
    alternativa_2: 'DELETE INDEX',
    alternativa_3: 'DROP INDEX',
    alternativa_4: 'ALTER INDEX',
    resposta: 'DROP INDEX',
    tema: 'Comando DROP INDEX em SQL',
  },
  {
    enunciado: 'Qual é o operador SQL utilizado para combinar duas ou mais consultas em uma única consulta?',
    alternativa_1: 'UNION',
    alternativa_2: 'JOIN',
    alternativa_3: 'MERGE',
    alternativa_4: 'GROUP',
    resposta: 'UNION',
    tema: 'Operador UNION em SQL',
  },
  {
    enunciado: 'Qual é o comando SQL utilizado para agrupar valores em uma tabela?',
    alternativa_1: 'GROUP',
    alternativa_2: 'COUNT',
    alternativa_3: 'SUM',
    alternativa_4: 'HAVING',
    resposta: 'GROUP',
    tema: 'Cláusula GROUP BY em SQL',
  },
  {
    enunciado: 'Qual é o comando SQL utilizado para selecionar apenas valores únicos em uma consulta?',
    alternativa_1: 'DISTINCT',
    alternativa_2: 'UNIQUE',
    alternativa_3: 'SINGLE',
    alternativa_4: 'UNREPEATED',
    resposta: 'DISTINCT',
    tema: 'Operador DISTINCT em SQL',
  },
  {
    enunciado: 'Qual é o operador SQL utilizado para ordenar resultados em ordem decrescente?',
    alternativa_1: 'ASC',
    alternativa_2: 'DESC',
    alternativa_3: 'ORDER',
    alternativa_4: 'SORT',
    resposta: 'DESC',
    tema: 'Cláusula ORDER BY em SQL',
  },
  {
    enunciado: 'Qual é o operador SQL utilizado para comparar valores em uma consulta?',
    alternativa_1: 'LIKE',
    alternativa_2: 'EQUALS',
    alternativa_3: 'COMPARE',
    alternativa_4: 'MATCH',
    resposta: 'LIKE',
    tema: 'Operador LIKE em SQL',
  },
];
let SQL_hard = [
  {
      enunciado: 'Qual é a diferença entre INNER JOIN e OUTER JOIN?',
      alternativa_1: 'INNER JOIN retorna apenas as linhas que possuem correspondência em ambas as tabelas, enquanto OUTER JOIN retorna todas as linhas de ambas as tabelas, incluindo as que não possuem correspondência.',
      alternativa_2: 'INNER JOIN retorna todas as linhas de ambas as tabelas, incluindo as que não possuem correspondência, enquanto OUTER JOIN retorna apenas as linhas que possuem correspondência em ambas as tabelas.',
      alternativa_3: 'INNER JOIN e OUTER JOIN são sinônimos e podem ser usados de forma intercambiável.',
      alternativa_4: 'Não há diferença entre INNER JOIN e OUTER JOIN.',
      resposta: 'INNER JOIN retorna apenas as linhas que possuem correspondência em ambas as tabelas, enquanto OUTER JOIN retorna todas as linhas de ambas as tabelas, incluindo as que não possuem correspondência.',
      tema: 'Tipos de JOIN em SQL'
  },
  {
      enunciado: 'Qual é a finalidade da cláusula GROUPING SETS em SQL?',
      alternativa_1: 'Permite especificar vários grupos de colunas em uma única cláusula GROUP BY.',
      alternativa_2: 'Permite restringir o conjunto de resultados retornados por uma consulta.',
      alternativa_3: 'Permite unir os resultados de várias consultas SELECT em uma única tabela temporária.',
      alternativa_4: 'Não existe a cláusula GROUPING SETS em SQL.',
      resposta: 'Permite especificar vários grupos de colunas em uma única cláusula GROUP BY.',
      tema: 'Cláusula GROUPING SETS em SQL'
  },
  {
      enunciado: 'O que são índices em SQL?',
      alternativa_1: 'São estruturas de dados usadas para melhorar a velocidade de consultas em tabelas grandes.',
      alternativa_2: 'São tabelas temporárias usadas para armazenar o resultado de uma consulta complexa.',
      alternativa_3: 'São comandos usados para criar novas tabelas a partir de uma tabela existente.',
      alternativa_4: 'São cláusulas usadas para limitar o número de resultados retornados por uma consulta.',
      resposta: 'São estruturas de dados usadas para melhorar a velocidade de consultas em tabelas grandes.',
      tema: 'Índices em SQL'
  },
  {
      enunciado: 'Qual é a diferença entre uma função agregada e uma função escalar em SQL?',
      alternativa_1: 'Funções agregadas retornam um único valor calculado a partir de um conjunto de valores, enquanto funções escalares retornam um valor para cada linha da tabela.',
      alternativa_2: 'Funções agregadas são usadas apenas em consultas que envolvem várias tabelas, enquanto funções escalares são usadas apenas em consultas que envolvem uma única tabela.',
      alternativa_3: 'Funções agregadas são usadas para filtrar resultados em uma consulta, enquanto funções escalares são usadas para ordenar resultados.',
      alternativa_4: 'Não há diferença entre funções agregadas e funções escalares.',
      resposta:  'Funções agregadas retornam um único valor calculado a partir de um conjunto de valores, enquanto funções escalares retornam um valor para cada linha da tabela.',
      tema: 'Funções agregadas e escalares em SQL'
  },
  {
      enunciado:'Qual é o comando SQL utilizado para criar uma tabela temporária?',
      alternativa_1:'CREATE TEMPORARY TABLE',
      alternativa_2:'CREATE TABLE TEMPORARY',
      alternativa_3:'CREATE TABLE AS',
      alternativa_4:'CREATE TABLE LIKE',
      resposta:'Qual é o comando SQL utilizado para criar uma tabela temporária?',
      tema:'Tabelas temporárias em SQL'
  },
  {
      enunciado:'Qual é o comando SQL utilizado para alterar o tipo de uma coluna em uma tabela?',
      alternativa_1:'MODIFY COLUMN',
      alternativa_2:'ALTER COLUMN TYPE',
      alternativa_3:'CHANGE COLUMN',
      alternativa_4:'UPDATE COLUMN TYPE',
      resposta:'MODIFY COLUMN',
      tema:'Comando ALTER TABLE em SQL'
  },
  {
      enunciado:'Qual é o comando SQL utilizado para adicionar uma restrição a uma tabela?',
      alternativa_1:'ADD CONSTRAINT',
      alternativa_2:'CREATE CONSTRAINT',
      alternativa_3:'INSERT CONSTRAINT',
      alternativa_4:'DEFINE CONSTRAINT',
      resposta:'ADD CONSTRAINT',
      tema:'Restrições em SQL'
  },
  {
      enunciado:'Qual é o comando SQL utilizado para criar um procedimento armazenado?',
      alternativa_1:'CREATE PROCEDURE',
      alternativa_2:'ADD PROCEDURE',
      alternativa_3:'DEFINE PROCEDURE',
      alternativa_4:'MAKE PROCEDURE',
      resposta:'CREATE PROCEDURE',
      tema:'Procedimentos armazenados em SQL'
  },
  {
      enunciado:'Qual é o comando SQL utilizado para criar uma visão (view)?',
      alternativa_1:'CREATE VIEW',
      alternativa_2:'ADD VIEW',
      alternativa_3:'DEFINE VIEW',
      alternativa_4:'MAKE VIEW',
      resposta:'CREATE VIEW',
      tema:'Visões (views) em SQL'
  },
  {
      enunciado: 'Qual é o comando SQL utilizado para executar uma subconsulta?',
      alternativa_1: 'SUB SELECT',
      alternativa_2: 'INNER SELECT',
      alternativa_3: 'SUB QUERY',
      alternativa_4: 'INNER QUERY',
      resposta: 'INNER QUERY',
      tema: 'Subconsultas (subqueries) em SQL'
  }
]

let JAVA_easy = [
  {
      enunciado:'O que é Java?',
      alternativa_1:'Uma linguagem de programação',
      alternativa_2:'Um banco de dados',
      alternativa_3:'Um sistema operacional',
      alternativa_4:'Um hardware',
      resposta:'Uma linguagem de programação',
      tema:'Introdução à linguagem Java'
  },
  {
      enunciado:'Qual é a principal característica da plataforma Java?',
      alternativa_1:'Portabilidade',
      alternativa_2:'Velocidade',
      alternativa_3:'Facilidade de uso',
      alternativa_4:'Preço',
      resposta:'Portabilidade',
      tema:'Plataforma Java'
  },
  {
      enunciado:'O que é um objeto em Java?',
      alternativa_1:'Uma instância de uma classe',
      alternativa_2:'Um tipo primitivo de dados',
      alternativa_3:'Um método de uma classe',
      alternativa_4:'Um pacote de classes',
      resposta:'Uma instância de uma classe',
      tema:'Orientação a Objetos em Java'
  },
  {
      enunciado:'O que é uma classe em Java?',
      alternativa_1:'Um modelo para criar objetos',
      alternativa_2:'Um tipo primitivo de dados',
      alternativa_3:'Um método de um objeto',
      alternativa_4:'Um pacote de objetos',
      resposta:'Um modelo para criar objetos',
      tema:'Orientação a Objetos em Java'
  },
  {
      enunciado:'Qual é a sintaxe para criar um objeto em Java?',
      alternativa_1:'new Classe();',
      alternativa_2:'Class = new Object();',
      alternativa_3:'Object.new(Class);',
      alternativa_4:'Class.createObject();',
      resposta:'new Classe();',
      tema:'Criando objetos em Java'
  },
  {
      enunciado:'O que é uma variável em Java?',
      alternativa_1:'Um espaço na memória que armazena um valor',
      alternativa_2:'Um método que realiza uma operação',
      alternativa_3:'Um tipo primitivo de dados',
      alternativa_4:'Uma instrução condicional',
      resposta:'Um espaço na memória que armazena um valor',
      tema:'Variáveis em Java'
  },
  {
      enunciado:'Qual é a sintaxe para declarar uma variável em Java?',
      alternativa_1:'tipo nomeDaVariavel = valor;',
      alternativa_2:'valor tipo nomeDaVariavel =;',
      alternativa_3:'tipo nomeDaVariavel;',
      alternativa_4:'valor tipo nomeDaVariavel;',
      resposta:'tipo nomeDaVariavel = valor;',
      tema:'Variáveis em Java'
  },
  {
      enunciado:'O que é um array em Java?',
      alternativa_1:'Uma estrutura que armazena múltiplos valores do mesmo tipo',
      alternativa_2:'Um tipo primitivo de dados',
      alternativa_3:'Um método que realiza uma operação',
      alternativa_4:'Uma instrução condicional',
      resposta:'Uma estrutura que armazena múltiplos valores do mesmo tipo',
      tema:'Arrays em Java'
  },
  {
      enunciado:'Qual é a sintaxe para declarar um array em Java?',
      alternativa_1:'tipo[] nomeDoArray = new tipo[tamanho];',
      alternativa_2:'tipo[] nomeDoArray = {valor1, valor2, valor3};',
      alternativa_3:'tipo[] nomeDoArray;',
      alternativa_4:'tipo nomeDoArray[] = new tipo[tamanho];',
      resposta:'tipo[] nomeDoArray = new tipo[tamanho];',
      tema:'Arrays'
  },
  {
      enunciado:'O que é um método em Java?',
      alternativa_1:'Uma ação que pode ser executada por um objeto',
      alternativa_2:'Um tipo primitivo de dados',
      alternativa_3:'Uma instrução condicional',
      alternativa_4:'Um pacote de classes',
      resposta:'Uma ação que pode ser executada por um objeto',
      tema:'Métodos em Java'
  },
  {
      enunciado:'Qual é a sintaxe para definir um método em Java?',
      alternativa_1:'tipoDeRetorno nomeDoMetodo(parametros) { // corpo do método }',
      alternativa_2:'nomeDoMetodo(parametros) { // corpo do método }',
      alternativa_3:'tipoDeRetorno nomeDoMetodo { // corpo do método }',
      alternativa_4:'tipoDeRetorno nomeDoMetodo { // corpo do método } parametros',
      resposta:'tipoDeRetorno nomeDoMetodo(parametros) { // corpo do método }',
      tema:'Métodos em Java'
  }
];
let JAVA_medium = [
  {
      enunciado:'Qual a diferença entre uma classe abstrata e uma interface em Java?',
      alternativa_1:'Uma interface pode ter métodos com implementação enquanto uma classe abstrata não pode',
      alternativa_2:'Uma classe abstrata pode ter variáveis de instância enquanto uma interface não pode',
      alternativa_3:'Uma interface pode ter variáveis de instância enquanto uma classe abstrata não pode',
      alternativa_4:'Uma classe abstrata pode ter construtores enquanto uma interface não pode',
      resposta:'Uma interface pode ter métodos com implementação enquanto uma classe abstrata não pode',
      tema:'Classes abstratas e interfaces em Java'
  },
  {
      enunciado:'O que é uma exceção em Java?',
      alternativa_1:'Uma classe que define um objeto de erro que é lançado em tempo de compilação',
      alternativa_2:'Uma classe que define um objeto de erro que é lançado em tempo de execução',
      alternativa_3:'Uma classe que define um objeto de aviso que é lançado em tempo de compilação',
      alternativa_4:'Uma classe que define um objeto de aviso que é lançado em tempo de execução',
      resposta:'Uma classe que define um objeto de erro que é lançado em tempo de execução',
      tema:'Exceções em Java'
  },
  {
      enunciado:'O que é o operador "this" em Java?',
      alternativa_1:'Um operador que permite acessar membros de uma classe a partir de um objeto',
      alternativa_2:'Um operador que permite acessar membros de uma classe a partir de outra classe',
      alternativa_3:'Um operador que permite acessar membros de uma classe a partir de uma interface',
      alternativa_4:'Um operador que permite acessar membros de uma interface a partir de uma classe',
      resposta:'Um operador que permite acessar membros de uma classe a partir de um objeto',
      tema:'Operador "this" em Java'
  },
  {
      enunciado:'O que é um método construtor em Java?',
      alternativa_1:'Um método que permite criar novos objetos a partir de outros objetos',
      alternativa_2:'Um método que permite inicializar as variáveis de instância de uma classe',
      alternativa_3:'Um método que permite acessar membros de outras classes',
      alternativa_4:'Um método que permite realizar operações matemáticas',
      resposta:'Um método que permite inicializar as variáveis de instância de uma classe',
      tema:'Métodos construtores em Java'
  },
  {
      enunciado:'O que é o operador ternário em Java?',
      alternativa_1:'Um operador que permite realizar operações lógicas em três operandos',
      alternativa_2:'Um operador que permite realizar operações matemáticas em três operandos',
      alternativa_3:'Um operador que permite acessar membros de uma classe a partir de um objeto',
      alternativa_4:'Um operador que permite acessar membros de uma classe a partir de outra classe',
      resposta:'Um operador que permite realizar operações lógicas em três operandos',
      tema:'Operador ternário em Java'
  },
  {
      enunciado:'Qual é a diferença entre um array e uma lista em Java?',
      alternativa_1:'Um array é uma estrutura de dados fixa enquanto uma lista é uma estrutura de dados dinâmica',
      alternativa_2:'Um array é uma estrutura de dados dinâmica enquanto uma lista é uma estrutura de dados fixa',
      alternativa_3:'Um array é uma coleção de objetos enquanto uma lista é uma coleção de tipos primitivos',
      alternativa_4:'Um array é uma coleção de tipos primitivos enquanto uma lista é uma coleção de objetos',
      resposta:'Um array é uma estrutura de dados fixa enquanto uma lista é uma estrutura de dados dinâmica',
      tema:'Arrays e listas em Java'
  },
  {
      enunciado:'O que é uma classe em Java?',
      alternativa_1:'Uma estrutura de dados que permite armazenar vários tipos de dados',
      alternativa_2:'Um conjunto de instruções que realiza uma tarefa específica em um programa',
      alternativa_3:'Um tipo de dado que representa um número inteiro',
      alternativa_4:'Um modelo para criar objetos que possuem atributos e métodos',
      resposta:'Um modelo para criar objetos que possuem atributos e métodos',
      tema:'Classes em Java'
  },
  {
      enunciado:'O que é o operador "instanceof" em Java?',
      alternativa_1:'Um operador que compara dois objetos para verificar se eles são iguais',
      alternativa_2:'Um operador que compara dois objetos para verificar se eles são diferentes',
      alternativa_3:'Um operador que verifica se um objeto é uma instância de uma determinada classe',
      alternativa_4:'Um operador que verifica se um objeto é uma instância de uma classe derivada',
      resposta:'Um operador que verifica se um objeto é uma instância de uma determinada classe',
      tema:'Operador "instanceof" em Java'
  },
  {
      enunciado:'O que é uma classe anônima em Java?',
      alternativa_1:'Uma classe que não possui nenhum método',
      alternativa_2:'Uma classe que não possui nenhum atributo',
      alternativa_3:'Uma classe que não possui nome',
      alternativa_4:'Uma classe que não pode ser instanciada',
      resposta:'Uma classe que não possui nome',
      tema:'Classes anônimas em Java'
  },
  {
      enunciado:'O que é o operador "super" em Java?',
      alternativa_1:'Um operador que permite acessar membros de uma classe a partir de um objeto',
      alternativa_2:'Um operador que permite acessar membros de uma classe a partir de outra classe',
      alternativa_3:'Um operador que permite acessar membros de uma classe pai',
      alternativa_4:'Um operador que permite acessar membros de uma classe filho',
      resposta:'Um operador que permite acessar membros de uma classe pai',
      tema:'Operador "super" em Java'
  },
  
]
let JAVA_hard = [
  {
      enunciado:'O que são streams em Java 8?',
      alternativa_1:'Uma forma de processar coleções de objetos de forma imperativa',
      alternativa_2:'Uma forma de processar coleções de objetos de forma funcional',
      alternativa_3:'Um tipo de conexão com um servidor de dados externo',
      alternativa_4:'Uma forma de processar coleções de objetos usando paralelismo',
      resposta:'Uma forma de processar coleções de objetos de forma funcional',
      tema:'Streams em Java 8'
  },
  {
      enunciado:'O que é o Java Native Interface (JNI)?',
      alternativa_1:'Um mecanismo que permite executar código em diferentes máquinas virtuais Java',
      alternativa_2:'Um mecanismo que permite a comunicação entre código Java e código nativo em outras linguagens',
      alternativa_3:'Um mecanismo que permite a execução de código Java em sistemas operacionais distintos',
      alternativa_4:'Um mecanismo que permite a compilação de código Java para executáveis nativos',
      resposta:'Um mecanismo que permite a comunicação entre código Java e código nativo em outras linguagens',
      tema:'Java Native Interface (JNI)'
  },
  {
      enunciado:'O que são as anotações em Java?',
      alternativa_1:'São uma forma de documentar o código em Java',
      alternativa_2:'São uma forma de adicionar metadados ao código em Java',
      alternativa_3:'São uma forma de escrever código mais legível em Java',
      alternativa_4:'São uma forma de definir interfaces em Java',
      resposta:'São uma forma de adicionar metadados ao código em Java',
      tema:'Anotações em Java'
  },
  {
      enunciado:'O que é o garbage collector em Java?',
      alternativa_1:'Um mecanismo que permite a execução de código Java em sistemas operacionais distintos',
      alternativa_2:'Um mecanismo que permite a compilação de código Java para executáveis nativos',
      alternativa_3:'Um mecanismo que permite liberar memória não utilizada em Java',
      alternativa_4:'Um mecanismo que permite gerenciar recursos de entrada e saída em Java',
      resposta:'Um mecanismo que permite liberar memória não utilizada em Java',
      tema:'Garbage Collector em Java'
  },
  {
      enunciado:'O que são os lambdas em Java?',
      alternativa_1:'São uma forma de definir variáveis em Java',
      alternativa_2:'São uma forma de adicionar comentários ao código em Java',
      alternativa_3:'São uma forma de definir funções anônimas em Java',
      alternativa_4:'São uma forma de definir constantes em Java',
      resposta:'São uma forma de definir funções anônimas em Java',
      tema:'Lambdas em Java'
  },
  {
      enunciado:'O que são os generics em Java?',
      alternativa_1:'São uma forma de definir tipos de variáveis em Java',
      alternativa_2:'São uma forma de definir interfaces em Java',
      alternativa_3:'São uma forma de definir classes abstratas em Java',
      alternativa_4:'São uma forma de definir classes anônimas em Java',
      resposta:'São uma forma de definir tipos de variáveis em Java',
      tema:'Generics em Java'
  },
  {
      enunciado:'O que é o polimorfismo em Java?',
      alternativa_1:'É a capacidade de uma classe herdar de múltiplas classes em Java',
      alternativa_2:'É a capacidade de uma classe ter múltiplos construtores em Java',
      alternativa_3:'É a capacidade de uma classe ter múltiplos métodos com o mesmo nome em Java',
      alternativa_4:'É a capacidade de uma classe ter múltiplos atributos com o mesmo nome em Java',
      resposta:'É a capacidade de uma classe ter múltiplos métodos com o mesmo nome em Java',
      tema:'Polimorfismo em Java'
  },
  {
      enunciado:'O que são as expressões regulares em Java?',
      alternativa_1:'São uma forma de definir variáveis em Java',
      alternativa_2:'São uma forma de definir funções em Java',
      alternativa_3:'São uma forma de definir padrões de busca em strings em Java',
      alternativa_4:'São uma forma de definir classes em Java',
      resposta:'São uma forma de definir padrões de busca em strings em Java',
      tema:'Expressões regulares em Java'
  },
  {
      enunciado:'O que é o Reflection em Java?',
      alternativa_1:'É um mecanismo que permite a execução de código Java em sistemas operacionais distintos',
      alternativa_2:'É um mecanismo que permite a compilação de código Java para executáveis nativos',
      alternativa_3:'É um mecanismo que permite acessar informações sobre o código em tempo de execução em Java',
      alternativa_4:'É um mecanismo que permite a comunicação entre código Java e código nativo em outras linguagens',
      resposta:'É um mecanismo que permite acessar informações sobre o código em tempo de execução em Java',
      tema:'Reflection em Java'
  },
  {
      enunciado:'O que é o Design Pattern Singleton em Java?',
      alternativa_1:'É um padrão de projeto que permite a criação de objetos de forma preguiçosa em Java',
      alternativa_2:'É um padrão de projeto que permite a criação de objetos com base em interfaces em Java',
      alternativa_3:'É um padrão de projeto que permite a criação de uma única instância de uma classe em Java',
      alternativa_4:'É um padrão de projeto que permite a criação de objetos com base em classes abstratas em Java',
      resposta:'É um padrão de projeto que permite a criação de uma única instância de uma classe em Java',
      tema:'Design Pattern Singleton em Java'
  }
];

let HTML_easy = [
    {
        enunciado:'O que significa a sigla HTML?',
        alternativa_1:'Hypertext Model Language',
        alternativa_2:'Hypertext Markdown Language',
        alternativa_3:'Hypertext Markup Language',
        alternativa_4:'Hypertext Management Language',
        resposta:'Hypertext Markup Language',
        tema:'Introdução ao HTML'
    },
    {
        enunciado:'Qual a função da tag <head> em HTML?',
        alternativa_1:'Define o título da página e inclui scripts e links para arquivos externos',
        alternativa_2:'Define a estrutura da página, incluindo cabeçalho, rodapé e conteúdo',
        alternativa_3:'Define o conteúdo principal da página',
        alternativa_4:'Define a lista de itens em uma página',
        resposta:'Define o título da página e inclui scripts e links para arquivos externos',
        tema:'Tag <head> em HTML'
    },
    {
        enunciado:'Qual a função da tag <body> em HTML?',
        alternativa_1:'Define a lista de itens em uma página',
        alternativa_2:'Define o título da página e inclui scripts e links para arquivos externos',
        alternativa_3:'Define a estrutura da página, incluindo cabeçalho, rodapé e conteúdo',
        alternativa_4:'Define o conteúdo principal da página',
        resposta:'Define o conteúdo principal da página',
        tema:'Tag <body> em HTML'
    },
    {
        enunciado:'Qual a função da tag <div> em HTML?',
        alternativa_1:'Agrupa elementos em uma seção genérica, sem nenhum significado específico',
        alternativa_2:'Define uma seção de cabeçalho para um documento ou seção',
        alternativa_3:'Define uma imagem em uma página',
        alternativa_4:'Define um link para outra página ou recurso',
        resposta:'Agrupa elementos em uma seção genérica, sem nenhum significado específico',
        tema:'Tag <div> em HTML'
    },
    {
        enunciado:'Qual a função da tag <p> em HTML?',
        alternativa_1:'Define uma imagem em uma página',
        alternativa_2:'Define um parágrafo de texto',
        alternativa_3:'Define uma lista de itens',
        alternativa_4:'Define um link para outra página ou recurso',
        resposta:'b',
        tema:'Tag <p> em HTML'
    },
    {
        enunciado:'Qual a função da tag <a> em HTML?',
        alternativa_1:'Define um link para outra página ou recurso',
        alternativa_2:'Define uma imagem em uma página',
        alternativa_3:'Define um parágrafo de texto',
        alternativa_4:'Define uma lista de itens',
        resposta:'Define um link para outra página ou recurso',
        tema:'Tag <a> em HTML'
    },
    {
        enunciado:'Qual a função da tag <img> em HTML?',
        alternativa_1:'Define um parágrafo de texto',
        alternativa_2:'Define um link para outra página ou recurso',
        alternativa_3:'Define uma imagem em uma página',
        alternativa_4:'Define uma lista de itens',
        resposta:'Define uma imagem em uma página',
        tema:'Tag <img> em HTML'
    },
    {
        enunciado:'Qual a função da tag <ol> em HTML?',
        alternativa_1:'Define uma seção de cabeçalho para um documento ou seção',
        alternativa_2:'Define uma lista não ordenada',
        alternativa_3:'Define uma lista de itens em uma tabela',
        alternativa_4:'Define uma lista ordenada',
        resposta:'Define uma lista ordenada',
        tema:'Tag <ol> em HTML'
    },
    {
        enunciado:'Qual a função da tag <table> em HTML?',
        alternativa_1:'Define uma imagem em uma página',
        alternativa_2:'Define um link para outra página ou recurso',
        alternativa_3:'Define uma tabela em uma página',
        alternativa_4:'Define um parágrafo de texto',
        resposta:'Define uma tabela em uma página',
        tema:'Tag <table> em HTML'
    },
    {
        enunciado:'Qual a função da tag <form> em HTML?',
        alternativa_1:'Define uma lista de itens',
        alternativa_2:'Define um formulário para entrada de dados do usuário',
        alternativa_3:'Define um parágrafo de texto',
        alternativa_4:'Define uma tabela em uma página',
        resposta:'Define um formulário para entrada de dados do usuário',
        tema:'Tag <form> em HTML'
    }
]
let HTML_medium = [
    {
        enunciado: 'O que é o elemento <form> em HTML?',
        alternativa_1: 'Um elemento para exibir texto formatado',
        alternativa_2: 'Um elemento para exibir imagens',
        alternativa_3: 'Um elemento para criar um formulário para entrada de dados',
        alternativa_4: 'Um elemento para exibir vídeo',
        resposta:  'Um elemento para criar um formulário para entrada de dados',
        tema: 'Formulários HTML'
      },
    {
      enunciado: 'Qual a finalidade da tag <meta> em HTML?',
      alternativa_1: 'Definir o título da página',
      alternativa_2: 'Inserir um link para um arquivo externo',
      alternativa_3: 'Definir as palavras-chave da página',
      alternativa_4: 'Inserir informações sobre a página que não são visíveis ao usuário',
      resposta:'Inserir informações sobre a página que não são visíveis ao usuário',
      tema: 'Tags HTML para metadados'
    },
    {
      enunciado: 'Qual a diferença entre as tags <span> e <div> em HTML?',
      alternativa_1: 'Não há diferença entre elas',
      alternativa_2: 'A tag <span> é usada para conteúdo em linha e a tag <div> para conteúdo em bloco',
      alternativa_3: 'A tag <div> é usada para conteúdo em linha e a tag <span> para conteúdo em bloco',
      alternativa_4: 'A tag <span> é usada para criar listas e a tag <div> para agrupar elementos',
      resposta: 'A tag <span> é usada para conteúdo em linha e a tag <div> para conteúdo em bloco',
      tema: 'Tags HTML para estruturação de conteúdo'
    },
    {
      enunciado: 'O que é o atributo "alt" da tag <img> em HTML?',
      alternativa_1: 'Define o texto alternativo para exibição caso a imagem não carregue',
      alternativa_2: 'Define a largura da imagem em pixels',
      alternativa_3: 'Define a altura da imagem em pixels',
      alternativa_4: 'Define a URL da imagem a ser exibida',
      resposta: 'Define o texto alternativo para exibição caso a imagem não carregue',
      tema: 'Tags HTML para imagens'
    },
    {
      enunciado: 'Qual a finalidade da tag <nav> em HTML?',
      alternativa_1: 'Define um cabeçalho para a página',
      alternativa_2: 'Define uma seção para conteúdo principal da página',
      alternativa_3: 'Define uma seção para links de navegação',
      alternativa_4: 'Define um rodapé para a página',
      resposta:'Define uma seção para links de navegação',
      tema: 'Tags HTML para estruturação de conteúdo'
    },
    {
      enunciado: 'Qual a finalidade da tag <table> em HTML?',
      alternativa_1: 'Definir uma lista ordenada de itens',
      alternativa_2: 'Definir uma lista não-ordenada de itens',
      alternativa_3: 'Definir uma tabela com linhas e colunas',
      alternativa_4: 'Definir uma seção de código que deve ser interpretada pelo navegador',
      resposta: 'Definir uma tabela com linhas e colunas',
      tema: 'Tags HTML para tabelas'
    },
    {
        enunciado: 'O que é o atributo "required" da tag <input> em HTML?',
        alternativa_1: 'Define se o campo de entrada é obrigatório',
        alternativa_2: 'Define o tipo do campo de entrada',
        alternativa_3: 'Define o tamanho máximo do campo de entrada',
        alternativa_4: 'Define o valor padrão do campo de entrada',
        resposta: 'Define se o campo de entrada é obrigatório',
        tema: 'Formulários HTML'
    },
    {
        enunciado: 'O que é o elemento <video> em HTML?',
        alternativa_1: 'Um elemento para exibir imagens em sequência',
        alternativa_2: 'Um elemento para exibir animações em Flash',
        alternativa_3: 'Um elemento para exibir vídeo',
        alternativa_4: 'Um elemento para exibir texto formatado',
        resposta:'Um elemento para exibir vídeo',
        tema: 'Vídeo em HTML'
      },
      {
        enunciado: 'Qual a finalidade da tag <aside> em HTML?',
        alternativa_1: 'Definir uma seção lateral para conteúdo relacionado',
        alternativa_2: 'Definir uma seção para conteúdo principal da página',
        alternativa_3: 'Definir uma seção para links de navegação',
        alternativa_4: 'Definir um rodapé para a página',
        resposta: 'Definir uma seção lateral para conteúdo relacionado',
        tema: 'Tags HTML para estruturação de conteúdo'
      },
      {
        enunciado: 'O que é o elemento <canvas> em HTML?',
        alternativa_1: 'Um elemento para exibir imagens em sequência',
        alternativa_2: 'Um elemento para exibir animações em Flash',
        alternativa_3: 'Um elemento para desenhar gráficos e animações por meio de scripts em JavaScript',
        alternativa_4: 'Um elemento para exibir vídeo',
        resposta:'Um elemento para desenhar gráficos e animações por meio de scripts em JavaScript',
        tema: 'Canvas em HTML'
    }
]  
let HTML_hard = [
    {
        enunciado:'O que é um Shadow DOM em HTML?',
        alternativa_1:'Um elemento HTML que não é afetado pelo estilo do restante da página',
        alternativa_2:'Um elemento HTML que é renderizado fora da árvore DOM',
        alternativa_3:'Um elemento HTML que é renderizado dentro de outro elemento HTML',
        alternativa_4:'Um elemento HTML que permite criar elementos personalizados com encapsulamento de estilo e comportamento',
        resposta:'Um elemento HTML que permite criar elementos personalizados com encapsulamento de estilo e comportamento',
        tema:'Shadow DOM'
    },
    {
        enunciado:'Qual é a diferença entre os elementos <img> e <picture> em HTML?',
        alternativa_1:'Nenhuma diferença',
        alternativa_2:'O elemento <img> é mais antigo e o <picture> foi introduzido mais recentemente',
        alternativa_3:'O elemento <img> é para imagens simples e o <picture> é para imagens responsivas',
        alternativa_4:'O elemento <img> é para imagens e o <picture> é para vídeos',
        resposta:'O elemento <img> é para imagens simples e o <picture> é para imagens responsivas',
        tema:'Elementos img e picture em HTML'
    },
    {
        enunciado:'O que é um layout responsivo em HTML?',
        alternativa_1:'Um layout que se adapta automaticamente ao tamanho da tela',
        alternativa_2:'Um layout que permite a utilização de recursos de realidade aumentada',
        alternativa_3:'Um layout que permite a utilização de animações em 3D',
        alternativa_4:'Um layout que utiliza fontes personalizadas',
        resposta:'Um layout que se adapta automaticamente ao tamanho da tela',
        tema:'Layout responsivo em HTML'
    },
    {
        enunciado:'O que é um Web Component em HTML?',
        alternativa_1:'Um elemento HTML que pode ser reutilizado em diferentes páginas',
        alternativa_2:'Um elemento HTML que pode ser renderizado fora da árvore DOM',
        alternativa_3:'Um elemento HTML que permite criar elementos personalizados com encapsulamento de estilo e comportamento',
        alternativa_4:'Um elemento HTML que permite criar animações em 3D',
        resposta:'Um elemento HTML que permite criar elementos personalizados com encapsulamento de estilo e comportamento',
        tema:'Web Components em HTML'
    },
    {
        enunciado:'O que é um Data Attribute em HTML?',
        alternativa_1:'Um atributo que permite armazenar dados em um elemento HTML',
        alternativa_2:'Um atributo que permite definir o tamanho de uma imagem em HTML',
        alternativa_3:'Um atributo que permite definir a cor de um elemento HTML',
        alternativa_4:'Um atributo que permite definir a largura de uma tabela em HTML',
        resposta:'Um atributo que permite armazenar dados em um elemento HTML',
        tema:'Data Attributes em HTML'
    },
    {
        enunciado:'Qual é a diferença entre as tags <ul> e <ol> em HTML?',
        alternativa_1:'Nenhuma diferença',
        alternativa_2:'A tag <ul> é usada para criar listas não ordenadas e a tag <ol> é usada para criar listas ordenadas',
        alternativa_3:'A tag <ul> é usada para criar listas ordenadas e a tag <ol> é usada para criar listas não ordenadas',
        alternativa_4:'A tag <ul> é usada para criar tabelas e a tag <ol> é usada para criar formulários',
        resposta:'A tag <ul> é usada para criar listas não ordenadas e a tag <ol> é usada para criar listas ordenadas',
        tema:'Tags ul e ol em HTML'
        },
        {
        enunciado:'O que é uma tabela em HTML?',
        alternativa_1:'Uma estrutura que permite organizar informações em colunas e linhas',
        alternativa_2:'Um elemento HTML que permite a exibição de imagens',
        alternativa_3:'Um elemento HTML que permite a criação de animações',
        alternativa_4:'Uma estrutura que permite a exibição de conteúdo multimídia',
        resposta:'Uma estrutura que permite organizar informações em colunas e linhas',
        tema:'Tabelas em HTML'
        },
        {
        enunciado:'O que é um elemento <iframe> em HTML?',
        alternativa_1:'Um elemento HTML que permite a inclusão de conteúdo de outros sites em uma página',
        alternativa_2:'Um elemento HTML que permite a exibição de vídeos',
        alternativa_3:'Um elemento HTML que permite a criação de animações em 3D',
        alternativa_4:'Um elemento HTML que permite a criação de formulários',
        resposta:'Um elemento HTML que permite a inclusão de conteúdo de outros sites em uma página',
        tema:'Elemento iframe em HTML'
        },
        {
        enunciado:'Qual é a função da tag <header> em HTML?',
        alternativa_1:'É utilizada para definir o cabeçalho da página',
        alternativa_2:'É utilizada para incluir scripts em uma página',
        alternativa_3:'É utilizada para criar uma seção da página',
        alternativa_4:'É utilizada para criar um rodapé da página',
        resposta:'É utilizada para definir o cabeçalho da página',
        tema:'Tag header em HTML'
        },
        {
        enunciado:'Qual é a diferença entre os elementos <img> e <picture> em HTML?',
        alternativa_1:'Nenhuma diferença',
        alternativa_2:'O elemento <img> é mais antigo e o <picture> foi introduzido mais recentemente',
        alternativa_3:'O elemento <img> é para imagens simples e o <picture> é para imagens responsivas',
        alternativa_4:'O elemento <img> é para imagens e o <picture> é para vídeos',
        resposta:'O elemento <img> é para imagens simples e o <picture> é para imagens responsivas',
        tema:'Elementos img e picture em HTML'
    }
]

let CSS_easy = [
  {
      enunciado: 'O que significa CSS?',
      alternativa_1: 'Cascading Style Sheets',
      alternativa_2: 'Computer Style Sheets',
      alternativa_3: 'Colorful Style Sheets',
      alternativa_4: 'Creative Style Sheets',
      resposta: 'Cascading Style Sheets',
      tema: 'CSS'
  },
  {
      enunciado: 'Qual é a tag usada para conectar um arquivo CSS a um arquivo HTML?',
      alternativa_1: '<link>',
      alternativa_2: '<style>',
      alternativa_3: '<css>',
      alternativa_4: '<meta>',
      resposta: '<link>',
      tema: 'CSS'
  },
  {
      enunciado: 'Qual é a propriedade usada para alterar a cor do texto em CSS?',
      alternativa_1: 'background-color',
      alternativa_2: 'font-family',
      alternativa_3: 'color',
      alternativa_4: 'text-color',
      resposta: 'color',
      tema: 'CSS'
  },
  {
      enunciado: 'Qual é a propriedade usada para alterar a cor de fundo de um elemento em CSS?',
      alternativa_1: 'background-color',
      alternativa_2: 'font-size',
      alternativa_3: 'color',
      alternativa_4: 'text-color',
      resposta: 'background-color',
      tema: 'CSS'
  },
  {
      enunciado: 'Qual é a propriedade usada para adicionar margem interna a um elemento em CSS?',
      alternativa_1: 'padding',
      alternativa_2: 'margin-top',
      alternativa_3: 'margin-bottom',
      alternativa_4: 'margin-right',
      resposta: 'padding',
      tema: 'CSS'
  },
  {
      enunciado: 'Qual é a propriedade usada para centralizar um elemento em CSS?',
      alternativa_1: 'text-align',
      alternativa_2: 'align-items',
      alternativa_3: 'justify-content',
      alternativa_4: 'margin',
      resposta: 'margin',
      tema: 'CSS'
  },
  {
      enunciado: 'Qual é a propriedade usada para alterar o tamanho da fonte em CSS?',
      alternativa_1: 'font-family',
      alternativa_2: 'font-style',
      alternativa_3: 'font-size',
      alternativa_4: 'font-weight',
      resposta: 'font-size',
      tema: 'CSS'
  },
  {
      enunciado: 'Qual é a propriedade usada para alterar a largura de um elemento em CSS?',
      alternativa_1: 'width',
      alternativa_2: 'height',
      alternativa_3: 'max-width',
      alternativa_4: 'min-width',
      resposta: 'width',
      tema: 'CSS'
  },
  {
      enunciado: 'Qual é a propriedade usada para alterar a altura de um elemento em CSS?',
      alternativa_1: 'width',
      alternativa_2: 'height',
      alternativa_3: 'max-height',
      alternativa_4: 'min-height',
      resposta: 'height',
      tema: 'CSS'
  },
  {
      enunciado: 'Qual é a propriedade usada para definir a altura de linha em CSS?',
      alternativa_1: 'line-height',
      alternativa_2: 'font-size',
      alternativa_3: 'letter-spacing',
      alternativa_4: 'word-spacing',
      resposta: 'line-height',
      tema: 'CSS'
  }
]
let CSS_medium = [
{
    enunciado: 'O que significa o termo "box model" em CSS?',
    alternativa_1: 'Um modelo que representa um elemento HTML como uma caixa retangular com conteúdo, preenchimento, borda e margem',
    alternativa_2: 'Um modelo que permite que os elementos HTML sejam posicionados em qualquer lugar na página',
    alternativa_3: 'Um modelo que permite que os elementos HTML sejam transformados em 3D',
    alternativa_4: 'Um modelo que permite que os elementos HTML sejam animados usando JavaScript',
    resposta: 'Um modelo que representa um elemento HTML como uma caixa retangular com conteúdo, preenchimento, borda e margem',
    tema: 'CSS'
},
{
    enunciado: 'Qual é a propriedade usada para definir o espaçamento entre os elementos em CSS?',
    alternativa_1: 'margin',
    alternativa_2: 'padding',
    alternativa_3: 'border-spacing',
    alternativa_4: 'grid-gap',
    resposta: 'border-spacing',
    tema: 'CSS'
},
{
    enunciado: 'Qual é a propriedade usada para definir o tamanho da borda em CSS?',
    alternativa_1: 'border-width',
    alternativa_2: 'border-style',
    alternativa_3: 'border-color',
    alternativa_4: 'border-radius',
    resposta:'border-width',
    tema: 'CSS'
},
{
    enunciado: 'Qual é a propriedade usada para definir a transparência de um elemento em CSS?',
    alternativa_1: 'opacity',
    alternativa_2: 'visibility',
    alternativa_3: 'display',
    alternativa_4: 'background-color',
    resposta: 'opacity',
    tema: 'CSS'
},
{
    enunciado: 'Qual é a propriedade usada para definir um gradiente de cor em CSS?',
    alternativa_1: 'background-color',
    alternativa_2: 'color-stop',
    alternativa_3: 'background-image',
    alternativa_4: 'linear-gradient',
    resposta: 'linear-gradient',
    tema: 'CSS'
},
{
    enunciado: 'Qual é a propriedade usada para criar uma sombra em torno de um elemento em CSS?',
    alternativa_1: 'text-shadow',
    alternativa_2: 'box-shadow',
    alternativa_3: 'drop-shadow',
    alternativa_4: 'shadow-effect',
    resposta: 'box-shadow',
    tema: 'CSS'
},
{
    enunciado: 'Qual é a propriedade usada para definir a ordem dos elementos flexíveis em CSS?',
    alternativa_1: 'order',
    alternativa_2: 'flex-order',
    alternativa_3: 'flex-direction',
    alternativa_4: 'flex-wrap',
    resposta:'order',
    tema: 'CSS'
},
{
    enunciado: 'Qual é a propriedade usada para alinhar elementos flexíveis verticalmente em CSS?',
    alternativa_1: 'align-items',
    alternativa_2: 'justify-content',
    alternativa_3: 'align-content',
    alternativa_4: 'flex-align',
    resposta:  'align-items',
    tema: 'CSS'
},
{
    enunciado: 'Qual é a propriedade usada para definir a largura de um elemento em CSS?',
    alternativa_1: 'width',
    alternativa_2: 'height',
    alternativa_3: 'size',
    alternativa_4: 'dimension',
    resposta: 'width',
    tema: 'CSS'
},
{
    enunciado: 'Qual é a propriedade usada para definir o estilo da borda em CSS?',
    alternativa_1: 'border-width',
    alternativa_2: 'border-style',
    alternativa_3: 'border-color',
    alternativa_4: 'border-radius',
    resposta:  'border-style',
    tema: 'CSS'
}
]
let CSS_hard = [
  {
      enunciado: 'Qual é a propriedade usada para definir um efeito de transição suave entre duas propriedades CSS?',
      alternativa_1: 'transition',
      alternativa_2: 'animation',
      alternativa_3: 'transform',
      alternativa_4: 'translate',
      resposta: 'transition',
      tema: 'CSS'
  },
  {
      enunciado: 'Qual é a propriedade usada para definir um layout responsivo em CSS?',
      alternativa_1: 'position',
      alternativa_2: 'display',
      alternativa_3: 'flex',
      alternativa_4: 'media',
      resposta: 'media',
      tema: 'CSS'
  },
  {
      enunciado: 'Qual é a propriedade usada para definir o sombreamento de uma borda em CSS?',
      alternativa_1: 'box-shadow',
      alternativa_2: 'border-shadow',
      alternativa_3: 'text-shadow',
      alternativa_4: 'drop-shadow',
      resposta: 'border-shadow',
      tema: 'CSS'
  },
  {
      enunciado: 'Qual é a propriedade usada para definir um gradiente linear em CSS?',
      alternativa_1: 'background-color',
      alternativa_2: 'color-stop',
      alternativa_3: 'background-image',
      alternativa_4: 'linear-gradient',
      resposta: 'linear-gradient',
      tema: 'CSS'
  },
  {
      enunciado: 'Qual é a propriedade usada para definir a forma de um elemento em CSS?',
      alternativa_1: 'shape',
      alternativa_2: 'transform',
      alternativa_3: 'border-radius',
      alternativa_4: 'clip-path',
      resposta: 'clip-path',
      tema: 'CSS'
  },
  {
      enunciado: 'Qual é a propriedade usada para definir a posição de um elemento em CSS?',
      alternativa_1: 'position',
      alternativa_2: 'display',
      alternativa_3: 'float',
      alternativa_4: 'clear',
      resposta: 'position',
      tema: 'CSS'
  },
  {
      enunciado: 'Qual é a propriedade usada para definir um gradiente de várias cores em CSS?',
      alternativa_1: 'background-color',
      alternativa_2: 'color-stop',
      alternativa_3: 'background-image',
      alternativa_4: 'multi-gradient',
      resposta: 'background-image',
      tema: 'CSS'
  },
  {
      enunciado: 'Qual é a propriedade usada para definir a ordem dos elementos em CSS Flexbox?',
      alternativa_1: 'order',
      alternativa_2: 'flex-direction',
      alternativa_3: 'justify-content',
      alternativa_4: 'align-items',
      resposta: 'order',
      tema: 'CSS'
  },
  {
      enunciado: 'Qual é a propriedade usada para definir a cor do texto em CSS?',
      alternativa_1: 'color',
      alternativa_2: 'text-color',
      alternativa_3: 'font-color',
      alternativa_4: 'background-color',
      resposta: 'color',
      tema: 'CSS'
  },
  {
      enunciado: 'Qual é a propriedade usada para definir a distância entre as linhas de texto em CSS?',
      alternativa_1: 'line-height',
      alternativa_2: 'font-size',
      alternativa_3: 'word-spacing',
      alternativa_4: 'letter-spacing',
      resposta: 'line-height',
      tema: 'CSS'
  }
]




const firebaseApp = initializeApp( {
    apiKey: "AIzaSyDAoDpwalYgpjt_O7JpJmohz7QBqDhrbI8",
    authDomain: "database-devquiz.firebaseapp.com",
    databaseURL: "https://database-devquiz-default-rtdb.firebaseio.com",
    projectId: "database-devquiz",
    storageBucket: "database-devquiz.appspot.com",
    messagingSenderId: "265854277353",
    appId: "1:265854277353:web:017015df85efa9ae1c8278"
});

function SendQuestions() {
  const [message, setMessage] = useState()

  const db = getFirestore(firebaseApp)

  const SendQuestionCollection = collection(db, "Questoes")      
  const docRef = doc(SendQuestionCollection, "CSS_hard"); 
  
  
  const sendQuestion = async () => {
      try {
  
        const data = CSS_hard.map(array => ({ array }));
        await setDoc(docRef, { questions: data });
        setMessage("Dados adicionados com sucesso!")
        console.log("Dados adicionados com sucesso!");
  
      } catch (error) {
        console.error("Erro ao adicionar dados:", error);
        setMessage("Erro ao adicionar dados:")
      }
  };

  useEffect(()=>{
    sendQuestion()
  },[])
  


  return (

    <div>
      {message}
    </div>
  )
}

export default SendQuestions
