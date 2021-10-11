class Code{
  constructor(){
    this.code = document.querySelectorAll('.language')
    this.btnCopy = document.querySelectorAll('.copy')
    this.mensagem = document.querySelector('#mensagem-copiado')
  }

  copiar(){
    this.btnCopy.forEach((btn, i) =>{
      btn.onclick = () =>{
        navigator.clipboard.writeText(this.code[i].textContent)

        this.mensagem.classList.add('visible')

        setTimeout(() =>{
          this.mensagem.classList.remove('visible')
        }, 1000)
      }
    })
  }
}

const code = new Code()
code.copiar()