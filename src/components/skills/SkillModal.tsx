import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "30rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
  },
};

interface iProps {
  open: boolean;
  selectedSkill: any;
  closeModal: any;
}

export default function SkillModal(props: iProps) {
  const { open, selectedSkill, closeModal } = props;

  return (
    <div>
      <Modal
        isOpen={open}
        ariaHideApp={false}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex items-center gap-5">
          <div className="icon">
            {selectedSkill?.icon && (
              <selectedSkill.icon className="text-5xl" />
            )}
          </div>
          <h4> {selectedSkill?.title} </h4>
        </div>

        <article className="p-10">
          {selectedSkill?.modalDes}
        </article>
        <div className="w-[90%] text-right">
          <button className="btn_outlined" onClick={closeModal}> Close</button>
        </div>
      </Modal>
    </div>
  );
}
