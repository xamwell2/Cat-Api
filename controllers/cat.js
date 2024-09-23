
let cats = [
    { id: '1', name: 'Whiskers', age: 1 },
    { id: '2', name: 'Fluffy', age: 2 },
    { id: '3', name: 'Midnight', age: 1 }
];

const catController = {
    getCats: (req, res) => {
        res.json(cats);
    },
    getCatById: (req, res) => {
        const { id } = req.params;
        const catExist = cats.find((cat) => cat.id === id);

        if (catExist) {
            res.status(200).json(catExist);
        } else {
            res.status(404).json('cat not found!');
        }
    },
    addCat: (req, res) => {
        const { name, age } = req.body;
        if (!name || !age) {
            res.status(400).send('please provide the name and age');
        } else {
            const newCat = { id: String(cats.length + 1), name, age };
            cats.push(newCat);
            res.status(201).json(newCat);
        }
    },
    updateCat: (req, res) => {
        const { id } = req.params;
        const { name, age } = req.body;
        const catExist = cats.find((cat) => cat.id === id);
        if (catExist) {
            if (name && age) {
                catExist.name = name;
                catExist.age = age;
                res.status(200).json(catExist);
            } else {
                res.status(400).send('Please provide name and age');
            }
        } else {
            res.status(404).send('Cat not found!');
        }
    },
    deleteCat: (req, res) => {
        const { id } = req.params;
        cats = cats.filter((cat) => cat.id !== id);
        res.status(200).send('Cat deleted!');
    }
};

export default catController;
