import React, { useEffect } from 'react';
import  { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';
import axios from 'axios'



const Post = () => {
  const editor = useRef(null);
	const [content, setContent] = useState('');

  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
}, []);



  // const dateshow = document.getElementById("ami")
  // const getDate = dateshow.innerText;

  const detailShow = content;
  const detailsHowStr = detailShow.replace(/(<([^>]+)>)/ig,'');

//  date input get
  // const show = document.getElementById("dateCollect")
  // const showDate = show.innerText;
  
  // time input get
  // const sTime = document.getElementById("timeCollect")
  // const showTime = sTime.innerText;
  // console.log(showDate,showTime)
 


  const handleSubmit =  event =>{
   
    event.preventDefault();
    const title = event.target.title.value;
    const section = event.target.section.value;
    const details = detailsHowStr;
    const data = {
      title: title,
      section: section,
      details: details
    }
    // const date = ;
    

    // axios
    //   .post("https://news-hub-server-six.vercel.app/allnews",{
    //     headers:{
    //       'content-type': 'application/json; charset=UTF-8',
    //   }
    //   })
    // .then((res)=> setMassege(res.data))
    // .catch((err)=>{
    //   console.log(err)
    // })
    fetch("https://news-hub-server-six.vercel.app/allnews",{
      method: 'POST',
       headers:{
          'content-type': 'application/json;',
      },
      body:JSON.stringify(data),
  })
  .then(res => res.json())
    
   
    
}

	

    return (
        <React.Fragment>
             <div className='mx-12 border-green-400 mb-12 '>
              <div className="content-wrapper">
                {/* Content Header (Page header) */}
                
                {/* /.content-header */}
                {/* Main content */}
                <section className="content bg-[#778899] pb-5 rounded-sm">
                  <div className="container-fluid">
                  <div className="card card-primary rounded-sm">
                        <div className="card-header">
                            <h3 className=" bg-primary p-4 text-white text-4xl font-extralight">আপলোড নিউজ</h3>
                           
                        </div>
                        {/* /.card-header */}
                        {/* form start */}
                        <form onSubmit={handleSubmit} encType="multipart/form-data">
                            <div className="card-body">
                            <div className="form-group text-left text-[20px] mb-2">
                                <label>নিউজ টাইটেল</label>
                                <input name="title" type="text" className="form-control input input-bordered w-full" id="exampleInputEmail1" placeholder="লিখুন..." />
                            </div>
                            
                            <div class="text-left mb-2">
                              <label className='block'>ক্যাটাগরী</label>
                              <select name="section" class="form-control select w-full text-xl">
                                <option selected="selected" className='bg-primary '>খেলাধুলা</option>
                                <option >বিজ্ঞান ও প্রযুক্তি</option>
                                <option>জাতীয়</option>
                                <option>আন্তর্জাতিক</option>
                              </select>
                            </div>
                            <div className="form-group text-left text-[20px] mb-2">
                                <label>নিউজ ফটো</label>
                                <input filename="image" type="file"
                                className="form-control input input-bordered w-full" id="exampleInputEmail1" placeholder="লিখুন..." />
                            </div>
                            
                            <div className="form-group text-left text-[20px] mt-3">
                                <label>নিউজের বিস্তারিত</label>
                                <JoditEditor
                                  ref={editor}
                                  value={content}
                                  tabIndex={1} // tabIndex of textarea
                                  onChange={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                  />
                            </div>
                            <div className="col-sm-12">
                          <p id="dateCollect">
                              {' '}
                              {dateState.toLocaleDateString('bn-GB', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                              })}
                        </p>
                        <p id="timeCollect">
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
                            <button type="submit" className="btn btn-primary px-12 text-2xl">সাবমিট করুন</button>
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

export default Post;