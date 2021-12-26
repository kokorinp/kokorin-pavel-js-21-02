// const UserUtils = require('../utils/usersUtils');

const { DateToString } = require('../utils/DateUtils');

class UserMapper {
  list(userList) {
    return {
      ...userList,
      data: userList.data.map((user) => {
        const fullname = `${user.title ? `${user.title}. ` : ''}${user.firstName} ${user.lastName}`;
        return {
          ...user,
          fullname,
        };
      }),
    };
  }

  userid(user) {
    return {
      ...user,
      fullname: `${user.title ? `${user.title}. ` : ''}${user.firstName} ${user.lastName}`,
      dateOfBirth: user.dateOfBirth ? DateToString(user.dateOfBirth) : '',
      dateOfBirthRaw: user.dateOfBirth || '',
      registerDate: user.registerDate ? DateToString(user.registerDate) : '',
      registerDateRaw: user.registerDate || '',
    };
  }
}

module.exports = new UserMapper();
