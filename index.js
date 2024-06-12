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
            data.forEach(element => root.insertAdjacentHTML('beforebegin', `<tr class="tr"><td class="td">${element.name}</td><td  class="td">${element.rating}</td></tr>`));
        }
        )
        .catch((error) => 
            console.error("Nao achei"));
}
fetchData()
