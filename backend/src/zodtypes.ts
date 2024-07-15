import zod from "zod";

export const inputTodo = zod.object({
    title: zod.string(),
    description: zod.string()
})

export const updateTodo = zod.object({
    id: zod.string()
})
                                                    


