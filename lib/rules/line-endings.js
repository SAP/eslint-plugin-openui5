/**
 * @fileoverview Check for correct line endings
 * @author Christoph Kraemer <chr.kraemer@sap.com>
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function (context) {

	var config = {
		ending: "\\n"
	};

	if (context.options[0]) {
		config.ending = context.options[0];
	}

	return {

		"Program": function checkLineEndings(node) {
			// Get the whole source code, not for node only.
			var src = context.getSource(), re;

			switch (config.ending) {
				case "\\r\\n":
					re = /[^\r]\n|\r(?!\n)/;
					break;
				case "\\r":
					re = /\n/;
					break;
				default:
					re = /\r/;
			}

			if (re.test(src)) {
				context.report(node, 1, "Invalid line endings.");
			}
		}

	};

};
