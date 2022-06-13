"use strict";

function AccordionItems({ item, id, isOpen }) {
  return (
    <div key={id} className="accordion-item">
      <h2 className="accordion-header" id={`heading-${id}`}>
        <button
          className={`accordion-button ${!isOpen ? "collapsed" : ""}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${id}`}
          aria-expanded={isOpen.toString()}
          aria-controls={`collapse-${id}`}
        >
          {item.title}
        </button>
      </h2>
      <div
        id={`collapse-${id}`}
        className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
        aria-labelledby={`heading-${id}`}
        data-bs-parent="#exerciseAccordion"
      >
        <div
          className="accordion-body"
          dangerouslySetInnerHTML={{ __html: item.content }} // we have a controlled data so this should be good
        ></div>
      </div>
    </div>
  );
}

function Accordion({ data }) {
  return (
    <div className="accordion" id="exerciseAccordion">
      {data.map((item, index) => (
        <AccordionItems
          item={item}
          key={item.title.toLowerCase().replace(" ", "-")}
          id={item.title.toLowerCase().replace(" ", "-")}
          isOpen={index === 0}
        />
      ))}
    </div>
  );
}

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

function Tabs({ data }) {
  const [activeLink, setActiveLink] = React.useState(data[0].title);
  const [content, setContent] = React.useState(data[0].content);

  const updateContent = ({ activeLink, newContent }) => {
    setActiveLink(activeLink);
    setContent(newContent);
    return;
  };

  return (
    <React.Fragment>
      <ul className="nav nav-tabs">
        {data.map((item, index) => (
          <TabLink
            title={item.title}
            key={item.title.toLowerCase().replace(" ", "-")}
            id={item.title.toLowerCase().replace(" ", "-")}
            onClick={() =>
              updateContent({
                activeLink: item.title,
                newContent: item.content,
              })
            }
            isActive={activeLink === item.title}
          />
        ))}
      </ul>
      <div
        className="border border-top-0 p-3"
        dangerouslySetInnerHTML={{ __html: content }} // we have a controlled data so this should be good
      ></div>
    </React.Fragment>
  );
}

function App({ data }) {
  const [screenSize, setScreenSize] = React.useState(
    window.innerWidth > 650 ? "desktop" : "mobile"
  );

  const updateScreenSize = () => {
    setScreenSize(window.innerWidth > 650 ? "desktop" : "mobile");
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  });

  if (screenSize === "mobile") {
    return <Accordion data={data} />;
  }

  return <Tabs data={data} />;
}

fetch("./assets/data.json")
  .then((resp) => resp.json())
  .then((data) => {
    const domContainer = document.querySelector("#root");
    const root = ReactDOM.createRoot(domContainer);
    root.render(<App data={data} />);
  });
