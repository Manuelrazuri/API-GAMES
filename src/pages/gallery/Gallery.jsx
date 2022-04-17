import React, { useState, useEffect } from "react";
import { CardGames } from "../../components/card/CardGames";
import "./Gallery.css";

export const Gallery = () => {
  const URL = "https://www.freetogame.com/api/games";

  const [games, setGames] = useState("Mirko");

  const getAllGames = async () => {
    const response = await fetch(URL);
    const responseJSON = await response.json();

    setGames(responseJSON);
  };

  useEffect(() => {
    getAllGames();
  }, []);

  return (
    <div className="container-card">
      {games.map((game) => {
        return (
          <div>
            <CardGames game={game} />
          </div>
        );
      })}
    </div>
  );
};
