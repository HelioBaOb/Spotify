import {SET_CURRENT_SONG} from "../actions/currentSongActions";

const initialState = {
    cardInfo: null
}

export default (state=initialState, action)=>{
    switch(action.type){
        case SET_CURRENT_SONG:
            console.log(action.cardInfo)
            return{
                cardInfo: action.cardInfo,
            }
    }
    return state;
}