import { useState } from "react";

function ProjectsPage() {

  const [openModalId, setOpenModalId] = useState<number | null>(null);

  const handleOpen = (index: number) => {
    setOpenModalId(index);
  }

  const handleClose = () => {
    setOpenModalId(null);
  }

  const viewStyle = {
    display: "flex",
    justifyContent: "center",
  }

  const cardContainer = {
    display: "flex",
    gap: 40,
    paddingTop: 20,
    paddingBottom: 20,
    width: 620,
    marginLeft: 10,
    marginRight: 10,
    flexWrap: "wrap" as "wrap",
  }

  const cardActionStyle = {
    fontFamily: "poppins",
    width: 280,
    height: 380,
    backgroundColor: "#6B5B51",
    borderRadius: 15,
    transition: "all 0.3s ease",
};

  return (
    <div style={viewStyle}>
      This is the product page.
    </div>
  );
}

export default ProjectsPage;
