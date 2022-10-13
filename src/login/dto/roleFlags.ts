export enum roleFlags {
  Admin = 1 << 0,
  Moderator = 1 << 1,
  User = 1 << 2, //verified user
  Unverified = 1 << 3,
  Banned = 1 << 4,
}
