import React from "react";
import "../index.css"
const severityStyles = {
  Extreme: { text: "text-red-600", bg: "bg-red-100" },
  Urgent: { text: "text-yellow-600", bg: "bg-yellow-100" },
  Neutral: { text: "text-gray-500", bg: "bg-gray-200" },
  Low: { text: "text-green-600", bg: "bg-green-100" },
  None: { text: "text-blue-600", bg: "bg-blue-100" },
};

const ChamadoStatus = {
  Open: "Open",
  Closed: "Closed",
};

const DetailItem = ({ label, value }) => (
  <div>
    <p className="text-sm text-gray-500">{label}</p>
    <p className="font-semibold text-gray-800">{value}</p>
  </div>
);

export const ChamadoDetail = ({ chamado, onBack, onResolveClick }) => {
  const styles = severityStyles[chamado.severity];
  const formatDate = (dateString) =>
    new Intl.DateTimeFormat("pt-BR", {
      dateStyle: "long",
      timeStyle: "short",
    }).format(new Date(dateString));

  return (
    <div className="w-full h-full animate-fade-in">
      <div className="mb-6">
        <button
          onClick={onBack}
          className="text-blue-600 hover:text-blue-800 font-semibold"
        >
          &larr; Voltar
        </button>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-sm">
        <header className="flex justify-between items-start mb-6 border-b pb-4 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              {chamado.title}
            </h2>
            <div
              className={`mt-2 inline-block px-3 py-1 rounded-full text-sm font-bold ${styles.bg} ${styles.text}`}
            >
              {chamado.severity}
            </div>
          </div>
          {chamado.status === ChamadoStatus.Open && (
            <button
              onClick={() => onResolveClick(chamado)}
              className="px-4 py-2 rounded-lg font-semibold bg-green-600 text-white hover:bg-green-700 transition-colors flex-shrink-0"
            >
              Resolver Chamado
            </button>
          )}
        </header>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          <DetailItem label="Solicitante" value={chamado.requester} />
          <DetailItem label="Setor" value={chamado.department} />
          <DetailItem label="Tipo" value={chamado.type} />
          <DetailItem label="Aberto em" value={formatDate(chamado.createdAt)} />
        </div>

        {chamado.description && (
          <div className="mb-6">
            <h3 className="font-bold text-lg text-gray-800 mb-2">
              Descrição do Problema
            </h3>
            <div className="text-gray-700 whitespace-pre-wrap bg-gray-50 p-4 rounded-lg border">
              {chamado.description}
            </div>
          </div>
        )}

        {chamado.status === ChamadoStatus.Closed && chamado.resolution && (
          <div className="mt-6">
            <h3 className="font-bold text-lg text-gray-800 mb-2">
              Detalhes da Resolução
            </h3>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-gray-700 whitespace-pre-wrap">
                {chamado.resolution}
              </p>
              {chamado.closedAt && (
                <p className="text-sm text-gray-500 mt-2 font-medium">
                  Resolvido em: {formatDate(chamado.closedAt)}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Animação CSS
const styles = `
@keyframes fade-in {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
    animation: fade-in 0.3s ease-out forwards;
}
`;

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}
