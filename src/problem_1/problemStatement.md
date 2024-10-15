# User Profile Management with Angular Guards

You are building a user profile management feature in an Angular application. This feature includes editing a user's profile, viewing a profile, and loading user-specific data. To enhance security and user experience, you need to implement various Angular route guards.

## Requirements

### Guards to Implement

1. **CanActivateAuthGuard**: Protect the profile editing route, ensuring that only authenticated users can access it.
  
2. **CanDeactivateGuard**: Prevent users from accidentally navigating away from the profile editing page without saving changes. If they attempt to navigate away, they should be prompted with a confirmation dialog.
  
3. **CanActivateChildGuard**: Ensure that only authenticated users can access any child routes under the profile section, such as viewing settings or preferences.
  
4. **Resolve Guard**: Load user-specific data before entering the profile view or edit routes. This guard should fetch the user's profile information and ensure it's available before rendering the component.

### Lazy Loading

Implement lazy loading for the profile module to optimize the application’s performance.

## Implementation Steps

### 1. Create the Guards

- **CanActivateAuthGuard**: Check if the user is authenticated by verifying a token or user service.
  
- **CanDeactivateGuard**: Implement logic to determine if there are unsaved changes in the form. If there are, return false to prompt for confirmation.
  
- **CanActivateChildGuard**: Similar to the CanActivateAuthGuard, check if the user is authenticated for child routes.
  
- **Resolve Guard**: Use a service to fetch the user’s profile data and return it to the route.

### 2. Set Up Routing

Define routes for the user profile, including child routes for settings and preferences. Apply the guards to the appropriate routes.

#### Example Routes Configuration

```typescript
const routes: Routes = [
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
    canActivate: [CanActivateAuthGuard]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

// Inside Profile Module
const profileRoutes: Routes = [
  {
    path: '',
    component: ProfileViewComponent,
    resolve: { userData: UserProfileResolver }
  },
  {
    path: 'edit',
    component: ProfileEditComponent,
    canDeactivate: [CanDeactivateGuard]
  },
  {
    path: 'settings',
    component: ProfileSettingsComponent,
    canActivateChild: [CanActivateChildGuard]
  }
];
```

## Expected Outcome:
- When a user tries to access the profile edit page, the CanActivateAuthGuard will verify if they are authenticated.
- If the user has unsaved changes and tries to navigate away from the edit page, the CanDeactivateGuard will prompt them with a confirmation dialog.
- The CanActivateChildGuard will ensure that only authenticated users can access child routes within the profile section.
- Before entering the profile view or edit routes, the Resolve guard will ensure that the user's profile data is fetched and ready to use.
- Lazy loading will optimize the application's performance by only loading the profile module when the user navigates to it.