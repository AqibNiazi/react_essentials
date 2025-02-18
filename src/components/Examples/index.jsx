import React, { useState } from "react";
import { EXAMPLES } from "../../data";
import TabButton from "../TabButton/TabButton";
import Section from "../Section";
const Examples = () => {
  const [selectedContent, setSelectedContent] = useState("");
  const handleClick = (selectedButton) => {
    setSelectedContent(selectedButton);
  };

  return (
    <Section id="examples" title="Examples">
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
    </Section>
  );
};

export default Examples;
