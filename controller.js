// one controller function: receives long+lat in req, sends museums back

const { findMuseumsNearby } = require('./logic');

const postCoordinates = async (req, res) => {
	try {
		const { lat, lng } = req.query; // 52.494857 13.437641
		const result = await findMuseumsNearby(lat, lng);
		res.status(200).json({ success: true, data: result});
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
};

const showMuseums = async (req, res) => {
	try {
		console.log('');
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
};



module.exports = { postCoordinates, showMuseums };
