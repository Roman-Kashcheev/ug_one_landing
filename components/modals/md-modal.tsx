import { BsFilterSquare } from "react-icons/bs";
import { ChildModal } from "./filters";
import React from "react";
import OrderForm from "../orderform/orderform";
export default function MediumModalItem({ children }: { children: React.ReactNode }) {


    const [open, setOpen] = React.useState(false)
  
  return (
    <div className="relative w-full" data-close="true">
      <div
        data-close="true"
        className="hidden max-md:block bg-main text-white cursor-pointer p-[20px] rounded-full relative w-fit mb-[-30px] z-[30] mx-auto"
      >
      </div>



      <div className="flex flex-col justify-center items-center ml-10 mr-10">
        <header className="flex justify-between text-center text-black w-full flex-row rounded-2xl bg-white mb-5">
          <span className="ml-5 text-[45px] font-bold">Frizar</span>
          <div className="mt-2">
         <button onClick={() => setOpen(true)} className="flex flex-row items-center mr-3 rounded-md border-2 pl-2 pr-2 hover:shadow-xl"><span className="mr-2">Выбрать фильтры</span><BsFilterSquare/></button>
          </div>
        </header>
        
        <ChildModal open={open} setOpen={setOpen}/>

      <div>

      </div>
      <div className="flex justify-center bg-white text-black w-full rounded-2xl p-5">
        {children}
      </div>

      </div>

    </div>
  );
}
