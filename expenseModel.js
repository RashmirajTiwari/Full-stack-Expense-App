const Sequelize=require('sequelize');
const sequelize=require('./database')
const Expenses=sequelize.define('Expenses',{
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  itemName:Sequelize.STRING,
  category:Sequelize.STRING,
  price:Sequelize.INTEGER,
  quantity:Sequelize.INTEGER,

})
module.exports=Expenses;