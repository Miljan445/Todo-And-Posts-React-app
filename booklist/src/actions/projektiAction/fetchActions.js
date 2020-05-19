export default function FetchProjects(){
    return(dispatch)=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then((data)=>{
            let projekat = data.slice(0,5)
            dispatch({
                type:"FETCH",
                projekat
            })
        })
    }
}
