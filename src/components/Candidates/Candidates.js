import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import cloneDeep from "lodash/cloneDeep";
import throttle from "lodash/throttle";
import Pagination from "rc-pagination";
import {Link} from "react-router-dom";
import { allData } from "../../constants";
const Candidates = () => {
  const countPerPage = 10;
  const [value, setValue] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [collection, setCollection] = React.useState(
    cloneDeep(allData.slice(0, countPerPage))
  );
  const searchData = React.useRef(
    throttle(val => {
      const query = val.toLowerCase();
      setCurrentPage(1);
      const data = cloneDeep(
        allData
          .filter(item => item.name.toLowerCase().indexOf(query) > -1)
          .slice(0, countPerPage)
      );
      setCollection(data);
    }, 400)
  );
  React.useEffect(() => {
    if (!value) {
      updatePage(1);
    } else {
      searchData.current(value);
    }
  }, [value]);

  const updatePage = p => {
    setCurrentPage(p);
    const to = countPerPage * p;
    const from = to - countPerPage;
    setCollection(cloneDeep(allData.slice(from, to)));
  };
  const tableData = () => {
    return collection.map((allData) => allData);
  };
    return(
      <div className='py-10'><h1 class="text-blue-800">Candidates</h1>
        <div class="w-full mx-auto">
          <div class="w-40 h-20 float-right text-blue-800 mr-32  flex jusify-between">
            <Link to="/candidates"><button className="w-10 h-20"><i class="bi bi-list-task text-5xl"></i></button></Link>
            <Link to="/candidatesgrid"><button className="w-14 h-20"><i class="bi bi-grid-3x3-gap-fill text-4xl ml-3"></i></button></Link>
          </div>
             <div className='w-full h-10 mx-auto '>
              <div class='w-60 h-20  p-4 ml-32 d-flex'>
                <i class="bi bi-search text-2xl text-blue-800 px-3"></i>
                 <input className='outline-none font-bold border-b border-blue-800 text-blue-800' value={value} onChange={e => setValue(e.target.value)}/>
              </div>
            </div>
        </div>
        <div class="w-full mx-auto pt-20">
          <div class="container text-center mt-10 w-full">
            <div class="ml-10 w-full">
              <table class="table-auto w-full text-2xl text-blue-800">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Location</th>
                    <th>Email</th>
                    <th>Statues</th>
                  </tr>
              </thead>
            </table>
                {tableData().map(product => {
                    return (
                      <div class="w-full">
                        <div class="border-2 border-blue-600 rounded-xl shadow-lg py-4 px-3 m-3 mx-auto"key={product.id}>
                          <table class="table-auto">
                            <tbody>
                              <tr>
                                <td> <input id="default-checkbox" type="checkbox" value="" class="w-10 h-10 border-2 text-blue-800 bg-blue-800 border-gray-800 rounded accent-blue-800"/></td>
                                <td><img class="w-14 h-14 mx-auto object-cover border-2 border-blue-600 rounded-xl"src={product.image}/></td>
                                <td><h1 class="text-center text-blue-800 px-8 text-lg font-bold">{product.name}</h1></td>
                                <td><p class="text-left text-blue-800 text-lg font-bold"><i class="bi bi-briefcase-fill"></i> {product.job}-developer</p></td>
                                <td><div className='flex justify-between px-14'>
                                  <p class="text-blue-800 text-lg text-left "><i class="bi bi-geo-alt-fill"></i> {product.country}/</p>
                                  <p class="text-blue-800 text-lg">{product.city}</p>
                                  </div>
                                  </td>
                                  <td> <p class="text-left text-blue-800 text-lg pl-14"> <i class="bi bi-envelope-at-fill"></i> {product.email}</p></td>
                                  <td> <div class="d-flex px-14">
                                  <p class="text-left text-blue-800 text-lg">#{product.status}</p>
                                  <p class="text-left text-blue-800 text-lg">#{product.develop}</p>
                                  </div></td>
                              </tr> 
                            </tbody>
                          </table>
                        </div>
                    </div>
                 )})}
                   <div className="text-xl py-10">
                    <Pagination
                      pageSize={countPerPage}
                      onChange={updatePage}
                      current={currentPage}
                      total={allData.length}
                    />
                  </div>
              </div>    
         </div>            
    </div>
</div>
    )
};

export default Candidates;
