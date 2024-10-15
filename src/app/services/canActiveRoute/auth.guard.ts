import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

// Simulating user role
let user = 'user';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router); // Properly inject Router

  if (user !== 'admin') {
    router.navigate(['/not-registered']); 
    return false;
  }
  
  return true; 
};
