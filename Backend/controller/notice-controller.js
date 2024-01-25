// controllers/notice-controller.js
import Notice from "../model/notice.js";

// Controller to add a new notice
export const addNotice = async (req, res) => {
    try {
        const {notice } = req.body;

        const newNotice = new Notice({  notice });
        await newNotice.save();

        res.status(201).json({ message: 'Notice added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
};
