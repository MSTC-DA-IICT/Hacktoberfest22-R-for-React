import React from 'react'
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { SiFacebook, SiInstagram, SiWhatsapp} from 'react-icons/si';

function Footer() {
  return (
    // <!-- component --
    <footer class="relative bg-slate-900 py-8">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap text-left lg:text-left">
          <div class="w-full lg:w-6/12 px-4">
            <h4 class="text-3xl fonat-semibold text-slate-100">Let's keep in touch!</h4>
            <h5 class="text-lg mt-0 mb-2 text-slate-200">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div class="mt-6 lg:mb-0 mb-6 flex space-x-3 items-center">
              <a href="/"> <SiWhatsapp class="h-8 w-8 m-1 text-slate-300 hover:text-white" /></a> 
              <a href="/"> <SiInstagram class="h-8 w-8 m-1 text-slate-300 hover:text-white" /></a>
              <a href="/"> <SiFacebook class="h-8 w-8 m-1 text-slate-300 hover:text-white" /></a>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="flex flex-wrap items-top mb-6">
              <div class="w-full lg:w-4/12 lg:px-4 ml-auto">
                <span class="block uppercase text-slate-200 text-xl font-semibold mb-2">Useful Links</span>
                <ul class="list-unstyled">
                  <li>
                    <a class="text-slate-300 hover:text-white font-semibold block pb-2 text-lg" href="/about">About Us</a>
                  </li>
                  <li>
                    <a class="text-slate-300 hover:text-white font-semibold block pb-2 text-lg" href="/product">Product</a>
                  </li>
                  <li>
                    <a class="text-slate-300 hover:text-white font-semibold block pb-2 text-lg" href="/profile">Profile</a>
                  </li>
                  <li>
                    <a class="text-slate-300 hover:text-white font-semibold block pb-2 text-lg" href="/login">Login</a>
                  </li>
                </ul>
              </div>
              <div class="w-full lg:w-4/12 lg:px-4 ml-auto">
                <span class="block uppercase text-slate-200 text-xl font-semibold mb-2">CONTACT US</span>
                <div>
                  <span class="text-slate-200 text-lg font-semibold my-2">Address : </span>
                  <div class="text-slate-300 text-sm font-semibold">
                    Shop No 11, Shopify Complex, Reliance Cross Rood, Gandhinagar
                  </div>
                  
                  <span class="block text-slate-200 text-lg font-semibold mt-2">Phone : </span>
                  <div class="text-slate-300 text-sm font-semibold">
                    +91-87XXX-XXXXX,<br /> +91-987XX-XXXX
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr class="my-4 border-slate-200" />
        <div class="flex flex-wrap items-center md:justify-between justify-center">
          <div class="w-full md:w-4/12 px-4 mx-auto text-center">
            <div class="flex items-center space-x-1 text-sm text-slate-200 font-semibold py-1">
              <span>All Right Reserved | Copyright </span> <AiOutlineCopyrightCircle /> <span id="get-current-year">2022</span>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer