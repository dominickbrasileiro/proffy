import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/50509793?s=460&u=3705665144d35b494600e936b1e6437a8754bc54&v=4" alt="Dominick Brasileiro" />

        <div>
          <strong>Dominick Brasileiro</strong>
          <span>História</span>
        </div>
      </header>

      <p>
        Especialista na história das civilizações
        <br />
        <br />
        Apaixonado por realizar descobertas relacionadas ao nosso passado
        e em como chegamos aqui.
      </p>

      <footer>
        <p>
          Preço/hora
          {' '}
          <strong>R$ 40,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
