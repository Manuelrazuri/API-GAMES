import React, { useState, useEffect } from "react";
import { CardGames } from "../../components/card/CardGames";
import "./Gallery.css";

export const Gallery = () => {
  const URL = "https://www.freetogame.com/api/games";

  const [games, setGames] = useState([]);

  const getAllGames = async () => {
    try {
      const response = await fetch(URL);
      const responseJSON = await response.json();
      const result = responseJSON.filter(
        (element) => element.genre === "Social"
      );

      console.log(result);
      setGames(result);
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    getAllGames();
  }, []);

  return (
    <div className="container-card">
      {games.map((game) => {
        return (
          <div key={game?.id}>
            <CardGames game={game} />
          </div>
        );
      })}
    </div>
  );
};
