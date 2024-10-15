import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


const user : string = 'admin';
export const loadModuleGuard: CanActivateFn = (route, state) => {

  const router = inject(Router); 

  if (user !== 'admin') {
    router.navigate(['/not-registered']); 
    return false;
  }
  
  return true;
};
