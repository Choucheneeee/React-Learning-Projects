import PropTypes from 'prop-types'

function List(props){
     
    //fruits.sort((a,b)=>a.name.localeCompare(b.name)); //Alphabatical
    //fruits.sort((a,b)=>b.name.localeCompare(a.name)); //Reverse alphabatical               
    // fruits.sort((a,b)=>a.calories-b.calories);  //Ascendente order             
    //fruits.sort((a,b)=>b.calories-a.calories);  //Descendent order  
      
    //const lowCalFruit=fruits.filter(ghala=>ghala.calories<100) //FILTER ILI AKBER MIL 100 LE
    //const highCalFruit=fruits.filter(ghala=>ghala.calories>=100)
    const category=props.category

    const ghala=props.items

    const listItems=ghala.map(f=> <li key={f.id}>
                                        {f.name}:&nbsp;&nbsp;     
                                        <b>{f.calories}</b></li> 
                                        );
    return (
        <>
        <h3 className="list-cat">{category}</h3>
        <ol className="list-i">{listItems }</ol>
        </>


    );
}

List.PropTypes={
    category:PropTypes.string,
    items:PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number,
                                             name:PropTypes.string,
                                             calories:PropTypes.number
    }))

}
List.defaultProps={
    category:"Category",
    items:[]
}
export default List