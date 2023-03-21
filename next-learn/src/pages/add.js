import { useRef, useEffect, useState } from "react";

export default function Add() {
  const enWord = useRef();
  const frWord = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWord = {
      en: enWord.current.value,
      fr: frWord.current.value,
    };

    fetch("/api/vocapi", {
      method: "POST",
      body: JSON.stringify(newWord),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    enWord.current.value = "";
    frWord.current.value = "";
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form
        style={{
          backgroundColor: "#fff",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0px 0px 10px #888888",
        }}
        onSubmit={handleSubmit}
      >
        <label
          style={{ display: "block", marginBottom: "10px" }}
          htmlFor="addEn"
        >
          Ajouter un mot en Anglais
        </label>
        <input
          style={{
            width: "70%",
            padding: "10px",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
          ref={enWord}
          type="text"
          id="addEn"
        />
        <label
          style={{ display: "block", marginBottom: "10px" }}
          htmlFor="addFr"
        >
          Ajouter un mot en Français
        </label>
        <input
          style={{
            width: "70%",
            padding: "10px",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
          ref={frWord}
          type="text"
          id="addFr"
        />
        <button
          style={{
            backgroundColor: "#00c4cc",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
          }}
        >
          Ajouter
        </button>
      </form>
    </div>
  );
}
