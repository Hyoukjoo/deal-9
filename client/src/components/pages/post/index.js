import { createPostTemplate } from "@templates";
import initState from "@utils/state";
import { POST } from "@common/path.js";

const initialState = {
  uploadImgList: [],
};

const { getState, setState } = initState(initialState, createPostTemplate);

const getPage = () => {
  return createPostTemplate({ ...getState(), setState });
};

const Post = {
  path: POST,
  getPage,
};

export default Post;
