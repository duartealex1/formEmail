import React, { useState } from "react";
import "./App.css";
import emailjs from '@emailjs/browser'

//icons react icons
//import { FiSearch } from "react-icons/fi";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    if (name === "" && email === "" && message === "") {
      alert(`Por favor, preencha os dados antes de enviar!`);
      return;
    }
    if (name === "" && email === "") {
      alert(`Por favor, preencha seu nome e e-mail antes de enviar!`);
      return;
    }
    if (name === "" && message === "") {
      alert(`Por favor, preencha seu nome e uma mensagem antes de enviar!`);
      return;
    }
    if (message === "" && email === "") {
      alert(`Por favor, preencha seu e-mail e uma mensagem antes de enviar!`);
      return;
    }
    if (name === "") {
      alert(`Por favor, preencha seu nome!`);
      return;
    }
    if (email === "") {
      alert(`Por favor, preencha seu e-mail!`);
      return;
    }
    if (message === "") {
      alert(`Por favor, preencha sua mensagem!`);
      return;
    }
  
    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };
  
    emailjs
      .send(
        "service_z5wlnss",
        "template_jhtf66s",
        templateParams,
        "8Jlh5rdVOk4_6Eu4C"
      )
      .then(
        (response) => {
          console.log("EMAIL ENVIADO", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
          alert("Mensagem enviada com sucesso!");
        },
        (err) => {
          console.log("ERRO", err);
        }
      );
  }
  


  return (
    <div className="container col-10">
      <h1 className="title">Contato</h1>

      <form className="form-group" onSubmit={sendEmail}>
        <input
          className="form-control mb-3"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input
          className="form-control mb-3"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea
          className="form-control mb-4"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input className="btn btn-primary" type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default App;
