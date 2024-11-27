
const home = async (req, res) => {
  try {
    res.status(200).send('Welcome to the MernTech');
  } catch (error) {
    res.status(500).send(error);
  }
}
const register = async (req, res) => {
  try {
    res.status(200).send('Welcome to the register');
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  home, register
}