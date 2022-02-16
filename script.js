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
            tree.insert(data[data.length-1]);
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
    if(value == "")
    {
        console.log("Vacio el input")
    }
    else
    {
        for(let j = 0; j < array.length; j++)
        {
            if(array[j].name.includes(value))
            {
                console.log(`${value} SI se encuentra en la api y su posición es ${j}`);
                position = j;
                console.log(array[j]);
                break;
            }
        }
        document.getElementById("searchBox").value =  "";
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
    for(let k = array.length; k = 0; k--)
    {
        let name = `<h4>${array[k].name}</h4>`;
        let gender = `<h4>${array[k].gender}</h4>`;
        let height = `<h4>${array[k].height}</h4>`;
        charactersDataDiv.insertAdjacentHTML("afterend",height);
        charactersDataDiv.insertAdjacentHTML("afterend",gender);
        charactersDataDiv.insertAdjacentHTML("afterend",name);
    }
}
let position = null;
let data = [];
let tree = new BinaryTree();
getData();

