import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from "rc-pagination";
import {Link} from "react-router-dom";
import candidatesRepository from "../../storage/CandidatesRepository";
import DateElements from "../DateElements/DateElements";
import TableCandidatesFilters from "../TableCandidatesFilters/TableCandidatesFilters";
import {debounce} from "react-instantsearch-dom/dist/cjs/lib/debounce";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import AdvancedFilters from "../AdvancedFilters/AdvancedFilters";

const Candidates = ({ name, ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
        <div className='w-full'>
          <h1 class="text-blue-800 py-10">Candidates</h1>
          <div class="w-40 h-20 float-right text-blue-800 mr-32  flex jusify-between">
            <Link to="/candidates"><button className="w-10 h-20"><i class="bi bi-list-task text-4xl"></i></button></Link>
            <Link to="/candidatesgrid"><button className="w-14 h-20"><i class="bi bi-grid-3x3-gap-fill text-3xl ml-3"></i></button></Link>
            <Link to="/candidatesfilter"><button  onClick={handleShow}  className="w-14 h-20"><i class="bi bi-funnel-fill text-3xl ml-3"></i></button></Link>
          </div>
          <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <AdvancedFilters/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
    
             <div className=' h-10 mx-auto '>
              <div class='w-60 h-20  p-4 ml-32 d-flex'>
                <i class="bi bi-search text-2xl text-blue-800 px-3"></i>
                 <input className='outline-none font-bold border-b border-blue-800 text-blue-800' onChange={debouncedSearchChange}/>
              </div>
            </div>
            <div className='mt-20'><TableCandidatesFilters/></div>
          <div class="container text-center mt-20">
            <div class=" mx-auto w-full ">
              <table class="table-auto w-full text-xl text-blue-800 mr-14 font-bold">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Location</th>
                    <th>Email</th>
                    <th>Links</th>
                    <th>Statues</th>
                  </tr>
              </thead>
            </table>
                {candidatesPage?.data.map(product => {
                    return (
                      <div class="w-full px-20 mt-10">
                        <div class="border-2 border-blue-600 rounded-xl shadow-lg py-4 px-3 m-3 mx-auto" key={product?.id}>
                          <table class="table-auto">
                            <tbody>
                              <tr>
                                <td> <input id="default-checkbox" type="checkbox" value="" class="w-10 h-10 border-2 text-blue-800 bg-blue-800 border-gray-800 rounded accent-blue-800"/></td>
                                <td>
                                    {
                                        product.image
                                            ? <img className="w-14 h-14 mx-auto object-cover border-2 border-blue-600 rounded-xl" src={product.image} alt="Not found"/>
                                            : <img className="w-14 h-14 mx-auto object-cover border-2 border-blue-600 rounded-xl" src="https://via.placeholder.com/48" alt="Not found"/>
                                    }
                                </td>
                                <td><h1 class="text-center text-blue-800 px-8 text-xl font-bold cursor-pointer mt-3">{product.name}</h1></td>
                                <td><p class="text-left text-blue-800 text-lg font-bold cursor-pointer mt-4 pl-3"><i class="bi bi-briefcase-fill"></i> {product.job}-developer</p></td>
                                <td>
                                <div class="d-flex cursor-pointer mt-4 pl-2"> 
                                  <p class="text-blue-800 text-lg text-left cursor-pointer pl-2"title="Country" data-toggle="tooltip" data-placement="top" aria-hidden="true" onclick="doSomething(event)"><i class="bi bi-geo-alt-fill"></i> {product.country}/</p>
                                  <p class="text-blue-800 text-lg cursor-pointer"title="City" data-toggle="tooltip" data-placement="top" aria-hidden="true" onclick="doSomething(event)">{product.city}</p>
                                 </div>
                                  </td>
                                  <td><p class="text-left text-blue-800 text-lg mt-4 pl-16 cursor-pointer"title="email" data-toggle="tooltip" data-placement="top" aria-hidden="true" onclick="doSomething(event)"> <i class="bi bi-envelope-at-fill"></i> {product.email}</p></td>
                                  <div class="d-flex px-2 cursor-pointer mt-4"> 
                                  <td><p class="text-left text-blue-800 text-xl cursor-pointer" title="link" data-toggle="tooltip" data-placement="top" aria-hidden="true" onclick="doSomething(event)"><i class="bi bi-link-45deg"></i></p></td>
                                  <td><p class="text-left text-blue-800 text-xl cursor-pointer" title="link" data-toggle="tooltip" data-placement="top" aria-hidden="true" onclick="doSomething(event)"><i class="bi bi-linkedin"></i></p></td>
                                  <td><p class="text-left text-blue-800 text-xl cursor-pointer" title="link" data-toggle="tooltip" data-placement="top" aria-hidden="true" onclick="doSomething(event)"><i class="bi bi-calendar2-event"></i></p></td>
                                  <td><p class="text-left text-blue-800 text-xl cursor-pointer" title="link" data-toggle="tooltip" data-placement="top" aria-hidden="true" onclick="doSomething(event)"><i class="bi bi-github"></i></p></td>
                                  <td><p class="text-left text-blue-800 text-xl cursor-pointer" title="link" data-toggle="tooltip" data-placement="top" aria-hidden="true" onclick="doSomething(event)"><i class="bi bi-x-circle"></i></p></td>
                                  </div>
                                  <td> <div class="d-flex px-14 cursor-pointer mt-4">
                                  <p class="text-left text-blue-800 text-lg cursor-pointer"title="status" data-toggle="tooltip" data-placement="top" aria-hidden="true" onclick="doSomething(event)">#junior#react{product.status}</p>
                                  <p class="text-left text-blue-800 text-lg cursor-pointer"title="job" data-toggle="tooltip" data-placement="top" aria-hidden="true" onclick="doSomething(event)">#{product.develop}</p>
                                  </div></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                    </div>
                 )})}
                  </div>
                   <div className="text-xl py-10">
                       {
                           candidatesPage &&
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
    
    )
};

export default Candidates;
