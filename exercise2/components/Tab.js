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
