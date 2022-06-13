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
