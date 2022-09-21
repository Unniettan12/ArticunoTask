import { useEffect, useState } from "react"
import data from "../items.json"
import Item from "./Item"



const Cart:React.FC = () => {


    const [total,setTotal] = useState(0)

    const itemList = data.map((obj)=> {

        return(
            <div className="w-full">
                <Item iName={obj.iName} iNum={obj.iNum} iPrice={obj.iPrice}/>

            </div>
        )
    })

    useEffect(()=> {
        let sum=0
        
        setTotal(data.reduce((sum,value)=>sum+value.iPrice, sum))
    }, [data])
      

   return(
    <div className="flex w-1/6  flex flex-col justify-center items-center p-4">
        <div className="text-left w-full px-4">Your Cart</div>
        <div className="m-5 py-2 w-full mt-0">
            {itemList}
            </div>
        <div className="border rounded-full bg-gray-300 w-full p-3 text-center">
            Total cost ${total}
        </div>
        <div className="p-4 text-center">
            {3000-total>0?(
                <div>
                    You are ${3000-total} away from free shipping!
                </div>
            ):(
                <div>
                    Congratulaions! You have earned free shipping!
                </div>
            )}
        </div>
    </div>
)
}


export default Cart