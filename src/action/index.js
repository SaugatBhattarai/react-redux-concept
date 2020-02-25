/**
 * Actions
 * =========
 * The only way your application can interact with the store
 * carry some information from your app to the redux store
 * plain javascipt objects
 * have a 'type' property that indicates the type of action being performed
 * The 'type' property is typically defined as string constants
 */

const buyCake = () => {
  return {
    type: "BUY_CAKE",
    info: "My first redux app to create BUY CAKE."
  };
};

export default buyCake;
