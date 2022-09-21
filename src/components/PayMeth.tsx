const PayMeth = () => {
    return(
        <div className="flex w-2/6 flex-col p-4 h-full justify-between">
            Payment method
            <div className="flex grid grid-cols-3">
                
                <button className="border focus:border-orange-400 active:bg-gradient-to-r active:from-orange-400 active:via-orange-500 active:to-orange-400 flex justify-center rounded-2xl items-center m-2 p-2 w-full">1</button>
                <button className="border focus:border-orange-400 active:bg-gradient-to-r active:from-orange-400 active:via-orange-500 active:to-orange-400 flex justify-center rounded-2xl items-center m-2 p-2 w-full">1</button>
                <button className="border focus:border-orange-400 active:bg-gradient-to-r active:from-orange-400 active:via-orange-500 active:to-orange-400 flex justify-center rounded-2xl items-center m-2 p-2 w-full">1</button>
                <button className="border focus:border-orange-400 active:bg-gradient-to-r active:from-orange-400 active:via-orange-500 active:to-orange-400 flex justify-center rounded-2xl items-center m-2 p-2 w-full">1</button>
                <button className="border focus:border-orange-400 active:bg-gradient-to-r active:from-orange-400 active:via-orange-500 active:to-orange-400 flex justify-center rounded-2xl items-center m-2 p-2 w-full">1</button>
                <button className="border focus:border-orange-400 active:bg-gradient-to-r active:from-orange-400 active:via-orange-500 active:to-orange-400 flex justify-center rounded-2xl items-center m-2 p-2 w-full">1</button>
            </div>
            Delivery method
            <div className="flex grid grid-cols-2">
           
                <button className="border focus:border-green-400 active:bg-gradient-to-r active:from-green-400 active:via-green-500 active:to-green-400 flex justify-center rounded-2xl items-center m-2 p-2 w-full">1</button>
                <button className="border focus:border-green-400 active:bg-gradient-to-r active:from-green-400 active:via-green-500 active:to-green-400 flex justify-center rounded-2xl items-center m-2 p-2 w-full">1</button>
                <button className="border focus:border-green-400 active:bg-gradient-to-r active:from-green-400 active:via-green-500 active:to-green-400 flex justify-center rounded-2xl items-center m-2 p-2 w-full">1</button>
                <button className="border focus:border-green-400 active:bg-gradient-to-r active:from-green-400 active:via-green-500 active:to-green-400 flex justify-center rounded-2xl items-center m-2 p-2 w-full">1</button>
                
            </div>
        </div>
    )
}

export default PayMeth