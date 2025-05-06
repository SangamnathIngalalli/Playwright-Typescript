import { generateRandomEmail, generateRandomString } from './helpers';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  password: string;
}

export interface Product {
  name: string;
  price: number;
  description: string;
  model: string;
}

export class TestData {
  /**
   * Generate random user data
   */
  static generateUser(): User {
    return {
      firstName: `Test${generateRandomString(5)}`,
      lastName: `User${generateRandomString(5)}`,
      email: generateRandomEmail(),
      telephone: `${Math.floor(1000000000 + Math.random() * 9000000000)}`,
      password: `password${generateRandomString(8)}`
    };
  }

  /**
   * Get predefined test products
   */
  static getTestProducts(): Product[] {
    return [
      {
        name: 'iPhone',
        price: 123.20,
        description: 'iPhone description',
        model: 'product 11'
      },
      {
        name: 'MacBook',
        price: 602.00,
        description: 'MacBook description',
        model: 'Product 16'
      },
      {
        name: 'Samsung Galaxy Tab',
        price: 199.99,
        description: 'Samsung tablet description',
        model: 'Product 5'
      }
    ];
  }

  /**
   * Get a specific test product by name
   * @param name - Product name
   */
  static getProductByName(name: string): Product | undefined {
    return this.getTestProducts().find(product => product.name.includes(name));
  }
}