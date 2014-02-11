var irc = require("./irc");

var bot = new irc.Client("localhost", 6667, "aBot");

bot.connect();
