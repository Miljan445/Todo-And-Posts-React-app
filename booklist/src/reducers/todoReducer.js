const initialState = {
    todo:[
        {naslov:"Prosetaj psa",id:1},
        {naslov:"Izbaci djubre",id:2},
        {naslov:"Idi u prodavnicu",id:3},
    ]
}




const TodoReducer = (state=initialState,action) =>{
    if(action.type === "REMOVE_TODO"){
        const newArr = state.todo.filter((item)=>{
            if(item.id != action.id){
                return true
            }
        })
        return{
            ...state,
            todo:newArr
        }
    }
    if(action.type === "DODAJ_TODO"){
        return{
            ...state,
            todo:[...state.todo,action.todo]
        }
    }
    return state;
}



export default TodoReducer