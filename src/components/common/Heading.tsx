interface iProps {
    title: string,
    subtitle: string,
}
export default function Heading(props: iProps) {
  return (
    <h2 className="text-[#9ca18c33] text-[75px] md:text-[130px] relative" data-aos="slide-right">
      {props.title}
      <div data-aos="slide-right"
        className="text-[#0000008f] font-bold absolute bottom-4 md:text-4xl text-2xl !leading-relaxed font-Paprika"
      >
        {props.subtitle}
      </div>
    </h2>
  );
}
