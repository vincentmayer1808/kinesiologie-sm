"use client"

import { db } from '@/firebase/firebase';
import React, { useState } from 'react'

export const Contact = () => {

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
        await db.collection("contact").add(info);
      console.log(info);
      setFormState(initForm);

        window.alert("Message sent correctly");
    } catch (err) {
      console.log(err);
        window.alert(
          "The message could not be send"
        );
    }
  };
  return (
    <>
      <form className="bg-pilates flex-col flex items-center justify-center gap-2 m-2 p-4 rounded shadow-lg shadow-black ">
        <div className="mb-2">
          <input
            className="placeholder-white bg-pilates text-white rounded border-white p-2 hover:ring-2 hover:ring-white hover:shadow-xl hover:shadow-white focus:border-none"
            name="username"
            type="text"
            placeholder='Nom'
            value={formState.username}
            onChange={onChangeForm}
          />
        </div>
        <div className="mb-2">

          <input
            className="placeholder-white bg-pilates text-white rounded border-white p-2 hover:ring-2 hover:ring-white hover:shadow-xl hover:shadow-white focus:border-none"
            name="email"
            type="email"
            placeholder='Courriel'
            value={formState.email}
            onChange={onChangeForm}
          />
        </div>
        <div className="mb-2">

          <textarea
            name="consult"
            className="placeholder-white bg-pilates text-white rounded border-white p-2 hover:ring-2 hover:ring-white hover:shadow-xl hover:shadow-white focus:border-none"
            rows="4"
            cols="30"
            placeholder='Écris-moi ton message ici...'
            value={formState.consult}
            onChange={onChangeForm}
          />
        </div>
        <button
          className="flex items-center px-3 py-2 font-medium text-center text-gris bg-white rounded-lg hover:ring-2 ring-vert hover:shadow-lg hover:shadow-vert hover:scale-105"
          id="contactButton"
          type="submit"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          Envoyer
        </button>
      </form>

    </>
  )
}
