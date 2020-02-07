import React from "react";

export const ArticleComponent = () => (
    <p class="paragrafo">
        E se colocarmos uma descrição, como uma tag H2, onde ela se posiciona?
        Abaixo da tag H1, também na esquerda, pois as tags de cabeçalho são do tipo display block.
        Depois, podemos colocar uma imagem, que vai ficar na esquerda, abaixo da tag H2 e em seguida um texto, que vai ficar na direita da imagem.

        Essa pequena descrição nos mostra duas coisas: os elementos são adicionados, automaticamente, de cima para baixo e da esquerda pra direita (respeitando o display inline e display block, claro).
        E é aí que entra a propriedade float do CSS: ela vai controlar onde os elementos serão posicionados.
    </p>
)