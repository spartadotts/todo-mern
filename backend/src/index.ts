import express from "express"
import cors from 'cors'
import { inputTodo, updateTodo } from "./zodtypes";
import todoModel from "./db";
const app = express();
app.use(express.json());
app.use(cors());

app.post('/todos', async (req,res) => {
    const inputPayload = req.body;
    const parsedPayload = inputTodo.safeParse(inputPayload);

    if(!parsedPayload.success){
        res.status(411).json({
            message: "Invalid inputs"
        });
        return;
    }
    try{
        await todoModel.create({
            title: inputPayload.title,
            description: inputPayload.description,
            completed: false
        });
        res.json({
            message: "Todo created"
        })
    }
    catch(e){
        res.status(411).json({
            message: "Error while creating"
        })
    }
});

app.get('/todos',async (req,res) => {
    try {
       const todos = await todoModel.find();
        res.json({
            todos
        })
        
    } catch (e) {
        console.log(e);
        res.status(404).json({
            message: "Error while fetching"
        })
    }
})

app.put('/completed', async (req,res) => {
    const inputPayload = req.body;
    const parsedPayload = updateTodo.safeParse(inputPayload);

    if(!parsedPayload.success){
        res.status(411).json({
            message: "Wrong inputs"
        })
        return;
    }

    try{
        await todoModel.updateOne(
            { _id: inputPayload.id },
            { $set: { completed: true } 
        });

        res.json({
            message:"Todo updated completed"
        });

    } catch(e){

        return res.json({
            message:"Error while updating"
        });
    }
    
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})