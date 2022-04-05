export const API_URL = "http://localhost:1337/api/transactions";

export function TRANSACTION_POST(body) {
  return {
    url: API_URL,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}
