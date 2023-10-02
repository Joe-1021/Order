import { useEffect, useRef, useState } from 'react'
import './App.css'

const data = [
  {
    "id": 1,
    "name": "珍珠奶茶",
    "description": "香濃奶茶搭配QQ珍珠",
    "price": 50,
    "img":"https://images.unsplash.com/photo-1637273484213-3b41dfbdcf99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=60"
  },
  {
    "id": 2,
    "name": "冬瓜檸檬",
    "description": "清新冬瓜配上新鮮檸檬",
    "price": 45,
    "img":"https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVtb24lMjB0ZWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&q=60"
  },
  {
    "id": 3,
    "name": "翡翠檸檬",
    "description": "綠茶與檸檬的完美結合",
    "price": 55,
    "img":"https://images.unsplash.com/photo-1600453065941-7447f1610151?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM1fHxsZW1vbiUyMHRlYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&q=60"
  },
  {
    "id": 4,
    "name": "四季春茶",
    "description": "香醇四季春茶，回甘無比",
    "price": 45,
    "img":"https://images.unsplash.com/photo-1631682477691-9021a9218860?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYyfHx0ZWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&q=60"
  },
  {
    "id": 5,
    "name": "阿薩姆奶茶",
    "description": "阿薩姆紅茶搭配香醇鮮奶",
    "price": 50,
    "img":"https://images.unsplash.com/photo-1597676345712-ba4536073513?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJ1YmJsZSUyMHRlYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&q=60"
  },
  {
    "id": 6,
    "name": "檸檬冰茶",
    "description": "檸檬與冰茶的清新組合",
    "price": 45,
    "img":"https://plus.unsplash.com/premium_photo-1664392087859-815b337c3324?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGVtb24lMjBpY2UlMjB0ZWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&q=60"
  },
  {
    "id": 7,
    "name": "芒果綠茶",
    "description": "芒果與綠茶的獨特風味",
    "price": 55,
    "img":"https://images.unsplash.com/photo-1525385133512-2f3bdd039054?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9uZ28lMjBqdWljZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&q=60"
  },
  {
    "id": 8,
    "name": "抹茶拿鐵",
    "description": "抹茶與鮮奶的絕配",
    "price": 60,
    "img":"https://images.unsplash.com/photo-1575487426366-079595af2247?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWF0Y2hhJTIwbGF0dGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&q=60"
  }
]


// component start
function Menus({menus,modalRef,setModalData}){
  return(
      <div className="list-group">
        {menus.map((menu)=>{
          return(
            <a href="#" className="list-group-item list-group-item-action" key={menu.id} onClick={(e)=>{
              e.preventDefault();
              setModalData(menu)
              const myModal = new bootstrap.Modal(modalRef.current);
              myModal.show()
            }}>
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{menu.name}</h5>
                <small>${menu.price}</small>
              </div>
              <p className="mb-1">{menu.description}</p>
            </a>
          )
        })}
        
      </div>
  )
}

function Modal ({modalData,modalRef,addCart}){
  return(
    <div className="modal" tabIndex="-1" ref={modalRef}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">是否加入購物車?</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <div className="d-flex">
                    <img className='w-25 me-3' src={modalData.img} alt="" />
                    <div className="d-flex flex-column justify-content-between">
                        <div>
                            <h5>品項:【{modalData.name}】</h5>
                            <h6>{modalData.description}</h6>
                        </div>
                        
                        <p className='mb-0'>建議售價:$ {modalData.price}</p>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>addCart(modalData)}>加入購物車</button>
                </div>
              </div>
            </div>
          </div>
  )
}

function Cart ({cartData,updateCartData,deleteCartData,total,setMessage,deleteAllCart,createOrder}){
  return(
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" width="50"></th>
            <th scope="col">品項</th>
            <th scope="col">描述</th>
            <th scope="col" width="90">數量</th>
            <th scope="col">單價</th>
            <th scope="col">小計</th>
          </tr>
        </thead>
        <tbody>
          {cartData.map((data)=>{
            return(
              <tr className='align-middle' key={data.id}>
                <td><button type="button" className="btn btn-sm" onClick={(e)=>deleteCartData(data)}><i class="fa-solid fa-trash"></i></button></td>
                <td>{data.name}</td>
                <td><small>{data.description}</small></td>
                <td>
                  <select className="form-select" value={data.qty} onChange={(e)=>updateCartData(e,data)}>
                    {[...Array(data.qty >=10 ? data.qty % 10 ? data.qty + 10 - (data.qty % 10): data.qty + 10 : 10).keys()].map((i)=>{
                      return(
                        <option value={i+1} key={i}>{i+1}</option>
                      )
                    })}
                  </select>
                </td>
                <td>{data.price}</td>
                <td>{data.price * data.qty}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      {cartData.length?(
        <div>
          <div className="text-end mb-3">
            <h5>總計: <span>${total}</span></h5>
          </div>
          <textarea
            className="form-control mb-3"
            rows="3"
            placeholder="備註"
            onChange={(e)=>setMessage(e.target.value)}
          ></textarea>
          <div className="text-end">
            <button className="btn btn-outline-secondary mx-3" onClick={deleteAllCart}>清空購物車</button>
            <button className="btn btn-primary" onClick={()=>{createOrder()}}>送出</button>
          </div>
        </div>
      ):(
        <div className='alert text-center' role="alert">
          請選擇商品
        </div>
      )}
      
    </div>
  )
}

function Order({order}){
  return(
    <div>
      {order.length?(
        <div>
          {order.map((order)=>{
            return(
              <div className="card my-2" key={order.id}>
                <div className="card-body">
                  <div className="card-title">
                    <h5>訂單編號 {order.id}</h5>
                    <div>備註: <span>{order.message? order.message:'無'}</span></div>
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">品項</th>
                          <th scope="col">單價</th>
                          <th scope="col">數量</th>
                          <th scope="col">小計</th>
                        </tr>
                      </thead>
                      <tbody>
                        {order.cartData.map((i)=>{
                          return(
                            <tr key={i.id}>
                              <td>{i.name}</td>
                              <td>{i.price}</td>
                              <td>{i.qty}</td>
                              <td>{i.price * i.qty}</td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                    <div className="text-end">
                      <h5>總計: <span>${order.total}</span></h5>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div> 
     ):(
        <div className="alert alert-secondary text-center" role='alert'>
            尚未建立訂單!
        </div>
      )}
    </div>
  )
}


function App() {
const [menus] = useState(data);
const modalRef = useRef(null);  
//const myModal = useRef(null);
const [modalData,setModalData] = useState({});
const [cartData,setCartData] = useState([]);
const [total , setTotal]= useState(0);
const [message,setMessage]=useState('');
const [order,setOrder] = useState([]);  

useEffect(()=>{
  const total = cartData.reduce((acc,cur)=>{
    return acc + cur.price*cur.qty 
  },0)
  setTotal(total)
},[cartData])

  function addCart(modalData){
    const index = cartData.findIndex((i)=>i.id === modalData.id);
    if(index === -1){
      setCartData([...cartData,{...modalData,qty:1}])
    }else{
      setCartData(cartData.map((newItem)=>newItem.id === modalData.id ?{...newItem,qty:newItem.qty +1}:newItem))
    }
  }

  function updateCartData(e,data){
    const qty = e.target.value;
    setCartData(cartData.map((newItem)=>newItem.id === data.id ? {...newItem,qty:Number(qty)}:newItem))
  }

  function deleteCartData(data){
    const newCartData = cartData.filter((i)=>{
      return (i.id !== data.id)
    })
    setCartData(newCartData)
  }

  function deleteAllCart(){
    setCartData([]);
  }

  function createOrder(){
    setOrder([...order,{
      id:new Date().getTime(),
      cartData,
      message,
      total
    }]);  
    deleteAllCart();
    setMessage('');
  }



  return (
      <>
         <div className="container mt-5">
            <div className="row">
              <div className="col-md-4">
                <Menus menus={menus} modalRef={modalRef} setModalData={setModalData} />
              </div>
              <div className="col-md-8">
                <Cart cartData={cartData} updateCartData={updateCartData} deleteCartData={deleteCartData} total={total} setMessage={setMessage} deleteAllCart={deleteAllCart} createOrder={createOrder}/>
              </div>  
                
            </div>
            <hr />
            <div className="row justify-content-center">
              <div className="col-16 col-md-8">
                <div className="scroll">
                  <Order order={order}/>
                </div>
                
              </div>
            </div>
          </div>
          {/* Modal */}
          <Modal modalData={modalData} modalRef={modalRef} addCart={addCart}/>
      </>  
  )
}

export default App
