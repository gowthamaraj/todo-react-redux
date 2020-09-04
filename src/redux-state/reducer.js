const init = {data:[{key:Math.random(),content:"Buy some chocos"},{key:Math.random(),content:"Buy some fruits"}]}

const reducerFunction = (state= init, action)=>{
    if(action.type === 'DELETE'){
        let dummy_state = state['data'].filter((item)=>{
            return item.key !== action.key
        })
        return {...state, data:dummy_state}
    }
    if(action.type === 'UPDATE'){
        return {...state, data:[...state.data,action.payload]}
    }
    return state
}

export default reducerFunction