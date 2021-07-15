export const TEXT_TYPE = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"];
export const TEXT_SIZE_TYPE = ["large", "medium", "small", "x-small"];

export const LINK_TYPE = TEXT_TYPE.concat("a");
export const LINK_SIZE_TYPE = TEXT_SIZE_TYPE.filter((size) => size !== "large");
