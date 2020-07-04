// swift-tools-version:5.1

import PackageDescription

let package = Package(
  name: "stone",
  products: [

  ],
  dependencies: [
    .package(
      path: "../../../store/house/store.swift"
    )
  ],
  targets: [
    .target(
      name: "Stone",
      dependencies: ["Store"]
    )
  ],
  swiftLanguageVersions: [.v5]
)
