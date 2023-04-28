import CollapsibleRenderer from "@/components/CollapsibleRenderer";
import GoBackTopBar from "@/components/GoBackTopBar";
import { services } from "@/config/constants";

const Services = () => {
  return (
    <GoBackTopBar>
      <div className="container_md">
        <div>
          <h1 className="__title_xl">Services</h1>

          <div className="mt-[30px]">
            <CollapsibleRenderer
              defaultActiveIndex={0}
              collapsibles={services}
            />
          </div>
        </div>
      </div>
    </GoBackTopBar>
  );
};

export default Services;
