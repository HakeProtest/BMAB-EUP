/* eslint-disable no-unused-vars */
const server = new Server({
  host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com',
});