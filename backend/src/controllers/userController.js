import * as userService from "../services/userServices.js";

export const getUsers = async (req, res) => {
    try {
        const users = await userService.getUsers();
        res.status(200).json(users);
    }
    catch(err) {
        console.error("Error fetching users:", err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const createUser = async (req, res) => {
    try {
        const userData = req.body;
        const newUser = await userService.createUser(userData);
        res.status(200).json(newUser);
    }
    catch(err) {
        console.error("Error creating user:", err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const userData = req.body;
        const updatedUser = await userService.updateUser(userData, userId);

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(updatedUser);
    }
    catch(err) {
        console.error("Error updating user:", err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await userService.deleteUser(userId);

        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).send();
    }
    catch(err) {
        console.error("Error deleting user:", err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};