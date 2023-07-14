import React from "react";

function Card({ children, title, personName }) {
  return (
    <div className="card">
      <div className="card-content">
        <h1>{title}</h1>
        <h3>{personName}</h3>
        {children}
      </div>
    </div>
  );
}

export default function Profile() {
  return (
    <div>
      <Card title="Photo" personName="Aklilu Lemma">
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={100}
          height={100}
        />
      </Card>
      <Card title="About" personName="Aklilu Lemma">
        <p>
          Aklilu Lemma was a distinguished Ethiopian scientis who discovered a
          natural treatment to schistosomiasis.
        </p>
      </Card>
    </div>
  );
}
