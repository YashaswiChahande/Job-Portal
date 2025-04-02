import React from 'react'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, } from "@/components/ui/carousel";
import { Link } from 'react-router-dom'
 import companies from '../data/companies.json'


const LandingPage = () => {
  return <main className='flex flex-col gap-10 sm:gap-20 py-10 sm:py-20'>
    <section className="text-center ">
        <h1 className="flex flex-col items-center justify-center gradient-title font-extrabold text-4xl sm:text-6xl lg:text-8xl tracking-tighter py-4">
          Find Your Dream Job
          <span className="flex items-center gap-2 sm:gap-6">
            and get
            <img
              src="/logo.png"
              className="h-14 sm:h-24 lg:h-32"
              alt="Hirrd Logo"
            />
          </span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Explore thousands of job listings or find the perfect candidate
        </p>
      </section>
      {/* buttons */}
    <div className='flex gap-6 justify-center'>
    <Link to="/jobs">
      <Button variant="blue" size="xl">Find job</Button>
    </Link>
    <Link to="/post-job">
      <Button variant="destructive" size="xl">Post a Job</Button>
    </Link>
    </div>
    {/* carousal  */}

    <Carousel
      className="w-full py-10"
    >
      <CarouselContent>
        {companies.map(({name, id, path}) => {
        return (<CarouselItem key={id}>
          <img 
            src={path} 
            alt={name} 
            className='h-9 sm:h-14 object-contain'
            />
        </CarouselItem>)
        })}
      </CarouselContent>
    </Carousel>



    {/* banner */}
    <section>
    {/* cards */}
    </section>
    {/* accordion */}
  </main>
}

export default LandingPage