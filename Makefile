all: jquery.link.classifier.min.js

jquery.link.classifier.min.js: jquery.link.classifier.js
	closure.sh --js=jquery.link.classifier.js --js_output_file=jquery.link.classifier.min.js

clean:
	rm -f jquery.link.classifier.min.js

.PHONY: clean
