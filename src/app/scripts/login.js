export const handleLogin = async (username, password) => {
  const response = await fetch("http://localhost:3000/api/login", {
    method: "POST",
    body: JSON.stringify({
      username,
      password,
    }),
  });
};
