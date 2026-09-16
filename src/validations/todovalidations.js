const z = require('zod')


const todo = z.object({
    title : z.string().min(2).max(200),
    status : z.literal(["pending", " in_progress", " completed"]).default('pending'),
    description : z.string().min(10).max(2000),
    priority : z.literal(["low", "medium","high"]).default("medium"),
    tags : z.array(z.string().optional()).optional()
}) 

module.exports = todo
