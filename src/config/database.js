module.exports = {
  dialect: 'postgres',
  host: 'edu-chatbot-postgres',
  username: 'postgres',
  password: 'secret',
  database: 'educhatbot',
  define: {
    timestamps: true,
    underscored: true
  },
}