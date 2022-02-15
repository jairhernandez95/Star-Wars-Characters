// class Node
// {
//     constructor(data)
//     {
//         this._data = data;
//         this._next = null;
//     }
// }
// class LinkedList
// {
//     constructor(head = null)
//     {
//         this._head = head;
//         this._size = 0;
//     }

//     insert(data)
//     {
//         let node = new Node(data);
//         if(this._head == null)
//         {
//             this._head = node;
//         }
//         else
//         {
//             let current = this._head;
//             for(let i = 0; i < this._size; i++)
//             {
//                 if(current._next == null)
//                 {
//                     current._next = node; //explicación de current desde el minuto 44 aprox
//                 }
//                 else
//                 {
//                     current = current._next;
//                 }
//             }
//         }
//         this._size++;
//     }

//     delete(data)
//     {
//         let current = this._head;
//         let anterior = current;
//         for(let i = 0; i < this._size; i++)
//         {
//             if(current._data == data)
//             {
//                 anterior._next = current._next;
//             }
//             else
//             {
//                 anterior = current;
//                 current = current._next;
//             }
//         }
//         this._size--; 
//     }

//     search(data)
//     {
//         let current = this._head;
//         for(let i = 0; i < this._size; i++)
//         {
//             if(current._data == data)
//             {
//                 console.log(current);
//                 return current;
//             }
//             else
//             {
//                 current = current._next;
//             }
//         }
//     }

//     print()
//     {
//         let current = this._head;
//         let res = "";
//         while(current._next != null)
//         {
//             res += `${current._data} -> `
//             current = current._next;
//         }
//         console.log(res);
//     }

//     insertTail(data)
//     {
//         let current = this._head;
//         for(let i = 0; i < this._size; i++)
//         {
//             if(i == 0)
//             {
//                 if(current._data == data)
//                 {
//                     console.log("Este dato ya se encuentra dentro de la lista enlazada y es el primer nodo");
//                     break;
//                 }
//             } 
//             else if(i > 0)
//             {
//                 current = current._next;
//                 if(current._data == data)
//                 {
//                     console.log("Este dato ya se encuentra dentro de la lista enlazada");
//                     break;
//                 }
//                 else if(current._data != data && current._next == null)
//                 {
//                     console.log("Puedes ingresar este dato");
//                     this.insert(data);
//                 }
//             }
//         }
//     }

//     printMoreThan(number)
//     {
//         let current = this._head;
//         let res = "";
//         while(current._next != null)
//         {
//             if(current._data > number)
//             {
//                 res += `${current} -> `;
//             }
//             current = current._next;
//         }
//         console.log(res);
//     }
// }

async function getData()
{
    let base = 'https://swapi.dev/api/';
    let people = 'people/';
    // let planets = 'planets/';
    // let films = 'films/';
    // let species = 'species/';
    // let vehicles = 'vehicles/';
    // let starships = 'starships/';
    console.log("Cargando datos ⌛️⏳⌛️");
    for(let i = 1; i <84;i++)
    {
        if(i != 17)
        {
            const response = await fetch(`${base}${people}${i}`);
            const json = await response.json();
            data.push(json);
        }
    }
    console.log("Datos cargados ✅");
    // list.prin"t();
    // let file = "data.json";
    // let myRequest = new Request(file);
    // fetch(myRequest)
    //     .then(function(response){return response.json();})
    //     .then(function(information)
    //     {
    //         console.log(information);
    //         let list = new LinkedList();
    //         let element = new Node(information);
    //         list.insert(element);
    //         // for(let i = 0; i < information.length; i++)
    //         // {
    //         //     let element = new Node (information[0][i]);
    //         //     list.insert(element);
    //         //     data.push(element);
    //         // }
    //         list.print();
    //     })
}

function searchData(array)
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
                let defaultText = array[j].name;
                console.log(`${value} y ${defaultText}  son iguales`)
                console.log(array[j]);
                break;
            }
            else
            {
                let defaultText = array[j].name;
                console.log(`${value} y ${defaultText} no son iguales`)
            }
        }
        document.getElementById("searchBox").value =  "";
    }
}
let data = [];
getData();
