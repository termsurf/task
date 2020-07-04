// swift-tools-version:5.1

import PackageDescription

let package = Package(
  name: "stone-drive",
  products: [

  ],
  dependencies: [
    .package(
      path: "../../../../store/house/store.swift"
    )
  ],
  targets: [
    .target(
      name: "Drive",
      dependencies: ["Store"]
    )
  ],
  swiftLanguageVersions: [.v5]
)
