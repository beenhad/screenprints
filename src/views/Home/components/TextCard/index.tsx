import ArrowTopRight from "@/components/Icons/ArrowTopRight";

type TextCardProps = {
  title: string;
  description: string;
  button: {
    text: string;
    url?: string;
  };
};
const TextCard = ({ title, description, button }: TextCardProps) => {
  return (
    <div className="__card flex flex-col">
      <h2 className="__title_lg">{title}</h2>
      <p className="__text_base mt-1.5 mb-8">{description}</p>

      <div className="mt-auto">
        <button className="__btn">
          <ArrowTopRight /> {button.text}
        </button>
      </div>
    </div>
  );
};

export default TextCard;
