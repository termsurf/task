
#
# Bind.
#

mount() {
  local home=%userprofile%
}

#
# Load.
#

boot() {
  open -a "$1"
}

#
# Download.
#

load() {
  curl -sL $1 > $2
}

#
# Download and turn on app.
#

bind
