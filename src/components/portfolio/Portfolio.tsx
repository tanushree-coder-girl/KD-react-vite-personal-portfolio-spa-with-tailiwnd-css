interface iProps {
  data: any;
  openModal: any;
}

export default function Portfolio(props: iProps) {
  const { data, openModal } = props;

  return (
    <div
      className="relative overflow-hidden bg-no-repeat bg-cover w-full max-w-sm  h-[264px] cursor-pointer"
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
    >
      <img
        className="object-cover h-[100%] w-[100%] overflow-hidden"
        src={data?.image}
        alt=""
      />
      <p className="absolute bottom-0 right-0 text-xs bg-lightBgColor p-2">
        {data?.category}
      </p>

      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out bg-[#fbfbfbcc]">
        <div className="flex flex-col items-center justify-center h-full text-center">
          <h2 className="text-2xl p-3 m-2"> {data?.title} </h2>
          <button className="btn_contained" onClick={openModal}> Overview </button>
        </div>
      </div>
    </div>
  );
}
