"use client";

import { Button, Textarea, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

export default function RV() {
  const [openModal, setOpenModal] = useState("");
  const [email, setEmail] = useState("");
  const props = { openModal, setOpenModal, email, setEmail };

  return (
    <>
      <Button
        className="bg-rose-400"
        onClick={() => props.setOpenModal("form-elements")}
      >
        Prendre Rendez-Vous!
      </Button>
      <Modal
        show={props.openModal === "form-elements"}
        size="md"
        popup
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
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
            <div className="w-full">
              <Button className="bg-rose-400">Envoyer</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
