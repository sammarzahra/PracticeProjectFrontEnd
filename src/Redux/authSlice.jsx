// // src/Redux/authSlice.jsx

// const setToken = (token) => {
//   return {
//     type: 'auth/setToken',
//     payload: token
//   };
// };

// const setName = (name) => {
//   return {
//     type: 'auth/setName',
//     payload: name
//   };
// };

// const setEmail = (email) => {
//   return {
//     type: 'auth/setEmail',
//     payload: email
//   };
// };

// const logout = () => {
//   return {
//     type: 'auth/logout'
//   };
// };

// export { setToken, setName, setEmail, logout };
// // src/Redux/authSlice.jsx
// const initialState = {
//   token: null,
//   name: null,
//   email: null,
// };

// const authReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'auth/setToken':
//       return { ...state, token: action.payload };
//     case 'auth/setName':
//       return { ...state, name: action.payload };
//     case 'auth/setEmail':
//       return { ...state, email: action.payload };
//     case 'auth/logout':
//       return { ...initialState };
//     default:
//       return state;
//   }
// };

// export default authReducer;
