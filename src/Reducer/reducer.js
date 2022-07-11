let fetchdata=async(list)=>{
  const response=await axios.get("https://jsonplaceholder.typicode.com/users")
  console.log(response)
   
  
}
const  initialState = {
  list:([])
}




const reducer= (state = initialState,action) => { 
    debugger     
  switch (action.type) 
  {

  case 'ADD_ITEM':
      const{id,data}=action.payload
    return { 
        ...state, 
        list:[
            ...state.list,
            {
                id:id,
                username:data.username,
                email:data.email

            }
        ]

    
    }

  default:
    return state
  }
}
export default reducer;
