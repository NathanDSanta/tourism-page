import React from "react";
import "./Activities.css";
import ActivityCard from "../ActivityCard/ActivityCard";

function Activities() {

  const items = [
    { name: "Estany", link: `${process.env.PUBLIC_URL}/assets/images/estany.png`, mapa: "https://maps.app.goo.gl/RiVMhrACQ8PHuoPK8" },
    { name: "Museu Darder", link: `${process.env.PUBLIC_URL}/assets/images/museudarder.jpg`, mapa: "https://maps.app.goo.gl/MvBC8SMxnBE1dxNo8" },
    { name: "Parc Neolitic", link: `${process.env.PUBLIC_URL}/assets/images/parcneolitic.jpg`, mapa: "https://maps.app.goo.gl/QSAnc7UfvFSZX1eBA" },
    { name: "Monestir de Sant Esteve", link: `${process.env.PUBLIC_URL}/assets/images/monestir.jpg`, mapa: "https://maps.app.goo.gl/M1RLpAMSFmsS1b3j8" },
  ];

  return (
    <div className="Activities">
      {items.map((item) => (
        <ActivityCard key={item.name} name={item.name} link={item.link} mapa={item.mapa} />
      ))}
    </div>
  );
}

export default Activities;
