module.exports = {
  inputs: {},
  exits: {
    success: {
      responseType: 'inertia'
    }
  },
  fn: async function (inputs) {
    const users = await User.find()
    return { page: 'users/index', props: { users } }
  }
}