let _drawer;

export function setTopLevelDrawer (drawer) {
  _drawer = drawer;
}

export function openDrawer () {
  _drawer._root.open()
}

export function closeDrawer () {
  _drawer._root.close()
}