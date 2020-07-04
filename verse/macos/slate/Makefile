
OPTS := -Xswiftc "-target" -Xswiftc "x86_64-apple-macosx10.15"

build:
	@swift build $(OPTS)
	@swift run $(OPTS)
.PHONY: build
	
install:
	@swift package update
