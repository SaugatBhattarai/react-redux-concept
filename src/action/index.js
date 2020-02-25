/**
 * Actions
 * =========
 * The only way your application can interact with the store
 * carry some information from your app to the redux store
 * plain javascipt objects
 * have a 'type' property that indicates the type of action being performed
 * The 'type' property is typically defined as string constants
 */

export const buyCake = () => {
  return {
    type: "BUY_CAKE",
    info: "Buy cake action creater"
  };
};

export const buyIcecream = () => {
  return {
    type: "BUY_ICECREAM",
    info: "Buy Ice cream action creater"
  };
};
