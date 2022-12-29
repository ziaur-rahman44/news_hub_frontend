import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Main = () => {

  const [allnews, setAllnews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allnews')
        .then(res => res.json())
        .then(data => setAllnews(data))
    })


    const handleDelete = id =>{
          const procced = window.confirm("You want to sure delete data?");
          if(procced){
            console.log("deleting user", id);
            const url = `http://localhost:5000/allnews/${id}`;
            fetch(url, {
              method: "DELETE",
              headers:{
                'content-type': 'application/json',
            },
            body:JSON.stringify(allnews),
            })
            .then(res => res.json())
            .then(data => {
              const remaining = allnews.filter(news => news._id !== id);
              setAllnews(remaining);
            })

          }
    }
    return (
       <div className='px-3'>
          <div className="overflow-x-auto">
                    <table className="table  table-compact w-full">
                    <thead >
                        <tr className=''>
                            <th>S.No</th>
                            <th>Section</th>
                            <th>News Title</th>
                            <th>Date</th>
                            <th colSpan="2" className='text-center'>Action</th>
                        </tr>
                    </thead>
                        {
                          allnews.map((news,index)=>{
                            return(
                              <tbody className='text-sm bg-secondary' key={news._id}>
                              <tr className=' hover'>
                                <td>{index + 1}</td>
                                <td>{news.section}</td>
                                <td>{news.title}</td>
                                <td>{news.date}</td>
                                
                               
                                <td className='text-accent text-center'><button ><Link to={`/dashboard/update/${news._id}`}>Edit
                                  {/* {
                                    allnews && <UpdateNews setAllnews={setAllnews} allnews={allnews}></UpdateNews>
                                  } */}
                                </Link></button></td>
                                <td className='text-secondary text-center'><button className='' onClick={()=> handleDelete(news._id)}>Delete</button></td>
                            </tr>
                            </tbody>
                            )
                          })
                        }
                    
                    </table>
                </div>
        </div>

    );
};

export default Main;