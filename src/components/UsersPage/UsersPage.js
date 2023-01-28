import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import users from "../../candidates/users.json";


const UsersPage = () => {
  let { id } = useParams();

    const [product, setProduct] = useState('');

    useEffect(() => {
        getProduct();
    }, [id])

    const getProduct = () => {
        const selectProduct = users.productListUsers.find(item => +item.id === +id);
        console.log('selectProduct', selectProduct);
        setProduct(selectProduct);
    };

        return (
        <div className="container text-center mt-3 py-20">
           <div class="w-full ml-20">
            <h1 class="text-blue-800">Candidate</h1>
          <div class="mx-auto w-full">
          <div class="flex justify-center">
                    <div className='w-60 h-44 mt-5 ml-20'>
                        <img className="img w-60 h-48 object-cover" src={product.image}/>
                    </div>
                    <div className='w-full text-left mr-40 text-2xl mt-5 bg-blue-300 text-blue-800'>
                       <div>
                        <h1 class="font-bold p-4">{product.name}</h1>
                        <p class="text-left text-lg font-bold p-4 capitalize -mt-12">{product.status} {product.develop} developer</p>
                       <div class="d-flex text-lg -mt-12 p-4"><p><i class="bi bi-envelope-fill"></i>  {product.email} <i class="bi bi-telephone-fill"></i> {product.phone} <i class="bi bi-geo-alt-fill"></i> {product.country}/{product.city}</p></div>
                       </div>
                    </div>
                    </div>
            </div>
            <div class="flex justify-between mt-5 mx-5">
              <div class="info-left w-full text-left pl-8 text-blue-800">
                <h2>Achievements</h2>
                <ul>
                  <li>{product.achivements}</li>
                </ul><hr/>
                <h2>Education</h2>
                <ul>
                  <li class="text-xl">{product.education}</li>
                </ul><hr/>
                <div class="w-60">
                <h2>Courses</h2>
                <ul>
                  <li class="font-bold">{product.courses}</li>
                  <li class="text-sm">{product.httpcourse}</li>
                </ul></div><hr/>
                <h2>Profile</h2>
                <ul>
                  <li>{product.profile}</li>
                </ul>
              </div>
              
              <div class="info-right w-full pl-8 text-blue-800 text-left">
                <div class="w-60 mx-auto">
                <h2>Personal details</h2>
                <ul class="pl-3">
                  <li class="text-blue-300">Data of birth</li>{product.age} {product.mounth}
                  <li class="text-blue-300">Gender</li>{product.gender}
                  <li class="text-blue-300">Website</li>{product.website}
                  <li class="text-blue-300">Linkedln</li>{product.linledin}
                  <li class="text-blue-300">Github</li>{product.github}
                </ul>
                <hr/>
                <h2>Skills</h2>
                <ul class="pl-3">
                  <li>{product.skills}</li>
                </ul>
                <hr/>
                <h2>Languages</h2>
                <ul class="pl-3">
                  <li>{product.languages}</li>
                </ul>
                <hr/>
                <h2>Qualities</h2>
                <ul class="pl-3">
                  <li>{product.qualities}</li>
                </ul>
                <hr/>
                </div>
                </div>
            </div>
            <div class="mt-5">
              <button className='w-44 h-14 bg-blue-800 border-none rounded-xl text-xl text-blue-300'>Send Message</button>
            </div>
            </div>
            </div>
        )
  };
export default UsersPage;
