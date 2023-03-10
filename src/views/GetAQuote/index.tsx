import GoBackTopBar from "@/components/GoBackTopBar";
import dynamic from "next/dynamic";

const TypeForm = dynamic(() => import("./components/TypeForm"), { ssr: false });

const GetAQuote = () => {
  return (
    <GoBackTopBar>
      <div className="container mt-5 lg:my-[58px] lg:max-w-[1050px]">
        <div>
          <h1 className="mb-16 __title_xl">Get a quote</h1>

          <TypeForm />
        </div>
      </div>
    </GoBackTopBar>
  );
};

export default GetAQuote;
