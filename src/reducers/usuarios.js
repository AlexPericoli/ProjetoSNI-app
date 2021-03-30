const initial_state = {
   token: '',
   id_usuario: 0,
   nome: '',
   id_funcao: '',
   nome_funcao: '',
   id_assoc_local: 0,
   nome_assoc_local: '',
};

const reducer = (state = initial_state, action) => {
   switch (action.type) {
      case '@usuarios/SET_TOKEN':
         const token = action.payload.token;
         const nome = action.payload.nome;
         const id_al = action.payload.id_assoc_local;
         const nome_al = action.payload.nome_assoc_local;
         const id_funcao = action.payload.id_funcao;
         const nome_funcao = action.payload.nome_funcao;

         return {
            ...state,
            token,
            nome,
            id_assoc_local: id_al,
            nome_assoc_local: nome_al,
            id_funcao,
            nome_funcao,
         };

      default:
         return state;
   }
};

export default reducer;
