const txt = document.querySelector("#content")
const writer = document.querySelector("#writer")
const btn = document.querySelector("#btn")

const url = "https://api.quotable.io/quotes/random?maxLength=120"


const genquote = async () =>{

    let res = await fetch(url)
    let data0 = await res.json()
    let data1 = data0[0]

    let content = data1.content
    let author = data1.author
    txt.innerHTML = content
    writer.innerHTML= author
    
    

}

window.addEventListener("load" , () =>{
    genquote()
})

btn.addEventListener("click" , () => {
  genquote();
}
)
