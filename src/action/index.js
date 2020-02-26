/**
 * Actions
 * =========
 * The only way your application can interact with the store
 * carry some information from your app to the redux store
 * plain javascipt objects
 * have a 'type' property that indicates the type of action being performed
 * The 'type' property is typically defined as string constants
 */

/**
 * Synchronous Actions
 * ===================
 * As soon as an action was dispatched, the state was immediately updated.
 * If you dispatch the BUY_CAKE action, the numOfCakes was right away decremented by 1.
 * Same with BUY_ICECREAM action as well
 *
 * Async Actions
 * =================
 * Asynchronous API calls to fetch data from an end point and use that
 * data in your application.
 *
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
