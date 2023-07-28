import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me !</h1>
      <Pet name="Rıfkı" animal="Kuş" breed="Muhabbet Kuşu" />
      <Pet name="Hüsnü" animal="Kuş" breed="Muhabbet Kuşu" />
      <Pet name="Turşu" animal="Kuş" breed="Muhabbet Kuşu" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
