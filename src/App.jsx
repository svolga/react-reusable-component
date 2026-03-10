import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Instruction from "./components/Instraction";
import Section from "./components/Section";
import Button from "./components/Button";

function App() {
  const [showInstructions, setShowInstructions] = useState(false);

  const toggleInstructions = () => {
    setShowInstructions((prev) => !prev);
  };

  function handleClick() {
    alert("Click");
  }

  return (
    <div className="app">
      <Header
        toggleInstructions={toggleInstructions}
        showInstructions={showInstructions}
      />

      <Instruction showInstructions={showInstructions} />
      <Main>
        <Section title="Variants">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="gradient">Gradient</Button>
          <Button variant="outline">Outline</Button>
        </Section>

        <Section title="Sizes">
          <Button variant="primary" size="large">
            Large
          </Button>
          <Button variant="primary" size="medium">
            Medium
          </Button>
          <Button variant="primary" size="small">
            Small
          </Button>
        </Section>

        <Section title="Button States">
          <Button isDisabled>Disabled</Button>
          <Button>Default</Button>
        </Section>

        <Section title="With Fn">
          <Button variant="primary" onClick={handleClick}>
            Click Me
          </Button>
        </Section>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
