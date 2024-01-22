FOSWIKI_ROOT?=~/foswiki/core
TARGET=pkg.js jquery.select2.css
PKG_SOURCE=jquery.select2.uncompressed.js jquery.select2.init.uncompressed.js

-include $(FOSWIKI_ROOT)/pub/System/JQueryPlugin/Makefile.include

clean:
	rm -f $(TARGET) pkg.uncompressed.js *.gz

pkg.uncompressed.js: $(PKG_SOURCE)
	@echo generating $@
	@$(CAT) $^ > $@
