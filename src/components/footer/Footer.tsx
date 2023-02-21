import { content } from "../../data/constants";

export default function Footer() {
  const { footer } = content;
  return (
    <footer className="mt-5">
      <div className="min-w-screen bg-lightBgColor flex flex-col justify-center items-center gap-5 pt-20 pb-10">
        <h1 className="w-[20%] text-center"> {footer.logo} </h1>
        <div className=" cursor-pointer flex gap-5 text-3xl text-center p-2 items-center justify-center">
          {footer.footer_social_icons.map((icons) => (
            <a key={icons.id} href={icons.link} target="_blank">
              <icons.icon />
            </a>
          ))}
        </div>
        <h5 className="text-md text-center md:text-lg">
          {footer.mainText} &#169; {footer.right}
        </h5>
      </div>
    </footer>
  );
}
