# E-Commerce Checkout Process with Angular Guards

You are developing an e-commerce application with a checkout process that includes multiple steps: cart review, shipping information, payment details, and order confirmation. To ensure a smooth user experience and enforce business logic, you need to implement several Angular route guards.

## Requirements

### Guards to Implement

1. **CanActivateAuthGuard**: Protect the entire checkout process, ensuring that only authenticated users can access any of the checkout steps.

2. **CanDeactivateGuard**: Prevent users from accidentally navigating away from the payment details page if they have not completed their payment information. A confirmation dialog should be shown if they attempt to leave.

3. **CanActivateChildGuard**: Ensure that users can only access child routes under the checkout process if they have completed the previous steps (e.g., they cannot go directly to payment details without first reviewing the cart and entering shipping info).

4. **Resolve Guard**: Load any necessary data (e.g., shipping options, payment methods) before entering the shipping information and payment details routes. This data should be available for the components when they are loaded.

### Lazy Loading

Implement lazy loading for the checkout module to improve application performance.

## Implementation Steps

### 1. Create the Guards

- **CanActivateAuthGuard**: Verify if the user is logged in before allowing access to the checkout routes.

- **CanDeactivateGuard**: Implement logic to check if the payment form is dirty (has unsaved changes) and prompt the user if they try to leave.

- **CanActivateChildGuard**: Ensure users have completed the previous steps by checking conditions like the existence of shipping info before allowing access to the payment details route.

- **Resolve Guard**: Fetch necessary data like shipping options and payment methods and ensure it’s available before rendering the components.

### 2. Set Up Routing

Define routes for each step in the checkout process, ensuring proper parent-child relationships. Apply the guards to the appropriate routes.

#### Example Routes Configuration

```typescript
const routes: Routes = [
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule),
    canActivate: [CanActivateAuthGuard]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

// Inside Checkout Module
const checkoutRoutes: Routes = [
  {
    path: 'cart',
    component: CartReviewComponent,
    canActivate: [CanActivateAuthGuard]
  },
  {
    path: 'shipping',
    component: ShippingInfoComponent,
    resolve: { shippingOptions: ShippingOptionsResolver },
    canActivate: [CanActivateAuthGuard]
  },
  {
    path: 'payment',
    component: PaymentDetailsComponent,
    canDeactivate: [CanDeactivateGuard],
    canActivateChild: [CanActivateChildGuard]
  },
  {
    path: 'confirmation',
    component: OrderConfirmationComponent,
    canActivate: [CanActivateAuthGuard]
  }
];
```

## Expected Outcome:
- When a user tries to access any checkout step, the CanActivateAuthGuard will check if they are authenticated.
- If the user tries to navigate away from the payment details page without completing the form, the CanDeactivateGuard will prompt them with a confirmation dialog.
- The CanActivateChildGuard will ensure that users cannot jump directly to the payment details route unless they have completed the previous steps, like entering shipping information.
- The Resolve guard will fetch shipping options before entering the shipping information route, making the data available immediately.
- The checkout module will be lazily loaded, improving the overall performance of the application by loading it only when necessary.