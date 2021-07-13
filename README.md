# MiniFramework

Desenvolvido para facilitar a construção dos seus sites.

Você pode criar e estilizar seus elementos HTML facilmente utilizando as classes CSS.

## Inicialização

Para começar adicione o arquivo css dentro do `<head>` do seu documento HTML.

```
<link rel="stylesheet" href="../miniframework v1.0/css/miniframework.css>
```

Adicione também o javascript no final do `<body>` do seu documento HTML.

```
<script src="../miniframework v1.0/DOM_Manipulation.js"></script>
```

## Aqui está alguns elementos:

### Loading 

```
<div class="loading loading-visible">
  <div class="loader"></div>
  <p>Hmmm... parece que temos algum problema. Tente novamente mais tarde.</p>
</div>
```

### Info

```
<div class="info">Eu sou uma caixinha de informação!</div>
```

### Header

```
<header class="bg-dark p-1">
  <div class="container flex-between-center">
    <a href="#" class="text-2 uppercase">Logo</a>

    <nav class="flex-between-center">
      <div class="md-d-none mr-3">
        <a href="#" class="mx-1 active">Início</a>
        <a href="#" class="mx-1">Serviços</a>
        <a href="#" class="mx-1">Sobre</a>
        <a href="#" class="mx-1">Contato</a>
      </div>

      <div class="flex-between-center">
        <a href="#" class="btn-green sm-d-none">Entrar</a>
        <i class='bx bx-menu btn-menu d-none md-d-block white ml-2'></i>
      </div>
    </nav>
  </div>
</header>
```

### Scroll to top

```
<i class='bx bxs-chevron-up-circle scroll-top'></i>
```
