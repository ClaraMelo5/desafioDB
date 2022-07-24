class Forca { 
  letras = []
  letrasChutadas = []
  vidas = 6
  palavra = []
  acerto = 0 
  letrasChutadasSet = new Set()

  constructor(palavra){
    for(let i = 0; i<palavra.length; i++){
        this.palavra.push("_")
        this.letras.push(palavra[i])
    }
    

    
  }
  isLetra(letra) {
    if (letra.length == 1 ) {
      return true 
  
    } 
    else {
      return false  
    }
  }
  chutar(letra) {
     if (!this.isLetra(letra)){
        return 
     }
     let indice = this.letras.indexOf(letra)
     let indiceLetrasChutadas = this.letrasChutadas.indexOf(letra)
     this.letrasChutadas.push(letra)
     if (indice == -1 && indiceLetrasChutadas == -1)  { 
      this.vidas = this.vidas - 1
     }
     while (indice != -1) {
      this.palavra[indice] = this.letras[indice]
      this.letras[indice] = "_"
      this.acerto = this.acerto + 1 
      indice = this.letras.indexOf(letra)

     }
     
     
   }
  

  buscarEstado() 
  {
    if (this.vidas == 0) {
      return "perdeu"
    }
    if (undefined != this.acerto && this.acerto == this.palavra.length) {
      return "ganhou"
    }
   return "aguardando chute"; 
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    let setAux = new Set(this.letrasChutadas)
    
      return {
          letrasChutadas: Array.from(setAux), // Deve conter todas as letras chutadas
          vidas: this.vidas, // Quantidade de vidas restantes
          palavra: this.palavra // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}

module.exports = Forca;
