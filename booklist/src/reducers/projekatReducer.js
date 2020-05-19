const initialState = {
    projekat:[]
}




const ProjekatRreducer = (state = initialState,action) =>{
    if(action.type === "FETCH"){
        console.log(action)
        return{
            ...state,
            projekat:action.projekat
        }
    }
    if(action.type === "IZBRISI"){
        const noviProjekti = state.projekat.filter((item)=>{
            if(item.id != action.id){
                return true
            }
        })
        return{
            ...state,
            projekat:noviProjekti
        }
    }
    else if (action.type === "DODAJ"){
        return{
            ...state,
            projekat:[...state.projekat,action.projekat]
        }
    }
    return state;
}

export default ProjekatRreducer