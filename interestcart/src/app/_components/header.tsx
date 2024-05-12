export default function Header() {
    return (
        <div className="w-full flex-col justify-start px-5 pr-10 mt-3">
            <div className="text-xs	flex justify-end gap-6">
                <div className="cursor-pointer">
                    Help
                </div>
                <div className="cursor-pointer">
                    Orders & Returns
                </div>
                <div className="cursor-pointer">
                    Hi, John
                </div>
            </div>
            <div className=" flex justify-between mt-2 mb-6">
                <div className="text-3xl font-bold">
                    ECOMMERCE
                </div>
                <div className="flex gap-6 grow justify-center font-semibold items-end pr-14">
                    <a href="#">Categories</a>
                    <a href="#">Sale</a>
                    <a href="#">Clearance</a>
                    <a href="#">New stock</a>
                    <a href="#">Trending</a>
                </div>
                <div className="flex gap-12 items-end ">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="flex justify-center text-sm font-semibold items-center gap-4 mt-4 bg-slate-100">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>

                </div>
                <div className="text-sm">
                    Get 10% off on business sign up
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>

                </div>
            </div>
        </div>
    );
}
