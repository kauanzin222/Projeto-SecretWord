# Secret Word 🔤

> Aplicação interativa de adivinhação de palavras desenvolvida para praticar e consolidar conceitos fundamentais de React.

---

## 🌐 Acesso ao projeto

O site está hospedado em:

https://kauanzin222.github.io/Projeto-SecretWord/

---

## 📌 Sobre o projeto

O Secret Word é um jogo simples e dinâmico de adivinhação de palavras. O projeto foi desenvolvido como parte da prática com React e tem como objetivo aplicar lógica de componentes, controle de fluxo de telas e gerenciamento de estado.

---

## 🧠 Conceitos e fundamentos praticados

Durante o desenvolvimento, foram trabalhados os seguintes conceitos centrais da biblioteca:

- Gerenciamento de estado com `useState`:
  - transição entre os estágios do jogo;
  - armazenamento da palavra sorteada, categoria, letras adivinhadas e tentativas;
  - controle da pontuação acumulada.
- Efeitos colaterais com `useEffect`:
  - verificação da vitória quando todas as letras são descobertas;
  - verificação de derrota ao zerar as tentativas;
  - limpeza e reinicialização dos estados do jogo.
- Comunicação entre componentes com `props`:
  - passagem de funções de callback para manipular o estado global no componente pai;
  - envio de informações como categoria, pontuação, tentativas e letras descartadas para os componentes filhos.
- Renderização condicional:
  - exibição dinâmica das telas de início, jogo e fim.
- Organização da lógica do projeto:
  - separação entre componentes, dados e regras de negócio;
  - reutilização de funções para sorteio e controle de fluxo.

---

## 🎮 Fluxo do jogo

1. Tela inicial: apresenta a introdução do jogo e o botão para começar.
2. Tela principal: mostra a categoria, o número de tentativas e a palavra oculta.
3. O usuário tenta adivinhar letras e o sistema valida se a letra já foi usada.
4. Se acertar, a letra é revelada; se errar, a tentativa é reduzida.
5. Ao finalizar a partida, aparece a tela de resultado e a opção de reiniciar o jogo.

---

## 🛠️ Tecnologias utilizadas

- React
- JavaScript
- CSS Modules
- Vite

---

## ▶️ Executar localmente

Se quiser rodar o projeto localmente:

1. Acesse a pasta do projeto:
   ```bash
   cd SecretWord
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o ambiente de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Abra o navegador na porta exibida no terminal, normalmente:
   ```bash
   http://localhost:5173
   ```

---

## 📝 Observações

Este projeto foi desenvolvido para praticar e consolidar fundamentos importantes de React, como estados, efeitos, componentes e lógica de fluxo em aplicações interativas.

---

*Projeto desenvolvido como parte do aprendizado em React.*
