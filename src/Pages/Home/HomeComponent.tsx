import React from 'react'
import HeaderComponent from '../../Components/Header/HeaderComponent'


const HomeComponent = () => {
    return (
        <>
           <HeaderComponent />

<section className="text-gray-700 body-font overflow-hidden bg-white">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/4 w-full object-cover object-center rounded border border-gray-200" src="https://i.imgur.com/KzHlL9d.jpg" />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 ">BatiKellan</h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            <span className="text-gray-600">Owned by <small className='text-blue-600 cursor-pointer'> 600F9E </small></span>
          </span>
        </div>
        <p className="leading-relaxed">What happens if you mix a dog and a bat? You get BatiKellan, a dog with super-powers. Brother of Naza and Oriana, two legendaries dogs from choco-pablo. Emi leave the drugs.</p>
        <hr className='my-4' />
        <div className="flex justify-center flex-row">
          <span className="title-font font-medium text-2xl text-gray-900 flex justify-center flex-row" > <img className='w-3 mr-2' src="https://storage.opensea.io/files/accae6b6fb3888cbff27a013729c22dc.svg" alt="" /> 6,3 <small className='ml-2'> ($23.776,07) </small> </span> 
          <button className="flex ml-auto text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded">Make Offer</button>
          <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    )
}

export default HomeComponent
