// src/models/Account.js
module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define("Account", {
    bankName: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
    accountNumber: { 
      type: DataTypes.STRING, 
      allowNull: false, 
      unique: true 
    },
    userId: { 
      type: DataTypes.INTEGER, 
      allowNull: false 
    },
  });

  // Optionale Assoziationen hier hinzufügen
  Account.associate = (models) => {
    // Beispiel für eine Assoziation, falls nötig:
    // Account.belongsTo(models.User, { foreignKey: 'userId' });
  };

  return Account;
};

