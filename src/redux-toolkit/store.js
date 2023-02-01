import { configureStore } from '@reduxjs/toolkit';
import notificationsReducer from './reducers/notifications/notification.reducer';
import suggestionsReducer from './reducers/suggestions/suggestions.reducer';
import userReducer from './reducers/user/user.reducer';

export const store = configureStore({
  reducer: {
    user: userReducer,
    suggestions: suggestionsReducer,
    notifications: notificationsReducer
  }
});
