// src/models/Transaction.js
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define("Transaction", {
    description: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
    amount: { 
      type: DataTypes.FLOAT, 
      allowNull: false 
    },
    type: { 
      type: DataTypes.ENUM("income", "fixed", "variable"), 
      allowNull: false 
    },
    userId: { 
      type: DataTypes.INTEGER, 
      allowNull: false 
    },
  });

  // Optionale Assoziationen hier hinzufügen
  Transaction.associate = (models) => {
    // Beispiel für eine Assoziation, falls nötig:
    // Transaction.belongsTo(models.User, { foreignKey: 'userId' });
  };

  return Transaction;
};

