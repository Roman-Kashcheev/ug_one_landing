"use client";

// import { useStore } from '@tanstack/react-store';
// import { removeLastModal, store } from '@/store';
import { MouseEvent, useEffect } from "react";
import MediumModalItem from "./md-modal";
import * as json from "@/data.json";
import { RootProducts } from "@/types/products";
// import { IoClose } from 'react-icons/io5';
import { SlBasket } from "react-icons/sl";
import { MdFavoriteBorder } from "react-icons/md";
// import NestedModal from "./filters";
import React from "react";
import { ChildModal } from "./filters";
import OrderForm from "../orderform/orderform";
import Basket from "../basket/basket";

export default function Modals() {
  let data: RootProducts;
  data = json;

  return (
    <>
      <div
        // onClick={(e) => handlerClickToClose(e)}
        className="bg-gray-500 fixed inset-0 z-50  overflow-y-scroll"
      >
        <div
          data-close="divue"
          className="mt-5 flex items-center justify-center"
        >
          <MediumModalItem>
            <div className="flex flex-col items-center justify-between w-full">
              <div className="flex flex-row items-center justify-between bg-gray-50 w-full rounded-2xl hover:shadow-xl border-gray-100 p-3 mb-3">
                <div className="flex flex-col items-center">
                  <span className="text-[14px] mb-1">SEME7214050E</span>
                  <span className="bg-red-500 w-[30px] h-[30px] flex items-center justify-center">
                    K
                  </span>
                </div>

                <div className=" mr-1 ml-1">
                  <img
                    className="w-[110px] h-[80px]"
                    src="https://foni.papik.pro/uploads/posts/2024-10/foni-papik-pro-hfb9-p-kartinki-freza-na-prozrachnom-fone-14.png"
                    alt=""
                  />
                </div>

                <div>
                  <div className="text-black font-bold text-[22px] mr-5">
                    Стальные корпуса ZRC SERIES для радиусных пластин с
                    цилиндрической шейкой
                  </div>

                  <div className="text-[17px] items-center flex justify-start">
                    <span className="mr-2">
                      Диаметр фрезы D<sub>1</sub> <strong>:</strong> 5.0,
                    </span>
                    <span className="mr-2">
                      Диаметр хвостовика D<sub>2</sub> <strong>:</strong> 5.0,
                    </span>
                    <span className="mr-2">
                      Длина реж. части L<sub>1</sub> <strong>:</strong> 40,
                    </span>
                    <span className="mr-2">
                      Общая длина L<sub>2</sub> <strong>:</strong> 100,
                    </span>
                  </div>
                </div>

                <div className="text-black text-[25px] mr-5">19263 &#8381;</div>

                <div className=" bg-gray-200 flex flex-row rounded-2xl mr-1 ml-1 pl-3 pr-3">
                  <form
                    action=""
                    className="flex flex-row justify-between text-black text-[25px] w-[30px] mr-5"
                  >
                    <button className="text-blue-600 font-bold mr-1">
                      <strong>+</strong>
                    </button>
                    <input className="w-[8px]" disabled type="text" />
                    {0}
                    <button className="text-blue-600 font-bold ml-2">
                      <strong>-</strong>
                    </button>
                  </form>
                </div>

                <div className="text-black text-[16px] ml-5 mr-5">
                  {200} шт.
                </div>

                <div className="flex flex-row">
                  <button className="text-black text-[25px] mr-7 hover:text-blue-600">
                    <SlBasket />
                  </button>
                  <button className="text-black text-[25px] mr-5 hover:text-red-600">
                    <MdFavoriteBorder />
                  </button>
                </div>
              </div>
            </div>
          </MediumModalItem>
        </div>
        <Basket/>
      </div>
    </>
  );
}

{
  /* <table className="mb-5">
	<thead className="bg-blue-500">
	  <th>Артикул</th>
	  <th>Радиус
		<div>R</div>
	  </th>
	  <th>Диаметр фрезы
		<div>D<sub>1</sub></div>
	  </th>
	  <th>Диаметр хвостовика
		<div>D<sub>2</sub></div>
	  </th>
	  <th>Длина реж. части
		<div>L<sub>1</sub></div>
	  </th>
	  <th>Общая длина
		<div>L<sub>2</sub></div>
	  </th>
	  <th>Прим.</th>
	</thead>
	<tbody className="">{group2}</tbody>
  </table> */
}

{
  /* <div>
  <div className="flex justify-end mr-[85px]">
	<p className="mr-4">1 - подходит отлично</p>
	<p className="mr-4">2 - подходит отлично</p>
	<p>3 - подходит плохо</p>
  </div>
  <table>
  
	<thead>
	  <th className="bg-gray-400">ISO</th>
	  <th className="bg-blue-500">P</th>
	  <th className="bg-yellow-300">M</th>
	  <th className="bg-red-600">K</th>
	</thead>
  
	<thead className="">
  
	  <th className="bg-gray-400">Материал</th>
	  <div className="flex flex-row">
  
  
		<div className="flex flex-row">
		  <th className="bg-gray-400">Нелегированная сталь</th>
		  <th className="bg-gray-400">Низколегирован. сталь</th>
		  <th className="bg-gray-400">Высоколегир. сталь</th>
  
		</div>
  
		<div className="flex flex-row">
		  <th className="bg-yellow-300">Нержавеющая сталь</th>
		</div>
  
	  </div>
	</thead>
  
  </table> */
}

{
  /* <div className="flex flex-col justify-center">
  
  <div>
	<table className="mb-5">
	  <thead className="bg-blue-500">
		<th className="text-white">Артикул</th>
		<th className="text-white">Радиус <br /> R
		</th>
		<th className="text-white">Диаметр фрезы <br />  D<sub>1</sub>
		</th>
		<th className="text-white">Диаметр хвостовика <br />  D<sub>2</sub>
		</th>
		<th className="text-white">Длина реж. части <br />  L<sub>1</sub>
		</th>
		<th className="text-white">Общая длина <br />  L<sub>2</sub>
		</th>
		<th className="text-white">Прим.</th>
	  </thead>
	  <tbody>{}</tbody>
	</table>
  </div>
  
  </div> */
}
