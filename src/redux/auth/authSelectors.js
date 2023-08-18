const selectIsLoggedIn = state => state.auth.isLoggedIn;

const selectUsername = state => state.auth.user.name;

const selectCurrentUser = state => state.auth.isRefreshing;

const authSelectors = {
  selectIsLoggedIn,
  selectUsername,
  selectCurrentUser,
};
export default authSelectors;
