import {
  Home,
  Product,
  UserLogin,
  UserLocation,
  Category,
  UserLogout,
  UserSignup,
} from "@pages";

export const routes = [
  Home,
  Product,
  Category,
  UserLocation,
  UserLogin,
  UserLogout,
  UserSignup,
];

// 일단 다음에 테스트 ...

// const COMPONENT_PROPS = ['path', 'getPage'];

// const addRoute = (component) => {
//   if (typeof component !== object) {
//     throw Error('component has to be object');
//   }

//   const keys = Object.keys(component)

//   COMPONENT_PROPS.forEach(prop => {
//     const key = keys.find(key => key === prop);
//     if (key === 'path') {
//       if (typeof key !== 'string') {
//         throw Error('The path has to be string type');
//       }
//     } else if (key === 'getPage') {
//       if (typeof key !== 'function') {
//         throw Error('The getPage has to be function type');
//       }
//     } else {
//       throw Error(`${key} is not component prop`)
//     }
//   })
// }

export default routes;
