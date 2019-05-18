// Dependencies
// =============================================================
module.exports = function(sequelize, DataTypes) {
  var Transaction = sequelize.define(
    "Transaction",
    {
      Transaction_Desc: DataTypes.TEXT,
      Tokens_Transaction_amount: DataTypes.INTEGER,
      User_Name_requesting_service: DataTypes.STRING,
      User_Name_Providing_service: DataTypes.STRING,
      TotalTokensBalance: DataTypes.STRING,
      created_at: DataTypes.DATE
    },

    {
      freezeTableName: true
    }
  );

  Transaction.associate = function(models) {
    Transaction.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Transaction;
};
