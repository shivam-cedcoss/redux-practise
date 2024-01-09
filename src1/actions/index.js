export const increaseBtn=(num)=>{
    return{
        type:"INCREASE",
        payload:num
    }

}
export const decreaseBtn=(num)=>{
    return{
        type:"DECREASE",
        payload:num
    }
}