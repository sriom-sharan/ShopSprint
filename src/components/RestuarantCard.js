const RestuarantCard = ({title,images,price,brand,id})=>{
    return (
    <div className="w-72 p-4 h-80 bg-white border hover:scale-105 shadow shadow-gray-400 rounded-lg" key={id}>
       <img className="w-full h-3/4 object-contain p-2" src={images[0]} ></img>
       <div className="flex justify-between align-middle">       
         <h4 className="font-medium truncate w-2/3">{title}</h4>
          <p className="text-xs bg-green-600 p-1 px-1.5 rounded-lg text-white ">${price}</p>
          </div>
       <p>{brand}</p>
     
     </div>)
   }     
   export default RestuarantCard;