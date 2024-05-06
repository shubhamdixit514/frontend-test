const fs = require('fs').promises

const getFeed = async (req, res) => {
  try {
    const { page } = req.params
    const PAGE_SIZE = 5
    const startIndex = (page - 1) * PAGE_SIZE
    const endIndex = page * PAGE_SIZE

    const data = await fs.readFile('./server/data/feed.json', 'utf8')
    const feed = JSON.parse(data)
    const paginatedFeed = feed.slice(startIndex, endIndex)
    res.json(paginatedFeed)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

module.exports = getFeed
