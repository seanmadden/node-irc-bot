/*
 * 02/10/2014
 * IRC module written by Sean Madden (https://github.com/seanmadden)
 *
 *
 * This library is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this library.  If not, see <http://www.gnu.org/licenses/>.
 */

exports.Client = Client;
var net = require('net');


function Client(server, port, nickname) {
	this.options = {
		userName: "nodebot",
		realName: "Node IRC Bot",
		server: server,
		port: port,
		nick: nickname
	};
}

Client.prototype.connection = null;

Client.prototype.connect = function() {
	var self = this;

	this.connection = net.createConnection(self.options.port, self.options.server);

	self.connection.addListener("connect", function() {
		console.log("Connected!");
	});

	self.connection.addListener("data", function(data) {
		console.log("Data received:" + data);
	})
};

