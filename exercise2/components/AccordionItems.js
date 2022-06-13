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
