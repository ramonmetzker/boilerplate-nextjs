import React, { useState } from "react";
import { TagContainer } from "./styles";

type ComponentProps = {
  tag: string;
};
const Tag = ({ tag }: ComponentProps) => {
  const [selected, setSelected] = useState(false);

  return (
    <TagContainer
      className={selected ? "selected" : "alerts-border"}
      onClick={() => setSelected(!selected)}
    >
      {tag}
    </TagContainer>
  );
};

export default React.memo(Tag);
