import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { addShop } from '../../redux/index';
import {useDispatch,useSelector} from 'react-redux';
import './home.css'

function Home(){

    const[shopName,setShopName] = useState({
        sname:'',
        area:'',
        category:'',
        openingDate:'',
        closingDate:''
    });

    const handleChange = (e)=>{
        setShopName({
            ...shopName,
            [e.target.name]:e.target.value

        })
    }

    const shops = useSelector(state => state.shops);
    const dispatch = useDispatch();


    const handleSubmit = event =>{
        event.preventDefault();
        dispatch(addShop(shopName))
        setShopName({
        sname:'',
        area:'',
        category:'',
        openingDate:'',
        closingDate:''
        })
       
        
    };

    console.log(shopName)

    return(
            <div className="container">
                <form onSubmit={handleSubmit} className="container_inner">
                    <label >Shop Name:</label>
                    <input type="text" className="shopname"
                    id="shopname" 
                    placeholder="Shop Name" 
                    required 
                    name="sname"
                    value={shopName.sname}
                    onChange={handleChange} 
                    />
                    <label>Area of shop:</label>
                    <select id="shoparea" className="area"
                     value={shopName.area}
                     onChange={handleChange} 
                     name="area" >
                    <option value="Bangalore">Bangalore</option>
                    <option value="Pune">Pune</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Nashik">Nashik</option>
                    <option value="Nagpur">Nagpur</option>
                    <option value="Ahmedapur">Ahmedapur</option>
                    <option value="saolapur">saolapur</option>
                    </select>

                    <label>Category of Shop:</label>
                    <select id="category" className="category"
                     value={shopName.category}
                     onChange={handleChange} 
                     name="category" >
                    <option value="Grocery">Grocery</option>
                    <option value="Butcher">Butcher</option>
                    <option value="Baker">Baker</option>
                    <option value="Chemist">Chemist</option>
                    <option value="Stationary">Stationary</option>
                    <option value="Cloths">Cloths</option>
                    <option value="Handlooms">handlooms</option>
                    </select>

                    <label>Opening Date:</label>
                    <input type="Date" className="openingdate"
                    id="openingDate" 
                    required 
                    name="openingDate"
                    value={shopName.openingDate }
                    onChange={handleChange} 
                    />

                    <label>Closing Date:</label>
                    <input type="Date" className="closingdate"
                    id="closingDate" 
                    required 
                    name="closingDate"
                    value={shopName.closingDate}
                    onChange={handleChange} 
                    />

                    <button type="submit" className="addShop">Add Shop</button>

                    <Link to='/shoplist'><button className="listShops">List Of Shops</button></Link>
                </form>
            </div>
    );
}

export default Home