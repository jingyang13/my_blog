'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const artcles = []
    const counts = 100
    for (let i = 1; i <= counts; i++) {
      const artcle = {
        title: `文章的标题 ${i}`,
        content: `文章的内容 ${i}`,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      artcles.push(artcle)
    }
    await queryInterface.bulkInsert('Artcles', artcles, {})
  },

  async down(queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Artcles', null, {});
  }
};
