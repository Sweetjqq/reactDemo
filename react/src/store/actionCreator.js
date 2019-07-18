import {ADD_ITEM,DEL_ITEM,GET_LIST} from './actionType'
export const add=(value)=>({
      type:ADD_ITEM,
      value
})
export const delItem=(index)=>({
      type:DEL_ITEM,
      index
});
export const getData=(data)=>({
    type:GET_LIST,
    data
})