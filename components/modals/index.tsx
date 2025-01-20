"use client";

// import { useStore } from '@tanstack/react-store';
// import { removeLastModal, store } from '@/store';
import { MouseEvent, useEffect } from "react";
import MediumModalItem from "./md-modal";
import * as json from "@/data.json";
import { RootProducts } from "@/types/products";
// import { IoClose } from 'react-icons/io5';

export default function Modals() {
  let data: RootProducts;
  data = json;

  const group2 = json.products[0].group2.map(function (item) {


    return (
      <tr className="text-center">
        <td>{item.article}</td>
        <td>R{item.radius}</td>
        <td>{item["cutter diameter"]}</td>
        <td>{item["shank diameter"]}</td>
        <td>{item["cutting length"]}</td>
        <td>{item["total length"]}</td>
        <td>{item["note"]}</td>
      </tr>
    );
  });

  return (
    <>
      <div
        // onClick={(e) => handlerClickToClose(e)}
        className="bg-[#e21c1c4a] fixed inset-0 z-50 overscroll-contain overflow-y-auto"
      >
        <div
          data-close="true"
          className="h-[101dvh] flex items-center justify-center"
        >
          <MediumModalItem>
            <table className="">
              <thead className="bg-blue-500 ">
                <th>Артикул</th>
                <th>Радиус</th>
                <th>Диаметр фрезы</th>
                <th>Диаметр хвостовика</th>
                <th>Длина реж. части</th>
                <th>Общая длина</th>
                <th>Прим.</th>
              </thead>
              <tbody>{group2}</tbody>
            </table>
          </MediumModalItem>
        </div>
        <div
          data-close="true"
          className=" absolute top-2 right-2 max-md:hidden"
        >
          {/* <IoClose className="pointer-events-none text-secondary" size={40} /> */}
        </div>
      </div>
    </>
  );
}

// const { modals } = useStore(store, (state) => state);

// useEffect(() => {
//   function keyCloseModal(e: KeyboardEvent) {
//     if (e.key === 'Escape') removeLastModal();
//   }
//   document.addEventListener('keyup', keyCloseModal);
//   return () => document.removeEventListener('keyup', keyCloseModal);
// }, []);

// if (!modals.lengtr) return <></>;

// function handlerClickToClose(e: MouseEvent<HTMLDivElement, globaltris.MouseEvent>) {
//   const element = e.target as HTMLDivElement;
//   if (element.getAttribute('data-close') === 'true') removeLastModal();
// }
