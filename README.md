# Secret Word 🔤

> Aplicação interativa de adivinhação de palavras desenvolvida para praticar e consolidar os conceitos fundamentais do React.

---

## 📌 Sobre o Projeto

O **Secret Word** é um jogo simples e dinâmico de adivinhação de palavras. O projeto foi desenvolvido como parte das atividades práticas do curso **React do Zero a Maestria**, ministrado pelo instrutor Matheus Battisti na Udemy.

O objetivo principal desta aplicação é aplicar a lógica de componentes, o controle de fluxo de telas e o gerenciamento de estados utilizando a sintaxe JSX e JavaScript puro no React.

---

## 🧠 Conceitos e Fundamentos Praticados

Durante o desenvolvimento, foram trabalhados os seguintes conceitos centrais da biblioteca:

- **Gerenciamento de Estado (`useState`)**:
  - Transição dos estágios do jogo (`start`, `game`, `end`).
  - Armazenamento da palavra sorteada, categoria, letras adivinhadas e tentativas.
  - Pontuação acumulada do jogador.
- **Efeitos Colaterais (`useEffect`)**:
  - Verificação contínua das condições de vitória (todas as letras descobertas).
  - Verificação do limite de tentativas (derrota).
  - Limpeza e reinicialização dos estados do jogo.
- **Comunicação entre Componentes (`props`)**:
  - Passagem de funções de callback para manipular o estado global no componente pai (`App`).
  - Envio de propriedades como dicas, pontuação, tentativas e letras já descartadas para os componentes filhos.
- **Renderização Condicional**:
  - Exibição dinâmica das telas do jogo de acordo com o estado atual.
- **Manipulação de Formulários e Referências**:
  - Captura e validação da entrada do usuário (apenas 1 letra por tentativa).
  - Foco automático no input utilizando a hook `useRef`.
  - Tratamento de submissão com `preventDefault()`.

---

## 🎮 Fluxo do Jogo

1. **Tela Inicial (`StartScreen`)**: Apresenta a capa do jogo com um botão para dar início à partida.
2. **Tela Principal (`Game`)**:
   - Exibe a dica da categoria e a quantidade de tentativas restantes.
   - Apresenta a palavra oculta em blocos de letras.
   - Fornece um formulário para envio do palpite de uma letra.
   - Exibe o histórico de letras já tentativas/descartadas.
3. **Tela de Game Over (`GameOver`)**:
   - Exibe o resultado da partida e a pontuação final obtida.
   - Permite reiniciar o jogo limpando o estado.

---

## 🛠️ Tecnologias Utilizadas

- **React**
- **JavaScript (ES6+)** / **JSX**
- **CSS3**
- **Vite** (ou Create React App)

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
É necessário ter o **Node.js** e o **npm** (ou **yarn**) instalados em seu computador.

### Passo a Passo

1. **Clone este repositório:**
   ```bash
   git clone https://github.com/seu-usuario/secret-word.git
   ```

2. **Acesse o diretório do projeto:**
   ```bash
   cd secret-word
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Execute o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. Abra o seu navegador no endereço indicado pelo terminal (geralmente `http://localhost:5173`).

---

## 📝 Observações

Este projeto foi construído estritamente para fins de aprendizado e consolidação da base de React.

---
*Desenvolvido por você durante o curso de React da Udemy (Matheus Battisti).*
