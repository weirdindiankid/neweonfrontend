import { CHANGE_THEME_MODE } from './../constants/themeContsant';
export interface IState{
    darkMode:boolean;
}

const initalState:IState={
    darkMode:false
}

export const themeReducer =(state=initalState,action:any)=>{
    switch (action.type) {
        case CHANGE_THEME_MODE:
          return { ...state, darkMode: !state.darkMode }
    
        default:
          return state;
      }
}