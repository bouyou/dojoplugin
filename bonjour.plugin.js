
/**
 * @name bonjour
 * @author dojo
 * @description Describe the basic information. Maybe a support server link.
 * @version 0.0.1
 * @invite inviteCode
 * @authorId 51512151151651
 * @authorLink https://twitter.com/Whoever
 * @donate https://paypal.me/
 * @patreon https://patreon.com/
 * @website https://github.com/BetterDiscord/BetterDiscord
 * @source https://gist.github.com/rauenzi/e5f4d02fc3085a53872b0236cd6f8225
 */

module.exports = class MyPlugin {
    constructor(meta) {
      // Do stuff in here before starting
    }
  
    start() {
        // Do stuff when enabled
        const myButton = document.createElement("button");
        myButton.textContent = "Click me!";
        myButton.addEventListener("click", () => {window.alert("Hello World!");});
        const root = document.getElementById("app-mount");
        root.append(myButton);

        BdApi.UI.alert("Hello World", "This is just a basic informational modal!");
    }
  
    stop() {
      // Cleanup when disabled
    }
  };