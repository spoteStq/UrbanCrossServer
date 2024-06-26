import { faker } from '@faker-js/faker';
('use strict');

const boilerManufacturers = ['Nike', 'Adidas', 'Puma', 'New Balance'];

const partsManufacturers = ['36', '37', '38', '39', '40', '41', '42', '43'];

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface) {
  return queryInterface.bulkInsert(
    'BoilerParts',
    [...Array(100)].map(() => ({
      boiler_manufacturer:
        boilerManufacturers[
          Math.floor(Math.random() * boilerManufacturers.length)
        ],
      parts_manufacturer:
        partsManufacturers[
          Math.floor(Math.random() * partsManufacturers.length)
        ],
      price: faker.random.numeric(4),
      name: faker.lorem.sentence(2),
      description: faker.lorem.sentence(10),
      images: JSON.stringify(
        [...Array(7)].map(
          () => `${faker.image.technics()}?random=${faker.random.numeric(30)}`,
        ),
      ),
      vendor_code: faker.internet.password(),
      in_stock: faker.random.numeric(1),
      bestseller: faker.datatype.boolean(),
      new: faker.datatype.boolean(),
      popularity: faker.random.numeric(3),
      compatibility: faker.lorem.sentence(7),
      createdAt: new Date(),
      updatedAt: new Date(),
    })),
  );
}
export async function down(queryInterface) {
  return queryInterface.bulkDelete('BoilerParts', null, {});
}
