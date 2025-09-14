import './Store'
import Forms from './Forms'
import Account from './Account'
// import CounterUseReducer from './CounterUseReducer'

// import Form from './Form'
// import './App.css';
// import Table from './Table'
// import {getData,deleteData} from './api'
// import {useEffect,useState} from 'react'
// function App() {
//     const [products,setProducts]=useState([])
//     const [openForm,setOpenForm]=useState(false)
//     useState({
//       name:'',
//       price:'',


//     })
//     useEffect(()=>{
        
//     },[])
//     let getProducts=async ()=>{
//         let res=await getData()
//         setProducts(res.data)
//     }
//      let deleteProducts=async (id)=>{
//         let res=await deleteData(id)
//         getProducts()
//     }
//     let showForm=()=>{
//       setOpenForm(true)
//     }
//     let closeForm=()=>{
//       setOpenForm(false)
//     }
//  return(
//     <div className="wrapper m-5 w-50">
//        <h2 className="text-primary">CRUD Operations</h2> 
//        <button className="btn btn-primary" onClick={()=>{
//          showForm() 
//        }}>Add Product</button>
//        <Table products={products} delete={deleteProducts}></Table>
//        {
//          openForm &&<Form closeForm={closeForm}></Form>
//        }
//     </div>
//  )
// }

// export default App;

function App()
{
   return(
      <>
      {/* <CounterUseReducer></CounterUseReducer> */}
     <Forms>

     </Forms>
     <Account></Account>
     
      </>
   )
}
export default App
