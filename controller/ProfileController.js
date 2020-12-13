const User = require('../model/UserModel');

exports.getProfileInfo = async (req, res) => {
	try {
		const user = await User.findById(req.decodedUser._id).select('-password');
		res.status(200).json(user);
	} catch (error) {
        console.error(err.message)
		res.status(500).json({ message: 'server error' });
	}
};

exports.updateProfileInfo = async (req, res) => {
    try {
        const editInfo = req.body
        console.log("*****", editInfo)
        const user = await User.findByIdAndUpdate(req.decodedUser._id , editInfo, {
            new : true,
            runValidators : true
        }).select("-password")
        res.status(200).json({success : true, user})
    } catch (error) {
        console.error(err.message)
        res.status(500).json({error:{message : "Server Error"}})

        
    }
}
