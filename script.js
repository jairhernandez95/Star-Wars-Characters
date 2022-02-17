async function getData()
{
    let base = 'https://swapi.dev/api/';
    let people = 'people/';
    console.log("Cargando datos ⌛️⏳⌛️");
    for(let i = 1; i < 84;i++)
    {
        if(i == 17)
        {
            continue;
        }
        else
        {
            const response = await fetch(`${base}${people}${i}`);
            const json = await response.json();
            data.push(json);
        }
    }
    console.log("Datos cargados ✅");
    showAllData(data);
}
function showAllData(array)
{
    let resultDiv = document.getElementById("resultDiv");
    resultDiv.style.display = "none";
    let charactersDataDiv = document.getElementById("charactersDataDiv");
    for(let k = array.length-1; k >= 0; k--)
    {
        let individualDataDiv = document.createElement("div");
        individualDataDiv.setAttribute("id", "individualDataDiv");
        individualDataDiv.setAttribute("class", "individualDataDiv");
        let nameDiv = document.createElement("div")
        let genderDiv = document.createElement("div");
        let heightDiv = document.createElement("div");
        nameDiv.innerHTML = `<h4>Name: ${array[k].name}</h4>`;
        genderDiv.innerHTML = `<h4>Gender: ${array[k].gender}</h4>`;
        heightDiv.innerHTML = `<h4>Height: ${array[k].height}</h4>`;
        charactersDataDiv.insertAdjacentElement("afterbegin",individualDataDiv);
        individualDataDiv.insertAdjacentElement("afterbegin", heightDiv);
        individualDataDiv.insertAdjacentElement("afterbegin", genderDiv);
        individualDataDiv.insertAdjacentElement("afterbegin", nameDiv);
    }
}
function searchDataArray(array)
{
    let value = document.getElementById("searchBox").value;
    let charactersDataDiv = document.getElementById("charactersDataDiv");
    let resultDiv = document.getElementById("resultDiv");
    resultDiv.style.display = "none";
    resultDiv.innerHTML = ``;
    let auxiliarArray = []
    if(value == "")
    {
        console.log("No hay valores por buscar");
        charactersDataDiv.style.display = "grid";
        
    }
    else
    {
        for(let j = 0; j < array.length; j++)
        {
            
            if(array[j].name.includes(value) == true)
            {
                auxiliarArray.push(array[j]);
            }
        }
        showFoundData(auxiliarArray);
    }
}
function showFoundData(array)
{
    let charactersDataDiv = document.getElementById("charactersDataDiv");
    charactersDataDiv.style.display = "none";
    let resultDiv = document.getElementById("resultDiv");
    resultDiv.style.display = "grid";
    for(let k = array.length-1; k >= 0; k--)
    {
        let individualDataDiv = document.createElement("div");
        individualDataDiv.setAttribute("id", "individualDataDiv");
        individualDataDiv.setAttribute("class", "individualDataDiv");
        let nameDiv = document.createElement("div")
        let genderDiv = document.createElement("div");
        let heightDiv = document.createElement("div");
        nameDiv.innerHTML = `<h4>Name: ${array[k].name}</h4>`;
        genderDiv.innerHTML = `<h4>Gender: ${array[k].gender}</h4>`;
        heightDiv.innerHTML = `<h4>Height: ${array[k].height}</h4>`;
        resultDiv.insertAdjacentElement("afterbegin",individualDataDiv);
        individualDataDiv.insertAdjacentElement("afterbegin", heightDiv);
        individualDataDiv.insertAdjacentElement("afterbegin", genderDiv);
        individualDataDiv.insertAdjacentElement("afterbegin", nameDiv);
    }
}
let data = [];
getData();

