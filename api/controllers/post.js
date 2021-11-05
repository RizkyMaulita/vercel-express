const { default: axios } = require("axios");

class PostController {
  static async findAllPost (req, res) {
    try {
      const hostname = req.hostname
      const { data } = await axios.get(`http://${hostname}:3001/posts`)
      res.status(200).json(data)
    } catch(error) {
      console.log(error)
      res.status(400).json({ message: 'An error occured while find all post !' })
    }
  }
}

module.exports = PostController