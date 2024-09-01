import React, { useState } from "react";
import share from "../assets/share.png";
import del from "../assets/delete.png";
import edit from "../assets/edit.png";
import DeleteQuizModal from "../components/DeleteQuizModal";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Analytics() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const notify = () => toast.success("Link copied to Clipboard");
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div
      style={{
        backgroundColor: "#EDEDED",
        width: "85%",
        padding: "5rem",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p style={{ fontSize: "50px", color: "#5076FF", marginBottom: "3rem" }}>
          Quiz Analysis
        </p>
      </div>
      <div>
        <table style={{ width: "100%" }}>
          <tr style={{ background: "#5076FF" }}>
            <th>S.No</th>
            <th>Quiz Name</th>
            <th>Created on</th>
            <th>Impression</th>

            <th></th>
            <th></th>
          </tr>
          <tr>
            <td>1</td>
            <td>Quiz 1</td>
            <td>01 Sep, 2023</td>
            <td>345</td>
            <td style={{ display: "flex", justifyContent: "center" }}>
              <img src={edit} alt="" />

              <div>
                <img src={del} alt="" onClick={openModal} />

                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  contentLabel="Example Modal"
                  className="modal"
                  overlayClassName="overlay"
                >
                  <DeleteQuizModal />
                </Modal>
              </div>

              <img src={share} alt="" onClick={notify} />
              <ToastContainer />
            </td>
            <td>Question Wise Analysis</td>
          </tr>{" "}
          <tr>
            <td>1</td>
            <td>Quiz 1</td>
            <td>01 Sep, 2023</td>
            <td>345</td>
            <td>
              <img src={edit} alt="" />
              <img src={del} alt="" />
              <img src={share} alt="" />
            </td>
            <td>Question Wise Analysis</td>
          </tr>{" "}
          <tr>
            <td>1</td>
            <td>Quiz 1</td>
            <td>01 Sep, 2023</td>
            <td>345</td>
            <td>
              <img src={edit} alt="" />

              <img src={del} alt="" />

              <img src={share} alt="" />
            </td>
            <td>Question Wise Analysis</td>
          </tr>{" "}
          <tr>
            <td>1</td>
            <td>Quiz 1</td>
            <td>01 Sep, 2023</td>
            <td>345</td>
            <td>
              <img src={edit} alt="" />

              <img src={del} alt="" />

              <img src={share} alt="" />
            </td>
            <td>Question Wise Analysis</td>
          </tr>{" "}
          <tr>
            <td>1</td>
            <td>Quiz 1</td>
            <td>01 Sep, 2023</td>
            <td>345</td>
            <td>
              <img src={edit} alt="" />

              <img src={del} alt="" />

              <img src={share} alt="" />
            </td>
            <td>Question Wise Analysis</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
