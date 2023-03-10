import { useEffect } from "react";

const TypeForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";

    setTimeout(() => {
      document.head.appendChild(script);
    }, 1000);
  }, []);

  return (
    <>
      <div
        data-tf-widget="qw24Agp7"
        data-tf-opacity="100"
        data-tf-iframe-props="title=Screenprints.xyz"
        data-tf-transitive-search-params
        data-tf-medium="snippet"
        className="w-full lg:w-[85%] mx-auto h-[300px] lg:h-[500px]"
      ></div>
    </>
  );
};

export default TypeForm;
