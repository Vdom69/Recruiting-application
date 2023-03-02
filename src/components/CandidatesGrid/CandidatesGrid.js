import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import { allData } from "../../constants";
import cloneDeep from "lodash/cloneDeep";
import throttle from "lodash/throttle";
import Pagination from "rc-pagination";
import candidatesRepository from "../../storage/CandidatesRepository";
import {debounce} from "react-instantsearch-dom/dist/cjs/lib/debounce";
import Header from "../Header/Header";
const CandidatesGrid = () => {
  const [state, setState] = useState({
    currentPage: 0,
    search: "",
});
const [candidatesPage, setCandidatesPage] = useState(null);

const handleSearchChange = e => {
    setState({
        search: e.target.value,
        currentPage: 0
    })
};
const debouncedSearchChange = debounce(handleSearchChange, 150);

const handlePageChange = page => {
    setState({
        ...state,
        currentPage: page
    })
};

const buildSearchRequest = search => !!search ? {
    name: {
        like: `%${search}%`
    }
} : undefined;

useEffect(() => {
    const fetchCandidatesData = async () => {
        let pagination;
        const whereCondition = buildSearchRequest(state.search);

        if (candidatesPage) {
            candidatesPage.currentPage = state.currentPage
            pagination = await candidatesRepository.findAllBy(candidatesPage, whereCondition)
        } else {
            pagination = await candidatesRepository.findAllByFirstPage(whereCondition)
        }
        setCandidatesPage(pagination);
    }

    fetchCandidatesData().catch(console.error);
}, [state])

    return(
      <div className='ml-32'>
        <div class="f">
        <div className='w-full'>
        <h1 class="text-blue-800 py-10">Candidates</h1>
          <div class="w-40 h-20 float-right text-blue-800 mr-32  flex jusify-between">
            <Link to="/candidates"><button className="w-10 h-20"><i class="bi bi-list-task text-5xl"></i></button></Link>
            <Link to="/candidatesgrid"><button className="w-14 h-20"><i class="bi bi-grid-3x3-gap-fill text-4xl ml-3"></i></button></Link>
            <Link to="/candidatesfilter"><button className="w-14 h-20"><i class="bi bi-funnel-fill text-3xl ml-3"></i></button></Link>
          </div>
          
          <div className='w-full h-10 mx-auto '>
         
            <div class='w-60 h-20  p-4 ml-32 d-flex'>
              <i class="bi bi-search text-2xl text-blue-800 px-3"></i>
              <input className='outline-none font-bold border-b border-blue-800 text-blue-800'  onChange={debouncedSearchChange}/>
            </div>
          </div>
      
    <div class="container text-center mt-20">
      <div class="row row-cols-1 row-cols-md-4  px-32">
                {candidatesPage?.data.map(product => {
                    return (
                      <div class="col-sm-8 mt-2 m-10">
                      <div class="w-72 border-2 border-blue-800 rounded-3xl shadow-lg py-8 mx-auto" key={product?.id}>
                        <div class="mx-auto">
                          {product.image ? (
                            <img
                              class="w-14 h-14 object-cover border-2 border-blue-800 rounded-xl"
                              src={product.image}
                              alt="Not found"
                            />
                          ) : (
                            <img
                              class="w-14 h-14 object-cover border-2 border-blue-800 rounded-xl mx-auto"
                              src="https://via.placeholder.com/48"
                              alt="Not found"
                            />
                          )}
                        </div>
                        <h1 class="text-center text-blue-800 mt-3 text-2xl font-bold overflow-ellipsis">
                          {product.name}
                        </h1>
                        <div class="w-60 mx-auto mt-3">
                          <div class="flex justify-between">
                            <p class="text-blue-800 text-lg font-medium">
                              <i class="bi bi-geo-alt-fill"></i> {product.country}
                            </p>
                            <p class="text-blue-800 text-lg overflow-ellipsis">{product.city}</p>
                          </div>
                          <div class="flex justify-start items-center mt-2">
                            <i class="bi bi-telephone-fill text-blue-800 text-lg mr-2"></i>
                            <p class="text-blue-800 text-lg overflow-ellipsis">{product.number}</p>
                          </div>
                          <div class="flex justify-start items-center mt-2">
                            <i class="bi bi-envelope-at-fill text-blue-800 text-lg mr-2"></i>
                            <p class="text-blue-800 text-lg">{product.email}</p>
                          </div>
                          <div class="flex justify-start items-center mt-2">
                            <i class="bi bi-code-slash text-blue-800 text-lg mr-2"></i>
                            <p class="text-blue-800 text-lg font-medium">
                              {product.job}-developer
                            </p>
                          </div>
                          <div class="flex justify-start items-center mt-2">
                            <i class="bi bi-bar-chart-steps text-blue-800 text-lg mr-2"></i>
                            <p class="text-blue-800 text-lg">{product.status}</p>
                            <p class="text-blue-800 text-lg ml-2">#{product.develop}</p>
                          </div>
                        </div>
                        <div class="px-5">
                          <Link to={`/products/${product.id}`}>
                            <button class="w-full h-12 my-2 border-2 rounded-xl bg-blue-800 text-blue-300 text-lg font-bold">
                              Go to profile
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                    
                 )})}
                 </div>
                   
                  <div className="text-xl py-10">
                    { candidatesPage &&
                  <Pagination
                               pageSize={candidatesPage.pageSize}
                               onChange={handlePageChange}
                               current={candidatesPage.currentPage}
                               total={candidatesPage.totalCount}
                           />
                    }
                  </div>
                  </div>
               </div>
            </div>
          </div>
    )
};



CandidatesGrid.propTypes = {};

CandidatesGrid.defaultProps = {};

export default CandidatesGrid;
