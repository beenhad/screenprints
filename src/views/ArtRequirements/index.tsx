import CollapsibleRenderer from "@/components/CollapsibleRenderer";
import GoBackTopBar from "@/components/GoBackTopBar";
import { artRequirements } from "@/config/constants";

const ArtRequirements = () => {
  return (
    <GoBackTopBar>
      <div className="container_md">
        <div>
          <h1 className="__title_xl">Art Requirements</h1>

          <div className="mt-[30px]">
            <CollapsibleRenderer collapsibles={artRequirements} />
          </div>
        </div>
      </div>
    </GoBackTopBar>
  );
};

export default ArtRequirements;
