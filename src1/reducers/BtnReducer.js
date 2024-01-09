const inititalState=0;
const IncreaseDecrease=(state = inititalState,action)=>{
    const payload=Number(action.payload);
    switch(action.type){
        case "INCREASE":
            return action.payload === 0 ? state + 1 : state + payload
        case "DECREASE":
            return action.payload === 0 ? state - 1 : state - payload
        default:
            return state
    }
}
export default IncreaseDecrease;