import menu from '../menu';

const menuArray = {};

const resolveMenu = (item) => {
  item.map(ite => {
    menuArray[ite.route] = ite.name;
    if (ite.children) {
      resolveMenu(ite.children);
    }
  })
}

resolveMenu(menu);

export default menuArray;