'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('products', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },

      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      descrition: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      price: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      
      quantify_stock: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },

      quantify_sold: {
        type:Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },

      discount_percent: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },

      discount_datetime_start : {
        type: Sequelize.DATE,
        allowNull: true,
      },

      discount_datetime_end : {
        type: Sequelize.DATE,
        allowNull: true,
      },

      create_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },

    });
  
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('products');
    
  }
};
