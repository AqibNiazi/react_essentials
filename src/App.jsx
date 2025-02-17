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
  console.log("Examples", EXAMPLES);
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS?.[0]?.title}
              description={CORE_CONCEPTS?.[0]?.description}
              image={CORE_CONCEPTS?.[0]?.image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={() => handleClick("components")}>
              Components
            </TabButton>
            <TabButton onClick={() => handleClick("jsx")}>JSX</TabButton>
            <TabButton onClick={() => handleClick("props")}>Props</TabButton>
            <TabButton onClick={() => handleClick("state")}>State</TabButton>
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
