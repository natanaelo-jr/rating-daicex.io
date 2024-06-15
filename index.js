let root = document.getElementById('root')
let sorted = document.getElementById('sorted')


function fetchData(){
    fetch('./data.json')
        .then((res) =>{
            if (!res.ok){
                throw new Error
                    ('error: Status: ${res.status}');
            }
            return res.json();
        })
        .then((data) => {
            
            data.forEach(element => root.insertAdjacentHTML('beforebegin', `<tr class="hover:bg-zinc-800 hover:text-zinc-100"><td class="text-zinc-500 p-2">${element.name}</td><td  class="text-zinc-500">${element.rating}</td></tr>`));        }
        )
        .catch((error) => 
            console.error("Nao achei"));
}
function fetchData2(){
    fetch('./data.json')
        .then((res) =>{
            if (!res.ok){
                throw new Error
                    ('error: Status: ${res.status}');
            }
            return res.json();
        })
        .then((data) => {
            data.sort((a, b) => b.rating - a.rating)
            data.forEach(element => sorted.insertAdjacentHTML('beforebegin', `<tr class="hover:bg-zinc-800 hover:text-zinc-100"><td class="text-zinc-500 p-2">${element.name}</td><td  class="text-zinc-500">${element.rating}</td></tr>`));        }
        )
        .catch((error) => 
            console.error("Nao achei"));
    }
fetchData()
fetchData2()
