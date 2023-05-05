// one controller function: receives long+lat in req, sends museums back



// const queryingFriends = (req, res) => {
// 	const { name, importance, lastContacted } = req.query;
// 	const { search, limit } = req.query;

// 	const x = req.friendsData;
// 	let friendsData = [...x];

// 	if (name) {
// 		friendsData = friendsData.find(friend => friend.name === name);
// 		console.log(friendsData);
// 	}
// 	if (importance) {
// 		friendsData = friendsData.find(friend => friend.importance === importance);
// 		console.log(friendsData);
// 	}
// 	if (lastContacted) {
// 		friendsData = friendsData.find(friend => friend.lastContacted === Number(lastContacted));
// 		console.log(friendsData);
// 	}
// 	if (search) {
// 		friendsData = friendsData.filter((friend) => {
// 			return friend.name.startsWith(search);
// 		});
// 	}
// 	if (limit) {
// 		friendsData = friendsData.slice(0, Number(limit));
// 	}

// 	if (friendsData < 1) {
// 		res.status(200).json({ success: true, data: []});
// 	}

// 	req.friendsData = friendsData;

// 	res.status(200).json(req.friendsData);
// };



// module.exports = {};
