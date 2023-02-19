import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className=" styleFooter footer footer-center p-10 bg-base-200 text-base-content rounded">
          <div className="">
              <div className="mb-5">
                <h2 className='text-2xl'>দৈনিক সত্যের সন্ধানে</h2>
            </div> 
            <div>
              <div className="text-sm">
                <h3>প্রকাশকঃ আমিনুর রহমান</h3>
                <h3>সম্পাদকঃ গাজী কাউসার</h3>
                <h3>ঠিকানাঃ পল্লবী রোড, নয়াবাজার, ঢাকা</h3>
                <h3>ইমেইলঃhonesthub@gmail.com</h3>
              </div>
        </div> 
          </div>
        <div>
          <p>Copyright © 2023 - All right reserved by Honest News Hub</p>
        </div>
</footer>
    );
};

export default Footer;