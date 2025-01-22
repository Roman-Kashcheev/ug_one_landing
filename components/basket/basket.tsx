'use client'

import OrderForm from "../orderform/orderform"


export default function Basket() {





    return <div className="flex justify-between flex-row  bg-white mt-10 w-full">
        <div className="flex justify-start">
            <h1 className="text-[50px] text-black ml-5">Корзина</h1>

        </div>

        <div className="flex justify-center ">

        </div>

        <div className="flex justify-end mr-5 rounded-xl border-2 m-2">

            <OrderForm />
        </div>

    </div>
}