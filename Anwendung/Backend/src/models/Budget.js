// src/models/Budget.js
module.exports = (sequelize, DataTypes) => {
  const Budget = sequelize.define("Budget", {
    name: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
    amount: { 
      type: DataTypes.FLOAT, 
      allowNull: false 
    },
    userId: { 
      type: DataTypes.INTEGER, 
      allowNull: false 
    },
  });

  // Optionale Assoziationen hier hinzufügen
  Budget.associate = (models) => {
    // Beispiel für eine Assoziation, falls nötig:
    // Budget.belongsTo(models.User, { foreignKey: 'userId' });
  };

  return Budget;
};

