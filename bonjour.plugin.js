/**
 * @name Bonjour
 * @version 1.7
 * @description dojo
 * @author toto
 * @source https://github.com/An00nymushun/DiscordFreeEmojis
 * @updateUrl https://raw.githubusercontent.com/An00nymushun/DiscordFreeEmojis/main/DiscordFreeEmojis64px.plugin.js
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