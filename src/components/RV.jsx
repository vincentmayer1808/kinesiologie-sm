"use client";

import { Modal } from "flowbite-react";
import { useState } from "react";

export default function RV() {
  const [openModal, setOpenModal] = useState("");
  const [email, setEmail] = useState("");
  const props = { openModal, setOpenModal, email, setEmail };
 
  const initForm = {
    username: "",
    email: "",
    consult: "",
  };

  const [formState, setFormState] = useState(initForm);
  const [isLoading, setIsLoading] = useState(false);
  const onChangeForm = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { username, consult, email } = formState;
    if (username === "" || email === "" || consult === "") {
      window.alert("Please, fill all fields!");
    } else {
      await addToDB(formState);
    }
    setIsLoading(false);
  };
  const addToDB = async (info) => {
    try {
    //   await db.collection("contact").add(info);
      console.log(info);
      setFormState(initForm);
 
    //   window.alert("I will respond as soon as posible, thanks for contacting me!");
    } catch (err) {
      console.log(err);
    //   window.alert(
    //     "An error ocurred and I couldn,t receive your message, please try again!"
    //   );
    }
  };
  return (
    
    <>
      <button
        className="w-52 bg-pilates px-3 py-2 flex items-center justify-center font-semibold text-center text-white rounded-lg ring-white ring-2 hover:shadow-lg hover:shadow-vert hover:scale-105 transtion-all duration-200 hover:ring-vert"
        onClick={() => props.setOpenModal("form-elements")}
      >
        Prendre Rendez-Vous!
      </button>
      <Modal
        show={props.openModal === "form-elements"}
        size="md"
        popup
        onClose={() => props.setOpenModal(undefined)}

      >
        <Modal.Header className="bg-vert rounded-t-lg" />
        <Modal.Body className="bg-vert rounded-b-lg shadow-xl " >
        <form className="bg-vert flex-col flex items-center justify-center gap-2 m-2 p-2 ">
                <p className="text-center text-xl text-white">Remplissez ce formulaire pour réserver</p>
                <div className="mb-2">
                  <input
                    className="placeholder-white bg-vert text-white rounded border-white p-2 hover:ring-2 hover:ring-white hover:shadow-lg hover:shadow-white focus:border-none"
                    name="username"
                    type="text"
                    placeholder='Votre Nom'
                    value={formState.username}
                    onChange={onChangeForm}
                  />
                </div>
                <div className="mb-2">
                 
                  <input
                    className="placeholder-white bg-vert text-white rounded border-white p-2 hover:ring-2 hover:ring-white hover:shadow-lg hover:shadow-white focus:border-none"
                    name="email"
                    type="email"
                    placeholder='Votre Courriel'
                    value={formState.email}
                    onChange={onChangeForm}
                  />
                </div>
                <div className="mb-2">
                 
                  <textarea
                    name="consult"
                    className="placeholder-white bg-vert text-white rounded border-white p-2 hover:ring-2 hover:ring-white hover:shadow-lg hover:shadow-white focus:border-none"
                    rows="4"
                    cols="40"
                    placeholder='Indiquer moi le service désiré ainsi que votre disponibilité'
                    value={formState.consult}
                    onChange={onChangeForm}
                  />
                </div>
                <button
                  className="flex items-center px-3 py-2 font-medium text-center text-white bg-pilates rounded-lg ring-2 ring-white hover:shadow-lg hover:shadow-white hover:scale-105"
                  id="resButton"
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isLoading}
                >
                  Envoyer
                </button>
              </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
