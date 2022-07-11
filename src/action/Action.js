

export const ADD=(data)=>{
    return{
    type:"ADD_ITEM",
    payload:
    {
        id:new Date().getTime().toString(),
        data:data
    }
   
}
}
export const DELETE=()=>{

}