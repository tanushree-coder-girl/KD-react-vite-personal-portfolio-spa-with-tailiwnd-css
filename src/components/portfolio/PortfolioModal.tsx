
import Modal from "react-modal";
import {content} from '../../data/constants';

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "65rem",
    width: "90%",
    backgroundColor: "#fff",
    maxHeight: "90vh",
    overflow: "scroll",
    zIndex: 1000
  },
  overlay: {
    padding: "2rem",
  },
};

interface iProps {
  open: boolean;
  selectedData: any;
  closeModal: any;
}

export default function PortfolioModal(props: iProps) {
  const { open, selectedData, closeModal } = props;
  return (
    <div className="z-999">
      <Modal
        isOpen={open}
        ariaHideApp={false}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="p-3">
          <h5 className="text-center text-2xl font-semibold">
            {selectedData?.title} 
          </h5>

          <div className="flex flex-col md:flex-row gap-5 mt-8">
            <div className="w-[100%] md:w-[50%] bg-white border-2 border-slate-50">
              <img src={selectedData?.image} alt="" />
            </div>
            <div className="ml-5 w-[100%] md:w-[40%]">
              <p className="font-medium text-lg"> Project Info: </p>
              <p className="text-slate-800 text-md mt-4 leading-6">
                {selectedData?.description} 
              </p>

              <div className="mt-2">
                <p className="font-medium text-lg mt-4"> Project Details: </p>
                <ul>
                  {
                    selectedData?.project_details_list?.map((data:any)=>(
                      <li key={data.id} className="pt-3 pb-3 border-b-2 border-b-slate-300">
                      <span className="font-medium"> {data.key} </span> :  {data.value}
                    </li>
                    ))
                  }

          
                  <li className="pt-3 pb-3 border-b-2 border-b-slate-300 flex items-center">
                    <span className="font-medium">Share</span> :
                     <div className="flex text-xl ml-4 gap-2"> 
                     {
                      selectedData?.social_icons?.map((data:any)=>(
                        <a key={data.id} href={data.link} target="_blank" className="cursor-pointer"> <data.icon/></a>
                      ))
                     }
                     </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div onClick={closeModal} className="cursor-pointer">
            <content.portfolio.close_icon className="text-3xl absolute top-4 right-4"  />
        </div>
      </Modal>
    </div>
  );
}
