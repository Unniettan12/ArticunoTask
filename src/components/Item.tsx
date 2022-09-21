interface Props {
    iName : string;
    iNum : number;
    iPrice : number
}

const Item: React.FC<Props> = ({iName,iNum,iPrice}) => {
    return(
        <div className="flex justify-between flex-row items-center border p-5 m-4">
           <div className="flex flex-col">
                <p>{iName}</p> 
                <p className="text-gray-400">#{iNum}</p>
           </div>
           <div>
               ${iPrice}
           </div>
        </div>
    )
}

export default Item