import React, { useEffect } from 'react';
import  { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';
import { useParams } from 'react-router-dom';



const UpdateNews = () => {

  const {uId} = useParams();
  const [singlenews, setSinglenews] = useState({});
  useEffect(()=>{
  fetch(`http://localhost:5000/allnews/${uId}`)
  .then(res => res.json())
  .then(data => setSinglenews(data))
},[uId])

  const editor = useRef(null);
	const [content, setContent] = useState('');

  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
}, []);


  // const dateshow = document.getElementById("ami")
  // const getDate = dateshow.innerText;

  const detailShow = content;
  const detailsHowStr = detailShow.replace(/(<([^>]+)>)/ig, '');
 
 
  

  const handleSubmit = event =>{
    event.preventDefault();
    const title = event.target.title.value;
    const section = event.target.section.value;
    const details = detailsHowStr;
    
    
    const news = {title, section, details};
    const url = `http://localhost:5000/allnews/${uId}`;
    fetch(url,{
        method: 'PUT',
         headers:{
            'content-type': 'application/json; charset=UTF-8',
        },
        body:JSON.stringify(news),
    })
    .then(res => res.json())
    .then(data => setSinglenews(data));
    
    
}



    return (
        <React.Fragment>
             <div className='mx-12'>
              <div className="content-wrapper">
                {/* Content Header (Page header) */}
                
                {/* /.content-header */}
                {/* Main content */}
                <section className="content bg-[#778899] pb-5">
                  <div className="container-fluid">
                  <div className="card card-primary rounded-sm">
                        <div className="card-header">
                            <h3 className="p-4 text-white text-4xl font-extralight bg-primary">আপডেট নিউজ</h3>
                        </div>
                        {/* /.card-header */}
                        {/* form start */}
                        <form onSubmit={handleSubmit}>
                            <div className="card-body">
                            <div className="form-group text-left text-[20px] mb-2">
                                <label htmlFor="exampleInputEmail1" >নিউজ টাইটেল</label>
                                <input
                                 id="abc" name="title" 
                                 type="text" 
                                 value={singlenews.title} 
                                 onChange={(e)=> {setSinglenews({title:e.target.value}) }}
                                 className="form-control input input-bordered w-full"
                                 placeholder="লিখুন..." 

                                 />
                            </div>
                            
                            <div class="form-group mb-2 text-left text-[20px]">
                              <label>ক্যাটাগরী</label>
                              <select name="section" class="form-control select  w-full text-xl">
                                <option selected="selected" className='bg-primary '>{singlenews.section}</option>
                                <option >বিজ্ঞান ও প্রযুক্তি</option>
                                <option >খেলাধুলা</option>
                                <option>জাতীয়</option>
                                <option>আন্তর্জাতিক</option>
                              </select>
                            </div>
                            <div className="form-group text-left text-[20px] mb-2">
                                <label htmlFor="exampleInputEmail1" >নিউজ ফটো</label>
                                <input name="image" type="file" className="form-control input input-bordered w-full" id="exampleInputEmail1" placeholder="লিখুন..." />
                            </div>
                            
                            <div className="form-group text-left text-[20px] mt-3">
                                <label htmlFor="exampleInputEmail1" >নিউজের বিস্তারিত</label>
                                <JoditEditor
                                  ref={editor}
                                  value={singlenews.details}
                                  tabIndex={1} // tabIndex of textarea
                                  onChange={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                  />
                            </div>
                           
                            <div className="col-sm-12">
                          <p id="ami">
                              {' '}
                              {dateState.toLocaleDateString('bn-GB', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                              })}
                        </p>
                        <p>
                            {dateState.toLocaleString('bn-US', {
                                hour: 'numeric',
                                minute: 'numeric',
                                hour12: true,
                            })}
                        </p>
                        </div>
                           
                            </div>
                            {/* /.card-body */}
                            <div className="card-footer">
                            <button type="submit" className="btn btn-primary px-12  text-2xl">সাবমিট করুন</button>
                            </div>
                        </form>
                        </div>
                  </div>{/* /.container-fluid */}
                </section>
                {/* /.content */}
              </div>
            </div>
        </React.Fragment>
    );
};

export default UpdateNews;