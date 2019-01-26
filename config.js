require('dotenv').load()

const config = {
  facebook: {
    username: process.env.USER_NAME,
    password: process.env.PASSWORD,
    postUrl: process.env.POST_URL,
    commentText: process.env.COMMENT_TEXT
  }
}

module.exports = {
  config
}
