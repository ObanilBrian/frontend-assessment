function TabLink({ title, isActive, onClick }) {
  return (
    <li className="nav-item">
      <a
        className={`nav-link ${isActive ? "active" : ""}`}
        onClick={() => onClick()}
      >
        {title}
      </a>
    </li>
  );
}
