let materiais = [
  {
     id : 1 ,
     nome: 'AÇUCAR UNIÃO 1 KG',
     tipo: 'UNIDADE',
     estoque: 4,
     minEstoque: 5
  },
   {
     id : 2 ,
     nome: 'ADOÇANTE ZEROCAL SACHES CX50',
     tipo: 'CAIXAS',
     estoque: 5,
     minEstoque: 7
  }
]

const comprar = (y) =>{
  if(materiais[y].minEstoque > materiais[y].estoque){
 let quantComprar =  materiais[y].minEstoque - materiais[y].estoque
 return console.log(`"${materiais[y].nome}" precisa comprar ${quantComprar} ${materiais[y].tipo}`)
}
}



for( let x in materiais){
  comprar(x)
}
