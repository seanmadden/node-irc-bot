var irc = require("./irc");

var bot = new irc.Client("irc.freenode.net", 6667, "aBot");

bot.connect();
