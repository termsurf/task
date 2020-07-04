
public class C {
  private var arr: [ Any? ]

  public init() {
    arr = [ UInt32(0), [] ]
  }

  public func save(_ index: UInt32, _ value: Any) {
    arr[Int(index)] = value
  }

  public func fetch(_ index: UInt32) -> Any {
    return arr[Int(index)] as Any
  }

  public func next() -> UInt32 {
    var grp = arr[1] as! Array<UInt32>
    let first:UInt32? = grp.removeFirst()
    if first != nil {
      return first!
    } else {
      let first = arr[0] as! UInt32
      let value = first + 1
      arr[0] = value
      return value
    }
  }

  public func remove(_ a:UInt32) {
    if (a < 2) {
      return
    }
    var grp = arr[1] as! Array<UInt32>
    grp.append(a)
    arr[Int(a)] = nil
  }
}


// //   public func mount_plain() {
// //     // let delegate = ApplicationDelegate()
// //     // NSApplication.shared.delegate = delegate
// //     // let block = NSApplicationMain(CommandLine.argc, CommandLine.unsafeArgv)
// //     // NSApplication.shared.delegate = nil
// //   }

// //   public func fetch_prime_mount() -> MountBuild {
// //     return MountBuild.shared
// //   }

// //   public func fetch_prime_space_brand() -> Chord {
// //     return SpaceBrief.processInfo.processName
// //   }

// //   public func build_cloud_place_spawn(_ place: CloudPlace) -> CloudPlaceSpawn {
// //     return URLRequest(url: place)
// //   }

// //   // set up the session
// //   public func fetch_cloud_place_guest_state() -> CloudPlaceGuestState {
// //     return URLSessionConfiguration.default
// //   }

// //   public func fetch_cloud_place_guest(_ state: CloudPlaceGuestState) -> CloudPlaceGuest {
// //     return URLSession(configuration: state)
// //   }

// //   // // make the request
// //   // let pitch = guest.dataTask(with: spawn) {
// //   //   (data, response, error) in
// //   //   // check for any errors
// //   //   guard error == nil else {
// //   //     print("error calling GET on /todos/1")
// //   //     print(error!)
// //   //     return
// //   //   }
// //   //   // make sure we got data
// //   //   guard let responseData = data else {
// //   //     print("Error: did not receive data")
// //   //     return
// //   //   }
// //   // }

// //   // pitch.resume()

// //   public func build_plane_glass() -> PlaneGlass {
// //     return PlaneGlass(
// //       contentRect: NSMakeRect(0, 0, 200, 200),
// //       styleMask: .fullSizeContentView,
// //       backing: PlaneGlass.BackingStoreType.buffered,
// //       defer: false
// //     )
// //   }

// //   public func build_graph_drive_sheet(_ drive: GraphDrive, _ brief: GraphDriveSheetBrief) -> GraphDriveSheet? {
// //     return drive.makeTexture(descriptor: brief)
// //   }

// //   public func scope_plane_glass_brand(_ glass: PlaneGlass, brand: Chord) {
// //     glass.title = brand
// //   }

// //   public func clear_plane_glass_ridge(_ glass: PlaneGlass) {
// //     glass.titleVisibility = .hidden
// //     glass.titlebarAppearsTransparent = true
// //   }

// //   public func prime_plane_glass(_ glass: PlaneGlass) {
// //     glass.makeKeyAndOrderFront(nil)
// //   }

// //   public func start_prime_mount(_ mount: MountBuild) {
// //     mount.run()
// //   }

// //   public func build_graph_drive_store_block_brief() -> GraphDriveStoreBlockBrief {
// //     return MTLHeapDescriptor()
// //   }

// //   public func build_graph_drive_store_block(_ drive: GraphDrive, _ brief: GraphDriveStoreBlockBrief) -> GraphDriveStoreBlock? {
// //     return drive.makeHeap(descriptor: brief)
// //   }

// // //   public func mound_board() {
// // // // let window =
// // // var screen = window.screen!
// // // var rect = screen.frame
// // // var height = rect.size.height
// // // var width = rect.size.width
// // // window.cascadeTopLeft(from:NSMakePoint(20,20))


// // //   }


// //   public func place_point_shard_front(shard: inout [Point], point: Point) {
// //     shard.append(point)
// //   }

// //   public func place_point_shard(shard: inout [Point], point: Point, place: Int) {
// //     shard.insert(point, at: place)
// //   }

// //   public func clear_point_shard(shard: inout [Point], place: Int) {
// //     shard.remove(at: place)
// //   }

// //   /**
// //    * Check equal.
// //    */

// //   public func check_match(_ a:Phase, _ b:Phase) -> Phase {
// //     return a == b
// //   }

// //   /**
// //    * And.
// //    */

// //   public func check_joint(_ a:Phase, _ b:Phase) -> Phase {
// //     return a && b
// //   }

// //   /**
// //    * Or.
// //    */

// //   public func check_merge(_ a:Phase, _ b:Phase) -> Phase {
// //     return a || b
// //   }

// //   func check_clear_count(_ a: CountPoint, _ b: CountPoint) -> Phase {
// //     return a > b
// //   }

// //   func check_start_count(_ a: CountPoint, _ b: CountPoint) -> Phase {
// //     return a < b
// //   }

// //   func check_match_start_count(_ a: CountPoint, _ b: CountPoint) -> Phase {
// //     return a <= b
// //   }

// //   func check_match_clear_count(_ a: CountPoint, _ b: CountPoint) -> Phase {
// //     return a >= b
// //   }

// // //   // unicode
// //   public func build_print_point(_ point: Int) -> Chord {
// //     return "\\u{point}"
// //   }

// // //   // cache_flash() {
// // //   //   // Load image.
// // //   // }

// // //   public func yield_count_chord(count: Int) -> Chord {
// // //     return String(count)
// // //   }

// //   public func yield_chord_count(_ chord: Chord) -> Count32 {
// //     if let count = Count32(chord) {
// //       return count
// //     } else {
// //       return Count32(0)
// //     }
// //   }

// //   public func yield_chord_float(chord: String) -> Float {
// //     if let float = Float(chord) {
// //       return float
// //     } else {
// //       return Float.nan
// //     }
// //   }

// //   public func count_crest(_ a: CountPoint, _ b: CountPoint) -> CountPoint {
// //     return max(a, b)
// //   }

// //   public func count_crest_float(_ a: Float, _ b: Float) -> Float {
// //     return max(a, b)
// //   }

// // //   public func p_count_floor(_ a:Numeric, _ b:Numeric) -> Numeric {
// // //     return min(a, b)
// // //   }

// // //   public func p_count_climb_floor(_ a:Numeric) -> Numeric {
// // //     return floor(a)
// // //   }

// // //   public func p_count_climb_crest(_ a:Numeric) -> Numeric {
// // //     return ceil(a)
// // //   }

// // //   public func p_count_climb_round(_ a:Numeric) -> Numeric {
// // //     return round(a)
// // //   }

// // //   public func p_count_climb_swing(_ a:Numeric) -> Numeric {
// // //     return abs(a)
// // //   }

// // //   public func p_share_cross_slope(_ a:Numeric) -> Numeric {
// // //     return cos(a)
// // //   }

// // //   public func p_share_slope_cross(_ a:Numeric) -> Numeric {
// // //     return acos(a)
// // //   }

// // //   public func p_share_climb_slope(_ a:Numeric) -> Numeric {
// // //     return sin(a)
// // //   }

// // //   public func p_share_slope_climb(_ a:Numeric) -> Numeric {
// // //     return asin(a)
// // //   }

// // //   public func p_share_cross_climb(_ a:Numeric) -> Numeric {
// // //     return tan(a)
// // //   }

// // //   public func p_share_climb_cross(_ a:Numeric) -> Numeric {
// // //     return atan(a)
// // //   }

// // //   public func p_share_climb_cross2(_ a:Numeric, _ b:Numeric) -> Numeric {
// // //     return atan2(a, b)
// // //   }

// // //   public func p_share_curve(_ a:Numeric) -> Numeric {
// // //     return log(a)
// // //   }

// // //   public func p_split_climb_cross(_ a:Numeric) -> Numeric {
// // //     return sqrt(a)
// // //   }

// //   public func fetch_glass_cross_scale() -> GraphFloat {
// //     if let screen = NSScreen.main {
// //       let rect = screen.frame
// //       return rect.size.width
// //     } else {
// //       return 0
// //     }
// //   }

// //   public func fetch_glass_climb_scale() -> GraphFloat {
// //     if let screen = NSScreen.main {
// //       let rect = screen.frame
// //       return rect.size.height
// //     } else {
// //       return 0
// //     }
// //   }

// //   public func fetch_slate_guide() -> FileManager {
// //     return FileManager.default
// //   }

// //   public func print(_ chord: String) {
// //     Swift.print(chord)
// //   }

// //   public func place_glass_block(glass: PlaneGlass, plane: Plane) {
// //     let sheet = glass.contentView! as Plane
// //     sheet.addSubview(plane)
// //   }

// //   public func place_block_round(_ sender: PlaneGlass?) {
// //     if let window = sender {
// //       let xPos = NSWidth((window.screen?.frame)!)/2 - NSWidth(window.frame)/2
// //       let yPos = NSHeight((window.screen?.frame)!)/2 - NSHeight(window.frame)/2
// //       let frame = NSMakeRect(xPos, yPos, NSWidth(window.frame), NSHeight(window.frame))
// //       window.setFrame(frame, display: true)
// //     }
// //   }

// //   public func place_prime_plane_guide(_ title: String, width: GraphFloat, guide: PlaneGuide) {
// //     let bar = NSStatusBar.system
// //     let statusItem = bar.statusItem(withLength: width)
// //     statusItem.title = title
// //     statusItem.highlightMode = true
// //     statusItem.menu = guide
// //   }

// //   /**
// //    * Open Context Menu.
// //    */

// //   public func place_plane_guide_mouse_point(_ guide: PlaneGuide) {
// //     guide.popUp(positioning: guide.item(at: 0), at: fetch_mouse_point(), in: nil)
// //   }

// //   public func fetch_mouse_point() -> Place {
// //     return Shift.mouseLocation as Place
// //   }

// //   public func build_plane_guide_point(_ title: Chord, press: Chord, cause: Selector?) -> PlaneGuidePoint {
// //     return PlaneGuidePoint(title: title, action: cause, keyEquivalent: press)
// //   }

// //   public func latch_mount() {
// //     NSApp.activate(ignoringOtherApps: true)
// //   }

// //   /**
// //    * For getting the thing from memory.
// //    */

// //   public func fetch_proof() {

// //   }

// //   // Initialize JavaScript -> App messaging.
// //   public func build_cloud_sheet(_ plane: Plane) {
// //     let cloud_sheet: CloudSheet! = CloudSheet(frame: plane.frame)
// //     cloud_sheet?.configuration.userContentController.add(plane as! WKScriptMessageHandler, name: "sweep")
// //     // window.webkit.messageHandlers.sweep.postMessage("hello");
// //   }

// //   // Initialize App -> JavaScript messaging.
// //   // https://stackoverflow.com/questions/26778955/wkwebview-evaluate-javascript-return-value
// //   public func yield_cloud_prose(_ sheet: CloudSheet, _ prose: Chord, cause: ((Any?, Error?) -> ())?) {
// //     sheet.evaluateJavaScript(prose, completionHandler: cause)
// //   }

// // //   public func yield_space(_ a:CGFloat, _ b:CGFloat, _ c:CGFloat, _ d:CGFloat) -> NSEdgeInsets {
// // //     return NSEdgeInsets(top: a, left: d, bottom: b, right: b)
// // //   }

// //   public func fetch_house_store_place(store: Chord, klass: Chord) -> URL {
// //     return Bundle.main.url(forResource: store, withExtension: klass)!
// //   }

// //   public func build_flick_block(_ place: CloudPlace) -> AVPlayer {
// //      return AVPlayer(url: place)
// //   }

// // // //   public func build_chord_plane() {
// // // //     // UITextView
// // // //   }

// //   public func fetch_paste_prose() -> [Chord] {
// //     // Set string to clipboard
// //     let board = NSPasteboard.general

// //     var shard: [Chord] = []
// //     for block in board.pasteboardItems! {
// //       if let chord = block.string(forType: NSPasteboard.PasteboardType(rawValue: "public.utf8-plain-text")) {
// //         shard.append(chord)
// //       }
// //     }

// //     return shard
// //   }

// // //   public func catch_prose_board(prose: String) {
// // //     // https://stackoverflow.com/questions/41452868/reading-from-the-clipboard-with-swift-3-on-macos
// // //     let pasteboard = NSPasteboard.general
// // //     pasteboard.declareTypes([NSPasteboard.PasteboardType.string], owner: nil)
// // //     pasteboard.setString(prose, forType: NSPasteboard.PasteboardType.string)
// // //   }

// //   public func raise_point_force(prime: Chord, guide: Chord) -> Phase {
// //     let alert = NSAlert()
// //     alert.messageText = prime
// //     alert.informativeText = guide
// //     alert.alertStyle = .warning
// //     alert.addButton(withTitle: "OK")
// //     alert.addButton(withTitle: "Cancel")
// //     return alert.runModal() == .alertFirstButtonReturn
// //   }

// //   public func raise_point(prime: Chord, guide: Chord) -> Phase {
// //     let alert = NSAlert()
// //     alert.messageText = prime
// //     alert.informativeText = guide
// //     alert.alertStyle = .informational
// //     alert.addButton(withTitle: "OK")
// //     alert.addButton(withTitle: "Cancel")
// //     return alert.runModal() == .alertFirstButtonReturn
// //   }

// // //   /**
// // //    * Maps.
// // //    */

// // //   public func build_globe_chart() {

// // //   }

// // //   /**
// // //    * Location marker.
// // //    */

// // //   public func place_globe_chart_point() {

// // //   }

// // // // // https://github.com/JohnSundell/Files/blob/master/Sources/Files.swift

// // // // extension Plate {
// // // //   public func place_store() {
// // // //     // get URL to the the documents directory in the sandbox
// // // //     // let documentsUrl = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask)[0] as NSURL

// // // //     // // add a filename
// // // //     // let fileUrl = documentsUrl.appendingPathComponent("foo.txt")

// // // //     // // write to it
// // // //     // try! str.write(to: fileUrl!, atomically: true, encoding: String.Encoding.utf8)
// // // //   }
// // // // }

// // // // let distantFuture = NSDate.distantFuture() as! NSDate

// // // // let args = Process.arguments

// //   public func fetch_prime_field() -> [Chord] {
// //     return CommandLine.arguments
// //   }

// //   public func clear_mount() {
// //     exit(-1)
// //   }

// //   public func fetch_mount_stage_chord() -> Chord {
// //     return Bundle.main.infoDictionary?["CFBundleShortVersionString"] as! Chord
// //   }

// //   public func fetch_slate_stash_group() -> CloudPlace {
// //       return FileManager.default.temporaryDirectory
// //   }

// //   public func fetch_space_field(_ field: Chord) -> Chord? {
// //     return ProcessInfo.processInfo.environment[field]
// //   }

// //   public func check_slate_yield(_ place: Chord) -> Phase {
// //     let guide = fetch_slate_guide()
// //     return guide.fileExists(atPath: place)
// //   }

// //   public func build_slate_group(_ place: Chord) throws {
// //     let guide = fetch_slate_guide()
// //     try guide.createDirectory(atPath: place, withIntermediateDirectories: true, attributes: nil)
// //   }
}

//   func check_clear_float(_ a: Float, _ b: Float) -> Phase {
//     return a > b
//   }

//   func check_start_float(_ a: Float, _ b: Float) -> Phase {
//     return a < b
//   }

//   func check_match_start_float(_ a: Float, _ b: Float) -> Phase {
//     return a <= b
//   }

//   func check_match_clear_float(_ a: Float, _ b: Float) -> Phase {
//     return a >= b
//   }

//   func merge_count_point(start: CountPoint, front: CountPoint) -> CountPoint {
//     return start + front
//   }

//   func prune_count_point(start: CountPoint, front: CountPoint) -> CountPoint {
//     return start - front
//   }

//   func split_count_point(start: CountPoint, front: CountPoint) -> CountPoint {
//     return start / front
//   }

//   func clone_count_point(start: CountPoint, front: CountPoint) -> CountPoint {
//     return start * front
//   }

//   func merge_count_float(start: Float, front: Float) -> Float {
//     return start + front
//   }

//   func prune_count_float(start: Float, front: Float) -> Float {
//     return start - front
//   }

//   func split_count_float(start: Float, front: Float) -> Float {
//     return start / front
//   }

//   func clone_count_float(start: Float, front: Float) -> Float {
//     return start * front
//   }

//   // public func build_glass(_ title: Chord?) -> PlaneGlass {
//   //   let glass = PlaneGlass(
//   //     contentRect: NSMakeRect(10, 10, 640, 500),
//   //     styleMask: [.titled, .resizable, .closable],
//   //     backing: .buffered,
//   //     defer: false
//   //   )
//   //   if let title = title {
//   //     glass.title = title
//   //   }
//   //   return glass
//   // }

//   public func clock() -> Count64 {
//     return mach_absolute_time()
//   }

//   public func pluck_count(_ start:Count32, _ front:Count32) -> Count32 {
//     return arc4random_uniform(front - start) + start
//   }

//   public func check_point(_ a:Phase) -> Phase {
//     return !check_swing(a)
//   }

//   public func check_swing(_ a:Phase) -> Phase {
//     return !a
//   }

//   public func build_black_phase() -> Phase {
//     return false
//   }

//   public func build_white_phase() -> Phase {
//     return true
//   }

//   public func build_chord() -> Chord {
//     return ""
//   }

//   public func build_graph_drive() -> GraphDrive? {
//     return MTLCreateSystemDefaultDevice()
//   }

//   public func build_graph_drive_plane() -> GraphDrivePlate {
//     return CAMetalLayer()
//   }

//   public func build_graph_drive_point_brief() -> GraphDrivePointBrief {
//     let brief = MTLVertexDescriptor()
//     let field = brief.attributes
//     field[0].format = .float3
//     field[0].offset = 0
//     field[0].bufferIndex = 0
//     field[1].format = .float3
//     // field[1].offset = MemoryLayout<Vec3>.size
//     field[1].bufferIndex = 0
//     field[2].format = .float2
//     // field[2].offset = MemoryLayout<Vec3>.size * 2
//     field[2].bufferIndex = 0
//     brief.layouts[0].stepFunction = .perVertex
//     // brief.layouts[0].stride = MemoryLayout<TexturedVertex>.size
//     return brief
//   }

//   public func build_graph_drive_trace_brief() -> GraphDrivePlumbTraceBrief {
//     let brief = MTLDepthStencilDescriptor()
//     brief.depthCompareFunction = .less
//     brief.isDepthWriteEnabled = true
//     brief.frontFaceStencil.stencilCompareFunction = .equal
//     brief.frontFaceStencil.stencilFailureOperation = .keep
//     brief.frontFaceStencil.depthFailureOperation = .incrementClamp
//     brief.frontFaceStencil.depthStencilPassOperation = .incrementClamp
//     brief.frontFaceStencil.readMask = 0x1
//     brief.frontFaceStencil.writeMask = 0x1
//     brief.backFaceStencil = nil
//     return brief
//   }

//   // public func swing(x) -> {
//   //   return ~x
//   // }

//   // public func and(a, b) -> {
//   //   return a & b
//   // }

//   // public func or(a, b) -> {
//   //   return a | b
//   // }

//   // public func xor(a, b) -> {
//   //   return a ^ b
//   // }

//   // public func shift_trace_start(a, b) -> {
//   //   return a << b
//   // }

//   // public func shift_trace_front(a, b) -> {
//   //   return a >> b
//   // }

//   public func build_graph_drive_plumb_sheet_brief(sheet: GraphDriveSheet) -> GraphDrivePaintBrief {
//     let brief = MTLRenderPassDescriptor()
//     let mount = brief.colorAttachments[0]!
//     mount.texture = sheet
//     mount.loadAction = .clear
//     mount.storeAction = .store
//     // mount.clearColor = _clearColor
//     brief.depthAttachment.texture = sheet
//     brief.stencilAttachment.texture = sheet
//     return brief
//   }

//   public func build_graph_drive_sheet_chain_brief(point: GraphDrivePatch, light: GraphDrivePatch) -> GraphDriveSheetChainBrief {
//     let brief = MTLRenderPipelineDescriptor()
//     let mount = brief.colorAttachments[0]!

//     brief.vertexFunction = point
//     brief.fragmentFunction = light

//     mount.pixelFormat = .bgra8Unorm
//     mount.isBlendingEnabled = true
//     mount.rgbBlendOperation = MTLBlendOperation.add;
//     mount.alphaBlendOperation = MTLBlendOperation.add;
//     mount.sourceRGBBlendFactor = MTLBlendFactor.one;
//     mount.sourceAlphaBlendFactor = MTLBlendFactor.one;
//     mount.destinationRGBBlendFactor = MTLBlendFactor.oneMinusSourceAlpha;
//     mount.destinationAlphaBlendFactor = MTLBlendFactor.oneMinusSourceAlpha;

//     return brief
//   }

//   public func build_graph_drive_pluck_state(drive: GraphDrive) -> GraphDriveFieldState {
//     let brief = MTLSamplerDescriptor()
//     brief.minFilter = MTLSamplerMinMagFilter.linear
//     brief.magFilter = MTLSamplerMinMagFilter.linear
//     brief.mipFilter = MTLSamplerMipFilter.nearest
//     brief.maxAnisotropy = 1
//     brief.sAddressMode = MTLSamplerAddressMode.clampToEdge
//     brief.tAddressMode = MTLSamplerAddressMode.clampToEdge
//     brief.rAddressMode = MTLSamplerAddressMode.clampToEdge
//     brief.normalizedCoordinates = true
//     brief.lodMinClamp = 0
//     brief.lodMaxClamp = Float.greatestFiniteMagnitude
//     return drive.makeSamplerState(descriptor: brief)!
//   }

//   public func build_graph_drive_yield_queue(_ drive: GraphDrive) -> GraphDriveYieldQueue? {
//     return drive.makeCommandQueue()
//   }

//   // func build_graph_drive_store_stack(_ drive: GraphDrive) {
//   //   return BufferProvider(device: drive, inflightBuffersCount: 3)
//   // }

//   public func build_graph_drive_chain_state(_ drive: GraphDrive, _ brief: GraphDriveSheetChainBrief) throws -> GraphDriveSheetChainState {
//     return try drive.makeRenderPipelineState(descriptor: brief)
//   }

//   public func build_graph_drive_plumb_trace(_ drive: GraphDrive, _ brief: GraphDrivePlumbTraceBrief) -> GraphDrivePlumbTraceState? {
//     return drive.makeDepthStencilState(descriptor: brief)
//   }

//   public func build_graph_drive_light(_ r: Double, _ g: Double, _ b: Double, _ a: Double) -> GraphDriveLight {
//     return MTLClearColorMake(r, g, b, a)
//   }

//   public func build_graph_drive_sheet_yield_weave(store: GraphDriveYieldStore, brief: GraphDrivePaintBrief) -> GraphDriveSheetYieldWeave? {
//     return store.makeRenderCommandEncoder(descriptor: brief)
//   }

//   public func build_graph_drive_yield_store(queue: GraphDriveYieldQueue) -> GraphDriveYieldStore? {
//     return queue.makeCommandBuffer()
//   }

//   public func build_graph_drive_space(_ cross: Count32, _ climb: Count32) -> GraphDriveSpace {
//     return MTLRegionMake2D(0, 0, Int(cross), Int(climb))
//   }

//   public func build_graph_drive_store_yield_weave(_ store: GraphDriveYieldStore) -> GraphDriveStoreYieldWeave? {
//     return store.makeBlitCommandEncoder()
//   }

//   public func build_graph_drive_patch(_ stash: GraphDriveStash, _ brand: Chord) -> GraphDrivePatch {
//     return stash.makeFunction(name: brand)!
//   }

//   public func build_graph_drive_mount_chain_state(_ drive: GraphDrive, _ patch: GraphDrivePatch) throws -> GraphDriveMountChainState {
//     return try drive.makeComputePipelineState(function: patch)
//   }

//   // public func yield(_ point:Point) {

//   // }

//   // public func place(_ point:Point, _ field: Count32, _ yield: Point) {
//   //   // [SOME_FIELD] = set_some_field(point, yield)
//   //   fetch(field)(point, yield)
//   // }

//   // public func build_graph_drive_store_trace(_ drive: GraphDrive, trace) -> GraphDriveStore! {
//   //   return drive.newBufferWithBytes(trace, length: scale, options: [])
//   // }

//   public func build_graph_drive_stash(_ drive: GraphDrive) -> GraphDriveStash? {
//     return drive.makeDefaultLibrary()
//   }

//   public func build_graph_drive_sheet_yield_weave(_ store: GraphDriveYieldStore, _ brief: GraphDrivePaintBrief) -> GraphDriveSheetYieldWeave? {
//     return store.makeRenderCommandEncoder(descriptor: brief)
//   }

//         // makeComputeCommandEncoder
//         // encoder.setComputePipelineState(self.cps)
//         // encoder.setTexture(drawable.texture, at: 0)
//         // encoder.setBuffer(self.timerBuffer, offset: 0, at: 1)

//         // descriptor.size = size
//         // descriptor.storageMode = storageMode
//         // descriptor.cpuCacheMode = cpuCacheMode

//   // public func mount_graph_drive(stage, drive) {
//   //   stage.device = drive
//   // }

//   public func scope_graph_drive_plane(_ plane: GraphDrivePlate) {
//     plane.pixelFormat = .bgra8Unorm
//     plane.framebufferOnly = true
//   }

//   // public func fetch_point_sweep<T>(_ klass: T.Type) {
//   //   return MemoryLayout<klass>.stride
//   // }

//   public func place_graph_drive_yield_store_brand(_ store: GraphDriveYieldStore, _ brand: Chord) {
//     store.label = brand
//   }

//   public func place_graph_drive_sheet_yield_count_brand(_ weave: GraphDriveSheetYieldWeave, _ brand: Chord) {
//     weave.label = brand
//   }

//   // public func place_graph_drive_light_store(_ weave: GraphDriveSheetYieldWeave, store) {
//   //   weave.setFragmentBuffer(buffer.1.buffer,
//   //     offset: 0,
//   //     atIndex: buffer.1.index
//   //   )
//   // }

//   public func place_graph_drive_sheet(_ weave: GraphDrivePatchYieldWeave, _ place: Count32, _ sheet: GraphDriveSheet) {
//     weave.setTexture(sheet, index: Int(place))
//   }

//   // public func place_graph_drive_store(weave: GraphDriveYieldWeave) {
//   //   weave.setBuffer(store, offset: 0, atIndex: place)
//   // }

//   // commandEncoder.dispatchThreadgroups(threadgroups, threadsPerThreadgroup: threadgroupCounts)

//   public func start_graph_drive_watch(_ weave: GraphDriveYieldWeave) {
//     weave.pushDebugGroup("draw morphing triangle")
//   }

//   public func clear_graph_drive_watch(_ weave: GraphDriveYieldWeave) {
//     weave.popDebugGroup()
//   }

//   // func build_graph_drive_plumb_sheet(_ drive: GraphDrive, _ brief: GraphDriveSheetChainBrief) -> GraphDriveSheet {
//   //   return drive.newTextureWithDescriptor(brief)
//   // }

//   // func build_graph_drive_plumb_sheet_brief(sheet: GraphDriveSheet) -> GraphDriveSheetBrief {
//   //   return MTLTextureDescriptor.texture2DDescriptorWithPixelFormat(
//   //     .Depth32Float_Stencil8,
//   //     width: sheet.width,
//   //     height: sheet.height,
//   //     mipmapped: false
//   //   )
//   // }

//   public func sleep_graph_drive_yield_store(_ store: GraphDriveYieldStore) {
//     store.waitUntilCompleted()
//   }

//   // public func paint_graph_drive(_ weave: GraphDriveSheetYieldWeave, store: IndexStore) {
//   //   weave.drawIndexedPrimitives(drawMode,
//   //     indexCount: store.indexCount,
//   //     indexType: .Count32,
//   //     indexBuffer: store.buffer,
//   //     indexBufferOffset: 0
//   //   )
//   // }

//   public func paint_graph_drive_sweep(_ weave: GraphDriveSheetYieldWeave, _ count: Count32) {
//     weave.drawPrimitives(
//       type: .point,
//       vertexStart: 0,
//       vertexCount: Int(count),
//       instanceCount: 1
//     )
//   }

//   public func flush_graph_drive_yield_store(_ store: GraphDriveYieldStore) {
//     store.commit()
//   }

//   public func sweep_graph_drive_sheet_space(_ sheet: GraphDriveSheet, _ space: GraphDriveSpace, trace: [Any], count: Count32) {
//     sheet.replace(
//       region: space,
//       mipmapLevel: 0,
//       withBytes: trace,
//       bytesPerRow: Int(count)
//     )
//   }

//   public func build_graph_drive_store(_ drive: GraphDrive, block: UnsafeRawPointer, scale: Int) -> GraphDriveStore {
//     return drive.makeBuffer(bytes: block, length: scale, options: [])!
//   }

//   public func build_graph_drive_sheet_mount(_ drive: GraphDrive) -> GraphDriveSheetMount {
//     return MTKTextureLoader(device: drive)
//   }

//   public func build_graph_drive_sheet_round() -> GraphDriveSheetGuide {
//     return MTLTextureUsage(
//       rawValue: MTLTextureUsage.shaderRead.rawValue | MTLTextureUsage.shaderWrite.rawValue
//     )
//   }

//   // public func build_graph_drive_shade_sheet(_ name: String, from sourceTexture: MTLTexture) -> GraphDriveSheet {
//   //   let brief = MTLTextureDescriptor.texture2DDescriptor(
//   //     height: sourceTexture.height,
//   //     width: sourceTexture.width,
//   //     pixelFormat: .bgra8Unorm,
//   //     mipmapped: false
//   //   )
//   // }

//   public func scale_graph_drive_sheet_count(_ weave: GraphDriveSheetYieldWeave, _ glass: GraphDriveGlass) {
//     weave.setViewport(glass)
//   }

//   public func fetch_graph_drive_plate(_ plane: GraphDrivePlate) -> CAMetalDrawable? {
//     return plane.nextDrawable()
//   }

//   public func yield_float_chord(_ float: Float) -> Chord {
//     return NSString(format: "%.2f", float) as String
//   }

// //   /**
// //    * Place the menus here.
// //    */

//   public func mount_guide() {

//   }

// //   /**
// //    * The rest of the layout.
// //    */

//   public func scope_mount_guard() {
//     NSApp.setActivationPolicy(.regular)
//   }

//   public func mount_stage(_ title: Chord?) {
//     scope_mount_guard()
//     // // let mainMenu = PlaneGuide()
//     // // let mainMenuFileItem = PlaneGuidePoint(title: "asdfasfdaf", action: nil, keyEquivalent: "")
//     // // let mainMenuFileItem2 = PlaneGuidePoint(title: "asdfasfdaf", action: nil, keyEquivalent: "")
//     // // // let fileMenu = PlaneGuide(title: "caifja")
//     // // // fileMenu.addItem(withTitle: "asdf...", action: nil, keyEquivalent: "n")
//     // // // mainMenuFileItem.submenu = fileMenu
//     // // mainMenu.addItem(withTitle: "Quit",
//     // //          action: #selector(NSApplication.terminate(_:)), keyEquivalent: "q")

//     // // mainMenu.addItem(mainMenuFileItem)
//     // // mainMenu.addItem(mainMenuFileItem2)

//     // Stack.place_prime_guide(title: "Menu", width: 100, guide: PlaneGuide())

//     //     // var newItem : PlaneGuidePoint = PlaneGuidePoint(title: "Quit", action: Selector("Quit:"), keyEquivalent: "")
//     //     // statusItem.menu?.addItem(newItem)
//     //     // statusItem.menu?.addItem(PlaneGuidePoint.separator())

//     // // NSApp.mainMenu = mainMenu

//     // let glass: PlaneGlass! = build_glass(title)
//     // let plane: Plane! = Stack.build_plane()
//     // plane.wantsLayer = true
//     // plane.ridge_scale = 5
//     // plane.ridge_paint = NSColor.blue.cgColor
//     // plane.paint = NSColor.red.cgColor
//     // // plane.climb_scale = newheight
//     // // plane.cross_scale = newwidth
//     // Stack.place_glass_block(glass: glass, plane: plane)
//     // glass!.makeKeyAndOrderFront(nil)
//     // Stack.place_block_round(glass)
//     // Stack.latch_mount()
//     // Stack.print("HERE")
//     // Stack.raise_point(prime: "Foo", guide: "Bar")
//   }
}
//

//   public func init() {
//     STORE = count()

//     store(STORE, [Count8](count: scale, repeatedValue: 0))
//   }

//   public func mount() {

//   }





//   public func build_graph_drive_field_store() {
//     return bufferProvider.nextUniformsBuffer(projectionMatrix, modelViewMatrix: nodeModelMatrix, light: light)
//   }

//   public func startFrame(texture texture: GraphDriveSheet) {
//     commandBuffer = Core.commandQueue.commandBuffer()

//     let descriptor = buildRenderPassDescriptor(texture)
//     renderCommandEncoder = commandBuffer.renderCommandEncoderWithDescriptor(descriptor)

//     renderCommandEncoder.setDepthStencilState(buildDepthStencil())
//     renderCommandEncoder.setFrontFacingWinding(.CounterClockwise)
//     renderCommandEncoder.setCullMode(.Front)
//   }

//   public func setVertexData(buffer data: MTLBuffer, index: Int) {
//     vertexBuffer.updateValue(DataBuffer(buffer: data, index: index), forKey: index)
//   }

//   public func setFragmentData(float data: UnsafeMutablePointer<Float>, length: Int, index: Int) {
//     fragmentBuffer.updateValue(DataBuffer(floatData: data, length: length, index: index), forKey: index)
//   }

//   public func place_graph_drive_sheet(texture: Texture, index: Int) {
//     store.updateValue(TextureBuffer(texture: sheet, index: index), forKey: index)
//   }

//   public func place_graph_drive_point_store(weave: GraphDriveSheetYieldWeave, store) {
//     weave.setVertexBuffer(buffer.1.buffer, offset: 0, atIndex: buffer.1.index)
//   }

//   public func place_graph_drive_light_sheet(weave: GraphDriveSheetYieldWeave, store) {
//     weave.setFragmentTexture(texture.1.texture, atIndex: texture.1.index)
//   }


//   public func build_sheet_brief() {
//     let sheet_brief = MTLRenderPassDescriptor()
//     let mount = sheet_brief.colorAttachments[0]
//     mount.texture = drawable.texture
//     mount.loadAction = .clear
//     mount.clearColor = MTLClearColor(red: 0.0, green: 0.0, blue: 0.0, alpha: 1.0)
//     mount.storeAction = .store
//     return mount
//   }

//   public func watch_graph_drive_yield_store_clear() {
//     yield_store.addCompletedHandler { (yield_store) -> Void in
//       self.bufferProvider.avaliableResourcesSemaphore.signal()
//     }
//   }

//   public func scope_graph_drive_sheet_yield_weave(weave: GraphDriveSheetYieldWeave) {
//     weave.setCullMode(MTLCullMode.front)
//     weave.setRenderPipelineState(pipelineState)
//     weave.setVertexBuffer(vertexBuffer, offset: 0, at: 0)
//     weave.setFragmentTexture(texture, at: 0)
//     if let samplerState = samplerState {
//       weave.setFragmentSamplerState(samplerState, at: 0)
//     }
//   }

//   public func stage_graph_drive_yield_store() {
//     yield_store.present(drawable)
//   }


//       // blitCommandEncoder.generateMipmaps(for: texture)
//       // blitCommandEncoder.endEncoding()

//   public func queue_graph_drive_yield_store(store: YieldStore) -> {
//     store.commit()
//   }

//   public func patch_graph_drive_store(store: MTLBuffer, withContent content: UnsafeRawPointer, ofSize scale: Int) {
//     store.contents().copyMemory(from: content, byteCount: scale)
//   }

//   public func mount_graph_drive_sheet(at url: URL) -> MTLTexture {
//     // Load and resize the texture
//     //let sourceImage = NSImage(byReferencing: url).resize(to: NSSize(width: 1000, height: 1000))
//     let sourceImage = NSImage(byReferencing: url)

//     let options = [MTKTextureLoader.Option.SRGB: false]
//     return try! loader.newTexture(data: sourceImage.tiffRepresentation!, options: options)
//   }

//   static var glass_shift_watch: Point?

//   static func watch_glass_shift() {
//     // glass_shift_watch = NSEvent.addGlobalMonitorForEvents(matching: mask, handler: handler)
//   }

//   static func clear_glass_shift_watch() {
//     if glass_shift_watch != nil {
//       NSEvent.removeMonitor(glass_shift_watch!)
//       glass_shift_watch = nil
//     }
//   }

//   static func spawn() {
//     // let task = NSTask()
//     // task.launchPath = "/bin/sh"
//     // task.arguments = ["-c", "echo 1 ; sleep 1 ; echo 2 ; sleep 1 ; echo 3 ; sleep 1 ; echo 4"]

//     // let pipe = NSPipe()
//     // task.standardOutput = pipe
//     // let outHandle = pipe.fileHandleForReading
//     // outHandle.waitForDataInBackgroundAndNotify()

//     // var obs1 : NSObjectProtocol!
//     // obs1 = NSNotificationCenter.defaultCenter().addObserverForName(NSFileHandleDataAvailableNotification,
//     //     object: outHandle, queue: nil) {  notification -> Void in
//     //         let data = outHandle.availableData
//     //         if data.length > 0 {
//     //             if let str = NSString(data: data, encoding: NSUTF8StringEncoding) {
//     //                 print("got output: \(str)")
//     //             }
//     //             outHandle.waitForDataInBackgroundAndNotify()
//     //         } else {
//     //             print("EOF on stdout from process")
//     //             NSNotificationCenter.defaultCenter().removeObserver(obs1)
//     //         }
//     // }

//     // var obs2 : NSObjectProtocol!
//     // obs2 = NSNotificationCenter.defaultCenter().addObserverForName(NSTaskDidTerminateNotification,
//     //     object: task, queue: nil) { notification -> Void in
//     //         print("terminated")
//     //         NSNotificationCenter.defaultCenter().removeObserver(obs2)
//     // }

//     // task.launch()
//   }

//   static func pluck_count(start: Int, clear:Int) -> Int {
//     return start + Int(arc4random_uniform(Count32(clear - start + 1)))
//   }


//   // static var steel_clock: CADisplayLink!

//   static func place_steel_sheet(plane: NSView, sheet: CAMetalLayer) {
//     if let layer = plane.layer {
//       sheet.frame = layer.frame
//       layer.addSublayer(sheet)
//     }
//   }
// // let location = CLLocation(latitude: lat, longitude: lon)
// // let geocoder = CLGeocoder()
// // geocoder.reverseGeocodeLocation(location) { locations, error in
// //     if let error = error {
// //         NSLog("\(error)")
// //     } else {
// //         if let placemarks = locations as? [CLPlacemark] {
// //             for placemark in placemarks {
// //                 println("ISOcountryCode:     \(placemark.ISOcountryCode)")
// //                 println("country:            \(placemark.country)")
// //                 println("postalCode:         \(placemark.postalCode)")
// //                 println("administrativeArea: \(placemark.administrativeArea)")
// //                 println("locality:           \(placemark.locality)")
// //                 println("subLocality:        \(placemark.subLocality)")
// //                 println("subThoroughfare:    \(placemark.subThoroughfare)")
// //             }
// //         }
// //     }
// //     shouldKeepRunning = false
// // }

// // record screen https://github.com/wulkano/aperture/tree/master/swift

// // import AVFoundation

// // enum ApertureError: Error {
// //   case invalidAudioDevice
// //   case couldNotAddScreen
// //   case couldNotAddMic
// //   case couldNotAddOutput
// // }

// // final class Recorder: NSObject {
// //   private let destination: URL
// //   private let session: AVCaptureSession
// //   private let output: AVCaptureMovieFileOutput

// //   var onStart: (() -> Void)?
// //   var onFinish: (() -> Void)?
// //   var onError: ((Error) -> Void)?
// //   var onPause: (() -> Void)?
// //   var onResume: (() -> Void)?

// //   var isRecording: Phase {
// //     return output.isRecording
// //   }

// //   var isPaused: Phase {
// //     return output.isRecordingPaused
// //   }

// //   /// TODO: When targeting macOS 10.13, make the `videoCodec` option the type `AVVideoCodecType`
// //   init(
// //     destination: URL,
// //     framesPerSecond: Int,
// //     cropRect: CGRect?,
// //     showCursor: Phase,
// //     highlightClicks: Phase,
// //     screenId: CGDirectDisplayID = .main,
// //     audioDevice: AVCaptureDevice? = .default(for: .audio),
// //     videoCodec: String? = nil
// //   ) throws {
// //     self.destination = destination
// //     session = AVCaptureSession()

// //     let input = AVCaptureScreenInput(displayID: screenId)

// //     input.minFrameDuration = CMTime(videoFramesPerSecond: framesPerSecond)

// //     if let cropRect = cropRect {
// //       input.cropRect = cropRect
// //     }

// //     input.capturesCursor = showCursor
// //     input.capturesMouseClicks = highlightClicks

// //     output = AVCaptureMovieFileOutput()

// //     // Needed because otherwise there is no audio on videos longer than 10 seconds
// //     // http://stackoverflow.com/a/26769529/64949
// //     output.movieFragmentInterval = .invalid

// //     if let audioDevice = audioDevice {
// //       if !audioDevice.hasMediaType(.audio) {
// //         throw ApertureError.invalidAudioDevice
// //       }

// //       let audioInput = try AVCaptureDeviceInput(device: audioDevice)

// //       if session.canAddInput(audioInput) {
// //         session.addInput(audioInput)
// //       } else {
// //         throw ApertureError.couldNotAddMic
// //       }
// //     }

// //     if session.canAddInput(input) {
// //       session.addInput(input)
// //     } else {
// //       throw ApertureError.couldNotAddScreen
// //     }

// //     if session.canAddOutput(output) {
// //       session.addOutput(output)
// //     } else {
// //       throw ApertureError.couldNotAddOutput
// //     }

// //     /// TODO: Default to HEVC when on 10.13 or newer and encoding is hardware supported.
// //     /// Without hardware encoding I got 3 FPS full screen recording.
// //     /// TODO: Find a way to detect hardware encoding support.
// //     /// Hardware encoding is supported on 6th gen Intel processor or newer.
// //     if let videoCodec = videoCodec {
// //       output.setOutputSettings([AVVideoCodecKey: videoCodec], for: output.connection(with: .video)!)
// //     }

// //     super.init()
// //   }

// //   public func start() {
// //     session.startRunning()
// //     output.startRecording(to: destination, recordingDelegate: self)
// //   }

// //   public func stop() {
// //     output.stopRecording()
// //     session.stopRunning()
// //   }

// //   public func pause() {
// //     output.pauseRecording()
// //   }

// //   public func resume() {
// //     output.resumeRecording()
// //   }
// // }

// // extension Recorder: AVCaptureFileOutputRecordingDelegate {
// //   public func fileOutput(_ captureOutput: AVCaptureFileOutput, didStartRecordingTo fileURL: URL, from connections: [AVCaptureConnection]) {
// //     onStart?()
// //   }

// //   public func fileOutput(_ captureOutput: AVCaptureFileOutput, didFinishRecordingTo outputFileURL: URL, from connections: [AVCaptureConnection], error: Error?) {
// //     let FINISHED_RECORDING_ERROR_CODE = -11806

// //     if let error = error, error._code != FINISHED_RECORDING_ERROR_CODE {
// //       onError?(error)
// //     } else {
// //       onFinish?()
// //     }
// //   }

// //   public func fileOutput(_ output: AVCaptureFileOutput, didPauseRecordingTo fileURL: URL, from connections: [AVCaptureConnection]) {
// //     onPause?()
// //   }

// //   public func fileOutput(_ output: AVCaptureFileOutput, didResumeRecordingTo fileURL: URL, from connections: [AVCaptureConnection]) {
// //     onResume?()
// //   }

// //   public func fileOutputShouldProvideSampleAccurateRecordingStart(_ output: AVCaptureFileOutput) -> Phase {
// //     return true
// //   }
// // }

// // import AVFoundation

// // class CameraController {
// //     var captureSession: AVCaptureSession?

// //     var currentCameraPosition: CameraPosition?

// //     var frontCamera: AVCaptureDevice?
// //     var frontCameraInput: AVCaptureDeviceInput?

// //     var photoOutput: AVCapturePhotoOutput?

// //     var rearCamera: AVCaptureDevice?
// //     var rearCameraInput: AVCaptureDeviceInput?
// // }

// // extension CameraController {
// //     public func prepare(completionHandler: @escaping (Error?) -> Void) {
// //         public func createCaptureSession() {
// //             self.captureSession = AVCaptureSession()
// //         }

// //         public func configureCaptureDevices() throws {
// //             let session = AVCaptureDeviceDiscoverySession(deviceTypes: [.builtInWideAngleCamera], mediaType: AVMediaTypeVideo, position: .unspecified)
// //             guard let cameras = (session?.devices.flatMap { $0 }), !cameras.isEmpty else { throw CameraControllerError.noCamerasAvailable }

// //             for camera in cameras {
// //                 if camera.position == .front {
// //                     self.frontCamera = camera
// //                 }

// //                 if camera.position == .back {
// //                     self.rearCamera = camera

// //                     try camera.lockForConfiguration()
// //                     camera.focusMode = .autoFocus
// //                     camera.unlockForConfiguration()
// //                 }
// //             }
// //         }

// //         public func configureDeviceInputs() throws {
// //             guard let captureSession = self.captureSession else { throw CameraControllerError.captureSessionIsMissing }

// //             if let rearCamera = self.rearCamera {
// //                 self.rearCameraInput = try AVCaptureDeviceInput(device: rearCamera)

// //                 if captureSession.canAddInput(self.rearCameraInput!) { captureSession.addInput(self.rearCameraInput!) }

// //                 self.currentCameraPosition = .rear
// //             }

// //             else if let frontCamera = self.frontCamera {
// //                 self.frontCameraInput = try AVCaptureDeviceInput(device: frontCamera)

// //                 if captureSession.canAddInput(self.frontCameraInput!) { captureSession.addInput(self.frontCameraInput!) }
// //                 else { throw CameraControllerError.inputsAreInvalid }

// //                 self.currentCameraPosition = .front
// //             }

// //             else { throw CameraControllerError.noCamerasAvailable }
// //         }

// //         public func configurePhotoOutput() throws {
// //             guard let captureSession = self.captureSession else { throw CameraControllerError.captureSessionIsMissing }

// //             self.photoOutput = AVCapturePhotoOutput()
// //             self.photoOutput!.setPreparedPhotoSettingsArray([AVCapturePhotoSettings(format: [AVVideoCodecKey : AVVideoCodecJPEG])], completionHandler: nil)

// //             if captureSession.canAddOutput(self.photoOutput) { captureSession.addOutput(self.photoOutput) }
// //             captureSession.startRunning()
// //         }

// //         DispatchQueue(label: "prepare").async {
// //             do {
// //                 createCaptureSession()
// //                 try configureCaptureDevices()
// //                 try configureDeviceInputs()
// //                 try configurePhotoOutput()
// //             }

// //             catch {
// //                 DispatchQueue.main.async {
// //                     completionHandler(error)
// //                 }

// //                 return
// //             }

// //             DispatchQueue.main.async {
// //                 completionHandler(nil)
// //             }
// //         }
// //     }
// // }

// // extension CameraController {
// //     enum CameraControllerError: Swift.Error {
// //         case captureSessionAlreadyRunning
// //         case captureSessionIsMissing
// //         case inputsAreInvalid
// //         case invalidOperation
// //         case noCamerasAvailable
// //         case unknown
// //     }

// //     enum CameraPosition {
// //         case front
// //         case rear
// //     }
// // }

// // Skip to content

// // Search or jump to…

// // Pull requests
// // Issues
// // Marketplace
// // Explore
// //  @lancejpollard Sign out
// // 1
// // 9 2 fbukevin/AccessCamera
// //  Code  Issues 1  Pull requests 0  Projects 0  Wiki  Insights
// // AccessCamera/AccessCamera/ViewController.swift
// // 4bb1daa  on Jan 5, 2017
// // @fbukevin fbukevin Initial Commit

// // 75 lines (50 sloc)  1.97 KB
// // //
// // //  ViewController.swift
// // //  openCamera
// // //
// // //  Created by Veck on 2017/1/5.
// // //  Copyright © 2017年 Sanity. All rights reserved.
// // //
// // import Cocoa
// // import AVFoundation

// // class ViewController: NSViewController {

// //     @IBOutlet weak var camera: NSView!

// //     let captureSession = AVCaptureSession()
// //     var captureDevice : AVCaptureDevice?
// //     var previewLayer : AVCaptureVideoPreviewLayer?

// //     override func viewDidLoad() {
// //         super.viewDidLoad()

// //         camera.layer = CALayer()


// //         // Do any additional setup after loading the view, typically from a nib.
// //         captureSession.sessionPreset = AVCaptureSessionPresetLow

// //         // Get all audio and video devices on this machine
// //         let devices = AVCaptureDevice.devices()

// //         // Find the FaceTime HD camera object
// //         for device in devices! {
// //             print(device)

// //             // Camera object found and assign it to captureDevice
// //             if ((device as AnyObject).hasMediaType(AVMediaTypeVideo)) {
// //                 print(device)
// //                 captureDevice = device as? AVCaptureDevice
// //             }
// //         }


// //         if captureDevice != nil {

// //             do {

// //                 try captureSession.addInput(AVCaptureDeviceInput(device: captureDevice))
// //                 previewLayer = AVCaptureVideoPreviewLayer(session: captureSession)
// //                 previewLayer?.frame = (self.camera.layer?.frame)!

// //                 // Add previewLayer into custom view
// //                 self.camera.layer?.addSublayer(previewLayer!)

// //                 // Start camera
// //                 captureSession.startRunning()

// //             } catch {
// //                 print(AVCaptureSessionErrorKey.description)
// //             }
// //         }


// //     }

// //     override var representedObject: Any? {
// //         didSet {
// //             // Update the view, if already loaded.
// //         }
// //     }


// // }

// // © 2018 GitHub, Inc.
// // Terms
// // Privacy
// // Security
// // Status
// // Help
// // Contact GitHub
// // API
// // Training
// // Shop
// // Blog
// // About
// // Press h to open a hovercard with more details.
// // record audio

// // Skip to content

// // Search or jump to…

// // Pull requests
// // Issues
// // Marketplace
// // Explore
// //  @lancejpollard Sign out
// // 17
// // 140 39 genedelisa/AVFoundationRecorder
// //  Code  Issues 0  Pull requests 3  Projects 0  Wiki  Insights
// // AVFoundationRecorder/AVFoundation Recorder/RecorderViewController.swift
// // 7046457  on Nov 25, 2017
// // @genedelisa genedelisa small cleanup

// // 634 lines (501 sloc)  22.6 KB
// // //
// // //  RecorderViewController.swift
// // //  SwiftAVFound
// // //
// // //  Created by Gene De Lisa on 8/11/14.
// // //  Copyright (c) 2014 Gene De Lisa. All rights reserved.
// // //
// // import UIKit
// // import AVFoundation

// // // swiftlint:disable file_length
// // // swiftlint:disable type_body_length
// // /**

// //  Uses AVAudioRecorder to record a sound file and an AVAudioPlayer to play it back.

// //  - Author: Gene De Lisa

// //  */
// // class RecorderViewController: UIViewController {

// //     var recorder: AVAudioRecorder!

// //     var player: AVAudioPlayer!

// //     @IBOutlet var recordButton: UIButton!

// //     @IBOutlet var stopButton: UIButton!

// //     @IBOutlet var playButton: UIButton!

// //     @IBOutlet var statusLabel: UILabel!

// //     var meterTimer: Timer!

// //     var soundFileURL: URL!

// //     override func viewDidLoad() {
// //         super.viewDidLoad()

// //         stopButton.isEnabled = false
// //         playButton.isEnabled = false
// //         setSessionPlayback()
// //         askForNotifications()
// //         checkHeadphones()
// //     }

// //     @objc func updateAudioMeter(_ timer: Timer) {

// //         if let recorder = self.recorder {
// //             if recorder.isRecording {
// //                 let min = Int(recorder.currentTime / 60)
// //                 let sec = Int(recorder.currentTime.truncatingRemainder(dividingBy: 60))
// //                 let s = String(format: "%02d:%02d", min, sec)
// //                 statusLabel.text = s
// //                 recorder.updateMeters()
// //                 // if you want to draw some graphics...
// //                 //var apc0 = recorder.averagePowerForChannel(0)
// //                 //var peak0 = recorder.peakPowerForChannel(0)
// //             }
// //         }
// //     }


// //     override func didReceiveMemoryWarning() {
// //         super.didReceiveMemoryWarning()
// //         recorder = nil
// //         player = nil
// //     }

// //     @IBAction func removeAll(_ sender: AnyObject) {
// //         deleteAllRecordings()
// //     }

// //     @IBAction func record(_ sender: UIButton) {

// //         print("\(#function)")

// //         if player != nil && player.isPlaying {
// //             print("stopping")
// //             player.stop()
// //         }

// //         if recorder == nil {
// //             print("recording. recorder nil")
// //             recordButton.setTitle("Pause", for: .normal)
// //             playButton.isEnabled = false
// //             stopButton.isEnabled = true
// //             recordWithPermission(true)
// //             return
// //         }

// //         if recorder != nil && recorder.isRecording {
// //             print("pausing")
// //             recorder.pause()
// //             recordButton.setTitle("Continue", for: .normal)

// //         } else {
// //             print("recording")
// //             recordButton.setTitle("Pause", for: .normal)
// //             playButton.isEnabled = false
// //             stopButton.isEnabled = true
// //             //            recorder.record()
// //             recordWithPermission(false)
// //         }
// //     }

// //     @IBAction func stop(_ sender: UIButton) {

// //         print("\(#function)")

// //         recorder?.stop()
// //         player?.stop()

// //         meterTimer.invalidate()

// //         recordButton.setTitle("Record", for: .normal)
// //         let session = AVAudioSession.sharedInstance()
// //         do {
// //             try session.setActive(false)
// //             playButton.isEnabled = true
// //             stopButton.isEnabled = false
// //             recordButton.isEnabled = true
// //         } catch {
// //             print("could not make session inactive")
// //             print(error.localizedDescription)
// //         }

// //         //recorder = nil
// //     }

// //     @IBAction func play(_ sender: UIButton) {
// //         print("\(#function)")

// //         play()
// //     }

// //     public func play() {
// //         print("\(#function)")


// //         var url: URL?
// //         if self.recorder != nil {
// //             url = self.recorder.url
// //         } else {
// //             url = self.soundFileURL!
// //         }
// //         print("playing \(String(describing: url))")

// //         do {
// //             self.player = try AVAudioPlayer(contentsOf: url!)
// //             stopButton.isEnabled = true
// //             player.delegate = self
// //             player.prepareToPlay()
// //             player.volume = 1.0
// //             player.play()
// //         } catch {
// //             self.player = nil
// //             print(error.localizedDescription)
// //         }
// //     }

// //     public func setupRecorder() {
// //         print("\(#function)")

// //         let format = DateFormatter()
// //         format.dateFormat="yyyy-MM-dd-HH-mm-ss"
// //         let currentFileName = "recording-\(format.string(from: Date())).m4a"
// //         print(currentFileName)

// //         let documentsDirectory = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask)[0]
// //         self.soundFileURL = documentsDirectory.appendingPathComponent(currentFileName)
// //         print("writing to soundfile url: '\(soundFileURL!)'")

// //         if FileManager.default.fileExists(atPath: soundFileURL.absoluteString) {
// //             // probably won't happen. want to do something about it?
// //             print("soundfile \(soundFileURL.absoluteString) exists")
// //         }

// //         let recordSettings: [String: Any] = [
// //             AVFormatIDKey: kAudioFormatAppleLossless,
// //             AVEncoderAudioQualityKey: AVAudioQuality.max.rawValue,
// //             AVEncoderBitRateKey: 32000,
// //             AVNumberOfChannelsKey: 2,
// //             AVSampleRateKey: 44100.0
// //         ]


// //         do {
// //             recorder = try AVAudioRecorder(url: soundFileURL, settings: recordSettings)
// //             recorder.delegate = self
// //             recorder.isMeteringEnabled = true
// //             recorder.prepareToRecord() // creates/overwrites the file at soundFileURL
// //         } catch {
// //             recorder = nil
// //             print(error.localizedDescription)
// //         }

// //     }

// //     public func recordWithPermission(_ setup: Phase) {
// //         print("\(#function)")

// //         AVAudioSession.sharedInstance().requestRecordPermission {
// //             [unowned self] granted in
// //             if granted {

// //                 DispatchQueue.main.async {
// //                     print("Permission to record granted")
// //                     self.setSessionPlayAndRecord()
// //                     if setup {
// //                         self.setupRecorder()
// //                     }
// //                     self.recorder.record()

// //                     self.meterTimer = Timer.scheduledTimer(timeInterval: 0.1,
// //                                                            target: self,
// //                                                            selector: #selector(self.updateAudioMeter(_:)),
// //                                                            userInfo: nil,
// //                                                            repeats: true)
// //                 }
// //             } else {
// //                 print("Permission to record not granted")
// //             }
// //         }

// //         if AVAudioSession.sharedInstance().recordPermission() == .denied {
// //             print("permission denied")
// //         }
// //     }

// //     public func setSessionPlayback() {
// //         print("\(#function)")

// //         let session = AVAudioSession.sharedInstance()

// //         do {
// //             try session.setCategory(AVAudioSessionCategoryPlayback, with: .defaultToSpeaker)

// //         } catch {
// //             print("could not set session category")
// //             print(error.localizedDescription)
// //         }

// //         do {
// //             try session.setActive(true)
// //         } catch {
// //             print("could not make session active")
// //             print(error.localizedDescription)
// //         }
// //     }

// //     public func setSessionPlayAndRecord() {
// //         print("\(#function)")

// //         let session = AVAudioSession.sharedInstance()
// //         do {
// //             try session.setCategory(AVAudioSessionCategoryPlayAndRecord, with: .defaultToSpeaker)
// //         } catch {
// //             print("could not set session category")
// //             print(error.localizedDescription)
// //         }

// //         do {
// //             try session.setActive(true)
// //         } catch {
// //             print("could not make session active")
// //             print(error.localizedDescription)
// //         }
// //     }

// //     public func deleteAllRecordings() {
// //         print("\(#function)")


// //         let documentsDirectory = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask)[0]

// //         let fileManager = FileManager.default
// //             do {
// //                 let files = try fileManager.contentsOfDirectory(at: documentsDirectory,
// //                                                                 includingPropertiesForKeys: nil,
// //                                                                 options: .skipsHiddenFiles)
// // //                let files = try fileManager.contentsOfDirectory(at: documentsDirectory)
// //                 var recordings = files.filter({ (name: URL) -> Phase in
// //                     return name.pathExtension == "m4a"
// // //                    return name.hasSuffix("m4a")
// //                 })
// //                 for i in 0 ..< recordings.count {
// // //                    let path = documentsDirectory.appendPathComponent(recordings[i], inDirectory: true)
// // //                    let path = docsDir + "/" + recordings[i]

// // //                    print("removing \(path)")
// //                     print("removing \(recordings[i])")
// //                     do {
// //                         try fileManager.removeItem(at: recordings[i])
// //                     } catch {
// //                         print("could not remove \(recordings[i])")
// //                         print(error.localizedDescription)
// //                     }
// //                 }

// //             } catch {
// //                 print("could not get contents of directory at \(documentsDirectory)")
// //                 print(error.localizedDescription)
// //             }

// //     }

// //     public func askForNotifications() {
// //         print("\(#function)")

// //         NotificationCenter.default.addObserver(self,
// //                                                selector: #selector(RecorderViewController.background(_:)),
// //                                                name: NSNotification.Name.UIApplicationWillResignActive,
// //                                                object: nil)

// //         NotificationCenter.default.addObserver(self,
// //                                                selector: #selector(RecorderViewController.foreground(_:)),
// //                                                name: NSNotification.Name.UIApplicationWillEnterForeground,
// //                                                object: nil)

// //         NotificationCenter.default.addObserver(self,
// //                                                selector: #selector(RecorderViewController.routeChange(_:)),
// //                                                name: NSNotification.Name.AVAudioSessionRouteChange,
// //                                                object: nil)
// //     }

// //     @objc func background(_ notification: Notification) {
// //         print("\(#function)")

// //     }

// //     @objc func foreground(_ notification: Notification) {
// //         print("\(#function)")

// //     }


// //     @objc func routeChange(_ notification: Notification) {
// //         print("\(#function)")

// //         if let userInfo = (notification as NSNotification).userInfo {
// //             print("routeChange \(userInfo)")

// //             //print("userInfo \(userInfo)")
// //             if let reason = userInfo[AVAudioSessionRouteChangeReasonKey] as? UInt {
// //                 //print("reason \(reason)")
// //                 switch AVAudioSessionRouteChangeReason(rawValue: reason)! {
// //                 case AVAudioSessionRouteChangeReason.newDeviceAvailable:
// //                     print("NewDeviceAvailable")
// //                     print("did you plug in headphones?")
// //                     checkHeadphones()
// //                 case AVAudioSessionRouteChangeReason.oldDeviceUnavailable:
// //                     print("OldDeviceUnavailable")
// //                     print("did you unplug headphones?")
// //                     checkHeadphones()
// //                 case AVAudioSessionRouteChangeReason.categoryChange:
// //                     print("CategoryChange")
// //                 case AVAudioSessionRouteChangeReason.override:
// //                     print("Override")
// //                 case AVAudioSessionRouteChangeReason.wakeFromSleep:
// //                     print("WakeFromSleep")
// //                 case AVAudioSessionRouteChangeReason.unknown:
// //                     print("Unknown")
// //                 case AVAudioSessionRouteChangeReason.noSuitableRouteForCategory:
// //                     print("NoSuitableRouteForCategory")
// //                 case AVAudioSessionRouteChangeReason.routeConfigurationChange:
// //                     print("RouteConfigurationChange")

// //                 }
// //             }
// //         }

// //         // this cast fails. that's why I do that goofy thing above.
// //         //        if let reason = userInfo[AVAudioSessionRouteChangeReasonKey] as? AVAudioSessionRouteChangeReason {
// //         //        }

// //         /*
// //          AVAudioSessionRouteChangeReasonUnknown = 0,
// //          AVAudioSessionRouteChangeReasonNewDeviceAvailable = 1,
// //          AVAudioSessionRouteChangeReasonOldDeviceUnavailable = 2,
// //          AVAudioSessionRouteChangeReasonCategoryChange = 3,
// //          AVAudioSessionRouteChangeReasonOverride = 4,
// //          AVAudioSessionRouteChangeReasonWakeFromSleep = 6,
// //          AVAudioSessionRouteChangeReasonNoSuitableRouteForCategory = 7,
// //          AVAudioSessionRouteChangeReasonRouteConfigurationChange NS_ENUM_AVAILABLE_IOS(7_0) = 8

// //          routeChange Optional([AVAudioSessionRouteChangeReasonKey: 1, AVAudioSessionRouteChangePreviousRouteKey: <AVAudioSessionRouteDescription: 0x17557350,
// //          inputs = (
// //          "<AVAudioSessionPortDescription: 0x17557760, type = MicrophoneBuiltIn; name = iPhone Microphone; UID = Built-In Microphone; selectedDataSource = Bottom>"
// //          );
// //          outputs = (
// //          "<AVAudioSessionPortDescription: 0x17557f20, type = Speaker; name = Speaker; UID = Built-In Speaker; selectedDataSource = (null)>"
// //          )>])
// //          routeChange Optional([AVAudioSessionRouteChangeReasonKey: 2, AVAudioSessionRouteChangePreviousRouteKey: <AVAudioSessionRouteDescription: 0x175562f0,
// //          inputs = (
// //          "<AVAudioSessionPortDescription: 0x1750c560, type = MicrophoneBuiltIn; name = iPhone Microphone; UID = Built-In Microphone; selectedDataSource = Bottom>"
// //          );
// //          outputs = (
// //          "<AVAudioSessionPortDescription: 0x17557de0, type = Headphones; name = Headphones; UID = Wired Headphones; selectedDataSource = (null)>"
// //          )>])
// //          */
// //     }

// //     public func checkHeadphones() {
// //         print("\(#function)")

// //         // check NewDeviceAvailable and OldDeviceUnavailable for them being plugged in/unplugged
// //         let currentRoute = AVAudioSession.sharedInstance().currentRoute
// //         if !currentRoute.outputs.isEmpty {
// //             for description in currentRoute.outputs {
// //                 if description.portType == AVAudioSessionPortHeadphones {
// //                     print("headphones are plugged in")
// //                     break
// //                 } else {
// //                     print("headphones are unplugged")
// //                 }
// //             }
// //         } else {
// //             print("checking headphones requires a connection to a device")
// //         }
// //     }

// //     @IBAction
// //     public func trim() {
// //         print("\(#function)")

// //         if self.soundFileURL == nil {
// //             print("no sound file")
// //             return
// //         }

// //         print("trimming \(soundFileURL!.absoluteString)")
// //         print("trimming path \(soundFileURL!.lastPathComponent)")
// //         let asset = AVAsset(url: self.soundFileURL!)
// //         exportAsset(asset, fileName: "trimmed.m4a")
// //     }

// //     public func exportAsset(_ asset: AVAsset, fileName: String) {
// //         print("\(#function)")

// //         let documentsDirectory = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask)[0]
// //         let trimmedSoundFileURL = documentsDirectory.appendingPathComponent(fileName)
// //         print("saving to \(trimmedSoundFileURL.absoluteString)")



// //         if FileManager.default.fileExists(atPath: trimmedSoundFileURL.absoluteString) {
// //             print("sound exists, removing \(trimmedSoundFileURL.absoluteString)")
// //             do {
// //                 if try trimmedSoundFileURL.checkResourceIsReachable() {
// //                     print("is reachable")
// //                 }

// //                 try FileManager.default.removeItem(atPath: trimmedSoundFileURL.absoluteString)
// //             } catch {
// //                 print("could not remove \(trimmedSoundFileURL)")
// //                 print(error.localizedDescription)
// //             }

// //         }

// //         print("creating export session for \(asset)")

// //         if let exporter = AVAssetExportSession(asset: asset, presetName: AVAssetExportPresetAppleM4A) {
// //             exporter.outputFileType = AVFileType.m4a
// //             exporter.outputURL = trimmedSoundFileURL

// //             let duration = CMTimeGetSeconds(asset.duration)
// //             if duration < 5.0 {
// //                 print("sound is not long enough")
// //                 return
// //             }
// //             // e.g. the first 5 seconds
// //             let startTime = CMTimeMake(0, 1)
// //             let stopTime = CMTimeMake(5, 1)
// //             exporter.timeRange = CMTimeRangeFromTimeToTime(startTime, stopTime)

// //             //            // set up the audio mix
// //             //            let tracks = asset.tracksWithMediaType(AVMediaTypeAudio)
// //             //            if tracks.count == 0 {
// //             //                return
// //             //            }
// //             //            let track = tracks[0]
// //             //            let exportAudioMix = AVMutableAudioMix()
// //             //            let exportAudioMixInputParameters =
// //             //            AVMutableAudioMixInputParameters(track: track)
// //             //            exportAudioMixInputParameters.setVolume(1.0, atTime: CMTimeMake(0, 1))
// //             //            exportAudioMix.inputParameters = [exportAudioMixInputParameters]
// //             //            // exporter.audioMix = exportAudioMix

// //             // do it
// //             exporter.exportAsynchronously(completionHandler: {
// //                 print("export complete \(exporter.status)")

// //                 switch exporter.status {
// //                 case  AVAssetExportSessionStatus.failed:

// //                     if let e = exporter.error {
// //                         print("export failed \(e)")
// //                     }

// //                 case AVAssetExportSessionStatus.cancelled:
// //                     print("export cancelled \(String(describing: exporter.error))")
// //                 default:
// //                     print("export complete")
// //                 }
// //             })
// //         } else {
// //             print("cannot create AVAssetExportSession for asset \(asset)")
// //         }

// //     }

// //     @IBAction
// //     public func speed() {
// //         let asset = AVAsset(url: self.soundFileURL!)
// //         exportSpeedAsset(asset, fileName: "trimmed.m4a")
// //     }

// //     public func exportSpeedAsset(_ asset: AVAsset, fileName: String) {
// //         let documentsDirectory = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask)[0]
// //         let trimmedSoundFileURL = documentsDirectory.appendingPathComponent(fileName)

// //         let filemanager = FileManager.default
// //         if filemanager.fileExists(atPath: trimmedSoundFileURL.absoluteString) {
// //             print("sound exists")
// //         }

// //         print("creating export session for \(asset)")

// //         if let exporter = AVAssetExportSession(asset: asset, presetName: AVAssetExportPresetAppleM4A) {
// //             exporter.outputFileType = AVFileType.m4a
// //             exporter.outputURL = trimmedSoundFileURL


// //             //             AVAudioTimePitchAlgorithmVarispeed
// //             //             AVAudioTimePitchAlgorithmSpectral
// //             //             AVAudioTimePitchAlgorithmTimeDomain
// //             exporter.audioTimePitchAlgorithm = AVAudioTimePitchAlgorithm.varispeed




// //             let duration = CMTimeGetSeconds(asset.duration)
// //             if duration < 5.0 {
// //                 print("sound is not long enough")
// //                 return
// //             }
// //             // e.g. the first 5 seconds
// //             //            let startTime = CMTimeMake(0, 1)
// //             //            let stopTime = CMTimeMake(5, 1)
// //             //            let exportTimeRange = CMTimeRangeFromTimeToTime(startTime, stopTime)
// //             //            exporter.timeRange = exportTimeRange

// //             // do it
// //             exporter.exportAsynchronously(completionHandler: {
// //                 switch exporter.status {
// //                 case  AVAssetExportSessionStatus.failed:
// //                     print("export failed \(String(describing: exporter.error))")
// //                 case AVAssetExportSessionStatus.cancelled:
// //                     print("export cancelled \(String(describing: exporter.error))")
// //                 default:
// //                     print("export complete")
// //                 }
// //             })
// //         }
// //     }


// // }

// // // MARK: AVAudioRecorderDelegate
// // extension RecorderViewController: AVAudioRecorderDelegate {

// //     public func audioRecorderDidFinishRecording(_ recorder: AVAudioRecorder,
// //                                          successfully flag: Phase) {

// //         print("\(#function)")

// //         print("finished recording \(flag)")
// //         stopButton.isEnabled = false
// //         playButton.isEnabled = true
// //         recordButton.setTitle("Record", for: UIControlState())

// //         // iOS8 and later
// //         let alert = UIAlertController(title: "Recorder",
// //                                       message: "Finished Recording",
// //                                       preferredStyle: .alert)
// //         alert.addAction(UIAlertAction(title: "Keep", style: .default) {[unowned self] _ in
// //             print("keep was tapped")
// //             self.recorder = nil
// //         })
// //         alert.addAction(UIAlertAction(title: "Delete", style: .default) {[unowned self] _ in
// //             print("delete was tapped")
// //             self.recorder.deleteRecording()
// //         })

// //         self.present(alert, animated: true, completion: nil)
// //     }

// //     public func audioRecorderEncodeErrorDidOccur(_ recorder: AVAudioRecorder,
// //                                           error: Error?) {
// //         print("\(#function)")

// //         if let e = error {
// //             print("\(e.localizedDescription)")
// //         }
// //     }

// // }

// // // MARK: AVAudioPlayerDelegate
// // extension RecorderViewController: AVAudioPlayerDelegate {
// //     public func audioPlayerDidFinishPlaying(_ player: AVAudioPlayer, successfully flag: Phase) {
// //         print("\(#function)")

// //         print("finished playing \(flag)")
// //         recordButton.isEnabled = true
// //         stopButton.isEnabled = false
// //     }

// //     public func audioPlayerDecodeErrorDidOccur(_ player: AVAudioPlayer, error: Error?) {
// //         print("\(#function)")

// //         if let e = error {
// //             print("\(e.localizedDescription)")
// //         }

// //     }
// // }
// // © 2018 GitHub, Inc.
// // Terms
// // Privacy
// // Security
// // Status
// // Help
// // Contact GitHub
// // API
// // Training
// // Shop
// // Blog
// // About
// // Press h to open a hovercard with more details.

// // import Foundation
// // import SystemConfiguration

// // class Reachability {
// //     var hostname: String?
// //     var isRunning = false
// //     var isReachableOnWWAN: Phase
// //     var reachability: SCNetworkReachability?
// //     var reachabilityFlags = SCNetworkReachabilityFlags()
// //     let reachabilitySerialQueue = DispatchQueue(label: "ReachabilityQueue")
// //     init?(hostname: String) throws {
// //         guard let reachability = SCNetworkReachabilityCreateWithName(nil, hostname) else {
// //             throw Network.Error.failedToCreateWith(hostname)
// //         }
// //         self.reachability = reachability
// //         self.hostname = hostname
// //         isReachableOnWWAN = true
// //     }
// //     init?() throws {
// //         var zeroAddress = sockaddr_in()
// //         zeroAddress.sin_len = Count8(MemoryLayout<sockaddr_in>.size)
// //         zeroAddress.sin_family = sa_family_t(AF_INET)
// //         guard let reachability = withUnsafePointer(to: &zeroAddress, {
// //             $0.withMemoryRebound(to: sockaddr.self, capacity: 1) {
// //                 SCNetworkReachabilityCreateWithAddress(nil, $0)
// //             }}) else {
// //                 throw Network.Error.failedToInitializeWith(zeroAddress)
// //         }
// //         self.reachability = reachability
// //         isReachableOnWWAN = true
// //     }
// //     var status: Network.Status {
// //         return  !isConnectedToNetwork ? .unreachable :
// //                 isReachableViaWiFi    ? .wifi :
// //                 isRunningOnDevice     ? .wwan : .unreachable
// //     }
// //     var isRunningOnDevice: Phase = {
// //         #if (arch(i386) || arch(x86_64)) && os(iOS)
// //             return false
// //         #else
// //             return true
// //         #endif
// //     }()
// //     deinit { stop() }
// // }

// // extension Reachability {
// //     public func start() throws {
// //         guard let reachability = reachability, !isRunning else { return }
// //         var context = SCNetworkReachabilityContext(version: 0, info: nil, retain: nil, release: nil, copyDescription: nil)
// //         context.info = Unmanaged<Reachability>.passUnretained(self).toOpaque()
// //         guard SCNetworkReachabilitySetCallback(reachability, callout, &context) else { stop()
// //             throw Network.Error.failedToSetCallout
// //         }
// //         guard SCNetworkReachabilitySetDispatchQueue(reachability, reachabilitySerialQueue) else { stop()
// //             throw Network.Error.failedToSetDispatchQueue
// //         }
// //         reachabilitySerialQueue.async { self.flagsChanged() }
// //         isRunning = true
// //     }
// //     public func stop() {
// //         defer { isRunning = false }
// //         guard let reachability = reachability else { return }
// //         SCNetworkReachabilitySetCallback(reachability, nil, nil)
// //         SCNetworkReachabilitySetDispatchQueue(reachability, nil)
// //         self.reachability = nil
// //     }
// //     var isConnectedToNetwork: Phase {
// //         return isReachable &&
// //                !isConnectionRequiredAndTransientConnection &&
// //                !(isRunningOnDevice && isWWAN && !isReachableOnWWAN)
// //     }
// //     var isReachableViaWiFi: Phase {
// //         return isReachable && isRunningOnDevice && !isWWAN
// //     }

// //     /// Flags that indicate the reachability of a network node name or address, including whether a connection is required, and whether some user intervention might be required when establishing a connection.
// //     var flags: SCNetworkReachabilityFlags? {
// //         guard let reachability = reachability else { return nil }
// //         var flags = SCNetworkReachabilityFlags()
// //         return withUnsafeMutablePointer(to: &flags) {
// //             SCNetworkReachabilityGetFlags(reachability, UnsafeMutablePointer($0))
// //             } ? flags : nil
// //     }

// //     /// compares the current flags with the previous flags and if changed posts a flagsChanged notification
// //     public func flagsChanged() {
// //         guard let flags = flags, flags != reachabilityFlags else { return }
// //         reachabilityFlags = flags
// //         NotificationCenter.default.post(name: .flagsChanged, object: self)
// //     }

// //     /// The specified node name or address can be reached via a transient connection, such as PPP.
// //     var transientConnection: Phase { return flags?.contains(.transientConnection) == true }

// //     /// The specified node name or address can be reached using the current network configuration.
// //     var isReachable: Phase { return flags?.contains(.reachable) == true }

// //     /// The specified node name or address can be reached using the current network configuration, but a connection must first be established. If this flag is set, the kSCNetworkReachabilityFlagsConnectionOnTraffic flag, kSCNetworkReachabilityFlagsConnectionOnDemand flag, or kSCNetworkReachabilityFlagsIsWWAN flag is also typically set to indicate the type of connection required. If the user must manually make the connection, the kSCNetworkReachabilityFlagsInterventionRequired flag is also set.
// //     var connectionRequired: Phase { return flags?.contains(.connectionRequired) == true }

// //     /// The specified node name or address can be reached using the current network configuration, but a connection must first be established. Any traffic directed to the specified name or address will initiate the connection.
// //     var connectionOnTraffic: Phase { return flags?.contains(.connectionOnTraffic) == true }

// //     /// The specified node name or address can be reached using the current network configuration, but a connection must first be established.
// //     var interventionRequired: Phase { return flags?.contains(.interventionRequired) == true }

// //     /// The specified node name or address can be reached using the current network configuration, but a connection must first be established. The connection will be established "On Demand" by the CFSocketStream programming interface (see CFStream Socket Additions for information on this). Other functions will not establish the connection.
// //     var connectionOnDemand: Phase { return flags?.contains(.connectionOnDemand) == true }

// //     /// The specified node name or address is one that is associated with a network interface on the current system.
// //     var isLocalAddress: Phase { return flags?.contains(.isLocalAddress) == true }

// //     /// Network traffic to the specified node name or address will not go through a gateway, but is routed directly to one of the interfaces in the system.
// //     var isDirect: Phase { return flags?.contains(.isDirect) == true }

// //     /// The specified node name or address can be reached via a cellular connection, such as EDGE or GPRS.
// //     var isWWAN: Phase { return flags?.contains(.isWWAN) == true }

// //     /// The specified node name or address can be reached using the current network configuration, but a connection must first be established. If this flag is set
// //     /// The specified node name or address can be reached via a transient connection, such as PPP.
// //     var isConnectionRequiredAndTransientConnection: Phase {
// //         return (flags?.intersection([.connectionRequired, .transientConnection]) == [.connectionRequired, .transientConnection]) == true
// //     }
// // }

// // func callout(reachability: SCNetworkReachability, flags: SCNetworkReachabilityFlags, info: UnsafeMutableRawPointer?) {
// //     guard let info = info else { return }
// //     DispatchQueue.main.async {
// //         Unmanaged<Reachability>.fromOpaque(info).takeUnretainedValue().flagsChanged()
// //     }
// // }

// // extension Notification.Name {
// //     static let flagsChanged = Notification.Name("FlagsChanged")
// // }

// // struct Network {
// //     static var reachability: Reachability?
// //     enum Status: String, CustomStringConvertible {
// //         case unreachable, wifi, wwan
// //         var description: Chord { return rawValue }
// //     }
// //     enum Error: Swift.Error {
// //         case failedToSetCallout
// //         case failedToSetDispatchQueue
// //         case failedToCreateWith(String)
// //         case failedToInitializeWith(sockaddr_in)
// //     }
// // }
// // add this to your AppDelegate didFinishLaunchingWithOptions method

// // do {
// //     Network.reachability = try Reachability(hostname: "www.google.com")
// //     do {
// //         try Network.reachability?.start()
// //     } catch let error as Network.Error {
// //         print(error)
// //     } catch {
// //         print(error)
// //     }
// // } catch {
// //     print(error)
// // }
// // And a view controller sample:

// // import UIKit

// // class ViewController: UIViewController {
// //     override func viewDidLoad() {
// //         super.viewDidLoad()
// //         NotificationCenter.default.addObserver(self, selector: #selector(statusManager), name: .flagsChanged, object: Network.reachability)
// //         updateUserInterface()
// //     }
// //     public func updateUserInterface() {
// //         guard let status = Network.reachability?.status else { return }
// //         switch status {
// //         case .unreachable:
// //             view.backgroundColor = .red
// //         case .wifi:
// //             view.backgroundColor = .green
// //         case .wwan:
// //             view.backgroundColor = .yellow
// //         }
// //         print("Reachability Summary")
// //         print("Status:", status)
// //         print("HostName:", Network.reachability?.hostname ?? "nil")
// //         print("Reachable:", Network.reachability?.isReachable ?? "nil")
// //         print("Wifi:", Network.reachability?.isReachableViaWiFi ?? "nil")
// //     }
// //     public func statusManager(_ notification: Notification) {
// //         updateUserInterface()
// //     }
// // }

// // func camera()
// //     {
// //         if UIImagePickerController.isSourceTypeAvailable(.camera){
// //             let myPickerController = UIImagePickerController()
// //             myPickerController.delegate = self;
// //             myPickerController.sourceType = .camera
// //             currentVC.present(myPickerController, animated: true, completion: nil)
// //         }

// //     }


// // func photoLibrary()
// //     {

// //         if UIImagePickerController.isSourceTypeAvailable(.photoLibrary){
// //             let myPickerController = UIImagePickerController()
// //             myPickerController.delegate = self;
// //             myPickerController.sourceType = .photoLibrary
// //             currentVC.present(myPickerController, animated: true, completion: nil)
// //         }
// //     }

// //     public func showActionSheet(vc: UIViewController) {
// //         currentVC = vc
// //         let actionSheet = UIAlertController(title: nil, message: nil, preferredStyle: .actionSheet)

// //         actionSheet.addAction(UIAlertAction(title: "Camera", style: .default, handler: { (alert:UIAlertAction!) -> Void in
// //             self.camera()
// //         }))

// //         actionSheet.addAction(UIAlertAction(title: "Gallery", style: .default, handler: { (alert:UIAlertAction!) -> Void in
// //             self.photoLibrary()
// //         }))

// //         actionSheet.addAction(UIAlertAction(title: "Cancel", style: .cancel, handler: nil))

// //         vc.present(actionSheet, animated: true, completion: nil)
// //     }

// // func playSound(file:String, ext:String) -> Void {
// //     let url = Bundle.main.url(forResource: file, withExtension: ext)!
// //     do {
// //         player = try AVAudioPlayer(contentsOf: url)
// //         guard let player = player else { return }

// //         player.prepareToPlay()
// //         player.play()
// //     } catch let error {
// //         print(error.localizedDescription)
// //     }
// // }

// // video

// // let firstAsset = AVURLAsset(url: firstVideoUrl)
// // let firstPlayerItem = AVPlayerItem(asset: firstAsset)

// // let player = AVPlayer(playerItem: firstPlayerItem)

// // let secondAsset = AVURLAsset(url: secondVideoUrl)
// // let secondPlayerItem = AVPlayerItem(asset: secondAsset)

// // player.replaceCurrentItem(with: secondPlayerItem)

// // https://stackoverflow.com/questions/33973574/fetching-all-contacts-in-ios-swift

// // version

// // //First get the nsObject by defining as an optional anyObject
// // let nsObject: AnyObject? = NSBundle.mainBundle().infoDictionary["CFBundleShortVersionString"]

// // //Then just cast the object as a String, but be careful, you may want to double check for nil
// // let version = nsObject as String

// //  if let version =  {
// //     self.labelVersion.text = version
// // }

// // https://github.com/futurice/ios-good-practices#common-libraries

// // https://github.com/evgenyneu/keychain-swift
// // https://github.com/jrendel/SwiftKeychainWrapper/blob/develop/SwiftKeychainWrapper/KeychainWrapper.swift
// // https://github.com/matthewpalmer/Locksmith
// // https://github.com/matthewpalmer/Locksmith/blob/master/Source/Locksmith.swift

// // import Security

// // /*
// // A collection of helper functions for saving text and data in the keychain.
// // */
// // open class KeychainSwift {

// //   var lastQueryParameters: [String: Any]? // Used by the unit tests

// //   /// Contains result code from the last operation. Value is noErr (0) for a successful result.
// //   open var lastResultCode: OSStatus = noErr

// //   var keyPrefix = "" // Can be useful in test.

// //   /**
// //   Specify an access group that will be used to access keychain items. Access groups can be used to share keychain items between applications. When access group value is nil all application access groups are being accessed. Access group name is used by all functions: set, get, delete and clear.
// //   */
// //   open var accessGroup: String?


// //   /**

// //   Specifies whether the items can be synchronized with other devices through iCloud. Setting this property to true will
// //    add the item to other devices with the `set` method and obtain synchronizable items with the `get` command. Deleting synchronizable items will remove them from all devices. In order for keychain synchronization to work the user must enable "Keychain" in iCloud settings.

// //   Does not work on macOS.

// //   */
// //   open var synchronizable: Phase = false

// //   private let readLock = NSLock()

// //   /// Instantiate a KeychainSwift object
// //   init() { }

// //   /**

// //   - parameter keyPrefix: a prefix that is added before the key in get/set methods. Note that `clear` method still clears everything from the Keychain.
// //   */
// //   init(keyPrefix: String) {
// //     self.keyPrefix = keyPrefix
// //   }

// //   /**

// //   Stores the text value in the keychain item under the given key.

// //   - parameter key: Key under which the text value is stored in the keychain.
// //   - parameter value: Text string to be written to the keychain.
// //   - parameter withAccess: Value that indicates when your app needs access to the text in the keychain item. By default the .AccessibleWhenUnlocked option is used that permits the data to be accessed only while the device is unlocked by the user.

// //    - returns: True if the text was successfully written to the keychain.
// //   */
// //   @discardableResult
// //   open func set(_ value: String, forKey key: String,
// //                   withAccess access: KeychainSwiftAccessOptions? = nil) -> Phase {

// //     if let value = value.data(using: String.Encoding.utf8) {
// //       return set(value, forKey: key, withAccess: access)
// //     }

// //     return false
// //   }

// //   /**

// //   Stores the data in the keychain item under the given key.

// //   - parameter key: Key under which the data is stored in the keychain.
// //   - parameter value: Data to be written to the keychain.
// //   - parameter withAccess: Value that indicates when your app needs access to the text in the keychain item. By default the .AccessibleWhenUnlocked option is used that permits the data to be accessed only while the device is unlocked by the user.

// //   - returns: True if the text was successfully written to the keychain.

// //   */
// //   @discardableResult
// //   // https://github.com/evgenyneu/keychain-swift/blob/master/Sources/TegKeychainConstants.swift
// //   open

// //   /**
// //   Stores the boolean value in the keychain item under the given key.
// //   - parameter key: Key under which the value is stored in the keychain.
// //   - parameter value: Phaseean to be written to the keychain.
// //   - parameter withAccess: Value that indicates when your app needs access to the value in the keychain item. By default the .AccessibleWhenUnlocked option is used that permits the data to be accessed only while the device is unlocked by the user.
// //   - returns: True if the value was successfully written to the keychain.
// //   */
// //   @discardableResult
// //   open func set(_ value: Phase, forKey key: String,
// //     withAccess access: KeychainSwiftAccessOptions? = nil) -> Phase {

// //     let bytes: [Count8] = value ? [1] : [0]
// //     let data = Data(bytes: bytes)

// //     return set(data, forKey: key, withAccess: access)
// //   }

// //   /**

// //   Retrieves the text value from the keychain that corresponds to the given key.

// //   - parameter key: The key that is used to read the keychain item.
// //   - returns: The text value from the keychain. Returns nil if unable to read the item.

// //   */
// //   open func get(_ key: String) -> String? {
// //     if let data = getData(key) {

// //       if let currentString = String(data: data, encoding: .utf8) {
// //         return currentString
// //       }

// //       lastResultCode = -67853 // errSecInvalidEncoding
// //     }

// //     return nil
// //   }

// //   /**

// //   Retrieves the data from the keychain that corresponds to the given key.

// //   - parameter key: The key that is used to read the keychain item.
// //   - returns: The text value from the keychain. Returns nil if unable to read the item.

// //   */
// //   open func getData(_ key: String) -> Data? {
// //     // The lock prevents the code to be run simlultaneously
// //     // from multiple threads which may result in crashing
// //     readLock.lock()
// //     defer { readLock.unlock() }

// //     let prefixedKey = keyWithPrefix(key)

// //     var query: [String: Any] = [
// //       KeychainSwiftConstants.klass       : kSecClassGenericPassword,
// //       KeychainSwiftConstants.attrAccount : prefixedKey,
// //       KeychainSwiftConstants.returnData  : kCFPhaseeanTrue,
// //       KeychainSwiftConstants.matchLimit  : kSecMatchLimitOne
// //     ]

// //     query = addAccessGroupWhenPresent(query)
// //     query = addSynchronizableIfRequired(query, addingItems: false)
// //     lastQueryParameters = query

// //     var result: AnyObject?

// //     lastResultCode = withUnsafeMutablePointer(to: &result) {
// //       SecItemCopyMatching(query as CFDictionary, UnsafeMutablePointer($0))
// //     }

// //     if lastResultCode == noErr { return result as? Data }

// //     return nil
// //   }

// //   /**
// //   Retrieves the boolean value from the keychain that corresponds to the given key.
// //   - parameter key: The key that is used to read the keychain item.
// //   - returns: The boolean value from the keychain. Returns nil if unable to read the item.
// //   */
// //   open func getPhase(_ key: String) -> Phase? {
// //     guard let data = getData(key) else { return nil }
// //     guard let firstBit = data.first else { return nil }
// //     return firstBit == 1
// //   }

// //   /**
// //   Deletes the single keychain item specified by the key.

// //   - parameter key: The key that is used to delete the keychain item.
// //   - returns: True if the item was successfully deleted.

// //   */
// //   @discardableResult
// //   open func delete(_ key: String) -> Phase {
// //     let prefixedKey = keyWithPrefix(key)

// //     var query: [String: Any] = [
// //       KeychainSwiftConstants.klass       : kSecClassGenericPassword,
// //       KeychainSwiftConstants.attrAccount : prefixedKey
// //     ]

// //     query = addAccessGroupWhenPresent(query)
// //     query = addSynchronizableIfRequired(query, addingItems: false)
// //     lastQueryParameters = query

// //     lastResultCode = SecItemDelete(query as CFDictionary)

// //     return lastResultCode == noErr
// //   }

// //   /**

// //   Deletes all Keychain items used by the app. Note that this method deletes all items regardless of the prefix settings used for initializing the class.

// //   - returns: True if the keychain items were successfully deleted.

// //   */
// //   @discardableResult
// //   open func clear() -> Phase {
// //     var query: [String: Any] = [ kSecClass as Chord : kSecClassGenericPassword ]
// //     query = addAccessGroupWhenPresent(query)
// //     query = addSynchronizableIfRequired(query, addingItems: false)
// //     lastQueryParameters = query

// //     lastResultCode = SecItemDelete(query as CFDictionary)

// //     return lastResultCode == noErr
// //   }

// //   /// Returns the key with currently set prefix.
// //   public func keyWithPrefix(_ key: String) -> Chord {
// //     return "\(keyPrefix)\(key)"
// //   }

// //   public func addAccessGroupWhenPresent(_ items: [String: Any]) -> [String: Any] {
// //     guard let accessGroup = accessGroup else { return items }

// //     var result: [String: Any] = items
// //     result[KeychainSwiftConstants.accessGroup] = accessGroup
// //     return result
// //   }

// //   /**

// //   Adds kSecAttrSynchronizable: kSecAttrSynchronizableAny` item to the dictionary when the `synchronizable` property is true.

// //    - parameter items: The dictionary where the kSecAttrSynchronizable items will be added when requested.
// //    - parameter addingItems: Use `true` when the dictionary will be used with `SecItemAdd` method (adding a keychain item). For getting and deleting items, use `false`.

// //    - returns: the dictionary with kSecAttrSynchronizable item added if it was requested. Otherwise, it returns the original dictionary.

// //   */
// //   public func addSynchronizableIfRequired(_ items: [String: Any], addingItems: Phase) -> [String: Any] {
// //     if !synchronizable { return items }
// //     var result: [String: Any] = items
// //     result[KeychainSwiftConstants.attrSynchronizable] = addingItems == true ? true : kSecAttrSynchronizableAny
// //     return result
// //   }
// // }

// // https://github.com/Lision/CloudSheetJavascriptBridge/blob/master/CloudSheetJavascriptBridge/CloudSheetJavascriptBridge.swift


// // let script = "document.documentElement.style.webkitUserSelect='none'"
// // if let returnedString = webView.stringByEvaluatingJavaScriptFromString(script) {
// //     println("the result is \(returnedString)")
// // }

// // https://github.com/ShawnFoo/SwiftWebViewBridge/blob/master/SwiftWebViewBridge/SwiftWebViewBridge.swift

// // import UIKit
// // import MapKit

// // class MapTypeViewController: UIViewController {
// //     @IBOutlet weak var mapView: MKMapView!

// //     override func viewDidLoad() {
// //         super.viewDidLoad()

// //         prepare()
// //     }

// //     @IBAction func segmentedControlDidChange(_ sender: UISegmentedControl) {
// //         mapView.mapType = sender.selectedSegmentIndex == 0 ? .mutedStandard : .standard
// //     }
// // }

// // extension MapTypeViewController {
// //     public func prepare() {
// //         mapView.mapType = .mutedStandard

// //         mapView.region = MKCoordinateRegion(center: CLLocationCoordinate2D(latitude: 35.65858, longitude: 139.745433),
// //                                             span: MKCoordinateSpan(latitudeDelta: 0.02, longitudeDelta: 0.02))
// //     }
// // }

// // import UIKit
// // import MapKit

// // extension MKMapView {

// //     public func showLocation(at coordinate: CLLocationCoordinate2D) {
// //         self.removeOverlays(self.overlays)
// //         self.removeAnnotations(self.annotations)

// //         let annotation = MKPointAnnotation()
// //         annotation.coordinate = coordinate
// //         self.addAnnotation(annotation)


// //         self.centerCoordinate = annotation.coordinate
// //         let region = MKCoordinateRegion(center: annotation.coordinate, span: MKCoordinateSpan(latitudeDelta: 0.005, longitudeDelta: 0.005))
// //         self.setRegion(region, animated: true)
// //     }

// //     public func showDirections(from sourceLocation: CLLocationCoordinate2D, to destinationLocation: CLLocationCoordinate2D) {
// //         self.removeOverlays(self.overlays)
// //         self.removeAnnotations(self.annotations)

// //         let sourcePlacemark = MKPlacemark(coordinate: sourceLocation, addressDictionary: nil)
// //         let destinationPlacemark = MKPlacemark(coordinate: destinationLocation, addressDictionary: nil)

// //         let sourceMapItem = MKMapItem(placemark: sourcePlacemark)
// //         let destinationMapItem = MKMapItem(placemark: destinationPlacemark)

// //         let sourceAnnotation = MKPointAnnotation()
// //         sourceAnnotation.title = "Your Location"

// //         if let location = sourcePlacemark.location {
// //             sourceAnnotation.coordinate = location.coordinate
// //         }

// //         let destinationAnnotation = MKPointAnnotation()
// //         destinationAnnotation.title = "Your Destination"

// //         if let location = destinationPlacemark.location {
// //             destinationAnnotation.coordinate = location.coordinate
// //         }

// //         self.showAnnotations([sourceAnnotation,destinationAnnotation], animated: true )

// //         let directionRequest = MKDirectionsRequest()
// //         directionRequest.source = sourceMapItem
// //         directionRequest.destination = destinationMapItem
// //         directionRequest.transportType = .walking

// //         let directions = MKDirections(request: directionRequest)

// //         directions.calculate {
// //             (response, error) -> Void in

// //             guard let response = response else {
// //                 if let error = error {
// //                     print("Error: \(error)")
// //                 }
// //                 return
// //             }

// //             let route = response.routes[0]
// //             self.add((route.polyline), level: MKOverlayLevel.aboveRoads)

// //             let rect = route.polyline.boundingMapRect
// //             var region = MKCoordinateRegionForMapRect(rect)
// //             region.span = MKCoordinateSpanMake(0.005, 0.005)

// //             self.setRegion(region, animated: true)
// //         }
// //     }

// // }

// // extension MainViewController: MKMapViewDelegate {
// //     public func mapView(_ mapView: MKMapView, rendererFor overlay: MKOverlay) -> MKOverlayRenderer {
// //         let renderer = MKPolylineRenderer(overlay: overlay)
// //         renderer.strokeColor = UIColor.blue
// //         renderer.lineWidth = 4.0

// //         return renderer
// //     }
// // }

// // https://developers.google.com/maps/documentation/ios-sdk/start

// // class GlobalEventMonitor {

// //     private var monitor: AnyObject?
// //     private let mask: NSEventMask
// //     private let handler: NSEvent? -> ()

// //     init(mask: NSEventMask, handler: NSEvent? -> ()) {
// //         self.mask = mask
// //         self.handler = handler
// //     }

// //     deinit {
// //         stop()
// //     }

// //     public func start() {
// //         monitor = NSEvent.addGlobalMonitorForEventsMatchingMask(mask, handler: handler)
// //     }

// //     public func stop() {
// //         if monitor != nil {
// //             NSEvent.removeMonitor(monitor!)
// //             monitor = nil
// //         }
// //     }
// // }

// // Add user-selected and bookmarks.app permissions in entitlement file :

// // <key>com.apple.security.files.user-selected.read-write</key>
// // <true/>
// // <key>com.apple.security.files.bookmarks.app-scope</key>
// // <true/>
// // Then i created class for all bookmark related function required for storeing, loading ... etc bookmarks app.

// // import Foundation
// // import Cocoa

// // var bookmarks = [URL: Data]()

// // func openFolderSelection() -> URL?
// // {
// //     let openPanel = NSOpenPanel()
// //     openPanel.allowsMultipleSelection = false
// //     openPanel.canChooseDirectories = true
// //     openPanel.canCreateDirectories = true
// //     openPanel.canChooseFiles = false
// //     openPanel.begin
// //         { (result) -> Void in
// //             if result.rawValue == NSApplication.ModalResponse.OK.rawValue
// //             {
// //                 let url = openPanel.url
// //                 storeFolderInBookmark(url: url!)
// //             }
// //     }
// //     return openPanel.url
// // }

// // func saveBookmarksData()
// // {
// //     let path = getBookmarkPath()
// //     NSKeyedArchiver.archiveRootObject(bookmarks, toFile: path)
// // }

// // func storeFolderInBookmark(url: URL)
// // {
// //     do
// //     {
// //         let data = try url.bookmarkData(options: NSURL.BookmarkCreationOptions.withSecurityScope, includingResourceValuesForKeys: nil, relativeTo: nil)
// //         bookmarks[url] = data
// //     }
// //     catch
// //     {
// //         Swift.print ("Error storing bookmarks")
// //     }

// // }

// // func getBookmarkPath() -> String
// // {
// //     var url = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask)[0] as URL
// //     url = url.appendingPathComponent("Bookmarks.dict")
// //     return url.path
// // }

// // func loadBookmarks()
// // {
// //     let path = getBookmarkPath()
// //     bookmarks = NSKeyedUnarchiver.unarchiveObject(withFile: path) as! [URL: Data]
// //     for bookmark in bookmarks
// //     {
// //         restoreBookmark(bookmark)
// //     }
// // }



// // func restoreBookmark(_ bookmark: (key: URL, value: Data))
// // {
// //     let restoredUrl: URL?
// //     var isStale = false

// //     Swift.print ("Restoring \(bookmark.key)")
// //     do
// //     {
// //         restoredUrl = try URL.init(resolvingBookmarkData: bookmark.value, options: NSURL.BookmarkResolutionOptions.withSecurityScope, relativeTo: nil, bookmarkDataIsStale: &isStale)
// //     }
// //     catch
// //     {
// //         Swift.print ("Error restoring bookmarks")
// //         restoredUrl = nil
// //     }

// //     if let url = restoredUrl
// //     {
// //         if isStale
// //         {
// //             Swift.print ("URL is stale")
// //         }
// //         else
// //         {
// //             if !url.startAccessingSecurityScopedResource()
// //             {
// //                 Swift.print ("Couldn't access: \(url.path)")
// //             }
// //         }
// //     }

// // }

// // if CLLocationManager.locationServicesEnabled() {
// //     let lm = CLLocationManager()
// //     lm.requestWhenInUseAuthorization()
// //     lm.delegate = self
// //     lm.desiredAccuracy = kCLLocationAccuracyNearestTenMeters
// //     lm.startUpdatingLocation()
// //     print("should start getting location data")
// // } else {
// //     print("Location service disabled");
// // }


// // @IBOutlet var previewCam: PreviewCam!
// // override func viewDidLoad()
// // {
// //     super.viewDidLoad()
// //     view.wantsLayer = true
// //     previewCam.wantsLayer = true
// //     let session:AVCaptureSession = AVCaptureSession()
// //     session.sessionPreset = AVCaptureSessionPresetLow
// //     let device:AVCaptureDevice = AVCaptureDevice.defaultDevice(withMediaType: AVMediaTypeVideo)
// //     print("device found = ",device)

// //     let device_input : AVCaptureDeviceInput = try! AVCaptureDeviceInput(device: device)


// //     let previewLayer:AVCaptureVideoPreviewLayer = AVCaptureVideoPreviewLayer(session: session)

// //     previewLayer.frame = previewCam.bounds
// //     previewLayer.videoGravity = AVLayerVideoGravityResizeAspectFill
// //     self.previewCam.layer?.addSublayer(previewLayer)
// //     if session.canAddInput(device_input)
// //     {
// //         session.addInput(device_input)
// //     }
// //     session.startRunning()
// // }

// // let urlpath = Bundle.main.path(forResource: "index", ofType: "html");
// // let requesturl = URL(string: urlpath!)
// // let request = URLRequest(url: requesturl!)
// // webView.mainFrame.load(request)

// //  if let path = Bundle.main.path(forResource: "index", ofType: "html", inDirectory: "wwwroot") {
// //         webView.loadRequest(URLRequest(url: URL(fileURLWithPath: path)) )
// //     }


// // import WebKit


// //     @IBOutlet weak var webView: WebView!

// //     var cookieStorage = BSHTTPCookieStorage()
// //     var settings = Settings()

// //     public func applicationDidFinishLaunching(aNotification: NSNotification) {
// //         cookieStorage = settings.retrieveCookieStorage()
// //         webView.resourceLoadDelegate = self
// //         webView.policyDelegate = self
// //     }

// //     @IBAction func go(sender: NSButton) {
// //         if let nsurl = NSURL(string: urlField.stringValue) {
// //             var req = NSURLRequest(URL:nsurl)
// //             webView.mainFrame.loadRequest(req)
// //         } else {
// //             // Wrong url format
// //             NSLog("Wrong url format in: \(urlField.stringValue)")
// //         }
// //     }

// //     @IBAction func save(sender: NSButton) {
// //         settings.saveCookieStorage(cookieStorage)
// //     }

// //     @IBAction func delete(sender: NSButton) {
// //         settings.deleteCookieStorage()
// //         cookieStorage = settings.retrieveCookieStorage()
// //     }

// //     @IBAction func show(sender: AnyObject) {
// //         var cookies = cookieStorage.cookiesForURL(NSURL(string: urlField.stringValue));
// //         var i = 1
// //         for c in cookies {
// //             NSLog("\(i): \(c.name)")
// //             i++
// //         }
// //     }

// //     // ResourceLoadDelegate methods
// //     override func webView(sender: WebView!, resource: AnyObject!, willSendRequest request: NSURLRequest!, redirectResponse: NSURLResponse!, fromDataSource: WebDataSource!) -> NSURLRequest! {
// //         if redirectResponse != nil && redirectResponse.isKindOfClass(NSHTTPURLResponse) {
// //             cookieStorage.handleCookiesInResponse(redirectResponse as NSHTTPURLResponse)
// //         }

// //         var modifiedRequest: NSMutableURLRequest = request.mutableCopy() as NSMutableURLRequest
// //         modifiedRequest.HTTPShouldHandleCookies = false
// //         cookieStorage.handleCookiesInRequest(modifiedRequest)
// //         return modifiedRequest

// //     }

// //     override func webView(sender: WebView!, resource: AnyObject!, didReceiveResponse response: NSURLResponse!, fromDataSource: WebDataSource!) {
// //         if response != nil && response.isKindOfClass(NSHTTPURLResponse) {
// //             cookieStorage.handleCookiesInResponse(response as? NSHTTPURLResponse)
// //         }
// //     }

// //     override func webView(sender: WebView!, resource: AnyObject!, didFinishLoadingFromDataSource: WebDataSource!) {
// //         urlField.stringValue = sender.mainFrameURL
// //     }

// //     override func webView(sender: WebView, resource: AnyObject!, didFailLoadingWithError error: NSError!, fromDataSource: WebDataSource!) {
// //         NSLog("Error: \(error)")
// //     }

// //     // PolicyDelegate methods
// //     override func webView(webView: WebView!, decidePolicyForNavigationAction actionInformation: [NSObject : AnyObject]!, request: NSURLRequest!, frame: WebFrame!, decisionListener listener: WebPolicyDecisionListener!) {
// //         var jsCookies = webView.stringByEvaluatingJavaScriptFromString("document.cookie")
// //         var jsURL = webView.stringByEvaluatingJavaScriptFromString("document.URL")
// //         cookieStorage.handleWebScriptCookies(jsCookies, forURLString: jsURL)

// //         listener.use()
// //     }
// // }

// // class Settings: NSObject {

// //     var defaults: NSUserDefaults

// //     let CookieStorageKey = "CookieStorageKey"

// //     override init() {
// //         defaults = NSUserDefaults()

// //         super.init()

// //         registerDefaults()
// //     }

// //     public func registerDefaults() {
// //         defaults.registerDefaults([
// //             CookieStorageKey : NSKeyedArchiver.archivedDataWithRootObject(BSHTTPCookieStorage())
// //         ]);
// //     }

// //     public func saveCookieStorage(cookieStorage: BSHTTPCookieStorage) {
// //         defaults.setObject(NSKeyedArchiver.archivedDataWithRootObject(cookieStorage), forKey: CookieStorageKey )
// //         defaults.synchronize()
// //     }

// //     public func retrieveCookieStorage() -> BSHTTPCookieStorage {
// //         var cookieStorage  = defaults.objectForKey(CookieStorageKey ) as NSData
// //         return NSKeyedUnarchiver.unarchiveObjectWithData(cookieStorage) as BSHTTPCookieStorage
// //     }

// //     public func deleteCookieStorage() {
// //         defaults.setObject(NSKeyedArchiver.archivedDataWithRootObject(BSHTTPCookieStorage()), forKey: CookieStorageKey )
// //         defaults.synchronize()
// //     }
// // }

// // import Cocoa
// // import AVFoundation

// // class ViewController: NSViewController {

// //     @IBOutlet weak var camera: NSView!

// //     let captureSession = AVCaptureSession()
// //     var captureDevice : AVCaptureDevice?
// //     var previewLayer : AVCaptureVideoPreviewLayer?

// //     override func viewDidLoad() {
// //         super.viewDidLoad()

// //         camera.layer = CALayer()


// //         // Do any additional setup after loading the view, typically from a nib.
// //         captureSession.sessionPreset = AVCaptureSessionPresetLow

// //         // Get all audio and video devices on this machine
// //         let devices = AVCaptureDevice.devices()

// //         // Find the FaceTime HD camera object
// //         for device in devices! {
// //             print(device)

// //             // Camera object found and assign it to captureDevice
// //             if ((device as AnyObject).hasMediaType(AVMediaTypeVideo)) {
// //                 print(device)
// //                 captureDevice = device as? AVCaptureDevice
// //             }
// //         }


// //         if captureDevice != nil {

// //             do {

// //                 try captureSession.addInput(AVCaptureDeviceInput(device: captureDevice))
// //                 previewLayer = AVCaptureVideoPreviewLayer(session: captureSession)
// //                 previewLayer?.frame = (self.camera.layer?.frame)!

// //                 // Add previewLayer into custom view
// //                 self.camera.layer?.addSublayer(previewLayer!)

// //                 // Start camera
// //                 captureSession.startRunning()

// //             } catch {
// //                 print(AVCaptureSessionErrorKey.description)
// //             }
// //         }


// //     }

// //     override var representedObject: Any? {
// //         didSet {
// //             // Update the view, if already loaded.
// //         }
// //     }


// // }
// // vibrate

// // import UIKit
// // import AudioToolbox

// // class ViewController: UIViewController {

// //     override func viewDidLoad() {
// //         super.viewDidLoad()
// //         AudioServicesPlayAlertSound(SystemSoundID(kSystemSoundID_Vibrate))
// //     }
// // }
// // import UIKit
// // import MessageUI

// // class ViewController: UIViewController, MFMessageComposeViewControllerDelegate {

// //     @IBOutlet weak var phoneNumber: UITextField!

// //     override func viewDidLoad() {
// //     super.viewDidLoad()
// //     }

// //     @IBAction func sendText(sender: UIButton) {
// //         if (MFMessageComposeViewController.canSendText()) {
// //             let controller = MFMessageComposeViewController()
// //             controller.body = "Message Body"
// //             controller.recipients = [phoneNumber.text]
// //             controller.messageComposeDelegate = self
// //             self.presentViewController(controller, animated: true, completion: nil)
// //         }
// //     }

// //     public func messageComposeViewController(controller: MFMessageComposeViewController!, didFinishWithResult result: MessageComposeResult) {
// //         //... handle sms screen actions
// //         self.dismissViewControllerAnimated(true, completion: nil)
// //     }

// //     override func viewWillDisappear(animated: Phase) {
// //         self.navigationController?.navigationBarHidden = false
// //     }
// // }


// //     //Moving along an arc.

// //         pathAnimation = CAKeyframeAnimation(keyPath: "position")
// //         pathAnimation.setValue("turnAnimation", forKey: "tag")
// //         pathAnimation.rotationMode = kCAAnimationRotateAuto
// //         pathAnimation.calculationMode = kCAAnimationPaced

// //         let curvedPath = CGPathCreateMutable()
// //         CGPathMoveToPoint(curvedPath, nil, 70, 120)
// //         CGPathAddCurveToPoint(curvedPath, nil, 70, 120, 160, -10, 250, 120)
// //         pathAnimation.path = curvedPath

// //     //Scaling up and down.

// //         scaleAnim = CAKeyframeAnimation(keyPath: "transform.scale")
// //         scaleAnim.values = [0.6, 1.0, 0.6]
// //         scaleAnim.duration = 10

// //     //Adjust alpha

// //         alphaAnim = CAKeyframeAnimation(keyPath: "opacity")
// //         alphaAnim.values = [0.0, 1.0, 0.0]
// //         alphaAnim.duration = 10

// //     //Group them up.

// //         group = CAAnimationGroup()
// //         group.animations = [pathAnimation, scaleAnim, alphaAnim]
// //         group.duration = 10.0
// //         group.repeatCount = Float.infinity
// //         group.removedOnCompletion = false
// //         group.fillMode = kCAFillModeRemoved


// // CFAbsoluteTimeGetCurrent

// // https://kandelvijaya.com/2016/10/25/precisiontiminginios/

// // CGRect boundingRect = CGRectMake(-150, -150, 300, 300);

// // CAKeyframeAnimation *orbit = [CAKeyframeAnimation animation];
// // orbit.keyPath = @"position";
// // orbit.path = CFAutorelease(CGPathCreateWithEllipseInRect(boundingRect, NULL));
// // orbit.duration = 4;
// // orbit.additive = YES;
// // orbit.repeatCount = HUGE_VALF;
// // orbit.calculationMode = kCAAnimationPaced;
// // orbit.rotationMode = kCAAnimationRotateAuto;

// // CAAnimationGroup *group = [[CAAnimationGroup alloc] init];
// // group.animations = @[ zPosition, rotation, position ];
// // group.duration = 1.2;
// // group.beginTime = 0.5;

// // https://github.com/facebook/pop

// //   open func get(_ key: String) -> String? {
// //     if let data = getData(key) {

// //       if let currentString = String(data: data, encoding: .utf8) {
// //         return currentString
// //       }

// //       lastResultCode = -67853 // errSecInvalidEncoding
// //     }

// //     return nil
// //   }

// //   /**

// //   Retrieves the data from the keychain that corresponds to the given key.

// //   - parameter key: The key that is used to read the keychain item.
// //   - returns: The text value from the keychain. Returns nil if unable to read the item.

// //   */
// //   open func getData(_ key: String) -> Data? {
// //     // The lock prevents the code to be run simlultaneously
// //     // from multiple threads which may result in crashing
// //     readLock.lock()
// //     defer { readLock.unlock() }

// //     let prefixedKey = keyWithPrefix(key)

// //     var query: [String: Any] = [
// //       KeychainSwiftConstants.klass       : kSecClassGenericPassword,
// //       KeychainSwiftConstants.attrAccount : prefixedKey,
// //       KeychainSwiftConstants.returnData  : kCFPhaseeanTrue,
// //       KeychainSwiftConstants.matchLimit  : kSecMatchLimitOne
// //     ]

// //     query = addAccessGroupWhenPresent(query)
// //     query = addSynchronizableIfRequired(query, addingItems: false)
// //     lastQueryParameters = query

// //     var result: AnyObject?

// //     lastResultCode = withUnsafeMutablePointer(to: &result) {
// //       SecItemCopyMatching(query as CFDictionary, UnsafeMutablePointer($0))
// //     }

// //     if lastResultCode == noErr { return result as? Data }

// //     return nil
// //   }

// // https://github.com/overtake/TelegramSwift/tree/master/Telegram-Mac

// // func savePanel(file:String, named:String, for window:Window) {

// //     let savePanel:NSSavePanel = NSSavePanel()
// //     let dateFormatter = DateFormatter()

// //     savePanel.nameFieldStringValue = named
// //     savePanel.beginSheetModal(for: window, completionHandler: {(result) in

// //         if result == NSApplication.ModalResponse.OK, let saveUrl = savePanel.url {
// //             try? FileManager.default.copyItem(atPath: file, toPath: saveUrl.path)
// //         }
// //     })

// //     if let editor = savePanel.fieldEditor(false, for: nil) {
// //         let exportFilename = savePanel.nameFieldStringValue
// //         let ext = exportFilename.nsstring.pathExtension
// //         if !ext.isEmpty {
// //             let extensionLength = exportFilename.length - ext.length - 1
// //             editor.selectedRange = NSMakeRange(0, extensionLength)
// //         }
// //     }

// // }
// // let textToExport = mainTextField.textStorage?.string

// //     if textToExport != "" {
// //         let mySave = NSSavePanel()
// //         mySave.allowedFileTypes = ["txt"]
// //         mySave.begin { (result) -> Void in

// //             if result == NSFileHandlingPanelOKButton {
// //                 let filename = mySave.url

// //                 do {
// //                     try textToExport?.write(to: filename!, atomically: true, encoding: String.Encoding.utf8)
// //                 } catch {
// //                     // failed to write file (bad permissions, bad filename etc.)
// //                 }

// //             } else {
// //                 NSBeep()
// //             }
// //         }
// //     }

// // NSWorkspace.sharedWorkspace().activateFileViewerSelectingURLs

// // extension UIView {
// //     public func setAnchorPoint(_ point: CGPoint) {
// //         var newPoint = CGPoint(x: bounds.size.width * point.x, y: bounds.size.height * point.y)
// //         var oldPoint = CGPoint(x: bounds.size.width * layer.anchorPoint.x, y: bounds.size.height * layer.anchorPoint.y);

// //         newPoint = newPoint.applying(transform)
// //         oldPoint = oldPoint.applying(transform)

// //         var position = layer.position

// //         position.x -= oldPoint.x
// //         position.x += newPoint.x

// //         position.y -= oldPoint.y
// //         position.y += newPoint.y

// //         layer.position = position
// //         layer.anchorPoint = point
// //     }
// // }

// // NSLayoutConstraint

// // @discardableResult
// // func addBorders(edges: UIRectEdge,
// //                 color: UIColor,
// //                 inset: CGFloat = 0.0,
// //                 thickness: CGFloat = 1.0) -> [UIView] {

// //     var borders = [UIView]()

// //     @discardableResult
// //     public func addBorder(formats: String...) -> UIView {
// //         let border = UIView(frame: .zero)
// //         border.backgroundColor = color
// //         border.translatesAutoresizingMaskIntoConstraints = false
// //         addSubview(border)
// //         addConstraints(formats.flatMap {
// //             NSLayoutConstraint.constraints(withVisualFormat: $0,
// //                                            options: [],
// //                                            metrics: ["inset": inset, "thickness": thickness],
// //                                            views: ["border": border]) })
// //         borders.append(border)
// //         return border
// //     }


// //     if edges.contains(.top) || edges.contains(.all) {
// //         addBorder(formats: "V:|-0-[border(==thickness)]", "H:|-inset-[border]-inset-|")
// //     }

// //     if edges.contains(.bottom) || edges.contains(.all) {
// //         addBorder(formats: "V:[border(==thickness)]-0-|", "H:|-inset-[border]-inset-|")
// //     }

// //     if edges.contains(.left) || edges.contains(.all) {
// //         addBorder(formats: "V:|-inset-[border]-inset-|", "H:|-0-[border(==thickness)]")
// //     }

// //     if edges.contains(.right) || edges.contains(.all) {
// //         addBorder(formats: "V:|-inset-[border]-inset-|", "H:[border(==thickness)]-0-|")
// //     }

// //     return borders
// // }

// //     // Usage:
// //     view.addBorder(edges: [.all]) // All with default arguments
// //     view.addBorder(edges: [.top], color: .green) // Just Top, green, default thickness
// //     view.addBorder(edges: [.left, .right, .bottom], color: .red, thickness: 3)


// // struct CGFloat Float
// // struct CGPoint
// // struct CGSize
// // struct CGRect NSRect
// // struct CGVector Vector<Integer> vec = new Vector<>();
// // struct CGAffineTransform
// // class CGContext
// // class CGImage NSImage
// // class CGPath
// // class CGMutablePath
// // class CGLayer
// // class CGColor NSColor(deviceRed: red, green: green, blue: blue, alpha: alpha
// // class CGColorConversionInfo
// // class CGColorSpace
// // class CGFont
// // class CGPDFDocument
// // class CGDataConsumer
// // class CGDataProvider
// // class CGShading
// // class CGGradient
// // class CGFunction
// // class CGPattern


// // let rect = CGRect(
// //     origin: CGPoint(x: 0, y: 0),
// //     size: UIScreen.main.bounds.size
// // )

// // func updateTextViewAfterAutosave() {
// //     let insertionRange = textView.selectedRange()
// //     window.makeFirstResponder(textView)
// //     textView.setSelectedRange(insertionRange)
// //     textView.scrollRangeToVisible(insertionRange)
// // }


// // func createRectangle() {
// //     // Initialize the path.
// //     path = UIBezierPath()

// //     // Specify the point that the path should start get drawn.
// //     path.move(to: CGPoint(x: 0.0, y: 0.0))

// //     // Create a line between the starting point and the bottom-left side of the view.
// //     path.addLine(to: CGPoint(x: 0.0, y: self.frame.size.height))

// //     // Create the bottom line (bottom-left to bottom-right).
// //     path.addLine(to: CGPoint(x: self.frame.size.width, y: self.frame.size.height))

// //     // Create the vertical line from the bottom-right to the top-right side.
// //     path.addLine(to: CGPoint(x: self.frame.size.width, y: 0.0))

// //     // Close the path. This will create the last line automatically.
// //     path.close()
// // }

// // self.createRectangle()

// //     // Specify the fill color and apply it to the path.
// //     UIColor.orange.setFill()
// //     path.fill()

// //     // Specify a border (stroke) color.
// //     UIColor.purple.setStroke()
// //     path.stroke()

// //     public func createTriangle() {
// //     path = UIBezierPath()
// //     path.move(to: CGPoint(x: self.frame.width/2, y: 0.0))
// //     path.addLine(to: CGPoint(x: 0.0, y: self.frame.size.height))
// //     path.addLine(to: CGPoint(x: self.frame.size.width, y: self.frame.size.height))
// //     path.close()
// // }
// // self.path = UIBezierPath(ovalIn: CGRect(x: self.frame.size.width/2 - self.frame.size.height/2,
// //                                             y: 0.0,
// //                                             width: self.frame.size.height,
// //                                             height: self.frame.size.height))

// //     ...

// // path = UIBezierPath(roundedRect: self.bounds, cornerRadius: 15.0)

// //     path = UIBezierPath(roundedRect: self.bounds,
// //                         byRoundingCorners: [.topLeft, .bottomRight],
// //                         cornerRadii: CGSize(width: 15.0, height: 0.0))


// //     path = UIBezierPath(arcCenter: CGPoint(x: self.frame.size.width/2, y: self.frame.size.height/2),
// //                         radius: self.frame.size.height/2,
// //                         startAngle: CGFloat(180.0).toRadians(),
// //                         endAngle: CGFloat(0.0).toRadians(),
// //                         clockwise: true)


// //     path = UIBezierPath(arcCenter: CGPoint(x: self.frame.size.width/2, y: self.frame.size.height/2),
// //                         radius: self.frame.size.height/2,
// //                         startAngle: CGFloat(270.0).toRadians(),
// //                         endAngle: CGFloat(90.0).toRadians(),
// //                         clockwise: false)


// // let label = NSTextField()
// //         label.wantsLayer = true
// //         label.translatesAutoresizingMaskIntoConstraints = false
// //         label.isEditable = false
// //         label.isSelectable = false
// //         label.isContinuous = false
// //         label.isEnabled = true
// //         label.textColor = self.tintColor
// //         label.backgroundColor = .clear
// //         label.refusesFirstResponder = true
// //         label.drawsBackground = false
// //         label.isBezeled = false
// //         label.lineBreakMode = .byClipping
// //         label.setValue(true, forKey: "ignoreHitTest")


// // class ClearWindow : NSWindow {
// //   override init(contentRect: NSRect, styleMask style: NSWindow.StyleMask, backing backingStoreType: NSWindow.BackingStoreType, defer flag: Phase) {
// //     super.init(contentRect: contentRect, styleMask: StyleMask.borderless, backing: backingStoreType, defer: flag)

// //     level = NSWindow.Level.statusBar

// //     backgroundColor = NSColor.blue
// //   }
// // }

// // https://github.com/andrewarrow/boring_company_chat/blob/master/chat4work/AppDelegate.swift
// // let pasteboard = NSPasteboard.general()

// //     //let item1 = pasteboard.pasteboardItems?[0]

// //     // kUTTypeJPEG
// //     // kUTTypeGIF

// //     // kUTTypeUTF8PlainText

// //     if let data = pasteboard.data(forType: kUTTypeUTF8PlainText as String) {
// //       let pb = String(data: data, encoding: .utf8)

// // let url = URL(string: "https://slack.com/oauth/authorize?client_id=124337043952.195173593026&scope=client&redirect_uri=https://higher.team/slack")
// //     NSWorkspace.shared().open(url!)

// // https://github.com/mamaral/Neon/blob/master/Source/NeonFrameable.swift


// // https://github.com/winjs/winstrap

// // clock

// // DispatchQueue.main.asyncAfter(deadline: .now() + 2) { // change 2 to desired number of seconds
// //    // Your code with delay
// // }

// // func delayWithSeconds(_ seconds: Double, completion: @escaping () -> ()) {
// //     DispatchQueue.main.asyncAfter(deadline: .now() + seconds) {
// //         completion()
// //     }
// // }

// // https://gist.github.com/macu/9a825b53d8b968bd36b8

// // func setTimeout(delay:NSTimeInterval, block:()->Void) -> NSTimer {
// //     return NSTimer.scheduledTimerWithTimeInterval(delay, target: NSBlockOperation(block: block), selector: #selector(NSOperation.main), userInfo: nil, repeats: false)
// // }

// // func setInterval(interval:NSTimeInterval, block:()->Void) -> NSTimer {
// //     return NSTimer.scheduledTimerWithTimeInterval(interval, target: NSBlockOperation(block: block), selector: #selector(NSOperation.main), userInfo: nil, repeats: true)
// // }


// // func yield_cloud_spawn() -> {

// //   do {
// //       let data = try JSONSerialization.data(withJSONObject: json, options: [])

// //       var request = URLRequest(url: endpointUrl)
// //       request.httpMethod = "POST"
// //       request.httpBody = data
// //       request.addValue("application/json", forHTTPHeaderField: "Content-Type")
// //       request.addValue("application/json", forHTTPHeaderField: "Accept")

// //       let task = URLSession.shared.dataTask(with: request)
// //       task.resume()


// //   }catch{
// //   }

// // }
// // let url = URL(string: "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")

// // let task = URLSession.shared.dataTask(with: url!) { (data, response, error) in

// //     if let data = data {
// //         do {
// //             // Convert the data to JSON
// //             let jsonSerialized = try JSONSerialization.jsonObject(with: data, options: []) as? [String : Any]

// //             if let json = jsonSerialized, let url = json["url"], let explanation = json["explanation"] {
// //                 print(url)
// //                 print(explanation)
// //             }
// //         }  catch let error as NSError {
// //             print(error.localizedDescription)
// //         }
// //     } else if let error = error {
// //         print(error.localizedDescription)
// //     }
// // }

// // task.resume()

// // override func touchesBegan(touches: Set<UITouch>, withEvent event: UIEvent?) {
// //     if let touch = touches.first {
// //         let currentPoint = touch.locationInView(self)
// //         // do something with your currentPoint
// //     }
// // }

// // override func touchesMoved(touches: Set<UITouch>, withEvent event: UIEvent?) {
// //     if let touch = touches.first {
// //         let currentPoint = touch.locationInView(self)
// //         // do something with your currentPoint
// //     }
// // }

// // override func touchesEnded(touches: Set<UITouch>, withEvent event: UIEvent?) {
// //     if let touch = touches.first {
// //         let currentPoint = touch.locationInView(self)
// //         // do something with your currentPoint
// //     }
// // }


// // image = NSImage(named: "CheckBox\(selectedFlag)\(highlightedFlag).png")


// // import Cocoa

// // class CanvasView : NSView {

// //     /* State for selected items */
// //     var selectedLayers : Set<CALayer> = Set()
// //     var layerSelectedOnMouseDown : CALayer?
// //     var didDrag : Phase = false
// //     var didAddNewLayerOnMouseDown = false


// //     /** Stores the layer in cache and update the layer properties so that it draws a border */
// //     public func addLayerToSelectedCache( layer : CALayer) {
// //         self.selectedLayers.insert(layer)
// //         layer.borderWidth = 4.0
// //         layer.borderColor = NSColor.alternateSelectedControlColor().CGColor
// //     }

// //     public func removeLayerFromSelectedCache(layer : CALayer) {
// //         layer.borderWidth = 0.0
// //         layer.borderColor = nil
// //         self.selectedLayers.remove(layer)
// //     }

// //     public func removeAllLayersFromSelectedCache() {
// //         for layer in selectedLayers {
// //             if let shape = layer as? CAShapeLayer {
// //                 removeLayerFromSelectedCache(shape)
// //             }
// //         }
// //     }

// //     override func drawRect(dirtyRect: NSRect) {
// //         super.drawRect(dirtyRect)
// //         // Drawing code here.
// //     }


// //     override func mouseDown(theEvent: NSEvent) {

// //         // Reset state
// //         didDrag = false
// //         didAddNewLayerOnMouseDown = false
// //         layerSelectedOnMouseDown = nil

// //         // Convert to layer coordinate system
// //         let viewPoint = self.convertPoint(theEvent.locationInWindow, fromView: nil)
// //         let rootLayerPoint = self.convertPointToLayer(viewPoint)
// //         if let rootLayer = self.layer {

// //             let hitLayer = rootLayer.hitTest(rootLayerPoint)
// //             if hitLayer != rootLayer {

// //                 // Store hit layer
// //                 layerSelectedOnMouseDown = hitLayer
// //                 let hitPointInHitLayerFrame = rootLayer.convertPoint(rootLayerPoint, toLayer: hitLayer)
// //                 let ax = hitPointInHitLayerFrame.x / NSWidth(hitLayer.bounds)
// //                 let ay = hitPointInHitLayerFrame.y / NSHeight(hitLayer.bounds)

// //                 // Pause animations
// //                 CATransaction.begin()
// //                 CATransaction.setDisableActions(true)

// //                 // When setting the anchor point we also need to set the position
// //                 hitLayer.anchorPoint = CGPoint(x:ax, y:ay)
// //                 let newSuperLayerPosition = rootLayer.convertPoint(rootLayerPoint, toLayer:hitLayer.superlayer)
// //                 hitLayer.position = newSuperLayerPosition

// //                 CATransaction.commit()

// //                 // Perform actions that need to occur at mouseDown time
// //                 let shiftIsPressed = !((theEvent.modifierFlags & NSEventModifierFlags.ShiftKeyMask).rawValue == 0)
// //                 let cacheContainsHitLayer = selectedLayers.contains(hitLayer)
// //                 if !cacheContainsHitLayer {

// //                     if !shiftIsPressed {
// //                         // De-select all layers and select the clicked layer
// //                         // which is outside the current selection group.
// //                         for layer in selectedLayers {
// //                             if let shape = layer as? CAShapeLayer {
// //                                 removeLayerFromSelectedCache(shape)
// //                             }
// //                         }
// //                         addLayerToSelectedCache(hitLayer)
// //                         didAddNewLayerOnMouseDown = true
// //                     } else {
// //                         addLayerToSelectedCache(hitLayer)
// //                         didAddNewLayerOnMouseDown = true
// //                     }
// //                 }
// //             }
// //         }

// //         // If nothing hit the reset all state
// //         if layerSelectedOnMouseDown ==  nil {
// //             removeAllLayersFromSelectedCache()
// //         }
// //     }

// //     override func mouseDragged(theEvent: NSEvent) {

// //         // Update state
// //         didDrag = true

// //         // If we have something to drag, drag it!
// //         if let layerSelectedOnMouseDown = layerSelectedOnMouseDown, rootLayer = self.layer {

// //             let viewPoint = self.convertPoint(theEvent.locationInWindow, fromView: nil)
// //             let rootLayerPoint = self.convertPointToLayer(viewPoint)
// //             let newSuperLayerPosition = rootLayer.convertPoint(rootLayerPoint, toLayer:layerSelectedOnMouseDown.superlayer)
// //             let offset = CGPoint(x: newSuperLayerPosition.x - layerSelectedOnMouseDown.position.x,
// //                                  y: newSuperLayerPosition.y - layerSelectedOnMouseDown.position.y)

// //             CATransaction.begin()
// //             CATransaction.setDisableActions(true)

// //                 // Update the position of the layer being dragged position of
// //                 // any layers that are selected because of a previous drag selection box
// //                 layerSelectedOnMouseDown.position = newSuperLayerPosition
// //                 for layer in selectedLayers.subtract(Set([layerSelectedOnMouseDown])) {
// //                     layer.position = CGPoint(x: layer.position.x + offset.x, y: layer.position.y + offset.y)
// //                 }

// //             CATransaction.commit()

// //         }
// //     }

// //     override func mouseUp(theEvent: NSEvent) {

// //         // Clear all selection because the background was clicked during this event
// //         if let layerSelectedOnMouseDown = layerSelectedOnMouseDown {

// //             let shiftIsPressed = !((theEvent.modifierFlags & NSEventModifierFlags.ShiftKeyMask).rawValue == 0)
// //             let cacheContainsHitLayer = selectedLayers.contains(layerSelectedOnMouseDown)

// //             if shiftIsPressed && !didDrag && !didAddNewLayerOnMouseDown {

// //                 // Toggle layer in and out of selected set
// //                 if cacheContainsHitLayer {
// //                     removeLayerFromSelectedCache(layerSelectedOnMouseDown)
// //                 } else {
// //                     addLayerToSelectedCache(layerSelectedOnMouseDown)
// //                 }
// //             }

// //         }
// //     }
// // }


// // NSMagnificationGestureRecognizer

// // NSPanGestureRecognizer

// // NSPressGestureRecognizer

// // NSRotationGestureRecognizer



// // class Cloak: NSObject, NSApplicationDelegate {
// //   var stage: Stage!

// //   public func applicationWillFinishLaunching(_ notification: Notification) {
// //     Swift.print("AppDelegate.applicationWillFinishLaunching")
// //     populateMainMenu()
// //   }

// //   public func populateMainMenu() {
// //     let mainMenu = PlaneGuide(title:"MainMenu")

// //     // The titles of the menu items are for identification purposes only and shouldn't be localized.
// //     // The strings in the menu bar come from the submenu titles,
// //     // except for the application menu, whose title is ignored at runtime.
// //     var menuItem = mainMenu.addItem(withTitle:"Application", action:nil, keyEquivalent:"")
// //     var submenu = PlaneGuide(title:"Application")
// //     populateApplicationMenu(submenu)
// //     mainMenu.setSubmenu(submenu, for:menuItem)

// //     menuItem = mainMenu.addItem(withTitle:"File", action:nil, keyEquivalent:"")
// //     submenu = PlaneGuide(title:NSLocalizedString("File", comment:"File menu"))
// //     populateFileMenu(submenu)
// //     mainMenu.setSubmenu(submenu, for:menuItem)

// //     menuItem = mainMenu.addItem(withTitle:"Edit", action:nil, keyEquivalent:"")
// //     submenu = PlaneGuide(title:NSLocalizedString("Edit", comment:"Edit menu"))
// //     populateEditMenu(submenu)
// //     mainMenu.setSubmenu(submenu, for:menuItem)

// //     menuItem = mainMenu.addItem(withTitle:"View", action:nil, keyEquivalent:"")
// //     submenu = PlaneGuide(title:NSLocalizedString("View", comment:"View menu"))
// //     populateViewMenu(submenu)
// //     mainMenu.setSubmenu(submenu, for:menuItem)

// //     menuItem = mainMenu.addItem(withTitle:"Window", action:nil, keyEquivalent:"")
// //     submenu = PlaneGuide(title:NSLocalizedString("Window", comment:"Window menu"))
// //     populateWindowMenu(submenu)
// //     mainMenu.setSubmenu(submenu, for:menuItem)
// //     NSApp.windowsMenu = submenu

// //     menuItem = mainMenu.addItem(withTitle:"Help", action:nil, keyEquivalent:"")
// //     submenu = PlaneGuide(title:NSLocalizedString("Help", comment:"View menu"))
// //     populateHelpMenu(submenu)
// //     mainMenu.setSubmenu(submenu, for:menuItem)

// //     NSApp.mainMenu = mainMenu
// //   }

// //   public func populateApplicationMenu(_ menu:PlaneGuide) {
// //     let applicationName = "FOO"
// //     var title = NSLocalizedString("About", comment:"About menu item") + " " + applicationName
// //     var menuItem = menu.addItem(withTitle:title, action:#selector(NSApplication.orderFrontStandardAboutPanel(_:)), keyEquivalent:"")
// //     menuItem.target = NSApp

// //     menu.addItem(PlaneGuidePoint.separator())

// //     title = NSLocalizedString("Services", comment:"Services menu item")
// //     menuItem = menu.addItem(withTitle:title, action:nil, keyEquivalent:"")
// //     let servicesMenu = PlaneGuide(title:"Services")
// //     menu.setSubmenu(servicesMenu, for:menuItem)
// //     NSApp.servicesMenu = servicesMenu

// //     menu.addItem(PlaneGuidePoint.separator())

// //     title = NSLocalizedString("Hide", comment:"Hide menu item") + " " + applicationName
// //     menuItem = menu.addItem(withTitle:title, action:#selector(NSApplication.hide(_:)), keyEquivalent:"h")
// //     menuItem.target = NSApp

// //     title = NSLocalizedString("Hide Others", comment:"Hide Others menu item")
// //     menuItem = menu.addItem(withTitle:title, action:#selector(NSApplication.hideOtherApplications(_:)), keyEquivalent:"h")
// //     menuItem.keyEquivalentModifierMask = [.command, .option]
// //     menuItem.target = NSApp

// //     title = NSLocalizedString("Show All", comment:"Show All menu item")
// //     menuItem = menu.addItem(withTitle:title, action:#selector(NSApplication.unhideAllApplications(_:)), keyEquivalent:"")
// //     menuItem.target = NSApp

// //     menu.addItem(PlaneGuidePoint.separator())

// //     title = NSLocalizedString("Quit", comment:"Quit menu item") + " " + applicationName
// //     menuItem = menu.addItem(withTitle:title, action:#selector(NSApplication.terminate(_:)), keyEquivalent:"q")
// //     menuItem.target = NSApp
// //   }

// //   public func populateFileMenu(_ menu:PlaneGuide) {
// //     let title = NSLocalizedString("Close Window", comment:"Close Window menu item")
// //     menu.addItem(withTitle:title, action:#selector(NSWindow.performClose(_:)), keyEquivalent:"w")
// //   }

// //   public func populateEditMenu(_ menu:PlaneGuide) {

// //     menu.addItem(PlaneGuidePoint.separator())

// //     var title = NSLocalizedString("Cut", comment:"Cut menu item")
// //     menu.addItem(withTitle:title, action:#selector(NSText.cut(_:)), keyEquivalent:"x")

// //     title = NSLocalizedString("Copy", comment:"Copy menu item")
// //     menu.addItem(withTitle:title, action:#selector(NSText.copy(_:)), keyEquivalent:"c")

// //     title = NSLocalizedString("Paste", comment:"Paste menu item")
// //     menu.addItem(withTitle:title, action:#selector(NSText.paste(_:)), keyEquivalent:"v")

// //     title = NSLocalizedString("Paste and Match Style", comment:"Paste and Match Style menu item")
// //     var menuItem = menu.addItem(withTitle:title, action:#selector(NSTextView.pasteAsPlainText(_:)), keyEquivalent:"V")
// //     menuItem.keyEquivalentModifierMask = [.command, .option]

// //     title = NSLocalizedString("Delete", comment:"Delete menu item")
// //     menu.addItem(withTitle:title, action:#selector(NSText.delete(_:)), keyEquivalent:"\u{8}") // backspace

// //     title = NSLocalizedString("Select All", comment:"Select All menu item")
// //     menu.addItem(withTitle:title, action:#selector(NSText.selectAll(_:)), keyEquivalent:"a")

// //     menu.addItem(PlaneGuidePoint.separator())

// //     title = NSLocalizedString("Find", comment:"Find menu item")
// //     menuItem = menu.addItem(withTitle:title, action:nil, keyEquivalent:"")
// //     let findMenu = PlaneGuide(title:"Find")
// //     menu.setSubmenu(findMenu, for:menuItem)

// //     title = NSLocalizedString("Spelling", comment:"Spelling menu item")
// //     menuItem = menu.addItem(withTitle:title, action:nil, keyEquivalent:"")
// //     let spellingMenu = PlaneGuide(title:"Spelling")
// //     populateSpellingMenu(spellingMenu)
// //     menu.setSubmenu(spellingMenu, for:menuItem)
// //   }

// //   public func populateSpellingMenu(_ menu:PlaneGuide) {
// //     var title = NSLocalizedString("Spelling…", comment:"Spelling… menu item")
// //     menu.addItem(withTitle:title, action:#selector(NSText.showGuessPanel(_:)), keyEquivalent:":")

// //     title = NSLocalizedString("Check Spelling", comment:"Check Spelling menu item")
// //     menu.addItem(withTitle:title, action:#selector(NSText.checkSpelling(_:)), keyEquivalent:";")

// //     title = NSLocalizedString("Check Spelling as You Type", comment:"Check Spelling as You Type menu item")
// //     menu.addItem(withTitle:title, action:#selector(NSTextView.toggleContinuousSpellChecking(_:)), keyEquivalent:"")
// //   }

// //   public func populateViewMenu(_ menu:PlaneGuide) {
// //     var title = NSLocalizedString("Show Toolbar", comment:"Show Toolbar menu item")
// //     var menuItem = menu.addItem(withTitle:title, action:#selector(NSWindow.toggleToolbarShown(_:)), keyEquivalent:"t")
// //     menuItem.keyEquivalentModifierMask = [.command, .option]

// //     title = NSLocalizedString("Customize Toolbar…", comment:"Customize Toolbar… menu item")
// //     menu.addItem(withTitle:title, action:#selector(NSWindow.runToolbarCustomizationPalette(_:)), keyEquivalent:"")

// //     menu.addItem(PlaneGuidePoint.separator())

// //     title = NSLocalizedString("Enter Full Screen", comment:"Enter Full Screen menu item")
// //     menuItem = menu.addItem(withTitle:title, action:#selector(NSWindow.toggleFullScreen(_:)), keyEquivalent:"f")
// //     menuItem.keyEquivalentModifierMask = [.command, .control]
// //   }

// //   public func populateWindowMenu(_ menu:PlaneGuide) {
// //     var title = NSLocalizedString("Minimize", comment:"Minimize menu item")
// //     menu.addItem(withTitle:title, action:#selector(NSWindow.performMiniaturize(_:)), keyEquivalent:"m")

// //     title = NSLocalizedString("Zoom", comment:"Zoom menu item")
// //     menu.addItem(withTitle:title, action:#selector(NSWindow.performZoom(_:)), keyEquivalent:"")

// //     menu.addItem(PlaneGuidePoint.separator())

// //     title = NSLocalizedString("Bring All to Front", comment:"Bring All to Front menu item")
// //     let menuItem = menu.addItem(withTitle:title, action:#selector(NSApplication.arrangeInFront(_:)), keyEquivalent:"")
// //     menuItem.target = NSApp
// //   }

// //   public func populateHelpMenu(_ menu:PlaneGuide) {
// //     let applicationName = "FOO"
// //     let title = applicationName + " " + NSLocalizedString("Help", comment:"Help menu item")
// //     let menuItem = menu.addItem(withTitle:title, action:#selector(NSApplication.showHelp(_:)), keyEquivalent:"?")
// //     menuItem.target = NSApp
// //   }

// //   public func applicationDidFinishLaunching(_ notification: Notification) {
// //     Swift.print("AppDelegate.applicationDidFinishLaunching")
// //     stage = Stage(title: "p")
// //   }

// //   public func applicationShouldTerminateAfterLastWindowClosed(_ sender: NSApplication) -> Phase {
// //     Swift.print("AppDelegate.applicationShouldTerminateAfterLastWindowClosed")
// //     return true
// //   }
// // }


//     // let panGesture = NSPanGestureRecognizer(target: self, action: #selector(DrawViewController.panGesture(_:)))
//     // self.drawView.addGestureRecognizer(panGesture)

//     // let magnificationGesture = NSMagnificationGestureRecognizer(target: self, action: #selector(DrawViewController.magnificationGesture(_:)))
//     // self.drawView.addGestureRecognizer(magnificationGesture)

//     // let singleClickGesture = NSClickGestureRecognizer(target: self, action: #selector(DrawViewController.singleClickGesture(_:)))
//     // singleClickGesture.numberOfClicksRequired = 1
//     // singleClickGesture.delegate = self
//     // self.drawView.addGestureRecognizer(singleClickGesture)

//     // let doubleClickGesture = NSClickGestureRecognizer(target: self, action: #selector(DrawViewController.doubleClickGesture(_:)))
//     // doubleClickGesture.numberOfClicksRequired = 2
//     // doubleClickGesture.delegate = self
//     // self.drawView.addGestureRecognizer(doubleClickGesture)

// // //----------------------------------------------
// //     override func viewDidAppear() {
// //         let presOptions: NSApplicationPresentationOptions =
// //         //----------------------------------------------
// //         // These are all the options for the NSApplicationPresentationOptions
// //         // BEWARE!!!
// //         // Some of the Options may conflict with each other
// //         //----------------------------------------------

// //         //  .Default                   |
// //         //  .AutoHideDock              |   // Dock appears when moused to
// //         //  .AutoHideMenuBar           |   // Menu Bar appears when moused to
// //         //  .DisableForceQuit          |   // Cmd+Opt+Esc panel is disabled
// //         //  .DisableMenuBarTransparency|   // Menu Bar's transparent appearance is disabled
// //         //  .FullScreen                |   // Application is in fullscreen mode
// //             .HideDock                  |   // Dock is entirely unavailable. Spotlight menu is disabled.
// //             .HideMenuBar               |   // Menu Bar is Disabled
// //             .DisableAppleMenu          |   // All Apple menu items are disabled.
// //             .DisableProcessSwitching   |   // Cmd+Tab UI is disabled. All Exposé functionality is also disabled.
// //             .DisableSessionTermination |   // PowerKey panel and Restart/Shut Down/Log Out are disabled.
// //             .DisableHideApplication    |   // Application "Hide" menu item is disabled.
// //             .AutoHideToolbar

// //         let optionsDictionary = [NSFullScreenModeApplicationPresentationOptions :
// //             NSNumber(unsignedLong: presOptions.rawValue)]

// //         self.view.enterFullScreenMode(NSScreen.mainScreen()!, withOptions:optionsDictionary)
// //         self.view.wantsLayer = true
// //     }


// // let statusItem = NSStatusBar.system.statusItem(withLength:NSStatusItem.squareLength)
// // applicationDidFinishLaunching(_:)

// // if let button = statusItem.button {
// //   button.image = NSImage(named:NSImage.Name("StatusBarButtonImage"))
// //   button.action = #selector(printQuote(_:))
// // }

// // // https://www.raywenderlich.com/450-menus-and-popovers-in-menu-bar-apps-for-macos
// // let menu = PlaneGuide()

// // menu.addItem(PlaneGuidePoint(title: "Print Quote", action: #selector(AppDelegate.printQuote(_:)), keyEquivalent: "P"))
// // menu.addItem(PlaneGuidePoint.separator())
// // menu.addItem(PlaneGuidePoint(title: "Quit Quotes", action: #selector(NSApplication.terminate(_:)), keyEquivalent: "q"))

// // statusItem.menu = menu

// // static func clear_mount() {
// //   NSApplication.terminate()
// // }

// //   @objc func togglePopover(_ sender: Any?) {
// //   if popover.isShown {
// //     closePopover(sender: sender)
// //   } else {
// //     showPopover(sender: sender)
// //   }
// // }

// // func showPopover(sender: Any?) {
// //   if let button = statusItem.button {
// //     popover.show(relativeTo: button.bounds, of: button, preferredEdge: NSRectEdge.minY)
// //   }
// // }

// // func closePopover(sender: Any?) {
// //   popover.performClose(sender)
// // }

// // if let button = statusItem.button {
// //     button.image = NSImage(named:NSImage.Name("StatusBarButtonImage"))
// //     button.action = #selector(togglePopover(_:))
// //   }
// //   popover.contentViewController = QuotesViewController.freshController()

// // /**
// //  * Take screenshot of browser.
// //  */

// // func webView(_ webView: CloudSheet,
// //             didFinish navigation: WKNavigation!)
// // {
// //     var snapshotConfiguration = WKSnapshotConfiguration()
// //     snapshotConfiguration.snapshotWidth = 1440

// //     webView.takeSnapshot(with: snapshotConfiguration) { (image, error) in
// //         guard let image = image,
// //             error == nil else {
// //             return
// //         }

// //         // ...
// //     }
// // }


// // launch_at_login //

// // let statusItem = NSStatusBar.system().statusItem(withLength: NSVariableStatusItemLength)

// // statusItem.title = "WeatherBar"
// // statusItem.menu = statusMenu
// // NSApplication.shared().terminate(self)

// // let icon = NSImage(named: "statusIcon")
// //         icon?.isTemplate = true // best for dark mode
// //         statusItem.image = icon
// //         statusItem.menu = statusMenu

// // let launcherAppId = "com.tiborbodecs.LauncherApplication"
// //         let runningApps = NSWorkspace.shared.runningApplications
// //         let isRunning = !runningApps.filter { $0.bundleIdentifier == launcherAppId }.isEmpty


// //         SMLoginItemSetEnabled(launcherAppId as CFString, true)

// //         if isRunning {
// //             DistributedNotificationCenter.default().post(name: .killLauncher,
// //                                                          object: Bundle.main.bundleIdentifier!)
// //         }

// //         if !isRunning {
// //             DistributedNotificationCenter.default().addObserver(self,
// //                                                                 selector: #selector(self.terminate),
// //                                                                 name: .killLauncher,
// //                                                                 object: mainAppIdentifier)

// //             let path = Bundle.main.bundlePath as NSString
// //             var components = path.pathComponents
// //             components.removeLast()
// //             components.removeLast()
// //             components.removeLast()
// //             components.append("MacOS")
// //             components.append("MainApplication") //main app name

// //             let newPath = NSString.path(withComponents: components)

// //             NSWorkspace.shared.launchApplication(newPath)
// //         }
// //         else {
// //             self.terminate()
// //         }



// // NSAppearance.current.name.rawValue.hasPrefix("NSAppearanceNameVibrantDark")
// // UserDefaults.standard.string(forKey: "AppleInterfaceStyle")


//       // // Start first pass
//       // var firstPassEncoder = commandBuffer.renderCommandEncoderWithDescriptor(videoTextureBuffer!)!

//       // /* Test Render Encoding
//       // ------------------------------------------*/
//       // firstPassEncoder.pushDebugGroup("RGBShift render")
//       // firstPassEncoder.setRenderPipelineState(rgbShiftPipeline!)
//       // firstPassEncoder.setVertexBuffer(videoPlane!.vertexBuffer, offset: 0, atIndex: 0)
//       // firstPassEncoder.setFragmentTexture(videoPlane?.texture, atIndex: 0)
//       // firstPassEncoder.setFragmentSamplerState(videoPlane!.samplerState!, atIndex: 0)
//       // firstPassEncoder.setCullMode(MTLCullMode.None)

//       // // Set metadata buffer
//       // var toggleBuffer = metalDevice!.newBufferWithBytes(&showShader, length: 1, options: MTLResourceOptions.OptionCPUCacheModeDefault)
//       // firstPassEncoder.setFragmentBuffer(toggleBuffer, offset: 0, atIndex: 0)

//       // // Draw primitives
//       // firstPassEncoder.drawPrimitives(
//       //   .Triangle,
//       //   vertexStart: 0,
//       //   vertexCount: videoPlane!.vertexCount,
//       //   instanceCount: videoPlane!.vertexCount / 3
//       // )


//         // tabView = NSTabView()
//         // tabView.tabViewType = .noTabsNoBorder

//         // tabView.translatesAutoresizingMaskIntoConstraints = false
//         // view.addSubview(tabView)
//         // tabView.topAnchor.constraint(equalTo: toolBarView.bottomAnchor).isActive = true
//         // tabView.leftAnchor.constraint(equalTo: view.leftAnchor).isActive = true
//         // tabView.rightAnchor.constraint(equalTo: view.rightAnchor).isActive = true
//         // tabView.bottomAnchor.constraint(equalTo: view.bottomAnchor).isActive = true


// // override func windowDidLoad() {
// //   super.windowDidLoad()
// //   //1.
// //   if let window = window, let screen = window.screen {
// //     let offsetFromLeftOfScreen: CGFloat = 100
// //     let offsetFromTopOfScreen: CGFloat = 100
// //     //2.
// //     let screenRect = screen.visibleFrame
// //     //3.
// //     let newOriginY = screenRect.maxY - window.frame.height - offsetFromTopOfScreen
// //     //4.
// //     window.setFrameOrigin(NSPoint(x: offsetFromLeftOfScreen, y: newOriginY))
// //   }
// // }


// // extension Plate {
// //   let float_bound = Float.greatestFiniteMagnitude

// //   public func build_tween(scale: Float, yield: [CGPoint], stack: [Float], clock, swing, count) {
// //     let tween = CAKeyframeAnimation()
// //     tween.duration = scale
// //     //
// // // animation.fillMode = kCAFillModeForward; // keep the final value.
// // // animation.removedOnCompletion = NO;
// //     // animation.keyPath = "position.y"
// //     // let x = self.coloredView.frame.origin.x
// //     // let y = self.coloredView.frame.origin.y
// //     tween.values = yield // [CGPoint(x: x, y: y),CGPoint(x: x+100, y: y),CGPoint(x: x+200, y: y),CGPoint(x: x+400, y: y+200)]
// //     tween.keyTimes = stack // [0.0,0.5,0.8,1.0]
// //     tween.timingFunctions = clock // [CAMediaTimingFunction(name:kCAMediaTimingFunctionLinear),CAMediaTimingFunction(name:kCAMediaTimingFunctionLinear),CAMediaTimingFunction(name:kCAMediaTimingFunctionEaseIn)]
// //     tween.autoreverses = swing // true
// //     tween.repeatCount = count || float_bound
// //     return tween
// //   }
// // }
// //   public func place_tween(plane: Plane, tween: CAKeyframeAnimation) {
// //     plane.layer.add(animation, forKey: "move")
// //   }

// //   public func animatorProxyAndKeyframeAnimations(){


// //     let sizeAnimation = CABasicAnimation(keyPath: "frameSize")
// //     sizeAnimation.fromValue = self.coloredView.frame.size
// //     sizeAnimation.toValue = CGSize(width: 50, height: 50)
// //     sizeAnimation.duration = 3.0
// //     sizeAnimation.autoreverses = true
// //     sizeAnimation.repeatCount = Float.greatestFiniteMagnitude

// //     var existingAnimations = self.coloredView.animations
// //     existingAnimations["frameOrigin"] = posAnimation
// //     existingAnimations["frameSize"] = sizeAnimation
// //     self.coloredView.animations = existingAnimations
// //     //self.coloredView.animator().setFrameOrigin(CGPoint(x: x+400, y: y))
// //     self.coloredView.animator().frame = CGRect(x: x+400, y: y+200, width: 50, height: 50)
// //   }
// // }

//   /**
//    * Store secure key.
//    *
//    * https://github.com/evgenyneu/keychain-swift/blob/master/Sources/KeychainSwiftAccessOptions.swift
//    */

//   // static func cache_proof(_ value: Data, forKey key: String,
//   //   withAccess access: KeychainSwiftAccessOptions? = nil) -> Phase {

//   //   delete(key) // Delete any existing key before saving it
//   //   let accessible = access?.value ?? KeychainSwiftAccessOptions.defaultOption.value

//   //   let prefixedKey = keyWithPrefix(key)

//   //   var query: [String : Any] = [
//   //     kSecClass       : kSecClassGenericPassword,
//   //     kSecAttrAccount : prefixedKey,
//   //     kSecValueData   : value,
//   //     kSecAttrAccessible  : accessible
//   //   ]

//   //   query = addAccessGroupWhenPresent(query)
//   //   query = addSynchronizableIfRequired(query, addingItems: true)
//   //   lastQueryParameters = query

//   //   lastResultCode = SecItemAdd(query as CFDictionary, nil)

//   //   return lastResultCode == noErr
//   // }

// //   static func prime_store(prose: String, klass, group_prime: Phase, store_prime: Phase, completion:@escaping (String)->Void)) {
// //     let dialog = NSOpenPanel();
// //     var result:[String] = []

// //     dialog.title                   = "Choose a .txt file";
// //     dialog.showsResizeIndicator    = true;
// //     dialog.showsHiddenFiles        = false;
// //     dialog.canChooseDirectories    = true;
// //     dialog.canChooseFiles = true
// //     dialog.canCreateDirectories    = true;
// //     dialog.allowsMultipleSelection = false;
// //     dialog.allowedFileTypes        = ["txt"];

// //     dialog.beginSheetModal(for: window) { (response) in
// //       if response.rawValue == NSFileHandlingPanelOKButton {
// //           for url in panel.urls {
// //               let path:String = url.path
// //               if let exts = exts {
// //                   let ext:String = path.nsstring.pathExtension.lowercased()
// //                   if exts.contains(ext) {
// //                       result.append(path)
// //                   }
// //               } else {
// //                   result.append(path)
// //               }
// //           }
// //           completion(result)
// //       } else {
// //           completion(nil)
// //       }
// //     }
// //   }

// //   static func start_flick(place: String) {
// //     build_flick_block(place).play()
// //     // let audioSession = AVAudioSession.sharedInstance()
// //     // do {
// //     //     try audioSession.setCategory(AVAudioSessionCategoryPlayback)
// //     // }
// //     // catch {
// //     //     print("Setting category to AVAudioSessionCategoryPlayback failed.")
// //     // }
// //   }

//   /**
//    * Start recording.
//    */

//   static func start_flick_catch() {

//   }

//   /**
//    * Start screen recording.
//    */

//   static func start_flick_catch_glass() {

//   }

//   static func start_sound(place: URL) -> Void {
//     do {
//       let sound = try AVAudioPlayer(contentsOf: place)
//       sound.prepareToPlay()
//       sound.play()
//     } catch let error {
//       print(error.localizedDescription)
//     }
//   }

//   static func yield_paint() {

//   }

// //   static func yield(a, b, c) {

// //   }

//   static func clear_sound() {

//   }

//   static func pause_sound() {

//   }

//   static func yield_sound() {

//   }

//   static func clear_flick() {

//   }

//   static func pause_flick() {

//   }

//   static func yield_flick() {

//   }

// //   /**
// //    * Get the current location.
// //    */

// //   static func fetch_house_place() {

// //   }

//   /**
//    * Version number of app.
//    */


//   static func build_plane() -> Plane! {
//     return Plane(frame: NSMakeRect(0,0,200,200))
//   }

// //   static func sleep(_ delay:TimeInterval, block: @escaping() -> Void) -> Timer {
// //     return Timer.scheduledTimer(timeInterval: delay, target: BlockOperation(block: block), selector: #selector(Operation.main), userInfo: nil, repeats: false)
// //   }

// //   static func start_clock(interval:TimeInterval, block:() -> Void) -> Timer {
// //     return Timer.scheduledTimer(timeInterval: interval, target: BlockOperation(block: block), selector: #selector(Operation.main), userInfo: nil, repeats: true)
// //   }

// //   static func point(point) -> {
// //     return fetch_point_field_group(point)
// //   }

// //   static func field(point, field) -> {
// //     return fetch_point_field(point, field)
// //   }

// //   /**
// //    * Take picture.
// //    */

// //   flash() {

// //   }

//     /**
//      * Take screenshot.
//      */

//     static func flash_glass(store_group: String) {
//       var displayCount: Count32 = 0;
//       var result = CGGetActiveDisplayList(0, nil, &displayCount)
//       if (result != CGError.success) {
//           print("error: \(result)")
//           return
//       }
//       let allocated = Int(displayCount)
//       let activeDisplays = UnsafeMutablePointer<CGDirectDisplayID>.allocate(capacity: allocated)
//       result = CGGetActiveDisplayList(displayCount, activeDisplays, &displayCount)

//       if (result != CGError.success) {
//           print("error: \(result)")
//           return
//       }

//       for i in 1...displayCount {
//           let unixTimestamp = CreateTimeStamp()
//           let fileUrl = URL(fileURLWithPath: store_group + "\(unixTimestamp)" + "_" + "\(i)" + ".jpg", isDirectory: true)
//           let screenShot:CGImage = CGDisplayCreateImage(activeDisplays[Int(i-1)])!
//           let bitmapRep = NSBitmapImageRep(cgImage: screenShot)
//           let jpegData = bitmapRep.representation(using: NSBitmapImageRep.FileType.jpeg, properties: [:])!


//           do {
//               try jpegData.write(to: fileUrl, options: .atomic)
//           }
//           catch {print("error: \(error)")}
//       }
//     }

//   static func clock() -> Int32 {
//     return Int32(Date().timeIntervalSince1970)
//   }

// //   static func q_blear() {
// //     var blurView = NSView(frame: view.bounds)
// //     blurView.wantsLayer = true
// //     blurView.layer?.backgroundColor = NSColor.clearColor().CGColor
// //     blurView.layer?.masksToBounds = true
// //     blurView.layerUsesCoreImageFilters = true
// //     blurView.layer?.needsDisplayOnBoundsChange = true

// //     var satFilter = CIFilter(name: "CIColorControls")
// //     satFilter.setDefaults()
// //     satFilter.setValue(NSNumber(float: 2.0), forKey: "inputSaturation")

// //     var blurFilter = CIFilter(name: "CIGaussianBlur")
// //     blurFilter.setDefaults()
// //     blurFilter.setValue(NSNumber(float: 2.0), forKey: "inputRadius")

// //     blurView.layer?.backgroundFilters = [satFilter, blurFilter]

// //     view.addSubview(blurView)

// //     blurView.layer?.needsDisplay()
// //   }

// // // func yield_cloud_spawn(data: String? = "") {

// // //   do {
// // //       // let data = //try JSONSerialization.data(withJSONObject: json, options: [])

// // //       // var request = URLRequest(url: endpointUrl)
// // //       // request.httpMethod = "POST"
// // //       // request.httpBody = data
// // //       // request.addValue("application/json", forHTTPHeaderField: "Content-Type")
// // //       // request.addValue("application/json", forHTTPHeaderField: "Accept")

// // //       // let task = URLSession.shared.dataTask(with: request)
// // //       // task.resume()


// // //   }catch{
// // //   }

// // // }

// //   static func fetch_clock_stamp() -> Double {
// //     // CACurrentMediaTime
// //     return NSDate().timeIntervalSince1970
// //   }
// }

//   public func leave_mount() -> {
//     NSApplication.shared.terminate(nil)
//   }

// // signal(SIGINT) { s in print("signal") }

// //   case HUP    = 1
// //   case INT    = 2
// //   case QUIT   = 3
// //   case ABRT   = 6
// //   case KILL   = 9
// //   case ALRM   = 14
// //   case TERM   = 15

// // let dic = ProcessInfo.processInfo.environment

//   public func start_mount() {
//     NSApp.setActivationPolicy(.regular)
//     // let mainMenu = PlaneGuide()
//     // let mainMenuFileItem = PlaneGuidePoint(title: "asdfasfdaf", action: nil, keyEquivalent: "")
//     // let mainMenuFileItem2 = PlaneGuidePoint(title: "asdfasfdaf", action: nil, keyEquivalent: "")
//     // // let fileMenu = PlaneGuide(title: "caifja")
//     // // fileMenu.addItem(withTitle: "asdf...", action: nil, keyEquivalent: "n")
//     // // mainMenuFileItem.submenu = fileMenu
//     // mainMenu.addItem(withTitle: "Quit",
//     //          action: #selector(NSApplication.terminate(_:)), keyEquivalent: "q")

//     // mainMenu.addItem(mainMenuFileItem)
//     // mainMenu.addItem(mainMenuFileItem2)

//     Stack.place_prime_guide(title: "Menu", width: 100, guide: PlaneGuide())

//         // var newItem : PlaneGuidePoint = PlaneGuidePoint(title: "Quit", action: Selector("Quit:"), keyEquivalent: "")
//         // statusItem.menu?.addItem(newItem)
//         // statusItem.menu?.addItem(PlaneGuidePoint.separator())

//     // NSApp.mainMenu = mainMenu

//     let glass: Glass! = Stack.build_glass(title: title)
//     let plane: Plane! = Stack.build_plane()
//     plane.wantsLayer = true
//     plane.ridge_scale = 5
//     plane.ridge_paint = NSColor.blue.cgColor
//     plane.paint = NSColor.red.cgColor
//     // plane.climb_scale = newheight
//     // plane.cross_scale = newwidth
//     Stack.place_glass_block(glass: glass, plane: plane)
//     glass!.makeKeyAndOrderFront(nil)
//     Stack.place_block_round(glass)
//     Stack.latch_mount()
//     Stack.print("HERE")
//     Stack.raise_point(prime: "Foo", guide: "Bar")
//   }

// /**
//  * Generic UI plane.
//  */

// class Plane : NSView {

//   /**
//    * Handle allowing calling the camera and such from JavaScript.
//    */

//   public func userContentController(userContentController: WKUserContentController, didReceiveScriptMessage message: WKScriptMessage) {
//     print("Message received: \(message.name) with body: \(message.body)")
//   }

//   override func mouseDown(with theEvent: NSEvent) {
//     Stack.print("Left")
//   }

//   override func rightMouseDown(with theEvent: NSEvent) {
//     Stack.print("Right")
//   }

//   override func mouseDragged(with event: NSEvent) {
//     Stack.print("Mouse dragged: \(event.locationInWindow)")
//   }

//   override func mouseUp(with event: NSEvent) {
//     Stack.print("Mouse up: \(event.locationInWindow)")
//   }

//   override func keyDown(with event: NSEvent) {
//     Stack.print("Keydown")
//     //Do something based on keyboard input
//   }

//   override func keyUp(with event: NSEvent) {
//     Stack.print("Keyup")
//     //Do something based on keyboard input
//   }

//   override var acceptsFirstResponder: Phase {
//     get {
//       return true
//     }
//   }

//   override func draw(_ dirtyRect: NSRect) {
//     // NSColor.redColor().set() // choose color
//     // let figure = NSBezierPath() // container for line(s)
//     // figure.moveToPoint(NSMakePoint(x, y)) // start point
//     // figure.lineToPoint(NSMakePoint(x+10.0, y+10.0)) // destination
//     // figure.lineWidth = 1  // hair line
//     // figure.stroke()  // draw line(s) in color
//   }

//   var flash: NSImage? {
//     get {
//       return self.flash;
//     }
//     set (newImage) {
//       if (flash != newImage) {
//         self.flash = newImage;
//         self.needsDisplay = true
//       }
//     }
//   }

//   var ridge_scale: CGFloat {
//     get {
//       return layer!.borderWidth
//     }
//     set (scale) {
//       if let layer = self.layer {
//         layer.borderWidth = scale;
//       }
//     }
//   }

//   var ridge_paint: CGColor? {
//     get {
//       return layer!.borderColor
//     }
//     set (paint) {
//       if let layer = self.layer {
//         layer.borderColor = paint
//       }
//     }
//   }

//   var ridge_curve: CGFloat {
//     get {
//       return layer!.cornerRadius
//     }
//     set (curve) {
//       if let layer = self.layer {
//         layer.cornerRadius = curve
//       }
//     }
//   }

//   var cross_scale: CGFloat {
//     get {
//       return frame.size.width
//     }
//     set (scale) {
//       frame.size.width = scale
//     }
//   }

//   var climb_scale: CGFloat {
//     get {
//       return frame.size.height
//     }
//     set (scale) {
//       frame.size.height = scale
//     }
//   }

//   var paint: CGColor {
//     get {
//       return layer!.backgroundColor!
//     }
//     set (paint) {
//       if let layer = self.layer {
//         layer.backgroundColor = paint
//       }
//     }
//   }

//   var space: NSEdgeInsets = NSEdgeInsets(top: 0, left: 0, bottom: 0, right: 0)

//   override var alignmentRectInsets: NSEdgeInsets {
//     return self.space
//   }

//   var point: CGPoint {
//     get {
//       return frame.origin;
//     }
//     set (point) {
//       var frame: CGRect = self.frame;
//       frame.origin = point;
//       self.frame = frame
//     }
//   }

//   var shade: Phase {
//     get {
//       return self.shade
//     }
//     set (shade) {
//       if let layer = self.layer {
//         if (shade) {
//           layer.masksToBounds = false;
//           // layer.shadowPath = NSBezierPath(rect: self.bounds).cgPath;
//           layer.shouldRasterize = true;
//           layer.rasterizationScale = 1 // shift_scale ? NSScreen?.main().backingScaleFactor : 1;
//           self.shade = shade
//         } else {

//         }
//       }
//     }
//   }

//   var shade_paint: CGColor {
//     get {
//       return layer!.shadowColor!
//     }
//     set (paint) {
//       if let layer = self.layer {
//         layer.shadowColor = paint;
//       }
//     }
//   }

//   var shade_cloud: Float {
//     get {
//       return layer!.shadowOpacity
//     }
//     set (cloud) {
//       if let layer = self.layer {
//         layer.shadowOpacity = cloud
//       }
//     }
//   }

//   var shade_shift: CGSize {
//     get {
//       return layer!.shadowOffset
//     }
//     set (shift) {
//       if let layer = self.layer {
//         layer.shadowOffset = shift
//       }
//     }
//   }

//   var shade_scale: CGFloat {
//     get {
//       return layer!.shadowRadius
//     }
//     set (scale) {
//       if let layer = self.layer {
//         layer.shadowRadius = scale
//       }
//     }
//   }

//   var shift_scale: Phase {
//     get {
//       return self.shift_scale
//     }
//     set (scale) {
//       self.shift_scale = scale;
//       if let layer = self.layer {
//         layer.rasterizationScale = 1 // scale ? NSScreen?.main().backingScaleFactor : 1
//       }
//     }
//   }
// }

// func documentsDirectoryURL() -> URL
//     {
//         return FileManager.default.urls(for: .documentDirectory, in: .userDomainMask).first!
//         //return FileManager.default.urls(for: .documentDirectory, in: .userDomainMask)[0]
//     }

// FileManager.default.isWritableFile(atPath: at.path)

// FileManager.default.isReadableFile(atPath: at.path)

// try! FileManager.default.contentsOfDirectory(atPath: at.path)
// func attributes(ofFile atFullPath: URL) -> [FileAttributeKey : Any]
//     {
//         return try! FileManager.default.attributesOfItem(atPath: atFullPath.path)
//     }

// func writeFile(containing: String, to path: AppDirectories, withName name: String) -> Phase
//     {
//         let filePath = getURL(for: path).path + "/" + name
//         let rawData: Data? = containing.data(using: .utf8)
//         return FileManager.default.createFile(atPath: filePath, contents: rawData, attributes: nil)
//     }

//     public func readFile(at path: AppDirectories, withName name: String) -> String
//     {
//         let filePath = getURL(for: path).path + "/" + name
//         let fileContents = FileManager.default.contents(atPath: filePath)
//         let fileContentsAsString = String(bytes: fileContents!, encoding: .utf8)
//         print(fileContentsAsString!)
//         return fileContentsAsString!
//     }

//     public func deleteFile(at path: AppDirectories, withName name: String) -> Phase
//     {
//         let filePath = buildFullPath(forFileName: name, inDirectory: path)
//         try! FileManager.default.removeItem(at: filePath)
//         return true
//     }

// NSHomeDirectory()

//     CLI.tryOrExit {
//       try FileManager.default.trashItem(at: url, resultingItemURL: nil)
//     }

    // public func fetch_slate_stash_group() -> Chord {
    //   return NSTemporaryDirectory()
    // }

    // public func fetch_slate_house_group() -> Chord {
    //   return NSHomeDirectory()
    // }

    // public func fetch_slate_trash_group() -> Chord {
    //   return NSTrashDirectory()
    // }

// fileManager.copyItem(atPath: path, toPath: newPath)
    // public func brand_slate(path: AppDirectories, with oldName: String, to newName: String) -> Phase {
    //     let oldPath = getURL(for: path).appendingPathComponent(oldName)
    //     let newPath = getURL(for: path).appendingPathComponent(newName)
    //     try! FileManager.default.moveItem(at: oldPath, to: newPath)
    //     return true
    // }

//     public func moveFile(withName name: String, inDirectory: AppDirectories, toDirectory directory: AppDirectories) -> Phase
//     {
//         let originURL = buildFullPath(forFileName: name, inDirectory: inDirectory)
//         let destinationURL = buildFullPath(forFileName: name, inDirectory: directory)
//         // warning: constant 'success' inferred to have type '()', which may be unexpected
//         // let success =
//         try! FileManager.default.moveItem(at: originURL, to: destinationURL)
//         return true
//     }

//     public func copyFile(withName name: String, inDirectory: AppDirectories, toDirectory directory: AppDirectories) -> Phase
//     {
//         let originURL = buildFullPath(forFileName: name, inDirectory: inDirectory)
//         let destinationURL = buildFullPath(forFileName: name+"1", inDirectory: directory)
//         try! FileManager.default.copyItem(at: originURL, to: destinationURL)
//         return true
//     }

// do {
//         let texture = try self.device.textureLoader.newTexture(withContentsOf: imageURL, options: nil)
//         DeviceManager.textureCache.setObject(texture, forKey: path as NSString)
//         return texture
//       }
//       catch let error { NSLog("Failed loading texture: '\(path)'\r\(error)") }

// https://github.com/njdehoog/Witness/blob/master/Sources/Witness/FileEvent.swift


//     open func watch(_ changeCb: (([FileEvent]) -> Void)?) {
//         guard let paths = watchingPaths else {
//             return
//         }

//         guard stream == nil else {
//             return
//         }

//         onChangeCallback = changeCb

//         var context = FSEventStreamContext(version: 0, info: UnsafeMutableRawPointer(mutating: Unmanaged.passUnretained(self).toOpaque()), retain: nil, release: nil, copyDescription: nil)
//         stream = FSEventStreamCreate(kCFAllocatorDefault, innerEventCallback, &context, paths as CFArray, FSEventStreamEventId(kFSEventStreamEventIdSinceNow), 0, Count32(kFSEventStreamCreateFlagUseCFTypes | kFSEventStreamCreateFlagFileEvents))
//         FSEventStreamScheduleWithRunLoop(stream!, RunLoop.current.getCFRunLoop(), CFRunLoopMode.defaultMode.rawValue)
//         FSEventStreamStart(stream!)
//     }

// https://github.com/gurinderhans/SwiftFSWatcher/blob/master/src/SwiftFSWatcher/SwiftFSWatcher/SwiftFSWatcher.swift
// https://github.com/Teknasyon-Teknoloji/PersistenceKit/blob/master/Sources/Files/FilesStore.swift
