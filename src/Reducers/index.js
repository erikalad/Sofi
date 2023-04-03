const initialState = {
 metas: localStorage.getItem(`metas`) && JSON.parse(localStorage.getItem('metas')) || [],
 agradecimientos: localStorage.getItem(`agradecimientos`) && JSON.parse(localStorage.getItem('agradecimientos')) || [],
}

function rootReducer (state = initialState, action) {
    switch (action.type) {
      
      case "POST_METAS":
        localStorage.setItem('metas', JSON.stringify([...state.metas, action.payload]));
        return {
            ...state,
            metas: [...state.metas, action.payload]
        }

        case "POST_AGRADECIMIENTOS":
          localStorage.setItem('agradecimientos', JSON.stringify([...state.agradecimientos, action.payload]));
          return {
              ...state,
              agradecimientos: [...state.agradecimientos, action.payload]
          }
      

      default: return state;

         
    }

}

  export default rootReducer;

