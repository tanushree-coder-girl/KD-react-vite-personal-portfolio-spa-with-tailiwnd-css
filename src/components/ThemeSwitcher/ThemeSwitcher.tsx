import { useState } from "react";
import { content } from "../../data/constants";

interface iProps {
  setActiveColor: any;
}

export default function ThemeSwitcher(props: iProps) {
  const [showPallet, setshowPallet] = useState(false);
  const { setActiveColor } = props;
  const { theme } = content;

  const setTheme = (e: any) => {
    const color = e.target.getAttribute("data-id");
    setActiveColor(color);

    localStorage.setItem("selectedTheme", JSON.stringify(color));
  };

  return (
    <div
      className={`transition-all duration-700 fixed ${
        !showPallet ? "-right-[200px] md:-right-[245px]" : "right-0"
      } top-10 flex z-[999] items-center justify-center`}
    >
      <div className="bg-white md:h-[48px] h-auto flex items-center p-2 border-2 border-slate-200  cursor-pointer">
        <theme.settingWheel
          className="md:text-2xl text-xl animate-spin"
          onClick={() => setshowPallet(!showPallet)}
        />
      </div>
      <div
        className="bg-slate-200/60 flex gap-4 p-2 cursor-pointer"
        onClick={setTheme}
      >
        {theme?.switchers?.map((colors) => (
          <div
            key={colors.id}
            className={`rounded-full ${colors.color} h-6 w-6 md:h-8 md:w-8`}
            data-id={colors.value}
          ></div>
        ))}
      </div>
    </div>
  );
}
