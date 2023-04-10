import CollapsibleRenderer from "@/components/CollapsibleRenderer";
import GoBackTopBar from "@/components/GoBackTopBar";
import { termsAndConditions } from "@/config/constants";

const TermsAndConditions = () => {
  return (
    <GoBackTopBar>
      <div className="container_md">
        <div>
          <h1 className="__title_xl">Terms and Conditions</h1>

          <div className="mt-[30px]">
            <CollapsibleRenderer
              collapsibles={termsAndConditions}
              defaultActiveIndex={0}
            />
          </div>
        </div>
      </div>
    </GoBackTopBar>
  );
};

export default TermsAndConditions;
