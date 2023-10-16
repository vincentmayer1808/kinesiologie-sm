"use client";

import { Button, Textarea, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

export default function RV() {
  const [openModal, setOpenModal] = useState("");
  const [email, setEmail] = useState("");
  const props = { openModal, setOpenModal, email, setEmail };

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
        <Modal.Header className="bg-vert" />
        <Modal.Body className="bg-vert">
          <div className="space-y-6 text-center">
            <h3 className="text-xl font-medium text-gris dark:text-white">
              Contactez-moi
            </h3>
            <p>
              Pour prendre rendez-vous, écrivez-moi a l&#8217;aide de ce
              formulaire!
            </p>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Votre courriel" />
              </div>
              <TextInput id="email" placeholder="name@company.com" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="userName" value="Votre nom" />
              </div>
              <TextInput id="userName" type="text" required />
            </div>
            <div className="max-w-md" id="textarea">
              <div className="mb-2 block">
                <Label
                  htmlFor="comment"
                  value="Contez-moi ce que vous désirez et votre disponibilité"
                />
              </div>
              <Textarea
                id="comment"
                placeholder="Laissez moi votre message"
                required
                rows={4}
              />
            </div>
            <div className="w-full flex justify-center">
              <button className="w-52 bg-pilates px-3 py-2 flex items-center justify-center font-semibold text-center text-white rounded-lg ring-white ring-2 hover:shadow-lg hover:shadow-vert hover:scale-105 transtion-all duration-200 hover:ring-vert"
              >Envoyer</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
