/*
	- MiniFramework v1.0
	- Desenvolvido por Josué Almeida
	- Confira o projeto no GitHub: https://github.com/josuealmeida/MiniFramework
*/

console.info('VOCÊ ESTÁ UTILIZANDO O MINIFRAMEWORK V1.0')



class Loading{
	constructor(){
		this.loading = document.querySelector('.loading')
	}

	remover(){
		window.onload = () =>{
			setTimeout(() =>{

				this.loading ? (
					this.loading.classList.add('hidden')
				):console.info('Adicione o loading')

			}, 200)
		}
	}
}

const loading = new Loading()
loading.remover()



class Sidebar{
	constructor(){
		this.overlay = document.querySelector('.sidebar-overlay')
		this.sidebar = document.querySelector('.sidebar')
		this.btnOpen = document.querySelector('.btn-menu')
		this.btnClose = document.querySelector('.sidebar header button')
		this.itens = document.querySelectorAll('.sidebar .item')
	}
 
	alterarExibicao(delayMenu, delayOverlay){
		this.sidebar.style.transitionDelay = delayMenu
		this.sidebar.classList.toggle('open')		
		
		this.overlay ? (
			this.overlay.style.transitionDelay = delayOverlay,
			this.overlay.classList.toggle('open')
		):null		

		document.body.style.overflow = 'hidden'
	}

	abrir(elemento){
		elemento.onclick = () =>{
			this.alterarExibicao('0.3s', '0s')
		}
	}

	fechar(elemento){
		elemento.onclick = () =>{
			this.alterarExibicao('0s', '0.3s')
		}
	}

	executar(){
		if(this.btnOpen){			
			this.abrir(this.btnOpen)

			this.btnClose ? (
				this.fechar(this.btnClose),		
				this.itens.forEach((item) =>{
					this.fechar(item)
				})
			):console.info("Adicione o botão para fechar o sidebar")

			this.overlay ? (
				this.fechar(this.overlay)
			):console.info('Adicione o sidebar-overlay')
		}

		if(this.btnOpen && !this.sidebar){
			console.info('Adicione o sidebar')
		}
	}
}

const sidebar = new Sidebar()
sidebar.executar()



class Modal{
	constructor(){
		this.modalOverlay = document.querySelector('.modal-overlay')
		this.btnClose = document.querySelector('.modal-overlay button')
		this.btnCancel = document.querySelectorAll('.modal footer .close')
		this.entrada = []
	}

	set(modal, button){
		this.modal = document.querySelector(modal)
		this.button = document.querySelectorAll(button)

		this.modal ? (
			this.entrada.push([this.modal, this.button])
		):console.log(`Está faltando um modal para ${button}`)

		this.button.length == 0 ? (
			console.log(`Está faltando um botão para ${modal}`)
		):null
	}

	abrir(){
		this.entrada.forEach((entrada) =>{
			entrada[1].forEach((btn) =>{
				btn.onclick = () =>{
					this.modalOverlay.classList.add('open')
					entrada[0].classList.add('open')
				}
			})
		})
	}

	removerClass(closeElement){
		closeElement.onclick = () =>{
			this.entrada.forEach((entrada) =>{
				entrada[1].forEach((btn) =>{
					this.modalOverlay.classList.remove('open')
					entrada[0].classList.remove('open')
				})
			})
		}
	}

	fechar(){
		this.removerClass(this.btnClose)
		this.removerClass(this.modalOverlay)

		this.btnCancel.forEach((cancel) =>{
			this.removerClass(cancel)
		})
	}

	executar(){
		this.abrir()
		this.fechar()
	}
}

const modal = new Modal()

/*
	- 1º param: ID do modal
	- 2º param: CLASS do botão que vai abrir esse modal
*/
modal.set('#termos', '.btn-termos')
modal.set('#tutorial', '.btn-tutorial')
modal.set('#instrucoes', '.btn-instrucoes')

modal.executar()



class ScrollToTop{
	constructor(){
		this.button = document.querySelector('.scroll-top')
	}

	executar(){
		this.button ? (
			window.onscroll = () =>{
					document.body.scrollTop > 150 || document.documentElement.scrollTop > 150 ? (
					 	this.button.classList.add('scroll-top-visible')
					):this.button.classList.remove('scroll-top-visible')
			},

			this.button.onclick = () =>{
				window.scroll({top: 0})
			}
		):null
	}
}

const scrollToTop = new ScrollToTop()
scrollToTop.executar()