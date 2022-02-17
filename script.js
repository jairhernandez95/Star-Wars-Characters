class Node {
    constructor(data)
    {
        this._data = data
        this._left = null
        this._right = null
    }
}
class BinaryTree {
    constructor(root = null)
    {
        this._root = root
    }
    insert(data)
    {
        let node = new Node(data)
        if(this._root == null)
        {
            this._root = node
        } else
        {
            let current = this._root
            while(true) 
            {
                if(current._right != null && current._data.name < node._data.name)
                {
                    current = current._right
                }
                else if(current._left != null && current._data.name > node._data.name)
                {
                    current = current._left
                }
                else
                {
                    break
                }
            }
            if(current._right == null && current._data.name < node._data.name)
            {
                current._right = node
            }
            else if(current._left == null && current._data.name > node._data.name)
            {
                current._left = node
            }
        }
    } 
    
    search(data) 
    {
        if(this._root._data.name == data)
        {
            return this._root
        }
        else
        {
            let current = this._root
            while(true)
            { 
                if(current._right != null && current._data.name < data)
                {
                    current = current._right
                }
                else if(current._left != null && current._data.name > data)
                {
                    current = current._left
                }
                else
                {
                    break
                }
            }
            console.log(current)
        }
    }
}
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
            // tree.insert(data[data.length-1]);
        }
    }
    console.log("Datos cargados ✅");
    showAllData(data);
    // console.log(tree);
    // console.log(data);
}
function searchDataArray(array)
{
    let value = document.getElementById("searchBox").value;
    let auxiliarArray = []
    // console.log(auxiliarArray);
    if(value == "")
    {
        console.log("Vacio el input");
        // charactersDataDiv.remove();
    }
    else
    {
        for(let j = 0; j < array.length; j++)
        {
            // for(let l = 0; l < auxiliarArray.length; l++)
            // {
            //     if([...array[j].name][j] == auxiliarArray[l])
            //     {
            //         console.log(`${[...array[j].name][j]} es igual a ${auxiliarArray[l]}`)
            //     }
            // }
            // console.log([...array[j].name])
            if(array[j].name.includes(value) == true)
            {
                auxiliarArray.push(array[j]);
            }
        }
        console.log(auxiliarArray);
        // document.getElementById("searchBox").value =  "";
    }
}
function searchDataBinaryTree()
{
    let value = document.getElementById("searchBox").value;
    tree.search(value);
}
function showAllData(array)
{
    console.log(array);
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

function showInputData() //para hacer pruebas de ingresar datos por el input
{
    let value = document.getElementById("searchBox").value;
    console.log(value);
}
let data = [];

// let tree = new BinaryTree();
getData();

