import LockedSwitchIcon from "@/components/Icons/SwitchLockIcon";

const LockedSwitchCard = () => {
  return (
    <div className="__card flex justify-center items-center">
      <div className="__card w-20 h-12 p-1.5 flex justify-end bg-dark-700">
        <LockedSwitchIcon />
      </div>
    </div>
  );
};

export default LockedSwitchCard;
