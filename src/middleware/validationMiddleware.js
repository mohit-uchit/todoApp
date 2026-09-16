const z = require('zod')

const validate = (schema) => (req, res, next) => {

    const result = schema.safeParse(req.body)

    if (!result.success) {
        return res.status(400).json({
            error: z.treeifyError(result.error)
        })
    }

    req.body = result.data
    next()
}

module.exports = validate