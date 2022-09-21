import ShipDet from './ShipDet'
import PayMeth from './PayMeth';
import Cart from './Cart';

const Main:React.FC = () => {
return(
    <div className='mt-12 relative h-full'>
         <div>
            <div className='mt-10 p-4'>
        Shipping and payment
            </div>
            <div className="App flex justify-center flex-row h-full">
      
     <ShipDet/>
     <PayMeth/>
     <Cart/>
     
            </div>
            <div className='absolute bottom-0 left-0 right-0 flex items-center justify-between p-5 '>
        <div className='px-5'>{"<---back"}</div>
        <div>
        <button className="m-4 border-slate-800 border rounded-full p-3 px-10">CONTINUE SHOPPING</button>
        <button className="m-4 border-slate-200 bg-green-400 border rounded-full p-3 px-10">PROCEED TO PAYMENT</button>
        </div>
            </div>
            </div>
    </div>
)
}

export default Main