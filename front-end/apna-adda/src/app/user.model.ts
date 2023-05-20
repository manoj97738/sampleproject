export type user = {
  "userId": number,
  "id": number,
  "title": string,
  "body": string
}

export type comment = {
  "id": number,
  "user": user
}
