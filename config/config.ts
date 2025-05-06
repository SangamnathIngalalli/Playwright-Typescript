export const config = {
  baseUrl: process.env.BASE_URL || 'https://opencart-demo.com',
  credentials: {
    standard: {
      email: 'test@example.com',
      password: 'password123'
    },
    admin: {
      email: 'admin@example.com',
      password: 'admin123'
    }
  },
  timeout: {
    short: 10000,
    medium: 30000,
    long: 60000
  },
  browserOptions: {
    headless: true,
    slowMo: process.env.SLOW_MO ? parseInt(process.env.SLOW_MO) : 0
  }
};