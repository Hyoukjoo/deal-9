export const textType = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"];
export const textSizeType = ["large", "medium", "small", "x-small"];

export const linkType = textType.concat("a");
export const linkSizeType = textSizeType.filter((size) => size !== "large");
