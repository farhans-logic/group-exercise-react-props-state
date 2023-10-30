import React from "react";

interface ChuckJokeProps {
    joke : string
}

const ChuckJoke: React.FC<ChuckJokeProps> = ({joke}) => <p>{joke}</p>

export default ChuckJoke;
