// import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

// export const GET = handleAuth({
//     login: handleLogin({
//         returnTo: '/api/handle-login'
//     }),
// });

// import { handleAuth } from "@auth0/nextjs-auth0";

// export const GET = handleAuth();


import { handleAuth, handleLogin, handleLogout } from "@auth0/nextjs-auth0";

export const GET = handleAuth({
  login: handleLogin({
    returnTo: "/api/create-auth-user",
    authorizationParams: {
      prompt: "login",
    },
  }),
  logout: handleLogout({
    returnTo: "/",
  }),
});