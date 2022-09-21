import useField from "../hooks/useField"

const ShipDet:React.FC = () => {
    
    const email = useField('email')
    const address = useField('text')
    const fName = useField("text")
    const city = useField("text")
    const lName = useField("text") 
    const zip = useField("text")
    const pNum = useField("number")
    
    return(
    <div className="flex w-3/6 flex-col p-2">
        <div className="p-2">Shipping information</div>
        <form className="flex grid grid-cols-2 w-full h-full p-4">
            <input className="flex m-2 border rounded-full p-2" {...email} placeholder="E-mail"/>
            <input className="flex m-2 border rounded-full p-2" {...address} placeholder="Address"/>
            <input className="flex m-2 border rounded-full p-2" {...fName} placeholder="First name"/>
            <input className="flex m-2 border rounded-full p-2" {...city} placeholder="City"/>
            <input className="flex m-2 border rounded-full p-2" {...lName} placeholder="Last name"/>
            <input className="flex m-2 border rounded-full p-2" {...zip} placeholder="Postal Code/ZIP"/>
            <input className="flex m-2 border rounded-full p-2" {...pNum} placeholder="Phone number"/>
            <select className="flex m-2 border rounded-full p-2" name="Country">
                <option>1</option>
                <option>2</option>
            </select>
            
        </form>
    </div>
    )
}

export default ShipDet