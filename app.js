//defining search 
const search = document.querySelector('#search')
const names = document.querySelectorAll('.people-right')
const people = document.querySelector('.people')
const notFound = document.querySelector('.isFound')
//logic of searching

search.addEventListener('keyup',(e)=>{
    let arr = []
    names.forEach(name => {
        if(name.children[0].textContent.toLowerCase().includes(e.target.value.toLowerCase())){
            name.parentElement.style.display = 'block'
            notFound.style.display = 'none'
            arr.push(name)
        }else{
           name.parentElement.style.display = 'none'
         if(arr.length == 0){
            notFound.style.display = 'block'
         }
        }
    });
    arr=[]
    
})


