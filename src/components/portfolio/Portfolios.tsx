import { useState } from "react";
import { content } from "../../data/constants";
import Heading from "../common/Heading";
import Portfolio from "./Portfolio";
import PortfolioModal from "./PortfolioModal";

export default function Portfolios() {
  const { portfolio } = content;
  const [portfolioData, setPortfolioData] = useState(portfolio.portfolio_item);

  const [selectedData, setSelectedData] = useState();
  const [open, setopen] = useState(false);

  const allButtons = [
    "All",
    ...new Set(portfolio.portfolio_item.map((item) => item.category)),
  ];

  const [category, setCategories] = useState(allButtons);
  const [active, setActiveButton] = useState("All");

  const filter = (button: any) => {
    setActiveButton(button);
    if (button === "All") {
      setPortfolioData(portfolio.portfolio_item);
      return;
    }
    const filteredData = portfolio.portfolio_item.filter(
      (item) => item.category === button
    );
    setPortfolioData(filteredData);
  };

  const openModal = (data: any) => {
    setSelectedData(data);
    setopen(true);
  }

  const closeModal = () => {
    setopen(false);
  }

  return (
    <section id="portfolio">
      <div className="md:container px-5 py-14">
      <PortfolioModal open={open} selectedData={selectedData} closeModal={closeModal} />
       
      <Heading title={portfolio.title} subtitle={portfolio.subtitle} />

      <div className="flex flex-wrap items-center justify-center mt-5 mb-20 gap-3">
        {category?.map((cat, index) => (
          <button
            key={index}
            className={` ${
              active === cat ? "btn_contained" : "btn_outlined"
            }`}
            onClick={() => filter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex justify-center items-center flex-wrap md:flex-row flex-col  m-auto gap-4">
        {portfolioData?.map((data: any) => (
          <Portfolio key={data.id} data={data} openModal={()=>openModal(data)} />
        ))}
      </div>
      </div>

    </section>
  );
}
