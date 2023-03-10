import { CollapsibleType } from "./types";

export const faqs: CollapsibleType[] = [
  {
    title: "Cancelations, Changes and Returns",
    body: `Returns are only accepted with prior written approval from Screenprints.xyz.
    No cancellations will be accepted if order is in process.
    Any costs incurred by us prior to acceptance of cancellation will be invoiced.
    Changes to orders (prior to production) will usually require an extra cost.`,
  },
  {
    title: "Product & Colors",
    body: `We cannot guarantee exact shade, color, size, texture, consistency in quality or construction of finished goods as they vary from lot to lot. Customer may check actual product prior to ordering if this is a concern or issue. Exact duplication of colors including PMS (Pantone matching system) colors is not always possible, We will always attempt to match the colors as closely as possible.`,
  },
  {
    title: "Trademarks",
    body: `Customer assumes complete responsibility for artwork and warrants that they have the right to use the marks, symbols, or designs depicted in the artwork. We solely rely on the customer’s representation that they are authorized to utilize any copy or marks. The customer holds Screenprints.xyz harmless and will indemnify Screenprints.xyz for any and all claims resulting from printing, embroidery or other embellishments performed for customer by Screenprints.xyz.`,
  },
  {
    title: "Shipping",
    body: `Title to the goods shall pass to Customer upon delivery to customer or common freight carrier at the shipping point. Screenprints.xyz is not responsible for delays, lost goods or damages caused by the freight carrier but will assist in tracking shipments. Shipping dates are estimated and not guaranteed. If you have a hard deadline or in-hands date, please verify this at the beginning of the order process with your sales representative.`,
  },
  {
    title: "Delays",
    body: `In the event Industry shall be unable or fail at any time to make or supply the goods ordered due to any condition, contingency, delay, failure or cause beyond the control of the Quixotic Manufacturing and whether or not any such contingency is presently occurring, SCREENPRINTS.XYZ SHALL NOT BE LIABLE TO BUYER FOR FAILURE TO SUPPLY DURING THE PERIOD AND TO THE EXTENT OF SUCH DISABILITY INCLUDING SPECIAL OR CONSEQUENTIAL DAMAGES (INCLUDING PROFITS OR PROFITS LOST).`,
  },
  {
    title: "Limitation of Liability",
    body: `In no event shall Screenprints.xyz be liable to Customer for any amount greater that the amount paid to Screenprints.xyz to provide goods or services. All transactions are subject to and governed by the laws of the State of Georgia.`,
  },
];

export const screenPrintings: CollapsibleType[] = [
  {
    title: "What is your minim order quantity for screen printing?",
    body: "Our minimum order quantity is 50 items per style.",
  },
  {
    title: "Can you match a custom Pantone color?",
    body: "You got it! We can match any Solid Uncoated Pantone color. It’s tough to match exactly since we are printing on fabric, but we’ll get it as close as possible.",
  },
  {
    title: "What is the difference between CMYK and Simulated Process?",
    body: (
      <>
        <ul className="space-y-7 list-item list-disc pl-3.5">
          <li>
            Four Color Process printing, also known as CMYK, essentially
            performs the same way that your inkjet printer does, blending the
            four colors, Cyan, Magenta, Yellow, and Key (Black) to produce
            full-color images as opposed to spot color images. Four Color
            Process with water based inks is best when printed on white or very
            light colored shirts and does not work well on dark shirts. For full
            color images on dark shirts, we recommend Simulated Process
            printing.
          </li>
          <li>
            Simulated Process printing is an amped-up version of Four Color
            Process. It is capable of producing very photo-realistic images with
            a high amount of detail. It uses traditional spot colors, yet blends
            them in a four-color process manner, simulating full color images.
            This process works very well on both light and dark colored
            garments. The ink color count for simulated process jobs are often
            in the five to ten color range, therefore making it the best process
            for higher quantity runs.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Do you offer any specialty inks?",
    body: "Yes we do! These specialty inks do cost more than traditional ink so an inquiry would be necessary to provide an estimate.",
  },
  {
    title: "Do you screen print neck labels?",
    body: "In the event Industry shall be unable or fail at any time to make or supply the goods ordered due to any condition, contingency, delay, failure or cause beyond the control of the Quixotic Manufacturing and whether or not any such contingency is presently occurring, SCREENPRINTS.XYZ SHALL NOT BE LIABLE TO BUYER FOR FAILURE TO SUPPLY DURING THE PERIOD AND TO THE EXTENT OF SUCH DISABILITY INCLUDING SPECIAL OR CONSEQUENTIAL DAMAGES (INCLUDING PROFITS OR PROFITS LOST).",
  },
];

export const embroideries: CollapsibleType[] = [
  {
    title: "What is your minimum order for embroidery?",
    body: "Our minimum order quantity is 25 items per style.",
  },
  {
    title: "What is your pricing for embroidery?",
    body: "Our embroidery pricing varies based on design size which equals the total stitch count. Please send us your design and the sizing you’d like and we’ll send over a quote.",
  },
  {
    title: "How much does it cost to make an embroidery file?",
    body: "Our embroidery pricing varies based on design size which equals the total stitch count. Please send us your design and the sizing you’d like and we’ll send over a quote.",
  },
  {
    title: "Can you embroidery on any piece of clothing?",
    body: "We can embroider on any material except metal and wood.",
  },
];

export const services: CollapsibleType[] = [
  {
    title: "Screen printing",
    body: (
      <>
        Screen printing is an iconic and favorable choice to represent a
        multitude of designs for your merchandise. We provide several types of
        unique printing methods to give your brand a special edge. From 3D puff
        printing to 3M reflective, metallic, and glow-in-the-dark options, we
        have something for every style. With screen printing, we can print up to
        12 colors for your design. If you need more colors than that, we
        recommend DTG printing.
        <br />
        <br />
        Let our team help you bring your vision to life with high-quality screen
        printing that is sure to impress. Contact us today to learn more about
        our services and how we can help you take your brand to the next level.
      </>
    ),
  },
  {
    title: "Embroidery",
    body: (
      <>
        We are proud to partner with one of the best digitizing companies to
        produce the highest-quality embroidery files available. Our clean stitch
        finish will give your garment an elegant feeling that is sure to
        impress.
        <br />
        <br />
        We offer a wide variety of special threads, including glow-in-the-dark,
        metallic, 3D puff, and many more. These unique threads are the perfect
        way to bring out the personality in your designs and make them truly
        stand out.
      </>
    ),
  },
  {
    title: "Design services",
    body: (
      <>
        Our team of experienced designers is committed to helping you bring your
        vision to life. We specialize in creating custom designs that are
        tailored to your specific needs and brand.
        <br />
        <br />
        Whether you need a logo design, branding materials, or custom graphics
        for your merchandise, we have the expertise to deliver high-quality
        results that will make your brand stand out. Our design team is skilled
        in a variety of styles and techniques, and we are always up-to-date on
        the latest trends and industry best practices.
      </>
    ),
  },
];

export const termsAndConditions: CollapsibleType[] = [
  {
    title: "Cancelations, Changes and Returns",
    body: `Returns are only accepted with prior written approval from Screenprints.xyz.
    No cancellations will be accepted if order is in process.
    Any costs incurred by us prior to acceptance of cancellation will be invoiced.
    Changes to orders (prior to production) will usually require an extra cost.`,
  },
  {
    title: "Product & Colors",
    body: "We cannot guarantee exact shade, color, size, texture, consistency in quality or construction of finished goods as they vary from lot to lot. Customer may check actual product prior to ordering if this is a concern or issue. Exact duplication of colors including PMS (Pantone matching system) colors is not always possible, We will always attempt to match the colors as closely as possible.",
  },
  {
    title: "Trademarks",
    body: "Customer assumes complete responsibility for artwork and warrants that they have the right to use the marks, symbols, or designs depicted in the artwork. We solely rely on the customer’s representation that they are authorized to utilize any copy or marks. The customer holds Screenprints.xyz harmless and will indemnify Screenprints.xyz for any and all claims resulting from printing, embroidery or other embellishments performed for customer by Screenprints.xyz.",
  },
  {
    title: "Shipping",
    body: "Title to the goods shall pass to Customer upon delivery to customer or common freight carrier at the shipping point. Screenprints.xyz is not responsible for delays, lost goods or damages caused by the freight carrier but will assist in tracking shipments. Shipping dates are estimated and not guaranteed. If you have a hard deadline or in-hands date, please verify this at the beginning of the order process with your sales representative.",
  },
  {
    title: "Delays",
    body: "In the event Industry shall be unable or fail at any time to make or supply the goods ordered due to any condition, contingency, delay, failure or cause beyond the control of the Quixotic Manufacturing and whether or not any such contingency is presently occurring, SCREENPRINTS.XYZ SHALL NOT BE LIABLE TO BUYER FOR FAILURE TO SUPPLY DURING THE PERIOD AND TO THE EXTENT OF SUCH DISABILITY INCLUDING SPECIAL OR CONSEQUENTIAL DAMAGES (INCLUDING PROFITS OR PROFITS LOST).",
  },
  {
    title: "Limitation of Liability",
    body: "In no event shall Screenprints.xyz be liable to Customer for any amount greater that the amount paid to Screenprints.xyz to provide goods or services. All transactions are subject to and governed by the laws of the State of Georgia.",
  },
];

export const artRequirements: CollapsibleType[] = [
  {
    title: "Inks/Color and Shirts",
    body: "Include a color comp/proof of what the final print should look like (CMYK mode). Ink and shirt color/s must be specified. Colors should be Spot Colors (including White and Black ink) and should be chosen from our stock inks or the Pantone Coated guide (exceptions for specialty inks and 4-color Process printing). Contact us with any questions. Ink colors tend to shift on colored shirts. Some colors work better than others on dark shirts, some won’t work at all without an underlay. Contact us with any questions. Avoid using the Multiply blending mode to simulate translucent overprinting. Depending on color combinations, final results will differ drastically. Contact us to schedule an ink drawdown to proof final colors and combinations.",
  },
  {
    title: "Illustrator/Vector Artwork",
    body: "Make art to size. Save in .AI or .EPS format, CMYK color mode. Legacy format (CS5) preferred to avoid compatibility issues. Create Outlines on all fonts. Convert all strokes to Outlines. Files with each color on it’s own Layer is strongly preferred. Include any/all imported or placed images and graphic files. Avoid using Clipping Masks. Use the Pathfinder tool instead.",
  },
  {
    title: "Photoshop/Raster Artwork",
    body: "Make art to size. Save in .PSD or .TIF format, CMYK color mode (or Grayscale if the design is 1-color). Files with each color on it’s own Layer is strongly preferred. File resolution should be at least 150dpi, and not to exceed 600dpi.",
  },
  {
    title: "Typography and Line Weight",
    body: "For positive reading type, keep fonts at a 8pt minimum (12pt for Metallic ink). For knocked-out text, keep fonts at a 12pt minimum (16pt for Metallic ink). Final results will vary depending on chosen typeface.",
  },
  {
    title: "Technical and Printing Specifics",
    body: "Please let Industry determine halftone size and angle. Industry is not responsible for errors or unsatisfactory results cause by halftones created by the client. Please allow us to assist you if you’re not familiar with the screen printing process. Please proof-read any and all copy. Industry is not responsible for mistakes in spelling. Avoid using images from the internet when possible. Press checks require scheduling and may result in additional fees.",
  },
  {
    title: "To Avoid Art Fees",
    body: "Make each file on it’s own Layer (Photoshop & Illustrator). Convert all strokes to Outlines. Avoid using Clipping Masks (use the Pathfinder to keep shapes simple). To save on file space, convert 1-color designs to Grayscale color mode (Photoshop)",
  },
];
