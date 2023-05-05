// one controller function: receives long+lat in req, sends museums back

const logic = require('./logic');

// ! better function name
const controller = async (req, res) => {
	try {
		const { lat, lng } = req.query;
		const result = await logic(lat, lng); // ! logic function name
		res.status(200).json({ success: true, data: result});
	} catch (error) {
		console.log(error);
		res.sendStatus(500); // ! 500
	}
};



module.exports = { controller };
