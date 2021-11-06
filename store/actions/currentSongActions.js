export const SET_CURRENT_SONG = 'SET_CURRENT_SONG';

export const setSong = (cardInfo) =>{
    return {
        type: SET_CURRENT_SONG,
        cardInfo:cardInfo
    }
}