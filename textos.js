// =============================================
// BANCO PRINCIPAL DE TEXTOS DO GERADOR
// =============================================

const textosPlanos = {

  fisico:{
    fraco:{1:"[Físico fraco 1]",2:"",3:"",4:"",5:"",6:"",7:"",8:"",9:""},
    medio:{1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:"",9:""},
    forte:{1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:"",9:""}
  },

  mental:{
    fraco:{1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:"",9:""},
    medio:{1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:"",9:""},
    forte:{1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:"",9:""}
  },

  emocional:{
    fraco:{1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:"",9:""},
    medio:{1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:"",9:""},
    forte:{1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:"",9:""}
  },

  intuitivo:{
    fraco:{1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:"",9:""},
    medio:{1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:"",9:""},
    forte:{1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:"",9:""}
  }

};

// =============================================
// GERADOR DO BANCO FINAL textosPlanos
// =============================================

const textosPlanos = {
  fisico:{fraco:{},medio:{},forte:{}},
  mental:{fraco:{},medio:{},forte:{}},
  emocional:{fraco:{},medio:{},forte:{}},
  intuitivo:{fraco:{},medio:{},forte:{}}
};

const niveis = ["fraco","medio","forte"];
const planosLista = ["fisico","mental","emocional","intuitivo"];

planosLista.forEach(plano=>{
  niveis.forEach(nivel=>{
    for(let n=1;n<=9;n++){
      textosPlanos[plano][nivel][n] =
        introducoes.natural +
        "\n\n" +
        (planosBase[plano][nivel] || "") +
        "\n\n" +
        (numerosPlanos[plano][n] || "") +
        "\n\n" +
        conclusoes.natural;
    }
  });
});
// =============================================
// ADAPTADOR (liga banco novo ao gerador antigo)
// =============================================

const textosPlanos = {};

["fisico","mental","emocional","intuitivo"].forEach(plano => {
  textosPlanos[plano] = {};

  ["fraco","medio","forte"].forEach(nivel => {
    textosPlanos[plano][nivel] = {};

    for(let n=1;n<=9;n++){
      textosPlanos[plano][nivel][n] =
        (planosBase[plano]?.[nivel] || "") +
        " " +
        (numerosPlanos[plano]?.[n] || "");
    }
  });
});
