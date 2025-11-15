import express from "express";

const db = {
  people: [
    {
		id: "0",
		name: "Bigbee",
		pwd: "qwerty",
    },
    {
		id: "1",
		name: "Smallbee",
		pwd: "asdfgh",
    },
	{
		id: "2",
		name: "Giantbee",
		pwd: "abcdef",
    },
	{
		id: "3",
		name: "Minibee",
		pwd: "ghijkl",
    },
  ],
};

let idCount = 2;

export const getPerson = (req, res) => {
	try {
		return res.status(200).json(db.people.filter((element) => element.id >= "0"));
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

export const createPerson = (req, res) => {
	const { name, pwd } = req.body;
	if (!name || !pwd) {
        return res.status(400).json({ message: "Name and password are required!" });
    }

	try {
		const newPerson = {
            id: idCount.toString(),
            name: name,
            pwd: pwd,
        };
		idCount++;
		db.people.push(newPerson);
		return res.status(201).json(newPerson);
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

export const updatePerson = (req, res) => {
	const { id } = req.params;
	const { name, pwd } = req.body;
	try {
		const personToUpdate = db.people.find((element) => element.id === id);
        if (!personToUpdate) {
            return res.status(404).json({ message: "Person not found!" });
        }

		if (name !== undefined) personToUpdate.name = name;
		if (pwd !== undefined) personToUpdate.pwd = pwd;

		return res.status(200).json(personToUpdate);
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

export const deletePerson = (req, res) => {
  	const { id } = req.params;
	try {
		const personExists = db.people.find((element) => element.id === id);
        if (!personExists) {
            return res.status(404).json({ message: "Person not found!" });
        }

		db.people = db.people.filter((element) => element.id !== id);
		return res.status(200).json({ message: "Person deleted successfully!" });
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

const router = express.Router();
// GET /api/
router.get("/", getPerson);
// POST /api/
router.post("/", createPerson);
// PUT /api/:id
router.put("/:id", updatePerson);
// DELETE /api/:id
router.delete("/:id", deletePerson);

export default router;