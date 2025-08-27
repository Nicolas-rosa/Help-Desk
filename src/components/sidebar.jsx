// src/components/sidebar.jsx

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiClock, FiFilePlus, FiCheckSquare, FiUsers, FiMenu } from 'react-icons/fi'; // Ícones Feather

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Array de objetos para os itens do menu, agora com ícones
  const menuItems = [
    { name: "Histórico", path: "/historico", icon: <FiClock /> },
    { name: "Abrir Chamado", path: "/abrir-chamado", icon: <FiFilePlus /> },
    { name: "Gerenciar Chamados", path: "/chamados", icon: <FiCheckSquare /> },
    { name: "Gerenciar Usuários", path: "/usuarios", icon: <FiUsers /> },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <aside style={styles.sidebar(isOpen)}>
      <div style={styles.sidebarHeader}>
        <button onClick={toggleSidebar} style={styles.menuButton}>
          <FiMenu size={24} />
        </button>
        {isOpen && <h1 style={styles.logo}>Castro</h1>}
      </div>

      <nav style={styles.nav}>
        <ul style={styles.ul}>
          {menuItems.map((item) => (
            <li key={item.name} style={styles.li}>
              <NavLink to={item.path} style={({ isActive }) => styles.navLink(isActive)}>
                <div style={styles.iconWrapper}>{item.icon}</div>
                {isOpen && <span style={styles.linkText}>{item.name}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div style={styles.addButtonWrapper}>
        <button style={styles.addButton}>+</button>
      </div>
    </aside>
  );
};

// Estilos embutidos para replicar o design
const styles = {
  sidebar: (isOpen) => ({
    width: isOpen ? "260px" : "80px",
    backgroundColor: "#F8F9FA",
    height: "calc(100vh - 40px)", // Altura da tela menos as margens
    margin: "20px",
    borderRadius: "16px",
    display: "flex",
    flexDirection: "column",
    padding: "20px 10px",
    transition: "width 0.3s ease-in-out",
    position: "relative", // Para posicionar o botão de adicionar
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
  }),
  sidebarHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 10px",
    marginBottom: "30px",
  },
  menuButton: {
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#343A40",
  },
  logo: {
    margin: "0 0 0 15px",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#343A40",
    whiteSpace: "nowrap", // Impede a quebra de linha durante a transição
  },
  nav: {
    flex: 1, // Ocupa o espaço restante
  },
  ul: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  li: {
    marginBottom: '10px',
  },
  navLink: (isActive) => ({
    display: "flex",
    alignItems: "center",
    padding: "12px 15px",
    borderRadius: "8px",
    textDecoration: "none",
    color: isActive ? "#FFFFFF" : "#495057",
    backgroundColor: isActive ? "#007BFF" : "transparent",
    fontWeight: isActive ? "500" : "normal",
    transition: "background-color 0.2s, color 0.2s",
  }),
  iconWrapper: {
    fontSize: "20px",
    minWidth: "30px", // Garante alinhamento quando o texto some
  },
  linkText: {
    marginLeft: "15px",
    whiteSpace: "nowrap",
  },
  addButtonWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '0 15px',
  },
  addButton: {
    backgroundColor: "#FFFFFF",
    color: "#495057",
    border: '1px solid #DEE2E6',
    borderRadius: "55%",
    width: "48px",
    height: "48px",
    fontSize: "28px",
    fontWeight: '300',
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s",
  },
};

export default Sidebar;
