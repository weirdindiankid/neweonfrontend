import { THEME_APPLY } from './../constants/themeContsant';
export interface IState{
    darkMode:boolean;
}

const initalState:IState={
    darkMode:false
}

export const themeReducer =(state=initalState,action:any)=>{
    switch (action.type) {
        case THEME_APPLY:
          return { ...state, darkMode: !state.darkMode }
    
        default:
          return state;
      }
}