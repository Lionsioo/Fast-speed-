exports.trackUser = (req, res) => {
  const { ip, location } = req.body;
  console.log(`Tracking user: ${ip} - ${location}`);
  res.status(200).send("User tracked");
};
