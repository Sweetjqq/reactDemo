import {ADD_ITEM,DEL_ITEM,GET_LIST} from './actionType'
const defaultState={
    inputValue:"",
    listData:[],
};
export default (state=defaultState,action) => {
    if(action.type === ADD_ITEM){
        let newState=JSON.parse(JSON.stringify(state));
        newState.listData.push(action.value);
        return newState;
    }
    if(action.type === DEL_ITEM){
        let newState=JSON.parse(JSON.stringify(state));
        newState.listData.splice(action.index,1);
        return newState;
    }if(action.type===GET_LIST){
        let newState=JSON.parse(JSON.stringify(state));
        newState.listData=action.data;
        return newState;
    }
    return state;
}