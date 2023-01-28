import React from 'react';
import {Link} from "react-router-dom";
import { allData } from "../../constants";
import cloneDeep from "lodash/cloneDeep";
import throttle from "lodash/throttle";
import Pagination from "rc-pagination";
const CandidatesGrid = () => {
  const countPerPage = 8;
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
          .filter(item => item.profession.toLowerCase().indexOf(query) > -1)
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
    <div class="container text-center mt-10">
      <div class="row row-cols-1 row-cols-md-4 mx-auto">
                {tableData().map(product => {
                    return (
                    <div class="col-sm-8 mt-2">
                        <div class="w-72 border-2 border-blue-600  rounded-3xl shadow-lg py-8  mx-auto" key={product.id}>
                            <img class="w-24 h-24 mx-auto object-cover border-2 border-blue-600 rounded-full" src={product.image}/>
                            <h1 class="text-center text-blue-600 mt-3 text-2xl font-bold">{product.name}</h1>
                            <div className='w-60 mx-auto mt-3'>
                            <div className='flex justify-between px-5 -ml-10'>
                            <p class="text-blue-300 text-xl text-left"><i class="bi bi-geo-alt-fill"></i> {product.country}:</p>
                            <p class="text-blue-300 text-xl">{product.city}</p>
                            </div>
                            <p class="text-left text-blue-300 text-xl ml-2"> <i class="bi bi-telephone-fill"></i> {product.phone}</p>
                            <p class="text-left text-blue-300 text-lg ml-2"> <i class="bi bi-envelope-at-fill"></i> {product.email}</p>
                            <p class="text-left text-blue-300 text-lg font-bold ml-2"> <i class="bi bi-code-slash"></i> {product.job}-developer</p>
                            <div class="d-flex">
                            <p class="text-left text-blue-300 text-xl ml-2"> <i class="bi bi-bar-chart-steps"></i> #{product.status}</p>
                            <p class="text-left text-blue-300 text-xl">#{product.develop}</p>
                            </div></div>
                            <div class="px-5">
                            <Link to={`/products/${product.id}`}><button class="cursor-pointer w-40 h-12 my-2 boder-2 rounded-xl bg-blue-800 text-blue-300 text-xl mt-4 text-center font-bold">Go to profile</button></Link>
                            </div>
                        </div>
                    </div>
                 )})}
                </div>   
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
    )
};



CandidatesGrid.propTypes = {};

CandidatesGrid.defaultProps = {};

export default CandidatesGrid;
