import { Sequelize, DataTypes } from 'sequelize';

// Create an instance of Sequelize and establish a connection to your database
const sequelize = new Sequelize('crud_db', 'root', '', {
  dialect: 'mysql', // Replace with your database dialect
  // Other configuration options...
});

// Define the User model
const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  gender: {
    type: DataTypes.STRING,
  },
});

// Synchronize the model with the database
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to database has been established successfully.');

    await sequelize.sync({ alter: true }); // Sync models with the database
    console.log('Models have been synchronized.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

export default User;
