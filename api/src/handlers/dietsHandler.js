
const getDietsHandler = (req, res) => {
    const { diets } = req.body;
    res.status(200).send(`Here there are some ${diets}`);
};

module.exports = getDietsHandler;