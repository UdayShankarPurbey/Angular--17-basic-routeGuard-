import { CanActivateFn } from '@angular/router';


export const showpopupGuard: CanActivateFn = (route, state) => {

  const data = confirm("Are you sure you want to leave");

  if(data) {
    return true;
  } else {
    return false;
  }

};
