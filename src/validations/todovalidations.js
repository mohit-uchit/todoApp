const z = require('zod')

const statusEnum = z.literal(["pending", "in_progress", "completed"])
const priorityEnum = z.literal(["low", "medium", "high"])

const createTodoValidation = z.object({
    title : z.string().min(2).max(200),
    status : statusEnum.default('pending'),
    description : z.string().min(10).max(2000),
    priority : priorityEnum.default("medium"),
    dueDate : z.coerce.date().optional(),
    tags : z.array(z.string().optional()).optional()
})

// PATCH ke liye sab fields optional, bina defaults ke (warna existing values overwrite ho jayengi)
const updateTodoValidation = z.object({
    title : z.string().min(2).max(200).optional(),
    status : statusEnum.optional(),
    description : z.string().min(10).max(2000).optional(),
    priority : priorityEnum.optional(),
    dueDate : z.coerce.date().optional(),
    tags : z.array(z.string()).optional()
}).refine(data => Object.keys(data).length > 0, { message : 'At least one field is required to update' })

module.exports = {
    createTodoValidation,
    updateTodoValidation
}
