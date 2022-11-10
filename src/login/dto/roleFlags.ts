export enum roleFlags { //4 bits max int value 15
  User = 1 << 2, //verified user'
  Moderator = 1 << 1,
  Admin = 1 << 0,
  Banned = 1 << 4,
}
