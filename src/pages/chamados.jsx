import React, { useState } from "react";
import { ChamadoDetail } from "../components/chamado";
import "../index.css"
function Chamados() {
  const [selectedChamado, setSelectedChamado] = useState(null);

  const chamados = [
    {
      id: 1,
      title: "Conexão Wi-Fi caindo constantemente",
      type: "Rede",
      department: "TI",
      requester: "Ícaro Moreira",
      severity: "Neutral",
      status: "Open",
      description: "O Wi-Fi desconecta várias vezes durante o expediente.",
      createdAt: "2025-08-20T10:00:00",
    },
    {
      id: 2,
      title: "Senha de rede expirou",
      type: "Acesso",
      department: "TI",
      requester: "Fábio Martins",
      severity: "Extreme",
      status: "Open",
      description: "Não consigo acessar a rede, pede nova senha.",
      createdAt: "2025-08-28T09:00:00",
    },
  ];

  const handleResolve = (chamado) => {
    alert(`Chamado resolvido: ${chamado.title}`);
    // aqui você pode mudar status ou chamar API
  };

  if (selectedChamado) {
    return (
      <ChamadoDetail
        chamado={selectedChamado}
        onBack={() => setSelectedChamado(null)}
        onResolveClick={handleResolve}
      />
    );
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Chamados Abertos</h1>
      <div className="space-y-4">
        {chamados.map((c) => (
          <div
            key={c.id}
            onClick={() => setSelectedChamado(c)}
            className="p-4 border rounded-lg shadow-sm bg-white cursor-pointer hover:bg-gray-50"
          >
            <h2 className="font-semibold text-lg">{c.title}</h2>
            <p className="text-sm text-gray-600">{c.department}</p>
            <p className="text-sm text-gray-600">Solicitante: {c.requester}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chamados;
