import http from "./httpService";

const apiEndPoint = "/users";

export function register(users) {
  return http.post(apiEndPoint, {
    email: users.username,
    password: users.password,
    name: users.name
  });
}
