
function List(props){
     
    //fruits.sort((a,b)=>a.name.localeCompare(b.name)); //Alphabatical
    //fruits.sort((a,b)=>b.name.localeCompare(a.name)); //Reverse alphabatical               
    // fruits.sort((a,b)=>a.calories-b.calories);  //Ascendente order             
    //fruits.sort((a,b)=>b.calories-a.calories);  //Descendent order  
      
    //const lowCalFruit=fruits.filter(ghala=>ghala.calories<100) //FILTER ILI AKBER MIL 100 LE
    //const highCalFruit=fruits.filter(ghala=>ghala.calories>=100)

    const ghala=props.items

    const listItems=ghala.map(f=> <li key={f.id}>
                                        {f.name}:&nbsp;&nbsp;     
                                        <b>{f.calories}</b></li> 
                                        );
    return (<ol>{listItems}</ol>)
}
export default List