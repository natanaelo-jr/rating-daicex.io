let root = document.getElementById('root')


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
            data.forEach(element => root.insertAdjacentHTML('beforebegin', `<tr><td class="text-zinc-500 p-2">${element.name}</td><td  class="text-zinc-500">${element.rating}</td></tr>`));
        }
        )
        .catch((error) => 
            console.error("Nao achei"));
}
fetchData()
