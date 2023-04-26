import ArrowTopRight from "@/components/Icons/ArrowTopRight";
import Link from "next/link";

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
        <Link href={button.url || "#"} className="__btn !w-fit">
          <ArrowTopRight /> {button.text}
        </Link>
      </div>
    </div>
  );
};

export default TextCard;
