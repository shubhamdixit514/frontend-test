const fs = require('fs').promises

const getComments = async (req, res) => {
  try {
    const { briefref } = req.params

    const data = await fs.readFile('./server/data/comments.json', 'utf8')
    const comments = JSON.parse(data)
    const commentsForBriefref = comments.filter(
      (comment) => comment.briefref === briefref
    )

    res.json(commentsForBriefref)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

module.exports = getComments
