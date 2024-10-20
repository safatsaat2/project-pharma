
import PrimaryBtn from "../../Buttons/PrimaryBtn";
import BorderBtn from "../../Buttons/BorderBtn";
import Image from "next/image";


const Items1 = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row gap-4 justify-between max-w-[1280px] mx-auto items-center py-10 md:py-0 md:pt-5 ">
        <div>
          <h3 className="text-xl text-center md:text-start md:text-2xl lg:text-5xl text-primary font-semibold">
            Improving Health With <br />
            <div className="font-bold text-center mx-auto md:mx-0 md:text-start bg-primary text-white px-2 rounded-md flex   w-fit mt-5 pb-2">
              Best Medicine
            </div>
          </h3>
          <p className="text-sm md:text-md lg:text-lg text-center md:text-start text-primary/8 font-normal mt-6 w-full md:w-3/4">
            Transforming Health and Wellness with Premium Medicines, Backed by
            Expertise and Care for a Better Future
          </p>
          <div className="flex items-center justify-center md:justify-start gap-4 mt-6">
            <PrimaryBtn link={'/'}
              extraClass={"flex items-center gap-2"}
              label={"Shop Now"}
              icon={true}
            />
            <BorderBtn link={'/'} label={"Top Products"}/>
          </div>
        </div>
        <div>
          <Image width={400} height={600} src="/images/slider_medcine.png" />
        </div>
      </div>
    );
};

export default Items1;