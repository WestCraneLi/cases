function createId() {
  const time = Date.now();
  const random = Math.random() * Math.pow(2, 32);
  const result = Math.floor(random + time);
  return result;
}

module.exports = {
  createId,
};
