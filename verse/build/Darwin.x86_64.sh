
#
# Bind.
#

mount() {
  house ~/.stone
  fetch https://stone.mount.build/mac.zip > ~/.stone/mount.zip
  build
  start stone
}

#
# Create directory.
#

house() {
  mkdir -p $1
}

#
# Build file.
#

build() {
  mv ~/.stone/mount.zip $(md5 ~/.stone/mount.zip)
}

#
# Load.
#

start() {
  open -a "$1"
}

#
# Download.
#

fetch() {
  curl -sL $1 > $2
}

#
# Download and turn on app.
#

mount
