
import { useEffect, useState } from 'react';
import SectionTitle from '../../../Shared/SectionTitle';
import SingleItem from './SingleItem';

const PopularItems = () => {
    const [menu,setMenu] =useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
             const popularItems =data.filter(item =>item.category==='popular')
            setMenu(popularItems) 
            // console.log(popularItems)
        })
    },[])
    return (
        <div>
            <section className='my-24'>
                <SectionTitle subHeading='Check It Out' heading='Popular Items'/>
                 <div className='grid md:grid-cols-2 grid-cols-1 gap-8 my-4'>
                    {
                        menu.map(item =><SingleItem key={item._id} item={item} ></SingleItem>)
                    }
                </div> 
                <div className='flex justify-center my-4'>
                <button className='btn btn-outline border-0 border-b-4 '> VIEW FULL MENU</button>
                </div>

                

            </section>
            {/* Call us section */}

            <div className='bg-black py-20 my-16'>
                <h2 className='font-bold text-4xl text-white text-center'>Call Us : 0188335011*</h2>

            </div>
            
        </div>
    );
};

export default PopularItems;