import { contentIdeias } from "@/utils/contentIdea";

import { Content } from "./Content";

export const Painel = () => {
  return (
    <div>
      {contentIdeias.map(({ imageUrl, list, paragraph, title }, index) => (
        <Content
          key={index}
          title={title}
          imageUrl={imageUrl}
          paragraph={paragraph}
          list={list}
        />
      ))}
    </div>
  );
};
