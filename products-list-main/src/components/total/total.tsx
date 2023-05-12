import  { useEffect, useState } from "react";


const Total = (props) => {
  let [total, setTotal] = useState(0)
  
  const { items } = props;
  useEffect(() => {
    
    // let total = 0;
    for (let i = 0; i < items.length; i++) {
      setTotal( total + parseFloat(items[i].price)) ;
    }
    
  }, [items])
  
  return (
    <>
      <p className="text">Total Price: {total}</p>
    </>
  );
};

export default Total;
