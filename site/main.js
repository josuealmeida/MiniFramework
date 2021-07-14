// Link do framework para download
const download = document.querySelectorAll('.download')

download.forEach(link =>{
  link.href = 'site/miniframework.tar.gz'
})

// Copiar os códigos HTML
const btnCopy = document.querySelectorAll('.bx-copy')
const link = document.querySelectorAll('.copyTag')
const info = document.querySelectorAll('.msg-copiado')

btnCopy.forEach((e, i) =>{
  e.onclick = () =>{
    // copia o texto para a área de transferência
    navigator.clipboard.writeText(link[i].textContent)

    info[i].classList.remove('d-none')

    setTimeout(function(){
      info[i].classList.add('d-none')
    }, 800)
  }
})