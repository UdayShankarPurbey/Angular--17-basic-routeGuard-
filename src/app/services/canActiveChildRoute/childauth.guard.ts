import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


const user : string = 'user'
export const childauthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router); 

  if (user !== 'admin') {
    alert("You Don't have permission to Access ");
    return false;
  }

  return true;
};
