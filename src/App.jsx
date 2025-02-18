import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton/TabButton";
function App() {
  const [selectedContent, setSelectedContent] = useState("");
  const handleClick = (selectedButton) => {
    setSelectedContent(selectedButton);
  };

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS?.map((conceptItem) => (
              <CoreConcept key={conceptItem?.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedContent == "components"}
              onClick={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedContent == "jsx"}
              onClick={() => handleClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedContent == "props"}
              onClick={() => handleClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedContent == "state"}
              onClick={() => handleClick("state")}
            >
              State
            </TabButton>
          </menu>
          {selectedContent ? (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedContent]?.title}</h3>
              <p>{EXAMPLES[selectedContent]?.description}</p>
              <pre>
                <code>{EXAMPLES[selectedContent]?.code}</code>
              </pre>
            </div>
          ) : (
            <p>Please select a topic</p>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
