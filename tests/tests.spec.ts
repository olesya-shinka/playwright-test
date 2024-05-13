import { test, expect } from '@playwright/test';
import { AuthUser } from '../types/types';
import login from '../utils/api';


//тест для проверки того, что пользователь с такими данные авторизован
test('User login', async () => {
  const user: AuthUser = {
    email: 'test@itcase.pro',
    password: 'Ki2gxM75QrdDuNH9'
  };

  const loggedIn = await login(user);

  expect(loggedIn).toBe(true); 
});


// Тест для проверки того, что пользователь сохранился в localStorage
test('Check user in localStorage', async ({ page }) => {
  await page.goto('https://agro-management.itcase.pro');
  const user = await page.evaluate(() => {
    return localStorage.getItem('UserStore');
  });

  expect(user).not.toBeNull();
});