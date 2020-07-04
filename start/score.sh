
#
# Find the right installation script.
#

score() {
  mount Darwin      x86_64
  mount Linux       x86_64
  mount Windows_NT  x86_64

  catch Darwin      "Power Macintosh"
  catch Darwin      i386
  catch Linux       armv8b
  catch Linux       armv8l
  catch Linux       armv7l
  catch Linux       armv6l
  catch Linux       sparc64
  catch Linux       ppc64
  catch Linux       i686
  catch Linux       ppc
  catch Linux       k1om
  catch Linux       mips
  catch Windows_NT  i686
  catch MINGW32_NT  x86_64
  catch MINGW32_NT  i686
  catch MSYS_NT     x86_64
  catch MSYS_NT     i686
  catch FreeBSD     i386
  catch FreeBSD     amd64
  catch CYGWIN_NT   i686
  catch CYGWIN_NT   x86_64
  catch OpenBSD     amd64
  catch SunOS       sun4u
  catch SunOS       i86pc
  catch MS-DOS      i686

  crash
}

#
# Mount.
#

mount() {
  if [ "$brand" =~ "$1"* ] && [ "$stack" =~ "$2" ]
  then
    drive "https://stone.mount.build/$1.$2.sh"
    break 0
  fi
}

#
# Void.
#

catch() {
  if [ "$brand" =~ "$1"* ] && [ "$stack" =~ "$2"* ]
  then
    write "$brand on $stack not yet supported."
    break 0
  fi
}

#
# Cause script evaluation.
#

drive() {
  sh -c "$(fetch $1)"
}

#
# Load.
#

fetch() {
  curl -sL "$1"
}

#
# Crash if unknown OS.
#

crash() {
  write "$brand on $stack not supported."
  break 0
}

#
# Get operating system.
#

brand() {
  uname -s
}

#
# Get architecture.
#

stack() {
  uname -m
}

#
# Show.
#

write() {
  printf "\n  $1\n\n"
}

#
# Halt.
#

break() {
  exit $1
}

#
# Start.
#

score
