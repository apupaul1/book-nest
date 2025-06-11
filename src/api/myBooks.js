export const addedBooks = (email, accessToken) => {
  return fetch(
    `https://b11-a11-c19-server.vercel.app/books/mybooks?email=${email}`,
    {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    }
  ).then((res) => res.json());
};
