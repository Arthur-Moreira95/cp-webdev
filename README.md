# 🌐 cp-webdev

Repositório com os **Checkpoints (CPs) de Web Development** da faculdade, desenvolvidos com **HTML5, CSS3 e JavaScript puro** (sem frameworks nem bibliotecas externas).

Cada CP fica em sua própria pasta dentro de `cpweb/` e funciona de forma independente: basta abrir o `index.html` no navegador.

---

## 📁 Estrutura do repositório

```
cp-webdev/
├── cpweb/
│   ├── cp3/                  # CP3 – Calculadora de Compras
│   │   ├── index.html
│   │   ├── style.css
│   │   └── script.js
│   └── cp6/                  # CP6 – Restaurante da Kiki
│       ├── index.html
│       ├── styles.css
│       ├── script.js
│       ├── comida1.webp
│       └── comida2.webp
├── LICENSE
└── README.md
```

---

## 🧮 CP3 – Calculadora de Compras

Uma calculadora simples que multiplica o **valor unitário** de um produto pela **quantidade** e mostra o total na tela.

**Funcionalidades**
- Dois campos numéricos: valor da unidade (R$) e quantidade
- Botão **Multiplicar**, que calcula e exibe o resultado
- Layout centralizado, com tema escuro, gradiente de fundo e efeitos de foco e hover nos campos e no botão

**Conceitos praticados**
- Captura de valores com `document.getElementById(...).value`
- Conversão de texto para número com `Number()`
- Eventos com `onclick`
- Atualização do conteúdo da página com `innerText`
- Estilização com Flexbox, `transition` e pseudo-classes (`:hover`, `:focus`, `:active`)

---

## 🍽️ CP6 – Restaurante da Kiki

Página com o tema "Comidinhas da dona Kiki", com um botão que **alterna entre duas imagens de comida** sem recarregar a página.

**Funcionalidades**
- Botão **Trocar Imagem**, que alterna entre `comida1.webp` e `comida2.webp`
- O atributo `alt` da imagem é atualizado junto com o `src`
- Botão estilizado com gradiente, sombra e animação ao passar o mouse
- Imagens no formato **WebP**, mais leve para a web

**Conceitos praticados**
- Manipulação de atributos do DOM com `getAttribute()` e `setAttribute()`
- Estrutura condicional (`if / else`) para alternar entre estados
- Funções JavaScript acionadas por eventos
- Estilização de botões com classes CSS e `linear-gradient`

---

## ▶️ Como executar

Não é preciso instalar nada.

1. Clone o repositório:
   ```bash
   git clone https://github.com/Arthur-Moreira95/cp-webdev.git
   ```
2. Entre na pasta do CP que quiser abrir:
   ```bash
   cd cp-webdev/cpweb/cp3   # ou cp6
   ```
3. Abra o `index.html` no navegador (clique duas vezes no arquivo ou use a extensão **Live Server** do VS Code).

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|------------|-----|
| HTML5 | Estrutura das páginas |
| CSS3 | Estilização, layout com Flexbox e animações |
| JavaScript (ES6) | Interatividade e manipulação do DOM |

---

## 👤 Autor

**Arthur Moreira Costa**
Estudante de Engenharia de Software na FIAP

[![GitHub](https://img.shields.io/badge/GitHub-Arthur--Moreira95-181717?logo=github)](https://github.com/Arthur-Moreira95)

---

## 📄 Licença

Este projeto está licenciado sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
