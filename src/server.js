const express = require("express");

const {
    addNumber,
    calculateAverage
} = require("./average");

const app = express();

app.use(express.json());

/**
 * Accept a number and return the current average.
 * @param {Object} req
 * @param {Object} res
 */
app.post("/average", (req, res) => {

    const number = req.body.number;

    if (typeof number !== "number" || !Number.isFinite(number)) {
        return res.status(400).json({
            error: "Please provide a valid number"
        });
    }

    addNumber(number);

    const average = calculateAverage();

    res.json({
        average: average
    });
});

const PORT = 3000;

// Start server only when running this file directly
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

module.exports = {
    app
};