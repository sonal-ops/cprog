const App = () =>{
const [products,setProducts] = React.usestate([]);
React.useEffect(()=>{

fetchProducts()
},[])
function fetchProducts(){
    fetch('/api/products')
    .then((res)=>res.json())
    .then(data=>{
        console.log(data);
    });
}

    return (<>
        <ul class="list-group">
  <li className="list-group-item active" aria-current="true">An active item</li>
  <li className="list-group-item"> hewhfo2fiieie</li>
  
</ul>
    </>)
};
ReactDOM.render(<App />,document.getElementById('app'));