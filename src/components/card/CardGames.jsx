import React from "react";
import { Card } from "primereact/card";
// import { Button } from "primereact/button";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";

export const CardGames = ({ game }) => {
  const header = (
    <img
      alt="Card"
      src={game.thumbnail}
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
    />
  );
  // const footer = (
  //   <span>
  //     <Button label="Save" icon="pi pi-check" />
  //     <Button
  //       label="Cancel"
  //       icon="pi pi-times"
  //       className="p-button-secondary ml-2"
  //     />
  //   </span>
  // );
  return (
    <>
      <div>
        <Card
          title={game.title}
          subTitle={`${game.genre} • ${game.platform} • ${game.release_date}`}
          style={{ width: "25em" }}
          // footer={footer}
          header={header}
        >
          <p className="m-0" style={{ lineHeight: "1.5" }}>
            {game.short_description}
          </p>
        </Card>
      </div>
    </>
  );
};
