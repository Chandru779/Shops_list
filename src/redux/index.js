import { combineReducers } from "redux";
import {v4 as uuidv4} from 'uuid'

const ADD_SHOP = 'ADD_SHOP';
const DELETE_SHOP = 'DELETE_SHOP';

export function addShop(shop) {
    console.log(shop)
    return {
      type: 'ADD_SHOP',
      shop,
    }
  }

export function deleteShop(shopId){
    return{
        type:'DELETE_SHOP',
        payload:shopId
    }
}  

  const defaultShop =[{
    shopId:uuidv4(),
    name:"Chandru Handlooms",
    area:"Bangalore",
    category:"Cloths",
    openingDate:"04-13-2021",
    closingDate:"10-09-2022"
  },{
    shopId:uuidv4(),
    name:"Yashoda Handlooms",
    area:"Pune",
    category:"Chemist",
    openingDate:"10-05-2021",
    closingDate:"12-07-2021"
  },{
    shopId:uuidv4(),
    name:"Yashoda Handlooms",
    area:"Nagpur",
    category:"Handlooms",
    openingDate:"11-07-2021",
    closingDate:"12-07-2021"
  }]

 function store(state=defaultShop,action){
     switch(action.type){
         case ADD_SHOP:
             return[
                 ...state,
                 {
                    shopId:uuidv4(),
                     name:action.shop.sname,
                     area:action.shop.area,
                     category:action.shop.category,
                     openingDate:action.shop.openingDate,
                     closingDate:action.shop.closingDate
                     
                
                 }
             ];

          case DELETE_SHOP:
              return state.filter(item =>{
                  return item.shopId !== action.payload
              })
           
        default:
        return state;    
     }

       

 } 

const shopApp = combineReducers({
    store
});

export default shopApp;