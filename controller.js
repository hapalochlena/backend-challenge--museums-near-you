// one controller function: receives long+lat in req, sends museums back

const { getLocation } = require('./logic');

// ! better function name
const postCoordinates = async (req, res) => {
	try {
		const { lat, lng } = req.query; // 52.494857 13.437641
		const result = await getLocation(lat, lng); // ! logic function name
		res.status(200).json({ success: true, data: result});
	} catch (error) {
		console.log(error);
		res.sendStatus(500); // ! 500
	}
};

const showMuseums = async (req, res) => {
	try {
		console.log('');
	} catch (error) {
		console.log(error);
		res.sendStatus(500); // ! 500
	}
};



module.exports = { postCoordinates, showMuseums };
