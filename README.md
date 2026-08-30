# Explica FQA — Site

## Ficheiros
- `index.html` — página principal
- `style.css` — design e versão responsiva
- `script.js` — menu e formulário
- `robots.txt` — instruções para motores de pesquisa
- `sitemap.xml` — mapa do site
- `_headers` — cabeçalhos de segurança para Cloudflare Pages
- `favicon.svg` — ícone do site

## Publicação no Cloudflare Pages
1. Criar uma conta no GitHub.
2. Criar um repositório chamado `explica-fqa-site`.
3. Enviar todos os ficheiros desta pasta para o repositório.
4. No Cloudflare: Workers & Pages > Create application > Pages > Connect to Git.
5. Escolher o repositório.
6. Framework preset: None.
7. Build command: `exit 0` ou deixar vazio conforme a interface.
8. Build output directory: `/` ou o directório que contém estes ficheiros, se a interface aceitar a raiz do projecto.
9. Publicar.

Nota: a documentação do Cloudflare pode pedir uma pasta de saída específica. Se isso acontecer, coloque os ficheiros dentro de uma pasta `public` e defina `public` como Build output directory.

## Antes de publicar no domínio próprio
Substituir em:
- `index.html`: URL canónica e URLs de Open Graph, se necessário.
- `robots.txt`: URL do sitemap.
- `sitemap.xml`: URL principal.

## Formulário
Nesta primeira versão, o formulário abre o programa de email do visitante com a mensagem preenchida. Funciona sem servidor e sem custos.

Numa versão seguinte pode ser substituído por um formulário que envia automaticamente sem abrir o programa de email, através de um backend no Cloudflare.

## Imagens
A primeira versão usa imagens remotas genéricas da Unsplash. Antes de uma versão definitiva, recomenda-se substituir por imagens próprias ou por imagens com licença e origem controlada.
