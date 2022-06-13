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
