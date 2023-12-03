import {BsMinecart} from "react-icons/bs";
export const CartWidget = ({contextoNavBar}) => {
  
  return <div className="align-self-end cartIcon" onClick={()=>contextoNavBar("showCart")}>
    <BsMinecart size={"40px"} title="cart"/>
    <p>666</p>
  </div>
}