import Image from "next/image";
import Link from "next/link";
import PrimaryBtn from "../Buttons/PrimaryBtn";

const ProductCardSm = () => {
    return (
        <div className="p-2 rounded-xl border border-slate-300">
        <Image
          src={"/images/slider_medcine.png"}
          width={200}
          height={200}
          className="w-full h-[200px] bg-slate-100 object-cover rounded-md"
        />
        <div className="flex items-center gap-1 ">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.11288 0.686604C7.15068 0.570274 7.31526 0.570273 7.35305 0.686604L8.71654 4.88298C8.73344 4.935 8.78192 4.97023 8.83662 4.97023H13.249C13.3713 4.97023 13.4221 5.12675 13.3232 5.19864L9.75352 7.79215C9.70927 7.8243 9.69075 7.88129 9.70765 7.93332L11.0711 12.1297C11.1089 12.246 10.9758 12.3428 10.8768 12.2709L7.30718 9.67736C7.26293 9.6452 7.203 9.6452 7.15875 9.67736L3.5891 12.2709C3.49014 12.3428 3.357 12.246 3.3948 12.1297L4.75828 7.93332C4.77518 7.88129 4.75667 7.8243 4.71241 7.79215L1.14276 5.19864C1.04381 5.12675 1.09466 4.97023 1.21698 4.97023H5.62931C5.68401 4.97023 5.73249 4.935 5.7494 4.88298L7.11288 0.686604Z"
              fill="#FFB800"
            />
          </svg>

          <p className="text-sm font-semibold pt-2 text-primary">5.0</p>
        </div>
        <Link href="/" className="text-xl font-bold text-slate-700 pt-2 block">Sunscreen Stick 250ml</Link>
        <div className="pt-4 flex items-center justify-between gap-2">
            <div>
                <del className="text-md text-slate-400 ">$60.00</del>
                <span className="text-lg text-slate-700 pl-2">$20.00</span>
            </div>
            <PrimaryBtn link={"/"} icon={true} extraClass={"py-0 px-0 w-10 h-10 flex items-center justify-center rounded-full "}/>
        </div>
      </div>
    );
};

export default ProductCardSm;