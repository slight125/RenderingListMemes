type JokeProps = {
  joke: string;
  rating: number;
};

export function Joke({ joke, rating }: JokeProps) {
  return (
    <div style={{ margin: "1rem 0", padding: "1rem", background: "#fffbe7", borderRadius: "8px" }}>
      <p style={{ margin: 0 }}>{joke}</p>
      <small>Rating: {rating}</small>
    </div>
  );
}