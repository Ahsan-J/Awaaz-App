import { NavigationActions } from 'react-navigation';

let _navigator;

export function setTopLevelNavigator(navigator) {
  _navigator = navigator;
}

export function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

export function resetNavigate(routeName, params) {
  _.navigator.dispatch(
    StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({
        routeName,
        params
      })
      ],
    })
  );
}

export function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getActiveRouteName(route);
  }
  return route.routeName;
}