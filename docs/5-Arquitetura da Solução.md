# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

A aquitetura do projeto consiste em uma aplicação web utilziando as tecnológias HTML, CSS, JavaScript. Onde os dados são gravados em um LocalStorage no formato JSON. A aplicação foi hospeado na nuvem pela plataforma Heroku.

## Diagrama de componentes

Os componentes que compões a estrutura do CyclePower são apresentados conforme a figura 1.

![Untitled Diagram (1)](https://user-images.githubusercontent.com/20197817/124372055-4229bc00-dc5e-11eb-9d82-f1b3707523b4.png)


<center>Figura 1 - Arquitetura da Solução</center>

A solução implementada conta com os seguintes módulos:
- **Navegador** - Qualquer navegador com suporte ao HTML5.
  - **Páginas Web** - CyclePower possui um conjunto de arquivos HTML, CSS e JavaScript que permitem realizar os processos necessário para gerar preços.
   - **Local Storage** - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles: 
     - **Login** - Salva informações do usuário ao logar
     - **Tributos** - registro de valores de impostos e investimentos
     - **Despesas** - registro de Aluguel, Funcionários, seguro e despesas variáveis
     - **Premissas** - registro de premissas
 - **Hospedagem** - Hospedam através da plataforma Heroku.



Fluxo de despesas fixas e variáveis

Na imagem abaixo podemos visualizar o fluxo de cadastro de premissas. Primeiramente o usuário efetua login e é direcionado ao menu, em seguida o menu de cadastro de despesas fixas e variáveis é selecionado. O usuário informa os valores de "Aluguel" e "Funcionários", "Seguro" para despesas fixas e o percentual para despesas variáveis. Em seguida é informado que o cadastro foi efetuado e direcionado a tela de menu.

![Untitled Diagram-Page-2 (1)](https://user-images.githubusercontent.com/20197817/124372596-ca5d9080-dc61-11eb-8a32-3e1c8905e628.jpg)

Fluxo de Premissas

Na imagem abaixo podemos visualizar o fluxo de cadastro de premissas. Primeiramente o usuário efetua login e é direcionado ao menu, em seguida o menu de cadastro de premissas é selecionado. O usuário informa os valores de "Número de bikes" e "Horas por dia" para calcular o "Potencial de horas por mês". Em seguida informa o valor para "Taxa de Ocupação" para calcular o valor de "Horas mensais estimadas". Em seguida é informado que o cadastro foi efetuado e direcionado a tela de menu.

![Untitled Diagram-Page-2](https://user-images.githubusercontent.com/20197817/124372533-f88ea080-dc60-11eb-9233-559e319d6ed7.jpg)


Fluxos de receitas, impostos e investimentos

Na imagem abaixo podemos visualizar o fluxo de cadastro de premissas. Primeiramente o usuário efetua login e é direcionado ao menu, em seguida o menu de cadastro de premissas é selecionado. O usuário informa o percentual do imposto e valor da depreciação total. Em seguida é informado que o cadastro foi efetuado e direcionado a tela de menu.

![Untitled Diagram-Page-2 (2)](https://user-images.githubusercontent.com/20197817/124372750-1c52e600-dc63-11eb-8bd6-3b3cdfbcefc9.jpg)


## Tecnologias Utilizadas

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

Foram utilizadas técnologias como HTML para criação das páginas em conjunto ao framework Bootstrap para estilização das páginas. Para coletar e gravar as informações foram usados scripts com linguagem JavaScript integrando ao LocalStorage do navegador. Para desenvolvimento, ferramentas como WebStorm e Visual Studio Code foram utilizadas no desenvolvimento com apoio de plugins especificos para o desenvolvimento web.

Através do comportamento do usuário validado através de scripts, conseguimos enviar informações informando o resultado das suas ações. Como por exemplo, ao realizar o login uma alerta é enviada para o cliente informando que o cadastro do usuário foi efetuado com sucesso:

![image](https://user-images.githubusercontent.com/20197817/124372139-ee6ba280-dc5e-11eb-8ea2-64a4570bdf9b.png)



## Hospedagem

A hospedagem foi realizada através do Heroku utilizando o recurso de deploy automático sempre que houver uma nova atualização na branch MAIN.
